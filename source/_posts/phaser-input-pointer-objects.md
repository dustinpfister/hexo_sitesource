---
title: Working with pointer objects in phaser.
date: 2017-10-17 14:58:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 67
updated: 2017-10-17 17:5:33
version: 1.0
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

The function that I pass to the add method of onDown receives a pointer object, and a pointer event object as its arguments. By looking in the javaScript console I can looks over all the values of each object. The first thing to understand here is that regardless if it is a mouse, or touch event, certain values are the same in the pointer object that is given, such as the container relative values.

## The mousePointer 

At game.input.mousePointer is a pointer object the has the latest values of the mouse, if there is a mouse to work with. If you are making a desktop app this object might be of value, but generally it is better to go with active pointer.

## The activePointer

The active pointer at game.input.activePoiter is the latest active pointer object that is the result of a mouse, or touch event.

## pointer1, pointer2, ect

there are a few pointer objects at game.input.pointer1, game.input.pointer2, ect. each of these are references to pointer objects that contain the latest values for each finger in the event of multi touch.

```js
var game = (function () {
 
    var disp;
 
    return new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea', {
 
        create : function () {
 
            disp = game.add.text(10, 10, '', {
                    fill : 'white'
                });
 
        },
 
        update : function () {
 
            // the active pointer
            var pt = game.input.activePointer;
 
            // uncomment for the mouse pointer
            //var pt = game.input.mousePointer;
 
            // uncomment for touch pointer1
            //var pt = game.input.pointer1;
 
            // uncomment for touch pointer2
            //var pt = game.input.pointer2;
 
            disp.text = pt.x + ',' + pt.y;
 
        }
 
    });
 
}
    ());
```

All of these pointer objects behave differently, and reference different input devices that may or not may not be available on a client system. However they all hold certain values in comment sense they are all pointer objects.


## Container relative x, and y position.

The most important values sought after in a pointer object are the container relative x, and y values of the pointer object.

```js
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea', 
 
    {
 
        create : function () {
 
            game.input.onDown.add(function (pt) {
 
                console.log(pt.x + ',' + pt.y);
 
            });
 
        }
 
    }
 
);
```

these values are simply just pt.x, and pt.y in a given pointer object. these values of course differ from pt.clientX, and pt.clientY that of course hold the window relative position values.