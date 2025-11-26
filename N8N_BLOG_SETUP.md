# n8n Blog Integration Setup

This guide explains how to set up automated blog post management using n8n.

## Overview

The blog section automatically fetches the latest 4 blog posts from an n8n webhook or API endpoint. You can add, edit, or remove blog posts through your n8n workflow, and they will automatically appear on the website.

## Setup Instructions

### 1. Environment Variable Configuration

Add the following to your `.env.local` file:

```env
N8N_BLOG_ENDPOINT=https://your-n8n-instance.com/webhook/blog-posts
```

### 2. n8n Workflow Setup

#### Option A: Using Google Sheets (Recommended for Easy Management)

1. Create a Google Sheet with these columns:
   - `id` - Unique identifier
   - `title` - Blog post title
   - `excerpt` - Short description (2-3 sentences)
   - `content` - Full blog content (can be HTML or Markdown)
   - `author` - Author name
   - `date` - Publication date (YYYY-MM-DD format)
   - `imageUrl` - Featured image URL (optional)
   - `slug` - URL-friendly version of title
   - `tags` - Comma-separated tags (optional)

2. Create an n8n workflow:
   ```
   Webhook (GET) → Google Sheets (Read) → Sort by Date → Limit to 4 → Respond to Webhook
   ```

3. Configure the nodes:
   - **Webhook**: Set method to GET
   - **Google Sheets**: Read all rows from your sheet
   - **Sort**: Sort by `date` field, descending
   - **Limit**: Set to 4 items
   - **Respond**: Return the filtered data as JSON

#### Option B: Using Airtable

1. Create an Airtable base with the same fields as above
2. Create an n8n workflow:
   ```
   Webhook (GET) → Airtable (List) → Sort by Date → Limit to 4 → Respond to Webhook
   ```

#### Option C: Using a Database (PostgreSQL/MySQL)

1. Create a `blog_posts` table with the required columns
2. Create an n8n workflow:
   ```
   Webhook (GET) → Database Query (SELECT * ORDER BY date DESC LIMIT 4) → Respond to Webhook
   ```

### 3. Blog Post Data Format

Your n8n workflow should return an array of blog posts in this format:

```json
[
  {
    "id": "1",
    "title": "Your Blog Post Title",
    "excerpt": "A brief description of the blog post that appears in the card.",
    "content": "Full content of the blog post...",
    "author": "Author Name",
    "date": "2024-01-15",
    "imageUrl": "https://example.com/image.jpg",
    "slug": "your-blog-post-title",
    "tags": ["Automation", "AI", "Business"]
  }
]
```

### 4. Adding New Blog Posts

#### Using Google Sheets:
1. Add a new row to your Google Sheet
2. Fill in all required fields
3. The website will automatically fetch the latest posts (updates every 5 minutes)

#### Using a CMS Integration:
You can also set up n8n to sync with:
- WordPress
- Notion
- Contentful
- Strapi
- Any headless CMS

Example n8n workflow for WordPress:
```
Webhook (GET) → WordPress (Get Posts) → Transform Data → Limit to 4 → Respond
```

### 5. Image Recommendations

For best results:
- Use images with 16:9 aspect ratio (e.g., 1600x900px)
- Optimize images for web (< 200KB recommended)
- Use services like Unsplash, Pexels, or your own CDN

### 6. Testing

1. Test your n8n webhook endpoint:
   ```bash
   curl https://your-n8n-instance.com/webhook/blog-posts
   ```

2. Verify the response format matches the expected structure

3. Add the endpoint to your `.env.local` file

4. Restart your Next.js development server

## Features

- **Automatic Updates**: Blog posts refresh every 5 minutes
- **Latest 4 Posts**: Only shows the 4 most recent posts
- **Responsive Design**: Works on all screen sizes
- **SEO-Friendly**: Each post can link to a full blog page
- **Tags & Metadata**: Supports author, date, tags, and images
- **Graceful Fallback**: Shows sample posts if n8n is not configured

## Advanced: Full Blog Page

To create individual blog post pages:

1. Create `app/blog/[slug]/page.tsx`
2. Fetch the full post content from n8n using the slug
3. Display the full content with proper formatting

## Troubleshooting

### Posts Not Showing
- Check if `N8N_BLOG_ENDPOINT` is set correctly in `.env.local`
- Verify the n8n webhook is accessible and returning data
- Check browser console for errors

### Images Not Loading
- Ensure image URLs are publicly accessible
- Add image domains to `next.config.js`:
  ```js
  images: {
    domains: ['your-image-domain.com'],
  }
  ```

### Cache Issues
- Blog posts are cached for 5 minutes
- To force refresh during development, restart the dev server

## Example n8n Workflow JSON

See `n8n-blog-workflow-example.json` for a complete working example using Google Sheets.
