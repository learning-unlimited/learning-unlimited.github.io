# Learning Unlimited — Website

The public website for [Learning Unlimited](https://learningu.org), a national nonprofit that empowers college students to run enriching educational programs for middle and high school students.

Built with **Jekyll** and deployed via GitHub Pages.

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


# ---

**💻 Local Development Setup Guide**

This guide provides a streamlined process to set up the **Learning Unlimited** website locally. We use rbenv to manage Ruby versions and Bundler to handle dependencies, ensuring a standardized environment without requiring sudo for gem installations.

## **🛠 Prerequisites**

* **OS:** Ubuntu 22.04+ or Windows with **WSL2** (Recommended).  
* **Git:** Installed and configured.  

## ---

**1\. Install System Dependencies**

Before installing Ruby, you need the core libraries required to compile it and run the Jekyll native extensions.

Bash

sudo apt update && sudo apt install \-y \\  
  build-essential curl git libssl-dev libreadline-dev \\  
  zlib1g-dev libffi-dev libyaml-dev autoconf bison \\  
  libncurses-dev libgdbm-dev libdb-dev

## ---

**2\. Manage Ruby with rbenv**

Using a version manager prevents "version drift" between developers.

### **Install rbenv and ruby-build**

Bash

curl \-fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash

### **Configure your Shell**

Append the initialization commands to your .bashrc (or .zshrc if using Zsh):

Bash

echo 'export PATH="$HOME/.rbenv/bin:$PATH"' \>\> \~/.bashrc  
echo 'eval "$(rbenv init \-)"' \>\> \~/.bashrc  
source \~/.bashrc

### **Install Ruby 3.2.2**

**Ruby version:** 2.7+ recommended.

Bash

# Install the latest stable Ruby version automatically
LATEST_STABLE=$(rbenv install -l | grep -v -E '[a-z]' | tail -1)
rbenv install $LATEST_STABLE
rbenv local $LATEST_STABLE

# Verify the version
ruby -v

## ---

**3\. Clone and Configure the Project**

### **Fork & Clone**

1. Fork the [repository](https://www.google.com/search?q=https://github.com/learning-unlimited/learning-unlimited-about-us&authuser=4) on GitHub.  
2. Clone your fork:

Bash

git clone https://github.com/YOUR\_USERNAME/learning-unlimited-about-us.git  
cd learning-unlimited-about-us

### **Configure Upstream**

Keep your local code in sync with the official project:

Bash

git remote add upstream https://github.com/learning-unlimited/learning-unlimited-about-us.git  
git fetch upstream

## ---

**4\. Install Dependencies & Launch**

We use a pinned Gemfile.lock to ensure your local environment matches production exactly.

### **Install Bundler**

Bash

gem install bundler  
bundle install

### **Start the Server**

Bash

bundle exec make serve

\[\!TIP\]

**Port already in use?** If you see an EADDRINUSE error, a previous server might still be running. Kill it with:

sudo fuser \-k 4000/tcp

Once the server is running, navigate to: **http://localhost:4000**

### ---
