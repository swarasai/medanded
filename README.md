# Med n' Ed — GitHub Pages / Jekyll

This version uses one shared header and one shared footer across every page.

## Shared files

- `_includes/header.html` — edit this once to change navigation/logo on every page
- `_includes/footer.html` — edit this once to change the footer on every page
- `_layouts/default.html` — shared HTML shell, stylesheet, and JavaScript
- `styles.css` — site-wide styling
- `script.js` — site-wide JavaScript

## Page files

Each page contains only its own content plus Jekyll front matter:

- `index.html`
- `mission.html`
- `motivation.html`
- `team.html`
- `projects.html`
- `get-involved.html`
- `interviews.html`
- `resources.html`
- `medx.html`

Example:

```yaml
---
layout: default
title: "Our Mission"
body_class: "wp-home interior-page"
nav_group: "about"
page_id: "mission"
---
```

GitHub Pages runs Jekyll automatically when publishing this repository.

IMPORTANT: because the header/footer use Jekyll includes, double-clicking an HTML file on your Mac will not render the includes. Preview the site through GitHub Pages, or run Jekyll locally.
