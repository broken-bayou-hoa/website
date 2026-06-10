# Broken Bayou HOA — Static Website

A static HTML/CSS/JS recreation of the Broken Bayou Homeowners Association website, ready for GitHub Pages hosting.

## Files

```
index.html      — Main page (single-page layout)
style.css       — All styles
main.js         — Mobile nav toggle
docs/           — Place PDF documents here (see below)
```

## Adding the PDFs

Upload the following PDF files into the `docs/` folder:

| File name | Document |
|-----------|----------|
| `Notice-of-Dedicatory-Instruments.pdf` | Notice of Dedicatory Instruments |
| `By-Laws-002.pdf` | By-laws |
| `Rules-and-Regulations.pdf` | Rules & Regulations |
| `Articles-of-Incorporation-for-Broken-Bayou.pdf` | Articles of Incorporation |
| `Third-Amendment-for-Broken-Bayou6-15-1987.pdf` | Third Amendment |
| `BB-HOA-MGT-Certificate-03-02-2022.pdf` | Management Certificate |

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `brokenbayouhoa`).
2. Upload all files (including the `docs/` folder with PDFs) to the repository root.
3. Go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch**, choose `main` (or `master`), root folder `/`.
5. Click **Save**. Your site will be live at `https://<your-username>.github.io/brokenbayouhoa/`.

### Custom domain

To use `www.brokenbayouhoa.com`:

1. In GitHub Pages settings, enter `www.brokenbayouhoa.com` in the **Custom domain** field.
2. Add a `CNAME` file to the repo root containing:
   ```
   www.brokenbayouhoa.com
   ```
3. Update your DNS: add a `CNAME` record pointing `www` → `<your-username>.github.io`.
4. For the apex domain (`brokenbayouhoa.com`), add `A` records pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

## Notes

- All community photos are loaded directly from the original Squarespace CDN URLs and require no local storage.
- The site is fully responsive (mobile, tablet, desktop).
