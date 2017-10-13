---
title: Using the keyboard in phaser via game.input.keyboad
date: 2017-10-13 10:39:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 64
updated: 2017-10-13 12:16:0
version: 1.0
---

In this post I will be outlining a quick demo in which I am moving a sprite around the screen using the keyboard.

<!-- more -->

## phaser keyboard isDown example

One way to make use of keyboard input in phaser is to use the isDown method of the input hander via game.input.keyboard.isDown. This would be used in an update method of a state object, rather than a handler that is fire each time the key is pressed. As such you might end up with something like this:

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
 
            console.log('keyboard');
            console.log(Phaser.Keyboard.LEFT);
 
        },
 
        update : (function () {
 
            var f = 0,
            lt = new Date(),
            rate = 1000 / 12,
 
            // walk animation
            walk = function (sprite) {
 
                sprite.frame = f + 2;
 
                if (new Date() - lt > rate) {
 
                    f += 1;
                    if (f == 2) {
 
                        f = 0;
 
                    }
 
                    lt = new Date();
 
                }
 
            };
 
            return function () {
 
                var sprite = game.world.children[0],
                k = game.input.keyboard,
                w = false;
 
                // A
                if (k.isDown(65)) {
 
                    sprite.x -= 1;
                    w = true;
 
                }
 
                // D
                if (k.isDown(68)) {
 
                    sprite.x += 1;
                    w = true;
                }
 
                // W
                if (k.isDown(87)) {
 
                    sprite.y -= 1;
                    w = true;
                }
 
                // S
                if (k.isDown(83)) {
 
                    sprite.y += 1;
                    w = true;
 
                }
 
                // default sprite to frame 0
                sprite.frame = 0;
 
                if (w) {
 
                    walk(sprite);
 
                }
 
            };
 
        }
            ())
 
    }, false, false);
```

This works okay, but I tend to prefer for this to be pulled into separate event handlers rather than constantly checking the status of keys in an update method.

## The addKey method