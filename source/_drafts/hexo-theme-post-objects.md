---
title: Hexo Theme Post objects
date: 2017-04-12 11:28:00
tags: [hexo,js,node.js]
layout: post
categories: hexo
---

An Important part of making a new hexo theme is to understand a thing or two about post objects.

<!-- more -->

# Lets get started

To get started make a new hexo theme by creating a new folder in the themes folder of the hexo working tree. I called mine minimal_one for now. In this folder of mine called minimal_one, at a minimum I will want an index.ejs file in a layout folder.

In the main _config.yml file of hexo working tree I will want to change the theme property to the name of the new theme I am making ( in this case minimal_one ).

For starters I can make my index.ejs file something like this.

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

