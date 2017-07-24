---
title: Making and playing with a simple 2d Box class
tags: [js, canvas]
id: 28
categories: canvas
date: 2017-07-24 16:38:00
---

The concept of a simple 2d Box class is something that I keep coming back to. Because a lot of applications have to do with manipulation of simple 2d areas on a screen, as such having a solid understanding of this aspect of 2d geometry is important.

Taking the time to make a box class strikes me as something that is a good example of an exercise of sorts that can often progress into an interesting project of some kind. It has helped me gain a better understand of 2d geometry, and also the nature of a class.

<!-- more -->

## The basic box class

At a minimum a box class should have an x,y,w, and h properties that define the size, and position of the box. A more advanced Box class may have additional properties that have to do with rotation, and current delta values, but for this post I will be keeping it simple. In addition to the basic values that define a box it should also have a few methods that have to do with the manipulation of the box state.

Maybe something like this:

```js
var Box = function(op) {
 
  op = op === undefined ? {} : op;
 
  // current position, movement, and heading
  this.x = 50 || op.x; // x and y position
  this.y = 50 || op.y;
 
  // with and height
  this.w = 64 || op.w;
  this.h = 64 || op.h;
 
};
 
// move by heading and distance from present state
Box.prototype.moveHD = function(heading, distance){
 
    heading = heading || 0;
    distance = distance || 0;
    
    this.x += Math.cos(heading) * distance;
    this.y += Math.sin(heading) * distance;
 
};
 
// draw the box
Box.prototype.draw = function(ctx) {
 
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(this.x, this.y, this.w, this.h);
 
};
```

## The simple canvas demo app
