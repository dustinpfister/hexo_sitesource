---
title: The Phaser Line constructor
date: 2017-10-28 10:14:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 77
updated: 2017-10-28 15:11:18
version: 1.0
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

{% phaser_bottom %}