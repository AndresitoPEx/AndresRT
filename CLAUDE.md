# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site (Jorge Andrés) — a single static page (`index.html`) with vanilla JavaScript and plain CSS. There is no build system, no package.json, no linter, and no tests. Content is in Spanish by default with an English toggle.

## Running

Serve the root directory with any static file server and open `index.html`, e.g.:

```
python -m http.server 8000
```

Opening `index.html` directly also works, but the GitHub API fetch and the Formspree form behave more reliably over HTTP.

## Architecture

Everything lives in `index.html` plus per-feature files under `assets/css/` and `assets/js/`. Scripts are plain `<script>` tags at the bottom of `index.html` (no modules, no bundler). Each JS feature is a class instantiated on `DOMContentLoaded`:

- **i18n** ([assets/js/i18n.js](assets/js/i18n.js)) — `I18nManager` holds both full ES/EN translation dictionaries inline. Elements opt in via `data-i18n="key"` attributes in the HTML. Language preference persists to localStorage, and the instance is exposed as `window.i18nManager` so other scripts (e.g. the contact form) can query the current language. **Any user-visible text added to the HTML needs a `data-i18n` attribute plus entries in both dictionaries.**
- **Theming** ([assets/js/theme-toggle.js](assets/js/theme-toggle.js)) — `ThemeManager` sets/removes `data-theme="dark"` on `<html>`, persists to localStorage, and follows the system preference as a fallback. CSS themes via `[data-theme="dark"]` selectors and CSS variables.
- **Projects** ([assets/js/github-projects.js](assets/js/github-projects.js)) — `GitHubProjects` fetches repos from the GitHub API for user `AndresitoPEx` at runtime, filters to a hardcoded `featuredProjects` whitelist (by repo name), renders cards into the Swiper carousel, and reinitializes Swiper. To feature/unfeature a project, edit that whitelist.
- **Contact form** ([assets/js/contact-modern.js](assets/js/contact-modern.js)) — posts to Formspree (the endpoint is the `action` attribute on `#contact-form` in `index.html`). Client-side validation is in `validacion.js`.
- Swiper (carousel) and Font Awesome are vendored locally as `swiper-bundle.min.*` and `all.min.*` — never edit those files.

CSS is one file per section (`header.css`, `titular.css`, `about.css`, `exp.css`, `contact-modern.css`, …), each linked from `<head>`. Base variables and resets live in `base.css` / `reset.css`.

## Known quirks / dead files

- `index.html` references `assets/js/boton-cv.js`, which does not exist (silent 404).
- Several files in `assets/` are unused (not linked from `index.html`): `enviar-formulario.js`, `exp-filters.js`, `exp-filters-simple.js`, `project-toggle.js`, `project-toggle-simple.js`, `contacto.css`, and the empty files `theme-manager.js`, `experience-tabs.js`, `dark-theme.css`. The live contact/theme logic is in `contact-modern.js` / `theme-toggle.js` — don't confuse them with these leftovers.

## Git

The default branch is `master`; a `dev` branch has historically been merged into it. Commit messages are typically in Spanish.
