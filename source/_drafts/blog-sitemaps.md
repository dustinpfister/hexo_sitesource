---
title: Sitemaps
date: 2017-04-28 12:30:00
tags: [js,hexo,blog,node.js]
layout: post
categories: blog
---

When authoring a blog, or any website for that matter there is the importance of getting indexed by the crawlers of major search engines. The crawlers of major search engines will come around to your site every now and then, and index a page or two, before moving on to the next site. The crawler in most cases will not index the whole site each time, and it is easy to understand why, as they have a whole Internet to crawl.

<!-- more -->

As such it may be desired to leave instructions for the crawlers to inform them what pages are most important to you. A sort of priority list that will help to ensure that the new posts that you just authored will get indexed sooner rather than later, and that old post that you just updated will be reevaluated. this is where sitemaps come into play.

## Example of a sitemap.xml file

```xml
<?xml version="1.0" encoding="UTF-8"?>
 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 
    <url>
 
        <loc>https://dustinpfister.github.io/2017/04/17/blog-sitemaps/</loc>
        <changefreq>monthly</changefreq>
        <lastmod>2017-04-28</lastmod>
        <priority>1</priority>
    </url>
 
</urlset>
```

Above is a sitemap example that gives instructions on how my site is to be crawled. It is not a piratical example, but it should help show how to get stared with this. A real sitemap will typically have url element for each of my blog posts, and set the values to what they should be as I add, and update content.

##

* The location (loc) that is to be crawled.
* The last time the location was modified (lastmod).
* How important the location is (priority).
* How often the location is updated (changefreq).
