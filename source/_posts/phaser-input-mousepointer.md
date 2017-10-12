---
title: The mouse pointer in phaser
date: 2017-10-12 11:27:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 61
updated: 2017-10-12 11:48:6
version: 1.2
---

When making a [phaser](http://phaser.io) project, unless I am making some kind of true idel game, will often need to accept input from a user somehow. When making a desktop game, the mouse is often something of interest. As such this post will cover how to work with pointer a pointer object that has current values from the mouse.

<!-- more -->

## The mousePointer pointer object

The current pointer object for the mouse can be found at game.input.mousePointer. On a desktop system this is always there to work with when you want to do something involving the mouse.

## phaser mouse pointer hello world

The debug feature of phaser can be used if you just quickly want to know what is up with the current values in the pointer object at game.input.mousePointer

```js
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea', {
 
        render : function () {
 
            game.debug.pointer(game.input.mousePointer);
 
        }
 
    });
```

just playing around with this simple demo, you should notice some values of the pointer object such as the position, and duration if the mouse button is down.