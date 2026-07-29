# Sohan Miryalkar — Portfolio Website

A responsive personal portfolio website showcasing projects, professional experience, technical skills, articles, and contact information in a clean multi-page presentation.

## Highlights

- Project portfolio with dedicated detail pages
- About, résumé, services, and skills sections
- Blog listing and article templates
- Responsive Bootstrap layout
- Animated counters, filtering, lightbox, and carousel interactions
- Contact-form integration scaffold
- Static front end suitable for GitHub Pages or another web host

## Technology

HTML5, CSS3, SCSS, JavaScript, Bootstrap, and bundled vendor libraries.

## Repository structure

```text
.
├── index.html
├── portfolio-details.html
├── project-1.html ... project-12.html
├── blog-1.html ... blog-3.html
├── blog-single.html
├── css/
├── scss/
├── js/
├── img/
├── vendor/
└── forms/
```

## Run locally

```bash
git clone https://github.com/sohanmirylkar/website.git
cd website
python -m http.server 8000
```

Visit `http://localhost:8000`.

## Deployment

The static front end can be hosted on GitHub Pages, Netlify, Vercel, or a conventional web server. Verify the contact form separately because PHP processing is not supported by every static host.

## Author

Sohan Miryalkar
