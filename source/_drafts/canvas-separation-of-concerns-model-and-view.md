---
title: Canvas: Separation of concerns, Model and View
tags: [js, canvas]
categories: canvas
date: 2017-08-29 10:23:00
---

In my first [getting started post](/2017/05/17/canvas-getting-started/) on html 5 canvas I made a simple example on how to quickly throw together a canvas project in a way in which I usually do so. If it is something stupid simple things like [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) does not strike me as something that is that important. However if I do start to put together something that is a little advanced, it does become important as a means to avoid writing spaghetti code.

<!-- more -->

The main thing of concern it seems is to try to find a way to keep a model independent from a view. That is that
you have javaScript that has to do with the state, and manipulation of a model, and a completely separate chuck of JavaScript that renders that model in some way, and then typically some code that ties everything together.

## The Model

First off is the model this is what makes up the current state of data, and it also might contain some additional code that has to do with it's storage, retrieval, and manipulation. Yet again maybe not, maybe you might break things down further. The idea here though is to try to break things down into independent parts that may or may not depend on each other.

In this post I will just work with a hacked over version of what I was dealing with in my first canvas post, that looks like this:

```js
// the object to draw
var obj = {
 
  x: 0,
  y: 0,
  radius: 50,
  frame: 0,
  maxFrame: 100,
  per : 0,
  bias : 0,
  update: function(w, h) {
 
    this.per = this.frame / this.maxFrame;
    this.bias = 1 - Math.abs(this.per - .5) / .5;
 
    w = w || 640;
    h = h || 480;
 
    this.x = w / 2 - 100 + 200 * this.bias;
    this.y = h / 2;
 
    // step frame
    this.frame += 1;
    if (this.frame >= this.maxFrame) {
 
      this.frame = 0;
 
    }
 
  }
 
};
```