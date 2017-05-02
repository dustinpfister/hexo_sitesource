---
title: Hexo site sitemap automation with hexo-generator-sitemap
date: 2017-05-02 10:06:00
tags: [js,hexo,automation]
layout: post
categories: hexo
---

When it comes to improving my site as of recent I have been working on getting together a good solution for automating the process of maintaining my sitemap with my [hexo](https://hexo.io/) site. As I keep adding more content, and the site continues to grow, having a sitemap is going to just become yet even more important than it is to begin with. I have writen a post on sitemaps before a few days ago, but I just cover what they are, and why they are important, and how to put one together manually. In this post I will write about the current solution I am using to automate the process of maintaining a sitemap called [hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap).

<!-- more -->

# Install hexo-generator-sitemap

I assume you are node competent, and are using hexo as your static site generator, in which case you just need to know this then.

```
$ npm hexo-generator-sitemap --save
```

Yes I saved it as a dependency of my hexo site source project, and as such it will be in my hidden node_modules folder of the hexo site working tree. Once installed I just need to add a few lines to my _config.yml file, and then I am ready to start work on the [template xml file](https://github.com/hexojs/hexo-generator-sitemap/blob/master/sitemap.xml).

# What to add to the main hexo _config.yml

I just placed this at the bottom of the main _config.yml file that should be at the root level of the hexo working tree.

```
# Sitemap
sitemap:
  path: sitemap.xml
  template: ./sitemap_template.xml
```

As you mau have guessed yes the sitemap will be called sitemap.xml, and yes it will be at the root namespace of the site build