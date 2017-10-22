---
title: The active pointer object in phaser
date: 2017-10-17 14:58:00
tags: [js,phaser,games]
layout: post
categories: phaser
---


<!-- more -->

{% phaser_top %}

{% phaser_if_new_mess %}

## First some Vanilla JS

Before we dive into pointer objects lets first review how to go about working with touch and mouse events with just straight vanilla js.

```
document.body.addEventListener('touchstart', function (e) {
 
    // vanilla js touch event
    console.log(e);
 
});
 
document.body.addEventListener('mousedown', function (e) {
 
    // vanilla js mouse event
    console.log(e);
 
});
```

So there is much to write about when it comes to how mouse and touch points differ. Touch events support multi touch, and a mouse does not. A mouse has one or more buttons, and touch events do not. However there is also what they share in common, if desired they can both be used as a means to point at something, and activate some kind of event. they both can be used as a means to set a current active pointer, that can be controlled with the mouse, or by touch.

```js
var activePointer = {
 
    x : 0,
    y : 0
},
 
pointerEvent = function (e) {
 
    var bx = e.target.getBoundingClientRect(),
    x,
    y;
 
    if (typeof e.clientX === 'undefined') {
 
        console.log('touch');
 
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
 
    } else {
 
        console.log('mouse');
 
        x = e.clientX;
        y = e.clientY;
 
    }
 
    // set latest values for the pointer
    activePointer = {
 
        x : x - bx.left, // container relative
        y : y - bx.top,
        clientX : x, // window relative
        clientY : y
 
    };
 
};
 
document.body.addEventListener('touchstart', pointerEvent);
document.body.addEventListener('touchmove', pointerEvent);
document.body.addEventListener('mousedown', pointerEvent);
document.body.addEventListener('mousemove', pointerEvent);
 
// simple loop
var loop = function () {
 
    setTimeout(loop, 33);
 
    document.body.innerHTML = JSON.stringify(activePointer);
 
};
 
loop();
```

So this is a quick example of how to go about having an active pointer object. In vanilla js there is a lot of leg work when it comes to adjusting things so that I get a container relative rather than window relative position. 

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
{% phaser_bottom %}
