# legitimate-shed-web

Static site for Legitimate Shed.

## Launch checklist

- Remove placeholder items from UI (apps, test game)
- Add favicon, meta tags, and social sharing tags on all pages
- Add 404.html for static hosting (GitHub Pages/Netlify)
- Add robots.txt and sitemap.xml
- Handle Warrenwalker as "coming soon" with no broken links

## Configure your domain

1. Edit `sitemap.xml` and replace `https://example.com` with your real domain.
2. If using a custom domain on GitHub Pages, add a `CNAME` file with your domain.

## Add the Warrenwalker game later

1. Put your built game into `games/warrenwalker/` with an `index.html` entry point.
2. In `script.js`, set `comingSoon: false` for the Warrenwalker entry.
3. The Games page card will become clickable and the game page will embed your game.

## Local preview (optional)

- Any static server works. For example: VS Code "Live Server" extension.
