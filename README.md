# AI @ TU — Club Website

The official website for the Artificial Intelligence Club at Towson University. Publishes weekly AI news issues and club event flyers.

## What this is

A static site built with Eleventy (11ty), edited through a Decap CMS admin panel, and hosted on Netlify. There is no database and no custom backend — every news issue and event is a markdown file stored in this GitHub repository. Netlify rebuilds and redeploys the site automatically whenever new content is committed.

**Stack:**
- [Eleventy (11ty)](https://www.11ty.dev/) — static site generator
- [Decap CMS](https://decapcms.org/) — browser-based content editor at `/admin`
- [Netlify](https://netlify.com) — hosting, build automation, the contact form, and GitHub login for the CMS
- GitHub — version control and the only persistent storage in the system

## How to post a news issue

1. Go to `/admin` on the live site and click **Login with GitHub**.
2. Click **News** → **New News Issue**.
3. Fill in:
   - **Title** — the issue's headline
   - **Date** — decides which week and month the issue is filed under in the archive (weeks run Tuesday–Monday, Eastern time)
   - **Author** (optional) — a byline, e.g. "Jane Doe, AI@TU Outreach Chair"
   - **Summary** — 1–2 sentences shown on the homepage and in the archive (also handy to reuse as your Instagram caption)
   - **Main Story** (optional) — the issue's main article, shown right under the title
   - **AI Pick of the Week**, **AI Threat Watch**, **Worth a Mention**, **AI Tip of the Week** (all optional) — each has a headline and text; any section left blank just doesn't appear
   - **AI@TU Events (extra notes)** (optional) — upcoming events posted under **Events** are listed automatically; use this for anything without a flyer
4. Click **Publish**. The site rebuilds automatically — the issue is live within about a minute.

## How to post an event

1. In the CMS admin panel, click **Events** → **New Event**.
2. Fill in:
   - **Title** — keep it short; shown in the upcoming-events list and used as the flyer's description for screen readers
   - **Date** — the event date. Once this day has passed, the event disappears from the site automatically — no need to remove it.
   - **Flyer** — upload the event flyer image (see the note below)
   - **Link** (optional) — if filled in (e.g. an RSVP form or Discord invite), the flyer becomes clickable
3. Click **Publish**.

> **Strip image metadata before uploading.** Images exported from Canva and phones carry hidden data (creator name, account IDs, sometimes GPS location). This repo is public, so remove it first. On a Mac: `exiftool -all= flyer.jpg` (install with `brew install exiftool`), or open the image in Preview and use **Tools → Show Inspector** to check for location data.

## How to update meeting times

In the CMS admin panel, click **Meeting Info** → **Meeting times**, edit the day, time, location, or note, and click **Publish**. Leave any field blank to hide it.

## Running it locally

Useful if you want to preview changes before publishing, or if you're editing template/design files directly. Requires Node.js 22.

```bash
npm install
npm run dev
```

This starts a local server (usually at `localhost:8080`) that live-reloads as you edit files.

To try the CMS locally without logging in, run `npx decap-server` in a second terminal, then open `http://localhost:8080/admin/`. Changes save straight to your local files.

To build a static production copy without serving it:

```bash
npm run build
```

Output goes to the `_site/` folder.

## How deployment works

Every push to the `main` branch on GitHub triggers an automatic Netlify build and deploy — including commits made by Decap CMS when you publish through `/admin`. There is no manual upload step. If a change isn't showing up on the live site after a minute or two, check the **Deploys** tab in the Netlify dashboard for build errors.

## Managing admin access

Logging into `/admin` uses GitHub. Anyone who can publish content needs a GitHub account with write access to this repository:

1. On GitHub, open this repo → **Settings → Collaborators** → **Add people**.
2. Enter the officer's GitHub username and send the invite.
3. Once they accept, they can log into `/admin` with **Login with GitHub**.

The repo being public only means anyone can *read* it — only collaborators can make changes. When an officer graduates or steps down, remove them from the same Collaborators page.

## Project structure

```
.
├── src/
│   ├── _includes/       # layouts (base page, news issue template)
│   ├── _data/           # site-wide data (site title, meeting info)
│   ├── articles/        # news issue markdown files (managed via CMS)
│   ├── events/          # event markdown files (managed via CMS)
│   ├── images/          # logo, article photos, uploads/ for event flyers
│   ├── css/             # stylesheet
│   ├── js/              # small client-side script (hides past events)
│   ├── admin/           # Decap CMS admin panel + config.yml
│   ├── index.njk        # homepage
│   ├── news.njk         # archive page (month → week grouping)
│   ├── meetings.njk     # meeting info + upcoming events
│   ├── contact.njk      # contact form (Netlify Forms)
│   └── contact-thanks.njk
├── .eleventy.js         # Eleventy config (collections, date handling, filters)
├── netlify.toml         # Netlify build settings
├── package.json
└── README.md
```

## Troubleshooting

**CMS login isn't working**
Check that the person has accepted their collaborator invite on GitHub. If nobody can log in, check Netlify → **Site configuration → Access & security → OAuth** and confirm the GitHub provider is still installed.

**A published event isn't disappearing after its date has passed**
Check the event's date field was entered correctly (not left blank or malformed) — the site filters events using this field.

**New issue/event isn't showing up on the live site**
Check the **Deploys** tab in the Netlify dashboard for a failed build. A common cause is a formatting error in the markdown front matter (e.g. a missing quote or colon).

**Contact form messages**
Submissions aren't stored in this repo — they're in the Netlify dashboard under **Forms**.

## Contact

Questions about maintaining this site? Open an issue in this repository or reach out to a club officer.
