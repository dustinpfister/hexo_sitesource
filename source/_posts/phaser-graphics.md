---
title: Working with on the fly graphics in phaser
date: 2017-10-21 18:56:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 70
updated: 2017-10-21 19:38:27
version: 1.1
---

In my effort to make a [great series of posts](/categories/phaser/) on [phaser](http://phaser.io/), it is only a matter of time until I started writing on how to make on the fly graphics in phaser. This is something that I often want to do in the early stages of a project where I just want to know the location of what will eventually be a sprite, or even a project with no external assets which can happen sometimes with something pretty simple.

<!-- more -->

## This is not a getting started with phaser or javaScript post

I have my [getting started post on phaser](/2017/10/04/phaser-getting-started/), and I assume you have a decent degree of knowledge of javaScript. Now that is out of the way lets get to the point.

## A phaser graphics hello world example (Graphics.drawCircle)

I often start off my posts by giving a quick, simple hello world example of how to get started with something, then everything else is often just different mutations of that example . For graphics I went with just drawing a circle in the center of the canvas. So this will also be an example of the [Graphics.drawCircle](http://phaser.io/docs/2.6.2/Phaser.Graphics.html#drawCircle) method.

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

Calling game.add.graphics will return an instance of [Graphics](http://phaser.io/docs/2.6.2/Phaser.Graphics.html), which has many properties and methods for making on the fly graphics. Here we are just starting with Graphics.beginFill, Graphics.drawCircle, and Graphics.endFill.

So every time I want to do something with graphics in phaser the first thing to do is create a new Graphics display object by calling game.add.graphics, then I use the methods and properties that are provided in that instance of Graphics to create whatever it is that I want. 

## Drawing a box with Graphics.drawRect()

If not drawing a circle, another very common shape to work with when making a game is of corse a box or rectangle like object. Doing this in phaser is not all that more complicated, I just need to use the [Graphics.drawRect](http://phaser.io/docs/2.6.2/Phaser.Graphics.html#drawRect) method.

var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {
 
        // create method
        create : function () {
 
            // add a graphics object to the world
            var cir = game.add.graphics(game.world.centerX, game.world.centerY);
 
            // make it a red rectangle
            cir.beginFill(0xff0000);
            cir.drawRect(-50, -50, 100,100);
            cir.endFill();
 
        }
 
});