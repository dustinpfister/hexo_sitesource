---
title: Canvas: An animation exercise with sine and cosine.
tags: [js,canvas,animation]
categories: canvas
date: 2017-08-29 10:23:00
---

When working out a canvas project in a vanilla js kind of way, Math.sin, and Math.cos may come into play  a lot. Trig methods come into play often when dealing with anything that has to start do do with geometry, I seem to use them often when putting together a game, or an animation.

In this post I will be outline the development of an animation using Math.cos, and Math.sin. You can check out, and play with the project in question with the [jsfiddle](https://jsfiddle.net/dustinpfister/9c4zqq90/3/) I made.

<!-- more -->

# Finding a point on a circle.

One of the most common uses for the two together is to find the x, and y position of a point that lays on the curve of a circle. If you know the center x, y points, radius, and radian and want the unknown x, and y point of a point that lays at the radian, and radius given, I can do so with something like this.

``js
var findCirclePoint = function(cx,cy,radius,radian){
 
  return {
  
      x : Math.round(cx + Math.cos(radian) * radius),
      y : Math.round(cy + Math.sin(radian) * radius)
  
  };
 
};
 
console.log(findCirclePoint(0,0,0,100)); // {x:100,y:0}
console.log(findCirclePoint(0,0,Math.PI / 2,100)); // {x:0,y:100}
console.log(findCirclePoint(0,0,Math.PI / 4,100)); // {x:71,y:71}
```

This will be used in the animation.