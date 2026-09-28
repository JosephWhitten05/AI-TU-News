// ---------------------------------------------------------------------------
// Dates
//
// Articles and events store a plain calendar day (YYYY-MM-DD) in front matter;
// the CMS is configured that way. YAML turns those into midnight-UTC Dates, so
// the UTC calendar day of such a Date *is* the day the author picked. Anything
// with a real time of day is converted to Eastern time instead.
//
// "Today" is always evaluated in Eastern time, since that's where the club is.
// ---------------------------------------------------------------------------

const markdownIt = require("markdown-it");
const md = markdownIt({ html: true, linkify: true });

const TIME_ZONE = "America/New_York";
const DAY_MS = 24 * 60 * 60 * 1000;

// Archive weeks run Tuesday through Monday. Week 1 starts on this Tuesday.
const WEEK_ONE_START = "2026-09-29";
const WEEK_START_DAY = 2; // 0 = Sunday, 2 = Tuesday

const isMidnightUTC = (date) =>
  date.getUTCHours() === 0 &&
  date.getUTCMinutes() === 0 &&
  date.getUTCSeconds() === 0 &&
  date.getUTCMilliseconds() === 0;

const easternDay = (date) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

// "YYYY-MM-DD" for a front-matter date.
function contentDay(date) {
  const d = date instanceof Date ? date : new Date(date);
  return isMidnightUTC(d) ? d.toISOString().slice(0, 10) : easternDay(d);
}

const dayToDate = (day) => new Date(`${day}T00:00:00Z`);
const dateToDay = (date) => date.toISOString().slice(0, 10);

// The Tuesday that starts the archive week containing `day`.
function weekStart(day) {
  const d = dayToDate(day);
  const back = (d.getUTCDay() - WEEK_START_DAY + 7) % 7;
  return dateToDay(new Date(d - back * DAY_MS));
}

const formatDay = (day, options) =>
  new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...options }).format(dayToDate(day));

function weekLabel(startDay) {
  const endDay = dateToDay(new Date(dayToDate(startDay).getTime() + 6 * DAY_MS));
  const range = `${formatDay(startDay, { month: "short", day: "numeric" })} – ${formatDay(endDay, { month: "short", day: "numeric" })}`;
  const number = Math.round((dayToDate(startDay) - dayToDate(WEEK_ONE_START)) / (7 * DAY_MS)) + 1;
  return number >= 1 ? `Week ${number} · ${range}` : range;
}

// How far ahead an issue's "AI@TU Events" section looks, counted from the issue date.
const ISSUE_EVENT_WINDOW_DAYS = 21;

// Newest first; same-day articles fall back to filename so order is stable.
const newestFirst = (a, b) => b.date - a.date || b.inputPath.localeCompare(a.inputPath);

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.ignores.add("src/admin/**");

  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());

  // ---- Filters ----------------------------------------------------------

  // 2026-09-29
  eleventyConfig.addFilter("isoDay", (date) => contentDay(date));
  // September 29, 2026
  eleventyConfig.addFilter("readableDate", (date) =>
    formatDay(contentDay(date), { month: "long", day: "numeric", year: "numeric" })
  );
  // Tue, Sep 29
  eleventyConfig.addFilter("shortDate", (date) =>
    formatDay(contentDay(date), { weekday: "short", month: "short", day: "numeric" })
  );

  // Render a markdown string from front matter (the issue sections).
  eleventyConfig.addFilter("markdown", (text) => (text ? md.render(String(text)) : ""));

  // Events for an issue's "AI@TU Events" section: from the issue date through
  // the next few weeks. Based on the issue date rather than today, so older
  // issues in the archive keep showing the events they originally announced.
  eleventyConfig.addFilter("eventsForIssue", (events, issueDate) => {
    const from = contentDay(issueDate);
    const to = dateToDay(new Date(dayToDate(from).getTime() + ISSUE_EVENT_WINDOW_DAYS * DAY_MS));
    return (events || []).filter((event) => {
      const day = contentDay(event.date);
      return day >= from && day <= to;
    });
  });

  // First n items of an array.
  eleventyConfig.addFilter("head", (array, n) => (Array.isArray(array) ? array.slice(0, n) : []));

  // ---- Collections ------------------------------------------------------

  eleventyConfig.addCollection("articles", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/articles/*.md").sort(newestFirst)
  );

  // Every event, soonest first (used by issues, which may be in the past).
  eleventyConfig.addCollection("allEvents", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/events/*.md").sort((a, b) => a.date - b.date)
  );

  // Soonest first, only events dated today or later.
  // This runs at build time; src/js/site.js also hides past events in the
  // browser so they drop off even if no rebuild happens after the event date.
  eleventyConfig.addCollection("events", (collectionApi) => {
    const today = easternDay(new Date());
    return collectionApi
      .getFilteredByGlob("src/events/*.md")
      .filter((event) => contentDay(event.date) >= today)
      .sort((a, b) => a.date - b.date);
  });

  // Articles grouped by month, then by Tuesday–Monday week, newest first.
  // A week belongs to the month its Tuesday falls in, so a week is never split.
  //   [{ id, label, weeks: [{ id, label, articles: [...] }] }]
  eleventyConfig.addCollection("archive", (collectionApi) => {
    const months = new Map();

    for (const article of collectionApi.getFilteredByGlob("src/articles/*.md").sort(newestFirst)) {
      const start = weekStart(contentDay(article.date));
      const monthKey = start.slice(0, 7);

      if (!months.has(monthKey)) {
        months.set(monthKey, {
          id: `month-${monthKey}`,
          label: formatDay(start, { month: "long", year: "numeric" }),
          weeks: new Map(),
        });
      }

      const weeks = months.get(monthKey).weeks;
      if (!weeks.has(start)) {
        weeks.set(start, { id: `week-${start}`, label: weekLabel(start), articles: [] });
      }
      weeks.get(start).articles.push(article);
    }

    return [...months.values()].map((month) => ({ ...month, weeks: [...month.weeks.values()] }));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
