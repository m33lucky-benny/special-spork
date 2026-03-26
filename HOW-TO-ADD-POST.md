# How to Add a Blog Post

## 1. Create the file

Add a new file inside the `_posts/` folder. The filename **must** follow this exact format:

```
YYYY-MM-DD-your-post-slug.md
```

Example:
```
_posts/2026-03-20-google-search-console-guide.md
```

---

## 2. Add the front matter

Every post must start with a front matter block between `---` lines.

```yaml
---
layout: post
title: "Your Post Title Here"
date: 2026-03-20
categories: [SEO, Technical]
tags:
  - google search console
  - site audit
  - technical seo
description: "One or two sentence description for Google search results."
author: ebiyaSG
permalink: /your-post-slug/
---
```

### Field reference

| Field | Required | Notes |
|---|---|---|
| `layout` | Yes | Always `post` |
| `title` | Yes | Shown on the blog list and in the browser tab |
| `date` | Yes | Must match the date in the filename |
| `categories` | No | Array — shown as pills on the blog listing |
| `tags` | No | Used for SEO and future filtering |
| `description` | Yes | Used as the meta description for Google |
| `author` | No | Defaults to site author if omitted |
| `permalink` | No | Custom URL — omit to use the default (`/YYYY/MM/DD/slug/`) |

---

## 3. Write the content

Below the closing `---`, write your post in Markdown.

```markdown
---
layout: post
title: "How to Fix Crawl Errors in Google Search Console"
date: 2026-03-20
categories: [SEO, Technical]
description: "Step-by-step guide to finding and fixing crawl errors in Google Search Console for Singapore businesses."
author: ebiyaSG
permalink: /fix-crawl-errors-google-search-console/
---

## Introduction

Your intro paragraph here...

## Section One

Content here...
```

---

## 4. The post appears automatically

Save the file. Jekyll picks it up automatically — no other files need to be edited. The post will appear on the `/blog/` page sorted by date (newest first).

---

## Tips

- **Excerpt**: The blog listing shows the first ~35 words as the excerpt. Write a strong opening sentence — it shows as the preview.
- **Slug**: Keep the filename slug short and keyword-rich (e.g. `seo-audit-singapore` not `how-to-do-a-seo-audit-for-your-singapore-website`).
- **Images**: Store images in `assets/images/` and reference them in the post as `/assets/images/your-image.jpg`.
- **Date**: If the date in the filename is in the future, Jekyll will not publish the post until that date (or until you add `future: true` to `_config.yml`).
