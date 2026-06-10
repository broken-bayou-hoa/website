# Broken Bayou HOA — Website

Static website for brokenbayouhoa.com, hosted on GitHub Pages.

---

## Files in this folder

```
index.html      Main page
style.css       All styles
main.js         Mobile nav
thanks.html     Page shown after contact form is submitted
docs/           Put your PDF files in here (see below)
```

---

## STEP 1 — Upload your PDFs to GitHub

GitHub doesn't let you upload a folder directly, but here's how:

1. Go to your GitHub repository
2. Click **Add file → Upload files**
3. Before uploading, rename your PDFs exactly as listed below (case-sensitive):

| Rename your file to | Document |
|---|---|
| `Notice-of-Dedicatory-Instruments.pdf` | Notice of Dedicatory Instruments |
| `By-Laws-002.pdf` | By-laws |
| `Rules-and-Regulations.pdf` | Rules & Regulations |
| `Articles-of-Incorporation-for-Broken-Bayou.pdf` | Articles of Incorporation |
| `Third-Amendment-for-Broken-Bayou6-15-1987.pdf` | Third Amendment |
| `BB-HOA-MGT-Certificate-03-02-2022.pdf` | Management Certificate |

4. In the **"Destination"** field at the top of the upload page, type `docs/` before the filename. Or after uploading, move them into a folder called `docs`.

**Easier method:** Use GitHub Desktop app (free download at desktop.github.com) — it lets you drag and drop entire folders.

---

## STEP 2 — Turn on GitHub Pages

1. In your repository, click **Settings** (top tab)
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, choose **Deploy from a branch**
4. Set branch to `main` (or `master`), folder to `/ (root)`
5. Click **Save**
6. Wait ~2 minutes. Refresh the page and you'll see a green banner with your live URL.

---

## STEP 3 — Custom domain (optional)

To use www.brokenbayouhoa.com instead of the github.io URL:

1. In Pages settings, type `www.brokenbayouhoa.com` in the **Custom domain** field and save
2. Create a file in your repo called `CNAME` (no extension) containing just: `www.brokenbayouhoa.com`
3. In your domain registrar (GoDaddy, Namecheap, etc.), point your DNS:
   - Add a `CNAME` record: `www` → `yourusername.github.io`
   - Add these 4 `A` records for the root domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

---

## Contact form note

The form uses FormSubmit (free, no account needed). The very first submission will send a confirmation email to info@brokenbayouhoa.com — click the link in that email once, and all future submissions will arrive normally.
