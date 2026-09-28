// Small progressive enhancements. Everything on the site works without this file.

(function () {
  // Hide events whose date has passed.
  //
  // The build already leaves out past events, but the site only rebuilds when
  // content changes, so an event can outlive its date on the live site. This
  // removes it in the browser as soon as the date (Eastern time) has passed.
  // Lists opt in with [data-event-list]; items carry [data-event-date="YYYY-MM-DD"].
  // An optional data-limit caps how many upcoming events stay visible.
  var today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  document.querySelectorAll("[data-event-list]").forEach(function (list) {
    var limit = parseInt(list.getAttribute("data-limit"), 10) || Infinity;
    var shown = 0;

    list.querySelectorAll("[data-event-date]").forEach(function (item) {
      if (item.getAttribute("data-event-date") < today) {
        item.remove();
        return;
      }
      shown += 1;
      item.hidden = shown > limit;
    });

    if (shown === 0) {
      list.hidden = true;
      var empty = list.parentElement.querySelector("[data-event-empty]");
      if (empty) empty.hidden = false;
    }
  });

  // Open the archive month/week named in the URL (e.g. /news/#month-2026-10),
  // including any month it sits inside.
  function openFromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    var target = id && document.getElementById(id);
    if (!target || target.tagName !== "DETAILS") return;
    for (var el = target; el; el = el.parentElement.closest("details")) {
      el.open = true;
    }
    target.scrollIntoView();
  }

  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
