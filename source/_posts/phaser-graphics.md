---
title: The low down on phaser graphics
date: 2017-10-21 18:56:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 70
updated: 2017-10-21 19:15:48
version: 1.0
---

In my effort to make a [great series of posts](/categories/phaser/) on [phaser](http://phaser.io/), it is only a matter of time until I started writing on how to make on the fly graphics in phaser. This is something that I often want to do in the early stages of a project where I just want to know the location of what will eventually be a sprite, or even a project with no external assets which can happen sometimes with something pretty simple.

<!-- more -->

## A phaser graphics hello world example

I often start off my posts by giving a quick, simple hello world example of how to get started with something. For graphics I went with just drawing a circle in the center of the canvas.

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {
 
        // create method
        create : function () {
 
            // add a graphics object to the world
            var cir = game.add.graphics(game.world.centerX, game.world.centerY);
 
            // make it a green circle
            cir.beginFill(0x00ff00);
            cir.drawCircle(0, 0, 100);
            cir.endFill();
 
        }
 
});
```

Calling game.add.graphics will return an instance of [Graphics](http://phaser.io/docs/2.6.2/Phaser.Graphics.html)