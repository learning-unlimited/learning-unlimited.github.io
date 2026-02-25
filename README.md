# www.learningu.org

This repository hosts the sources for [www.learningu.org](https://www.learningu.org).  We use Jekyll to generate a static site.


## Production setup

The production site is hosted via Github Pages.  To make changes, just push to Github; you may need to wait up to 10 minutes for caches to expire.

In order to serve SSL on the custom domain, we proxy through CloudFront.  CloudFront redirects HTTP requests to HTTPS, and proxies HTTPS requests through to `learning-unlimited.github.io`.  For the apex domain `learningu.org`, we have an S3 bucket serving a redirect to `https://www.learningu.org`, which is also proxied by a separate CloudFront distribution.  We use similar redirects for `groups.learningu.org` and `websupport.learningu.org`.  All of these use an HTTP certificate generated through AWS Certificate Manager.  Ask @benjaminjkraft or @btidor if you need access to any of the AWS resources.

# Local Development Setup Guide

This guide provides step-by-step instructions to set up the **Learning Unlimited** website locally on an Ubuntu/WSL environment. We utilize `rbenv` to manage Ruby versions and `Bundler` to handle project dependencies without requiring system-level `sudo` permissions.

## Prerequisites

* Ubuntu / Debian (WSL)
* Git 

## Step 1: Install System Dependencies

Open your Ubuntu/WSL terminal and install the necessary libraries to compile Ruby from source:

```bash
sudo apt update
sudo apt install -y build-essential curl git libssl-dev libreadline-dev zlib1g-dev libffi-dev libyaml-dev autoconf bison libncurses-dev libgdbm-dev
```

## Step 2: Install rbenv and Ruby

Using a version manager like `rbenv` ensures your local environment remains isolated and clean.

Install `rbenv`:

```bash
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
```

### Configure your shell

Add `rbenv` to your `PATH` and enable auto-initialization:

```bash
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc
```

### Install Ruby 3.2.2

```bash
rbenv install 3.2.2
rbenv global 3.2.2
```

## Step 3: Clone the Project

Fork the project on GitHub, then clone your fork locally:

```bash
git clone https://github.com/Your-UserName/learning-unlimited-about-us.git
cd learning-unlimited-about-us
```

## Step 4: Build and Serve

Install Bundler and the project dependencies specified in the `Gemfile`:

```bash
gem install bundler
bundle install
```

Start the local development server:

```bash
bundle exec make serve
```

Once the build is complete, open your browser and navigate to `http://
