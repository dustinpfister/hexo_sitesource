---
title: An overview of the main phaser input manager via game.input
date: 2017-10-13 09:22:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 63
updated: 2017-10-19 10:25:58
version: 1.3
---

This post is an overview of the main [phaser](http://phaser.io/) input hander that can be found at game.input in a phaser game object instance. There is much to be said about [Input](http://phaser.io/docs/2.6.2/Phaser.Input.html) (what is used via game.input), and [InputHander](http://phaser.io/docs/2.6.2/Phaser.InputHandler.html) (what is used in game objects like sprites). However this post is mainly just an outline of what there is to work with via the Input instance at gane.input. I am putting a lot of time into rapidly expanding my posts on phaser, as such the content here will be updated often as my collection of content on phaser grows.

<!-- more -->

## What you should know before hand

I assume you have a strong foundational understanding of front end javaScript itself, and have broke at least some ground with phaser, and are now interested in learning more about how to handle input in phaser. If not get up to speed with all of that then come back here.

## Two general approaches with input

There are two general ways of handling input with phaser. One is to take a look at the state of objects that exist via game.input, and this post you are reading mainly covers this approach. Another approach is to use the input handers that are attached to sprites.

## Confusion over input and inputHander

What is given at game.input is an instance of input which differs from Phasers inputHander which is used in game objects like sprites. If you just want to know what the current status of some device is, then you would want to check out what is going on with instnace of input at game.input. However if you want to attach some kind of event handler to a game object, which in many cases may be a better alternative, then you want to look into the Phaser inputHander, which is outside the scope of this post.

## Demo using game.input

I put together a quick demo for getting started with doing something with some values that are available at game.input. It's not my best work, but you should get the idea at least. In this demo I am using values at game.input.activePointer To get values for the latest pointer object (mouse or touch event) to move a chicken.

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {
 
        // load the sprite sheet
        preload : function () {
 
            game.load.spritesheet('cucco', '/img/cuccos_zelda4.png', 20, 20, 10);
 
        },
 
        // create the sprite
        create : function () {
 
            var sprite = game.add.sprite(160 - 40, 120 - 40, 'cucco');
 
            sprite.width = 80;
            sprite.height = 80;
 
        },
 
        update : (function () {
 
            var f = 0,
            lt = new Date(),
            rate = 1000 / 12;
 
            return function () {
 
                var sprite = game.world.children[0],
                pt = game.input.activePointer;
 
                if (pt.isDown) {
 
                    var r = Math.atan2(pt.y - sprite.y, pt.x - sprite.x);
 
                    sprite.x += Math.cos(r);
                    sprite.y += Math.sin(r);
 
                    sprite.frame = f + 2;
 
                    if (new Date() - lt > rate) {
 
                        f += 1;
                        if (f == 2) {
 
                            f = 0;
 
                        }
 
                        lt = new Date();
 
                    }
 
                } else {
 
                    // chicken is at rest state
                    sprite.frame = 0;
 
                }
 
            };
 
        }
            ())
 
    }, false, false);
```

If the isDown property of the pointer object is false, then the sprite will not go anywhere, and have a frame index of 0, which is just a picture of the chicken standing there doing nothing. If isDown is true however the chicken will move to the position of the pointer object, and a moving animation will occur.

## game.input.activePointer

The activePointer use in the demo above is helpful if you want to do something with values contained in the latest pointer object. On systems that are a desktop system with a touch screen this can be the latest touch, or mouse event.

## keyboard

keyboard input can be handled via game.input.keyboard, I wrote a full post on working with the [keyboard here](/2017/10/13/phaser-gameobj-input-keyboard/).

## game.input.mousePointer

Another pointer object, but this is just the latest pointer Object concerning the mouse only when making a desktop game.