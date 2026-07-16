# Sunshine ABC Model School — Website

A simple React website for the school: displays school info, news/announcements, and a photo/video gallery. No login, no backend, no database — everything is edited directly in code.

---

## Project Structure

```
school-website/
└── frontend/   → React 18 public website
```

> Note: a `backend/` folder (Spring Boot) still exists from an earlier version of this project but is no longer used by the site. It can be safely ignored or removed.

---

## Quick Start

**Requirements:** Node.js 18+, npm

```bash
cd frontend
npm install
npm start
```

Visit **http://localhost:3000**

---

## Editing Content

All school content lives in one file:

**`frontend/src/data/schoolData.js`**

- `schoolInfo` — school name, tagline, contact details, timings, Google Maps link
- `news` — array of announcements (title, content, category, date)
- `gallery` — array of photos/videos to display

To add photos or videos:
1. Put the image/video files in `frontend/public/media/`
2. Add an entry to the `gallery` array in `schoolData.js`, e.g.:
   ```js
   { id: 1, title: 'Annual Day', mediaType: 'PHOTO', fileUrl: '/media/annual-day.jpg' }
   { id: 2, title: 'Sports Day', mediaType: 'VIDEO', fileUrl: '/media/sports-day.mp4' }
   ```

No code changes needed beyond editing this one data file.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 |
| Fonts | Baloo 2, Nunito (Google Fonts) |

---

## Deployment

```bash
cd frontend
npm run build
```

This produces a static `build/` folder that can be hosted anywhere — GitHub Pages, Netlify, Vercel, or any static file host / web server (Nginx, Apache).

Example Nginx config:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/school-frontend/build;
    location / {
        try_files $uri /index.html;
    }
}
```
