
# Med n' Ed — GitHub Pages migration

## Files
- index.html
- mission.html
- motivation.html
- team.html
- projects.html
- get-involved.html
- interviews.html
- resources.html
- medx.html
- styles.css

## Publish with GitHub Pages

1. Create a GitHub account if needed.
2. Create a public repository named `medanded` (or any name you prefer).
3. Upload every file in this folder to the repository root.
4. Open the repository in GitHub.
5. Go to **Settings → Pages**.
6. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
7. Save.
8. GitHub will publish the site at a URL similar to:
   `https://YOUR-USERNAME.github.io/medanded/`

## Keep medanded.org

You can point `medanded.org` to GitHub Pages while keeping the domain registered with your existing registrar.

In GitHub:
1. Go to **Settings → Pages**.
2. Under **Custom domain**, enter `medanded.org`.
3. Save and enable **Enforce HTTPS** after DNS has propagated.

At your domain registrar:
- Add A records for the root domain (`@`) pointing to GitHub Pages:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Add a CNAME for `www` pointing to:
  `YOUR-USERNAME.github.io`

Also create a file named `CNAME` in the repository containing:
`medanded.org`

## Before cancelling WordPress hosting

Export/download all media first:
- WordPress Admin → Media → Library
- Download original images, PDFs, videos, and documents.
- Put images in `images/`, PDFs in `downloads/`, etc.
- Update the HTML links to point to those local files.

Also check:
- contact forms
- donation/payment buttons
- embedded videos
- downloadable interview PDFs
- Instagram links
- any Google Forms
- analytics

GitHub Pages only serves static HTML/CSS/JS. It cannot run WordPress PHP or a database.

## Free replacements for dynamic WordPress features

- Contact form: Google Forms or Formspree (free tier)
- Donations: PayPal/Stripe-hosted donation link
- Video: YouTube embeds
- Documents: store PDFs directly in the repo if file sizes permit
- Analytics: Google Analytics or Cloudflare Web Analytics
