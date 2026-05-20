# My Blog — GitHub Pages

A clean, minimal personal blog built with plain HTML, CSS, and JavaScript.

## Quick Start

1. Push this folder to your `yourusername.github.io` repo
2. GitHub Pages will serve it automatically at `https://yourusername.github.io`

## File Structure

```
├── index.html              # Home / posts list
├── about.html              # About page
├── posts/
│   ├── post-template.html  # Copy this for every new post
│   ├── on-starting.html    # Sample posts
│   └── ...
├── assets/
│   ├── css/style.css       # All styles
│   └── js/
│       ├── posts.js        # ← ADD YOUR POSTS HERE
│       └── main.js         # Renders the post list
```

## Writing a New Post

**Step 1** — Copy `posts/post-template.html` and rename it:
```
posts/my-new-post.html
```

**Step 2** — Edit the HTML: update the title, tag, date, and body content.

**Step 3** — Register it in `assets/js/posts.js`:
```js
{
  id: "my-new-post",
  title: "My new post title",
  excerpt: "A short summary shown on the home page.",
  date: "2026-05-20",
  tag: "design",          // design | code | life
  readTime: "3 min read",
  file: "posts/my-new-post.html"
}
```

**Step 4** — Push to GitHub. Done.

## Customisation

| What | Where |
|---|---|
| Blog name / logo | Search `mb.` in HTML files |
| Accent colour | `--accent` in `style.css` |
| Background colour | `--bg` in `style.css` |
| Footer links (GitHub, email) | Bottom of each HTML file |
| About page bio | `about.html` |
| Add a new tag filter | `index.html` + `posts.js` tag values |
