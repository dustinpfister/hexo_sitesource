---
title: Hexo Theme Post objects
date: 2017-04-12 11:28:00
tags: [hexo,js,node.js,ejs]
layout: post
categories: hexo
---

An Important part of making a new hexo theme is to understand a thing or two about post objects. The post objects as I have come to call them contain all the information from the posts that have been writen in my markdown files. It contains properties for the title, content, date, excerpt and any other info that I may store in the header of my markdown files.

<!-- more -->

This post will not fully cover how to go about making themes with hexo, but will cover an important part of what is needed to progress with doing so.

# Lets get started

To get started make a new hexo theme by creating a new folder in the themes folder of the hexo working tree. I called mine minimal_one for now. In this folder of mine called minimal_one, at a minimum I will want an layout.ejs file in a layout folder.

In the main _config.yml file of hexo working tree I will want to change the theme property to the name of the new theme I am making ( in this case minimal_one ).

For starters I can make my layout.ejs file something like this.

```
<h1>Properties of a Hexo post object:</h1>
 
<!-- list properties of a hexo post object-->
<%-(function(){
 
    var html = '';
 
    for(var prop in page.posts.data[0]){
 
        html += prop + '<br>';
 
    }
 
    return html;
 
}()) %>
```

If I am in a situation in which I don't yet know what I am doing, and I can not find adequate documentation I just start looking at what I am dealing with. Such as looking at the properties of an object that I will be working with. I find that this is all just part of the whole &#34;learn by doing&#34; approach.

The main properties of interest here are:

* post.title
* post.date
* post.content
* post.excerpt

These are the most important ones that come to mind, and I should at the very least use these when making a new theme.

## write out your posts

```
<!-- write all posts -->
<% if(page.posts){ %>
 
    <% page.posts.each(function(post){ %>
 
        <!-- title and date -->
        <h1><a href="<%- '/'+post.path %>"><%- post.title || 'untitled post' %> </a></h1>
        <p>date: <%= post.date %></p>
 
        <!-- the content of the post -->
        <div><%- post.excerpt %></div>
 
    <% }) %>
 
    <% if (page.total > 1){ %>
 
        <nav id="page-nav">
            <%- paginator({
                prev_text: "PREV",
                next_text: "NEXT"
            }) %>
        </nav>
 
    <% } %>
 
<% }else{ %>
 
    <% console.log('no pages object for path: ' + page.path) %>
 
<% } %>
```
