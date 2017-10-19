---
title: Getting started with multi touch with the phaser pointers array.
date: 2017-10-19 10:53:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 68
updated: 2017-10-19 15:21:29
version: 1.2
---

The pointers array in phaser will contain an array of [pointer objects](/2017/10/17/phaser-input-pointer-objects/) for each non mouse pointer object. This can be useful for working on any project that may involve multi touch. It can be thought of as an alternative to the pointer1, pointer2, pointer3, etc objects available via [game.input](/2017/10/13/phaser-gameobj-input/).

<!-- more -->

## Quickly getting started with the pointers array

One way to quickly know what is going on with the current status of the pointers array is by using the pointer debug method.

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

## Using game.input.addPointer to increase the length of the pointers array

By default there are only two pointer objects in the pointers array, if You want to make a project that makes use of more pointers you will want to use the addPointer method to do so.

```js
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea', {
 
        create : function () {
 
            // pointer1, and pointer2 exist by default
            console.log(game.input.pointers.length); // 2
 
            game.input.addPointer(); // add pointer3
            game.input.addPointer(); // add pointer4
            game.input.addPointer(); // add pointer5
            console.log(game.input.pointers.length); // 5
 
        },
 
        render : function () {
 
            game.input.pointers.forEach(function (pointer) {
 
                game.debug.pointer(pointer);
 
            });
 
        }
 
    });
```