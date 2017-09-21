---
title: The basic selection of html elements using jQuery
date: 2017-09-21 18:51:00
tags: [js,jquery]
layout: post
categories: jquery
---

When first getting started with jQuery it is necessary to at least have a basic idea of how to go about selecting one or more HTML elements. To do this it is necessary to be familiar with jQuery selectors, at the very least the basics. So lets get started.

<!-- more -->

## The html

So for this example I will be working with just a simple html structure that makes use of elements, classes, and id\'s.

```html
<div id="main_wrap" class="container">
 
    <nav id="navbar" class="container">
 
       <a href="/">home</a>
       <a href="/blog">blog</a>
       <a href="/about">about</a>
 
    </nav>
 
    <div id="content" class="container">
 
        <p>The Foo Man Chew shal always be in style.</p>
 
    </div>
 
    <div id="footer" class="container">
 
        <p>Copyright 2017 Demo Comapny LLC</p>
 
    </div>
 
</div>
```

## Selecting All Elements



## Selecting by node name

To select by node name just give a string that is the node name that is to be selected. Even elements like title, and html can be selected.

```js
  $('p').each(function(i,el){
 
      console.log(el); // all p elements
 
 });
```
