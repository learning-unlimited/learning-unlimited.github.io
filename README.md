# www.learningu.org

This repository hosts the sources for [www.learningu.org](https://www.learningu.org).  We use Jekyll to generate a static site.

## Development

Clone this repository, and run `make serve`.  Then go to [localhost:4000](http://localhost:4000) in your browser to see your development server.

## Production setup

The production site is hosted via GitHub Pages. To make changes, just push to GitHub. You may need to wait up to 10 minutes for caches to expire.

In order to serve SSL on the custom domain, we proxy through CloudFront.  CloudFront redirects HTTP requests to HTTPS, and proxies HTTPS requests through to `learning-unlimited.github.io`.  For the apex domain `learningu.org`, we have an S3 bucket serving a redirect to `https://www.learningu.org`, which is also proxied by a separate CloudFront distribution.  We use similar redirects for `groups.learningu.org` and `websupport.learningu.org`.  All of these use an HTTP certificate generated through AWS Certificate Manager.  Ask @benjaminjkraft or @btidor if you need access to any of the AWS resources.
