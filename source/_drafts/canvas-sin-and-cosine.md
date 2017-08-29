---
title: Canvas: sin and cosine
tags: [js, canvas]
categories: canvas
date: 2017-08-29 10:23:00
---

When working out a canvas project in a vanilla js kind of way, Math.sin, and Math.cos may come into play  a lot. I seem to use them often when putting together a game, or an animation. 

<!-- more -->

# Finding a point on a circle.

One of the most common uses for the two together is fo find the x, and y position of a point that lays on the curve of a circle. If you know the

``js
var findCirclePoint = function(cx,cy,radian,radius){
 
  return {
  
      x : Math.round(cx + Math.cos(radian) * radius),
      y : Math.round(cy + Math.sin(radian) * radius)
  
  };
 
};
 
console.log(findCirclePoint(0,0,0,100)); // {x:100,y:0}
console.log(findCirclePoint(0,0,Math.PI / 2,100)); // {x:0,y:100}
console.log(findCirclePoint(0,0,Math.PI / 4,100)); // {x:71,y:71}
```