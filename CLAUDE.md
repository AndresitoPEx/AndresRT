# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Portfolio site of Jorge Andrés Romo, positioned as a freelance Zoho consultant (CRM/Desk, Deluge/COQL) — a single static page (`index.html`) with vanilla JavaScript and plain CSS. There is no build system, no package.json, no linter, and no tests. Content is in Spanish by default with an English toggle.

## Running / deploying

Serve the root directory with any static file server and open `index.html`, e.g.:

```
python -m http.server 8000
```

Opening `index.html` directly also works, but the GitHub API fetch and the Formspree form behave more reliably over HTTP.

**Production (https://www.andresromo.dev/) deploys automatically from `master` via Vercel's GitHub integration.** There is no deploy config in the repo (no `vercel.json`, no workflows) — the integration is configured in the Vercel dashboard. Pushing to `origin/master` publishes the site.

## Architecture

Everything lives in `index.html` plus per-feature files under `assets/css/` and `assets/js/`. Scripts are plain `<script>` tags at the bottom of `index.html` (no modules, no bundler). Each JS feature is a class or IIFE wired up on `DOMContentLoaded`:

- **i18n** ([assets/js/i18n.js](assets/js/i18n.js)) — `I18nManager` holds both full ES/EN translation dictionaries inline. Elements opt in via `data-i18n="key"` (text/placeholder) and `data-i18n-aria="key"` (aria-label) attributes. On language change it also swaps the CV link on all `[data-resume-link]` anchors (separate Google Drive URLs per language in `this.resumeLinks`), updates the validator messages, and dispatches a `languageChanged` CustomEvent that other scripts can listen to. Preference persists to localStorage; the instance is exposed as `window.i18nManager`. **Any user-visible text added to the HTML needs a `data-i18n` attribute plus entries in both dictionaries.**
- **Theming** ([assets/js/theme-toggle.js](assets/js/theme-toggle.js)) — `ThemeManager` sets/removes `data-theme="dark"` on `<html>`, persists to localStorage, and follows the system preference as a fallback. CSS themes via `[data-theme="dark"]` selectors and CSS variables.
- **Projects** ([assets/js/github-projects.js](assets/js/github-projects.js)) — `GitHubProjects` fetches repos from the GitHub API for user `AndresitoPEx` at runtime, filters/orders them by the hardcoded `featuredProjects` whitelist (by repo name, forks excluded), renders cards into the Swiper carousel, and reinitializes Swiper. To feature/unfeature a project, edit that whitelist.
- **Contact form** ([assets/js/contact-modern.js](assets/js/contact-modern.js)) — posts to Formspree (the endpoint is the `action` attribute on `#contact-form` in `index.html`). Client-side validation is in `validacion.js`, which exposes `window.formValidator` so i18n can swap its messages.
- **Executive summary modal** ([assets/js/summary-modal.js](assets/js/summary-modal.js)) — accessible dialog (`#summary-modal`) opened/closed via `[data-summary-open]` / `[data-summary-close]` triggers, with focus trap and Escape handling.
- **Certifications toggle** ([assets/js/certifications-toggle.js](assets/js/certifications-toggle.js)) — collapsible certifications grid in the Formación section.
- Swiper (carousel) and Font Awesome are vendored locally as `swiper-bundle.min.*` and `all.min.*` — never edit those files.

CSS is one file per section (`header.css`, `titular.css`, `services.css`, `exp.css`, `summary.css`, `contact-modern.css`, …), each linked from `<head>`. Base variables and resets live in `base.css` / `reset.css`; `zoho-accent.css` is a large overlay stylesheet applying the Zoho-inspired visual identity across all sections and loads last.

Page sections in order: hero (`titular` + summary modal), `#sobre-mi`, `#servicios`, `#skills`, `#formacion`, `#exp-prof` (work experience), `#exp` (GitHub projects carousel), `#contacto`, footer.

## Git

The default branch is `master` and pushing to it deploys to production (see above). Commit messages mix Spanish and conventional-commit English.
