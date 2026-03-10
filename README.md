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
open http://localhost:4000
```

> **Ruby version:** 2.7+ recommended. Install via [`rbenv`](https://github.com/rbenv/rbenv) or [`rvm`](https://rvm.io/).

---

## Project Structure

```
learningu.org/
│
├── _config.yml               # Jekyll configuration & collection definitions
├── index.html                # Landing page (layout: landing)
├── 404.html                  # 404 error page (layout: default)
│
├── _layouts/
│   └── default.html          # Master layout for all internal pages
│
├── _includes/
│   ├── nav.html              # Site-wide navigation (responsive + hamburger)
│   ├── footer.html           # Site-wide footer (dynamic year, social icons)
│   ├── herosection.html      # Landing page hero
│   ├── about.html            # Landing page about section
│   ├── Luworking.html        # Landing page "how it works" section
│   └── Lustartchapter.html   # Landing page "start a chapter" CTA
│
├── _about/                   # About section pages
├── _contact/                 # Contact page
├── _current-programs/        # Current programs pages (map, classes, about)
├── _becoming-a-chapter/      # Becoming a chapter pages + forms
├── _participate/             # Participate / volunteer pages
├── _misc/                    # One-off pages without a collection
│
└── media/
    ├── css/
    │   ├── index.css         # Core design system (variables, nav, footer, landing)
    │   ├── internal.css      # Shared internal-page components (hero, cards, etc.)
    │   ├── about.css         # About section — loaded only on /about/* pages
    │   ├── contact.css       # Contact page styles
    │   ├── become-a-chapter.css
    │   ├── participate.css
    │   └── current-programs.css
    └── images/
        ├── lu-logo.png       # Site logo (used in nav + footer)
        ├── favicon.ico
        ├── favicon-32x32.png
        ├── favicon-16x16.png
        ├── apple-touch-icon.png
        ├── site.webmanifest
        ├── biopics/          # Team bio photos
        ├── emails/           # Images used in email/landing sections
        ├── photos/           # General photography
        └── sponsors/         # Supporter / sponsor logos
```

---

## Design System

All colors, spacing, and typography are driven by CSS custom properties in `index.css`.

### Key Variables

```css
--lu-accent:        #7E94D4;   /* Primary blue — change here to retheme */
--lu-accent-muted:  #eef0fa;   /* Light tint for backgrounds */
--lu-accent-border: #c5cef0;   /* Subtle borders */
--white:            #ffffff;
--off-white:        #fafaf8;
--dark:             #1a1a1a;
--mid:              #4a4a4a;
--muted:            #8a8a8a;
--border:           #e8e4db;
--font-display:     'Bricolage Grotesque', sans-serif;
--font-body:        'Nunito', sans-serif;
```

> To change the accent color site-wide, update `--lu-accent` in `index.css`. All components reference this variable.

---

## Adding a Page

1. Create a file in the appropriate collection directory (e.g. `_about/new-page.html`).
2. Add front matter:
   ```yaml
   ---
   layout: default
   title: My New Page
   seq: 99         # controls sub-nav ordering (optional)
   ---
   ```
3. Use the `.page-hero` + `.content-wrap` shell from `internal.css` for consistent layout.

---

## Adding a New CSS Section File

1. Create `/media/css/<section-name>.css`.
2. Add a condition in `_layouts/default.html`:
   ```liquid
   {% if page.url contains '/section-name' %}
     <link rel="stylesheet" href="/media/css/section-name.css">
   {% endif %}
   ```

---

## Navigation

The nav is in `_includes/nav.html` and included by both layouts.

- **Desktop:** horizontal link list + Donate button
- **Mobile (≤ 768px):** links collapse; hamburger button (☰ / ✕) toggles `.open` class via inline JS in `default.html` and `landing.html`
- **Active state:** Liquid conditionals compare `page.url` to each link path and add `.nav-active`
- **Scroll shadow:** `nav.nav-scrolled` class toggled via scroll event listener

---

## Footer

The footer is in `_includes/footer.html`.

- Copyright year is set dynamically: `document.getElementById('getfullyear').textContent = new Date().getFullYear()`
- Includes: Navigate links, Connect links (Facebook, X, GitHub, Merch, Donate), Legal links (Privacy Policy)
- Social icon buttons use inline SVGs (no external icon library dependency)

---

## Routes

See [`routes.md`](routes.md) for the full URL map.

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `jekyll` | Static site generator |
| `jekyll-redirect-from` | Handles `redirect_from` / `redirect_to` in front matter |

Fonts are loaded from Google Fonts (Bricolage Grotesque + Nunito). No other external dependencies.

---

## Contributing

All content changes should preserve original text and image paths. UI-only changes should be isolated to the CSS layer. When modifying shared components (`nav.html`, `footer.html`, `default.html`), test across all section pages to ensure nothing regresses.

---

## License

© Learning Unlimited. All rights reserved.
