---
title: Playing with lines in phaser with Graphics.lineTo
date: 2017-10-22 09:37:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

When working with on the fly graphics in [phaser](http://phaser.io/), there might come a time in which i might want to do something with a collection of points that form a shape, or drawing, or polygon.

<!-- more -->

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
