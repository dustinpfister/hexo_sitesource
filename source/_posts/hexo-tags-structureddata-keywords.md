---
title: Hexo structured data keywords tag.
date: 2017-03-28 19:52:00
tags: [hexo,js,node.js,SEO,structured-data]
layout: post
categories: hexo
---

{% mytags_postwords js,javaScipt,hexo,node.js,SEO,hexo&#32;tags,SEO %}

So I am still pretty new to Search Engine Optimization, as such I have just started fiddling with structured data for what it is worth. For now I am on a mission to see if I can gain some organic traffic without promotion at all. A fools quest maybe, but I am noticing that I am manging to get on the first page of some queries already, so maybe not.

<!-- more -->

## The basic starting markup.

When I started my hexo site I was using the default theme, and still am for that matter although I have hacked over it a bit by now. I have noticed that the default theme does place some structured data in the markup that gets generated for starters, but when I use Google's testing tool it was telling me that the Type is unknown.

However it was a simple fix to correct that, I just need to give a [schema.org type](http://schema.org/docs/full.html). So I went ahead and made that change in the article.ejs file in the theme.

```html
<article itemscope itemtype="http://schema.org/Blog" id="post-hexo-tags-structureddata-keywords" class="article article-type-post" itemprop="blogPost">
```

After that I looks like Google is reading things okay when my site is crawled. At that point it is just a question if I want to add some more properties. Assuming that doing so will help, I have noticed that there is a keywords property for the CreativeWork type. So I thought it would be nice to have a meta tag with some keywords for each blog post of mine.

## The hexo tag
```js
hexo.extend.tag.register('mytags_postwords', function (args) {
 
    return '\n<meta itemprop="keywords" content="' + args[0] + '">\n';
 
};
```

So then I call it with something like this at the top of my markdown files.

```
{% mytags_postwords js,javaScipt,hexo,node.js,SEO,hexo&#32;tags,SEO %}
```

And it will inject a meta tag into my post like this

```html
<meta itemprop="keywords" content="js,javaScipt,hexo,node.js,SEO,hexo&#32;tags,SEO">
```

I could just have meta tags like this at the top of each meta file, but I prefer to handle it this way.

## Google's structured data testing tool

[google's structured data testing tool](https://search.google.com/structured-data/testing-tool/u/0/) can be used to see if my structured data is working out okay or not. I can give a url, or copy and past markup which is nice when working on things before deployment.

## Do keywords still matter?

Good question I am not sure just yet, as I have not dived into the thick of it when it comes to understanding [Googles Panda algorithm](https://en.wikipedia.org/wiki/Google_Panda) when it comes to how it treats keywords.

<!-- more -->