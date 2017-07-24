---
title: Making and playing with a simple 2d Box class
tags: [js, canvas]
id: 28
categories: canvas
date: 2017-07-24 16:38:00
version: 1.1
updated: 2017-7-24 12:35:47
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
  
  this.fillColor = '#ffffff' || op.fillColor;
 
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
 
  ctx.fillStyle = this.fillColor;
  ctx.fillRect(this.x, this.y, this.w, this.h);
 
};
```

## The moveHD method

So when it comes to just changing the position of the box there are a great many different ways to go about doing so. Because this is just 2d, any method that changes the position of the box is going to have some kind of impact on the x, and y properties of the box class instance.

My moveHD method moves the box by allowing me to pass a heading in radians, and a distance from that point. 

## Other movement method ideas.

Because I am taking the time to write my own box class, I can add whatever methods I want to the Class when it comes to changing the box position. I could for example add additional properties to the class such as delta values that store the current rate of change for x that is to be updated by calling an update method.


## The simple canvas demo app

In [the first post](/2017/05/17/canvas-getting-started/) that I have made on html5 canvas I have outlined a simple demo app that can be used to get started with a vanilla js canvas project. All my canvas projects end up having at least a main app loop method, a draw method, and some kind of display object(s) that are displayed in the canvas. It also typically contains some kind of way to change the state of what is being displayed in the canvas by way of either an update method, or event handlers.

I will not go to nuts for this post, I'll save that for another one in this [canvas collection](/categories/canvas/) of mine that I think I will like to develop more. So for not, yes I will just be moving a box across the screen. Still even to do something as simple as that, I will be needing a basic app structure.

```js
(function() {
 
    // create and inject a canvas
    var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),
 
      bx = new Box(),
      heading = 0,
      
      setup = function() {
 
        // append to body
        document.body.appendChild(canvas);
 
        // set actual matrix size of the canvas
        canvas.width = 320;
        canvas.height = 240;
 
        loop();
      },
 
      // the single draw function
      draw = function() {
 
        // draw a cirlce
        ctx.strokeStyle = '#ffffff';

       // draw the current state of the Box class instnace to the context
        bx.draw(ctx);
 
      },
 
      // clear screen
      cls = function() {
 
        // default the canvas to a solid back background
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
 
      },
 
      // the loop
      loop = function() {
 
        requestAnimationFrame(loop);
        
        // use my Box.moveHD method
        bx.moveHD(0,1);
        
        // some basic rules for the box
        if(bx.x >= canvas.width){
        
           bx.x = bx.x % canvas.width;
        
        }
        
        cls();
        draw();
 
      };
 
    setup();
 
  }
  ());
```