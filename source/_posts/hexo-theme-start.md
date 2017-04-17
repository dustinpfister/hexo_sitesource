---
title: Getting started with Hexo Themes
date: 2017-04-17 20:25:00
tags: [hexo,js,node.js,themes,ejs]
layout: post
categories: hexo
updated: 2017-4-17 13:36:27
id: 14
version: 1.2
---
When it comes to ruining just a blog with [hexo](https://hexo.io/), it's easy to just get rolling along out of the box with hexo.io. However there will come a time when I will want to make my own custom theme for the project to add special sections that are rendered in a special kind of way using [embedded javascript](http://www.embeddedjs.com/).

<!-- more -->

There is a [page on themes](https://hexo.io/docs/themes.html) at the official hexo site, but I will but together a minimal example here.

## The main hexo _config.yml file.

In the main hexo _config.yml file at the root level of the hexo working tree you will want to set the theme property to the name of the new theme in this case &#34;my-hexo-theme&#34; In most cases this might be, or at least should be the only stetting that has to be changed in oder to change themes.

## The Theme folder

Start by making a new folder in the themes folder of the main hexo working tree. You can give it a name like &#34;my-hexo-theme&#34; or any name you want, but for this post I will refer to this theme as my-hexo-theme.

## The layout folder

## the _parts folder

I will want a folder in the layout folder that holds ejs partials. I will then use these parts in one or more *.ejs files where needed.

## layout.ejs

A theme should at least have a single layout.ejs file. This is the main ejs file that will always be rendered for all pages.

```ejs
<!DOCTYPE html>
 
<html>
 
    <head>
 
        <title><%- page.title || config.title || "untitled" %></title>
 
        <link rel="stylesheet" href="/css/main_style.css" >
 
    </head>
 
    <body>
        <%- body>
    </body>
 
</html>
```

## Templates and index.ejs

Along with the layout.ejs there should at the very least be an index.ejs file as well. This index.ejs template is what will be rendered in the event that no other more appropriate template is available.

```ejs
<% if(page.posts){ %>
 
    <%- partial('_parts/posts_excerpts') %>
 
<% }else{ %>
 
    <h1><%- page.title || 'untitled' %></h1>
    <%- page.content %>
 
<% } %>
```

<!--

## The Themes source folder.


## The Theme's _config.yml file


-->