---
title: Making game display objects draggable in phaser
date: 2017-10-24 12:56:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 74
updated: 2017-10-24 13:22:35
version: 1.0
---

Making a display object draggable in [phaser](http://phaser.io) is pretty easy, assuming it allows for the enabling of an input handler (Sprites, and Graphics do at least). In this post I will be should how to get started with doing this.


<!-- more -->

{% phaser_top %}

{% phaser_if_new_mess %}

## Draggable example

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', 
 
{
 
        // create the sprite
        create : function () {
 
            var bx = game.add.graphics(game.world.centerX, game.world.centerY);
 
            bx.beginFill(0xff0000);
            bx.drawRect(-50, -50, 100, 100);
            bx.endFill();
 
            bx.inputEnabled = true;
            bx.input.draggable = true;
 
        }
 
    }
 
);
```

{% phaser_bottom %}