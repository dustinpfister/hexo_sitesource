---
title: Playing with lines in phaser with Graphics.lineTo
date: 2017-10-22 09:37:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

When working with on the fly graphics in [phaser](http://phaser.io/), there might come a time in which i might want to do something with a collection of points that form a shape, or drawing, or polygon.

<!-- more -->

## Arrays of points

How would you go about having an array of points in javaScript? Would you store an array of objects that have x, and y properties? Would you have an array of arrays where the first element is x, and the second element is y? Or would you just have a linear array of numbers that follow a certain formula?

```js
var ptFormat1 = [{x:10,y:20},{x:25,y:-50}], // Array of objects
ptFormat2 = [[10,20],[25,-50]], // Array of arrays
ptFormat3 = [10,20,25,-50];  // Formula (this is what we use in phaser)
```

Well regardless of how you might think with this in phaser just a single linear array is used, so whenever you want to feed some points to a method like Graphics.drawPolygon this is the format the array of points should be in.

## Add Phaser Graphics display Object

The first thing to know about here is the add method of the main game object that is used to create a new graphics display object via game.add.graphics(x,y). This is what I call first in my create method to get a new graphics display object that will contain the drawPolygon method, along with a bunch of other useful stuff.

## Graphics.lineStyle

Another important method to know of is the graphics lineStyle method, this is what to use to style lines that are used to draw polygons, and anything else in the graphic that involves drawing a line.

## A Graphics.drawPolygon example

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', 
{
 
        // create method
        create : function () {
 
            // add a graphics object to the world
            var gra = game.add.graphics(game.world.centerX, game.world.centerY);
 
            gra.lineStyle(3, 0x00ff00);
            gra.drawPolygon([0, -100, 100, 0, 0, 100,-50,100,-50,50,-100,50,-100,-50,-50,-50,-50,-100,0,-100]);
 
        }
 
    }
 
);
```
