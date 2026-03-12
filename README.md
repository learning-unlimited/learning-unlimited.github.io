# Learning Unlimited — Website

The public website for [Learning Unlimited](https://learningu.org), a national nonprofit that empowers college students to run enriching educational programs for middle and high school students.

Built with **Jekyll** and deployed via GitHub Pages.

---

## Quick Start

```bash
# 1. Install dependencies (Ruby + Bundler required)
bundle install

# 2. Serve locally with live reload
bundle exec jekyll serve --livereload

# 3. Open in browser
http://localhost:4000
```

> **Ruby version:** 2.7+ recommended. Install via [`rbenv`](https://github.com/rbenv/rbenv) or [`rvm`](https://rvm.io/).
---

## Dependencies

| Package | Purpose |
|---------|---------|
| `jekyll` | Static site generator |
| `jekyll-redirect-from` | Handles `redirect_from` / `redirect_to` in front matter |

---

## Routes

See [`ROUTES.md`](ROUTES.md) for the full URL map.

---

## Looking to contribute?

[Check out our wiki for details](https://github.com/learning-unlimited/ESP-Website/wiki#i-want-to-get-involved). We also have a strict [code of conduct](https://github.com/learning-unlimited/ESP-Website?tab=coc-ov-file).

---
## Production setup

The production site is hosted via GitHub Pages. To make changes, just push to GitHub. You may need to wait up to 10 minutes for caches to expire.

In order to serve SSL on the custom domain, we proxy through CloudFront. CloudFront redirects HTTP requests to HTTPS, and proxies HTTPS requests through to [`learning-unlimited.github.io`](https://learning-unlimited.github.io). For the apex domain [`learningu.org`](https://www.learningu.org), we have an S3 bucket serving a redirect to [`learningu.org`](https://www.learningu.org), which is also proxied by a separate CloudFront distribution. We use similar redirects for [`groups.learningu.org`](https://www.groups.learningu.org) and [`websuport.learningu.org`](https://www.websupport.learningu.org). All of these use an HTTP certificate generated through AWS Certificate Manager. Ask [`@benjaminjkraft`](https://github.com/benjaminjkraft) or [`@btidor`](https://github.com/btidor) if you need access to any of the AWS resources.
