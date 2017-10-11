---
title: Getting started with multi touch with the phaser pointers array.
date: 2017-10-11 13:37:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

The pointers array in phaser will contain an array of pointer objects for each non mouse pointer object.

<!-- more -->

## Quickly getting started with the pointers array

```js
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea', {
 
    render : function () {
 
        // show what is going on with the pointers array.
        game.input.pointers.forEach(function (pointer) {
 
            game.debug.pointer(pointer);
 
        });
 
    }
 
});
```
