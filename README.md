# AI @ TU — Club Website

The official website for the Artificial Intelligence Club at Towson University. Publishes weekly AI news articles and club event flyers.

> **Note to Claude Code:** this is a draft README to guide the final version. Once the site is fully built (all phases of the build guide complete), regenerate this file to match the actual final project structure, config file names, and any deviations made during the build. Keep the tone and section order below.

## What this is

A static site built with Eleventy (11ty), edited through a Decap CMS admin panel, and hosted on Netlify. There is no database and no custom backend — every article and event is a markdown file stored in this GitHub repository. Netlify rebuilds and redeploys the site automatically whenever new content is committed.

**Stack:**
- [Eleventy (11ty)](https://www.11ty.dev/) — static site generator
- [Decap CMS](https://decapcms.org/) — browser-based content editor at `/admin`
- [Netlify](https://netlify.com) — hosting, build automation, forms, and identity/auth for the CMS
- GitHub — version control and the only persistent storage in the system

## How to post an article

1. Go to `[your-site-url]/admin` and log in with your Netlify Identity account.
2. Click **Articles** → **New Article**.
3. Fill in:
   - **Title** — the article's headline
   - **Date** — used to sort it into the correct week/month in the archive
   - **Summary** — a 1–2 sentence teaser shown on the homepage and in the archive (also handy to reuse as your Instagram caption)
   - **Body** — the full article, written in the editor
4. Click **Publish**. The site rebuilds automatically — your article is live within about a minute.

## How to post an event

1. In the CMS admin panel, click **Events** → **New Event**.
2. Fill in:
   - **Title** — used as the flyer image's alt text (for accessibility)
   - **Date** — the event date. Once this date has passed, the event automatically disappears from the site — you don't need to manually remove it.
   - **Flyer** — upload the event flyer image
   - **Link** (optional) — if filled in, the flyer becomes clickable (e.g. link to an RSVP form or Discord); leave blank for a purely informational flyer
3. Click **Publish**.

## Running it locally

Useful if you want to preview changes before publishing, or if you're editing template/design files directly.

```bash
npm install
npm run dev
```

This starts a local server (usually at `localhost:8080`) that live-reloads as you edit files.

To build a static production copy without serving it:

```bash
npm run build
```

Output goes to the `_site/` folder.

## How deployment works

Every push to the `main` branch on GitHub triggers an automatic Netlify build and deploy — including pushes made by Decap CMS when you publish through `/admin`. There is no manual upload step. If a change isn't showing up on the live site after a minute or two, check the **Deploys** tab in the Netlify dashboard for build errors.

## Managing admin access

Admin access (who can log into `/admin` and publish content) is controlled through **Netlify Identity**, not GitHub:

1. In the Netlify dashboard, go to **Site settings → Identity**.
2. Under **Invite users**, enter the email of the new officer.
3. They'll receive an email invite to set a password and log into `/admin`.

Registration is set to invite-only, so the public cannot create their own admin accounts. When an officer graduates or steps down, remove them from the same Identity panel.

## Project structure

```
.
├── src/
│   ├── _includes/       # layouts (base, article template, etc.)
│   ├── _data/           # site-wide data (e.g. meeting info)
│   ├── articles/        # article markdown files (managed via CMS)
│   ├── events/          # event markdown files (managed via CMS)
│   ├── css/             # stylesheets
│   ├── admin/           # Decap CMS admin panel + config.yml
│   ├── index.njk        # homepage
│   ├── articles.njk     # archive page (month → week grouping)
│   ├── meetings.njk     # meeting info + upcoming events
│   └── contact.njk      # contact form
├── .eleventy.js         # Eleventy config (collections, passthroughs)
├── package.json
└── README.md
```

## Troubleshooting

**CMS login isn't working / "Git Gateway" error**
Check Netlify → Site settings → Identity → Services, and confirm Git Gateway is still enabled. This can occasionally need re-enabling after certain Netlify account changes.

**A published event isn't disappearing after its date has passed**
Check the event's date field was entered correctly (not left blank or malformed) — the homepage/meetings page filters events using this field.

**New article/event isn't showing up on the live site**
Check the **Deploys** tab in the Netlify dashboard for a failed build. A common cause is a formatting error in the markdown front matter (e.g. a missing quote or colon).

**Someone can't log into `/admin`**
Confirm they've been added under Site settings → Identity → Invite users, and that they've accepted the email invite and set a password.

## Contact

Questions about maintaining this site can go to [club contact / officer email].
