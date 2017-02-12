---
title: Hexo tags
date: 2017-02-04 18:40:00
updated : 2017-02-12 12:44:00
tags: [hexo,blog]
layout: post
categories: Hexo
---

This is my first post for my [hexo.io](https://hexo.io) generated blog. Hexo is a [node.js](https://nodejs.org) powered static site genertor that can take markdown files and generate a collection of html files with a given theme. It is a very useful tool that can automate a great deal of work that would otherwise be hand coded.

<!-- more -->

Speaking of hexo I thought I would make my first post about one of the static site generators features called [tags](https://hexo.io/api/tag.html). Hexo tags are a way that I can quickly append generated html content in my blog posts.

For example embedding a youtube video into one of my posts is as simple as typing this is my markdown.

```
{% youtube duVq7cXWcYw %}
```

When I generate my site the above is parsed into the following HTML.

```html
<div class="video-container"><iframe src="//www.youtube.com/embed/duVq7cXWcYw" frameborder="0" allowfullscreen></iframe></div>
```

So say I want to embed one of my favortie [cyriak](https://www.youtube.com/channel/UC9Ntx-EF3LzKY1nQ5rTUP2g) videos into a blog post. Doing so is as simple as finding the id of the video I want to post, and using that as the single argument.

{% youtube duVq7cXWcYw %}

# Writing my own tag.
This page was built by hexo on {% custom_buildtime %}