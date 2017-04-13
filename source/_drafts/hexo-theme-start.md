---
title: Getting started with Hexo Themes
date: 2017-04-12 20:25:00
tags: [hexo,js,node.js,themes,ejs]
layout: post
categories: hexo
---
When it comes to ruining just a blog with [hexo](https://hexo.io/), it's easy to just get rolling along out of the box with hexo.io. However there will come a time when I will want to make my own custom theme for the project to add special sections that are rendered in a special kind of way using [embedded javascript](http://www.embeddedjs.com/).

<!-- more -->

There is a [page on themes](https://hexo.io/docs/themes.html) at the official hexo site, if you would like to give that a look see as well for more help on this process.

# The Theme folder

Start by making a new folder in the themes folder of the main hexo working tree. You can give it a name like &#34;my-hexo-theme&#34; or any name you want, but for this post I will refer to this theme as my-hexo-theme.

# The main _config.yml file.

In the main hexo _config.yml file at the root level of the hexo working tree you will want to set the theme property to the name of the new theme in this case &#34;my-hexo-theme&#34;

# The Theme's _config.yml file

# layout.ejs

A theme should at least have a single layout.ejs file. This is the main ejs file that will always be rendered for all pages.

# The Themes source folder.

