---
title: Getting started with canvas
date: 2017-05-11 17:28:00
tags: [js,canvas]
layout: post
categories: canvas
---

I thought it would be nice to write a few blog posts on html 5 canvas. Mainly just some posts on doing some fun things with the 2d drawing context. As such maybe it is best to start with a post that is a kind of getting started post on the subject.

<!-- more -->

## The black screen app

Whenever I start a new canvas project with plain old vanilla js, I often start with something like this.

```js
(function () {
 
    // create and inject a canvas
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
 
    // append to body
    document.body.appendChild(canvas);
 
    // set native size
    canvas.width = 320;
    canvas.height = 240;
 
    // default the canvas to a solid back background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 
}
    ());
```

This results in just a simple black screen that has a native width of 320, and a height of 240 pixels. A typical starting point for any vanilla js canvas project.

In this example I am creating the canvas, and appending it to the body of an html document all with javaScript, rather than getting a reference to a canvas element that may exist before hand.