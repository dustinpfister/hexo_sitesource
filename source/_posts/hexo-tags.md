---
title: Hexo tags
date: 2017-02-04 18:40:00
tags: [hexo,blog]
layout: post
categories: Hexo
---

This is my first post for my [hexo.io](https://hexo.io) generated blog. Hexo is a [node.js](https://nodejs.org) powered static site genertor that can take markdown files and generate a collection of html files with a given theme. It is a very useful tool that can automate a great deal of work that would otherwise be hand coded.

<!-- more -->

Speaking of hexo I thought I would make my first post about one of the static site generators features called [tags](https://hexo.io/api/tag.html). Hexo tags are a way that I can quickly append generated html content in my blog posts.

For example say I want to make the process of embedding a you tube video into one of my posts as simple as typing something like this.

```
{% youtube duVq7cXWcYw %}
```

To do this I just need to write a little JavaScript, and save it as a *.js file in my scripts folder in the root name space of my hexo project tree.

To register the tag I just have to throw together a little something like this:

```js
hexo.extend.tag.register('youtube', function (args) {
 
   var vid = args[0];
 
  return '<iframe width="320" '+
  'src="https://www.youtube.com/embed/'+vid+'" '+
  'frameborder="0" allowfullscreen></iframe>';
 
});
```

Then just save it as something like youtube.js in the scripts folder.

So now in my markdown files I can use it quickly embed a video.

{% youtube duVq7cXWcYw %}

Yes I like [cyriak](https://www.youtube.com/channel/UC9Ntx-EF3LzKY1nQ5rTUP2g).

{% endofpost %}
