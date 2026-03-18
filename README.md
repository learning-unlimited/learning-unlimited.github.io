# Learning Unlimited — Website

The public website for [Learning Unlimited](https://learningu.org), a national nonprofit that empowers college students to run enriching educational programs for middle and high school students.

Built with **Jekyll** and deployed via GitHub Pages.

---

## Quick Start

```bash
# 0. (Recommended) Set a repo-local Ruby version if using rbenv
#    Use a Ruby version supported by the `github-pages` gem in this repo's Gemfile
#    Replace `<ruby-version-supported-by-github-pages>` with a specific Ruby version supported by GitHub Pages (see note below).

rbenv local <ruby-version-supported-by-github-pages>

# 1. Install Bundler 2.5.9+ (required by Gemfile.lock)
gem install bundler -v "~> 2.5"
bundle --version

# 2. Install dependencies
bundle install

# 3. Serve locally with live reload
bundle exec jekyll serve --livereload

# 4. Open in browser
http://localhost:4000
```

> **Ruby:** Install via [`rbenv`](https://github.com/rbenv/rbenv) or [`rvm`](https://rvm.io/).
>
> If you use `rbenv`, prefer `rbenv local <ruby-version-supported-by-github-pages>` in this repository so you don't affect Ruby versions in other projects. `rbenv global <version>` changes your default Ruby everywhere.
>
> To pick a version, check which Ruby versions are supported by the [`github-pages` gem](https://pages.github.com/versions.json) that this repo depends on.
>
> **Bundler:** This repo's `Gemfile.lock` was generated with Bundler `2.5.9`, so use Bundler `2.5.9+`.
---

## Dependencies

| Package | Purpose |
|---------|---------|
| `github-pages` | Pins a production-compatible Jekyll + plugin set used by GitHub Pages |


Dependency versions are standardized by `github-pages` and the committed `Gemfile.lock`.

---

## Routes

See [`ROUTES.md`](routes.md) for the full URL map.

---

## Looking to contribute?

[Check out our wiki for details](https://github.com/learning-unlimited/ESP-Website/wiki#i-want-to-get-involved). We also have a strict [code of conduct](https://github.com/learning-unlimited/ESP-Website?tab=coc-ov-file).

---
## Production setup

The production site is hosted via GitHub Pages. To make changes, just push to GitHub. You may need to wait up to 10 minutes for caches to expire.

In order to serve SSL on the custom domain, we proxy through CloudFront. CloudFront redirects HTTP requests to HTTPS, and proxies HTTPS requests through to [`learning-unlimited.github.io`](https://learning-unlimited.github.io). For the apex domain [`learningu.org`](https://www.learningu.org), we have an S3 bucket serving a redirect to [`learningu.org`](https://www.learningu.org), which is also proxied by a separate CloudFront distribution. We use similar redirects for [`groups.learningu.org`](https://www.groups.learningu.org) and [`websuport.learningu.org`](https://www.websupport.learningu.org). All of these use an HTTP certificate generated through AWS Certificate Manager. Ask [`@benjaminjkraft`](https://github.com/benjaminjkraft) or [`@btidor`](https://github.com/btidor) if you need access to any of the AWS resources.
