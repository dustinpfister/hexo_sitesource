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

## Do you need to bother with a sitemap?

If you have a very small site that is not updated that often there is not really a need for a sitemap at all that much. Google's crawler will come around, and if you do not give it instructions it will make choices for you. Eventually your site will get indexed, it might just take a while longer for changes to a certain priority page to appear in search results. Still it does not hurt to have one anyway to help get new content indexed quickly.

If you have a a site that has many pages, with content that keeps getting added, and updated often, a sitemap starts to become more important. Say you have some thirty blog posts, with additional pages that serve as various indexes based on subject matter, and other pages that pertain to the over all structurer of the site as a whole.

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

## Submiting a sitemap.

testing and submiting a sitemap is simple with google. It's just a matter of doing so at the [search console](https://www.google.com/webmasters/). Once you have the site added to your account, just check out the sitemaps section, under crawl in the menu for the site in question. click add test sitemap and enter the path to the sitemap.xml file you put together, and click test. If all goes well do the same and add it.

Google's search console will display how much content is submitted with the map, and of that how much has been indexed. You can also delete, and re summit the sitemap when you update the site.

## Sitemap automation

As a site grows it will become increasingly important to find a way to automated the task of generating a sitemap, and eventually an index of sitemap files. 

<!--
## What a sitemap should contain

* The location (loc) that is to be crawled.
* The last time the location was modified (lastmod).
* How important the location is (priority).
* How often the location is updated (changefreq).
-->