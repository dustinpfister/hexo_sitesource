---
title: Hexo structured data keywords tag.
date: 2017-03-28 19:52:00
tags: [hexo,js,node.js,SEO,structured-data]
layout: post
categories: hexo
---

{% mytags_postwords js,javaScipt,hexo,node.js,SEO,hexo&#32;tags,SEO %}

So I am still pretty new to Search Engine Optimization, as such I have just started fiddling with structured data for what it is worth.

<!-- more -->

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