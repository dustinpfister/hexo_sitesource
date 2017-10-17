---
title: Working with pointer objects in phaser.
date: 2017-10-17 14:58:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

When making a [phaser](http://phaser.io/) project, these days it's important to try to make games that are well designed with both mobile and traditional desktop systems in mind. As such it is important to understand the nature of touch events, and the mouse. That is how they are different, but more importantly how they are the same, as they are both a means of how to point to something. They can be thought of as pointer devices, as such this post is about how to go about working with pointer objects in phaser.

<!-- more -->

## Pointer Object example

So this is a quick example of how to go about getting started with pointer objects.

```js
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea', 
 
    {
 
        create : function () {
 
            game.input.onDown.add(function (ptObj, ptE) {
 
                // pointer object
                console.log(ptObj);
 
                // pointer event
                console.log(ptE);
 
            });
 
        }
 
    }
 
);
```

The function that I pass to the add method of onDown receives a pointer object, and a pointer event object as there arguments.
