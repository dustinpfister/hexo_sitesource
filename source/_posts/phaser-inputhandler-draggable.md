---
title: Making game display objects draggable in phaser
date: 2017-10-24 12:56:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 74
updated: 2017-10-24 14:8:35
version: 1.1
---

Making a display object draggable in [phaser](http://phaser.io) is pretty easy, assuming it allows for the enabling of an input handler (Sprites, and Graphics do at least). In this post I will be should how to get started with doing this.

<!-- more -->

<div id="gamearea" style="width:320px;height:240px;margin-left:auto;margin-right:auto;"></div>
<script>
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', 
 
{

        // create the sprite
        create : function () {
 
            var bx = game.add.graphics(game.world.centerX, game.world.centerY);
 
            bx.beginFill(0xff0000);
            bx.drawRect(-160, -120, 160, 120);
            bx.endFill();
 
            bx.inputEnabled = true;
            bx.input.draggable = true;
 
            bx.input.snapOnRelease = true;
            bx.input.snapX = 160;
            bx.input.snapY = 120;
 
            bx.events.onDragStop.add(function (bx) {
 
                // snap back to center
                if (bx.x <= 0 || bx.x >= 480 || bx.y <= 0 || bx.y >= 360) {
 
                    bx.x = 160;
                    bx.y = 120;
 
                }
 
            });
 
        }
 
    }
 
);
</script>

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

## snap

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', 
 
{

        // create the sprite
        create : function () {
 
            var bx = game.add.graphics(game.world.centerX, game.world.centerY);
 
            bx.beginFill(0xff0000);
            bx.drawRect(-160, -120, 160, 120);
            bx.endFill();
 
            bx.inputEnabled = true;
            bx.input.draggable = true;
 
            bx.input.snapOnRelease = true;
            bx.input.snapX = 160;
            bx.input.snapY = 120;
 
            bx.events.onDragStop.add(function (bx) {
 
                // snap back to center
                if (bx.x <= 0 || bx.x >= 480 || bx.y <= 0 || bx.y >= 360) {
 
                    bx.x = 160;
                    bx.y = 120;
 
                }
 
            });
 
        }
 
    }
 
);
```
{% phaser_bottom %}