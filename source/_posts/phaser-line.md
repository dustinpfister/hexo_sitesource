---
title: The Phaser Line constructor
date: 2017-10-28 10:14:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 77
updated: 2017-10-28 15:41:39
version: 1.3
---

In this post I will be writing about the [phaser](http://phaser.io) [Line Constructor](http://phaser.io/docs/2.6.2/Phaser.Line.html). This constructor may prove to be somewhat useful when doing anything involving line segments.

<!-- more -->

{% phaser_top %}

{% phaser_if_new_mess %}

## Quick Phaser Line Hello World.

To create a line segment I just need to pass the four arguments for the x, and y positions of the two points that make up the Line. To draw the line I can use Phasers Graphics display objects to get that done.

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', 
    {
 
        // create method
        create : function () {
 
            // making a graphics display object
            var gra = game.add.graphics(0, 0),
 
            // making an instance of Phaser.Line
            line = new Phaser.Line(50, 190, 270, 190);
 
            // draw the line
            gra.lineStyle(3, 0xff0000);
            gra.moveTo(line.start.x, line.start.y);
            gra.lineTo(line.end.x, line.end.y);
 
        }
 
    }
 
);
```

Each line has a start point, and an end point and that is where the line.start, and that is of course where the line.start, and line.end objects come into play. Now that I have the basics done, it would be nice to know about some of the methods that are available for Lines.

## Line.midpoint

This method will return a Point that is the midPoint of the line that I call the method on.

```js

var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea',
 
    {
 
        // create method
        create : function () {
 
            // making a graphics display object
            var gra = game.add.graphics(0, 0),
 
            // making an instance of Phaser.Line
            baseLine = new Phaser.Line(50, 190, 270, 190),
 
            // get the midpoint of the baseline
            mp = baseLine.midPoint(),
 
            // make a new center line off from the midpoint of baseLine
            centerLine = new Phaser.Line(mp.x, mp.y, mp.x, baseLine.y - 100),
 
            // draw line method
            drawLine = function (gra, line) {
 
                gra.moveTo(line.start.x, line.start.y);
                gra.lineTo(line.end.x, line.end.y);
 
            }
 
            // draw the lines
            gra.lineStyle(3, 0xff0000);
            drawLine(gra, baseLine);
            drawLine(gra, centerLine);
 
        }
 
    }
 
);
```

## start and end

Every Line has a start and end point getting this is a simple as just cheking out these objects in the instance of Line.

```js
var line = new Phaser.Line(10, 35, 320, 80);
 
console.log(line.start); // {x: 10, y: 35}
console.log(line.end);  // {x: 320, y : 80}
```

In addition to being helpful just because they are objects that have the properties I often need, both of these Objects are instances of Phaser.Point, and as such have all the properties, and method of that constructor as well.

## top, bottom, left, and right

As the names imply these properties simply just give the boundaries of the line.

```js
var line = new Phaser.Line(10, 35, 320, 80);
 
console.log(line.top); // 35
console.log(line.bottom); //80
console.log(line.left); // 10
console.log(line.right); // 320
```

## Get the length of a line

If I have an instance of Line there is no need to use the distance formula to get it's length, there is all ready a property for that.

```js
var line = new Phaser.Line(10, 10, 90, 10);
 
console.log(line.length);
```

## Find the angle that the line is heading

Another great thing about an instance of Line is that I can use it to find the angle a line is heading from it's start point to end point by just checking the angle property

```js
var line = new Phaser.Line(50, 50, 100, 100);
console.log(line.angle * Phaser.Math.RAD_TO_DEG); // 45
```

{% phaser_bottom %}