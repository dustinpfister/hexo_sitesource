---
title: Getting started with canvas
date: 2017-04-06 08:22:00
tags: [js,canvas]
layout: post
categories: canvas
---

Getting started with canvas.

<!-- more -->

```js
(function () {
 
    // create and inject a canvas
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
 
    // append to body
    document.body.appendChild(canvas);
 
    // set size, and default to a solid background
    canvas.width = 320;
    canvas.height = 240;
 
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 
}
    ());
```