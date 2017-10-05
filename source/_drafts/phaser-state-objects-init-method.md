---
title: Whats cool about init methods in Phaser State objects.
date: 2017-10-05 12:33:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

Because of the relationship with initialization methods of State Objects and the start method of the StateManager in [phaser](http://phaser.io), it occurred to me that this is something that needs it's own post.

<!-- more -->

## Some background

So if you do not know a thing or two about phaser you might want to read [some of my other posts](/categories/phaser/), or glance over the [official API DOCS](http://phaser.io/docs/2.6.2/index) on the topic before hand, this post mainly has to do with State Objects, and there relationship with the StateManager in Phaser. So some background knowledge on State machines in phaser would be needed before hand.

## A quick demo that will help understand why init methods are cool

So I would like to put together a real example, but making a game is something that takes a while, for for the sake of this post I will just throw together a stupid demo that is just some circles moving around a center point.

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea');
 
game.state.add('circles',
 
    // so I want to place some stuff in a closure
    (function () {
 
        var conf,
        rOff = 0,
        i = 0,
        circles,
 
        setCircle = function (cr, ci, rOff) {
            var r;
 
            rOff = rOff || 0;
 
            r = Math.PI * 2 / conf.count * ci + rOff;
            cr.x = conf.cx + Math.cos(r) * conf.radius,
            cr.y = conf.cy + Math.sin(r) * conf.radius
 
        };
 
        // the State object that will get returned
        return {
 
            // so here is the init method
            init : function (opt) {
 
                var prop,
 
                // the defaults
                defaults = {
 
                    count : 3,
                    cx : 160,
                    cy : 120,
                    size : 32,
                    radius : 64,
                    color : 0x00ff00
 
                };
 
                opt = opt || {};
 
                // apply defaults to anything that is missing
                for (prop in defaults) {
 
                    if (opt[prop] === undefined) {
 
                        opt[prop] = defaults[prop];
 
                    }
 
                }
 
                // ref opt to the variable that will be shared across methods.
                conf = opt;
 
            },
 
            // the create method
            create : function () {
 
                var ci = 0,
                r,
                cir;
 
                // set up the circles based on conf settings
                circles = [];
                while (ci < conf.count) {
 
                    cir = game.add.graphics(0, 0);
 
                    cir.beginFill(conf.color);
                    cir.drawCircle(0, 0, conf.size);
                    cir.endFill();
 
                    setCircle(cir, ci);
 
                    circles.push(cir);
 
                    ci += 1;
 
                }
 
            },
 
            // showtime
            update : function () {
 
                var ci = 0;
 
                rOff = Math.PI * 2 / 100 * i;
                while (ci < conf.count) {
 
                    setCircle(circles[ci], ci, rOff);
 
                    ci += 1;
                }
 
                i++;
                if (i >= 100) {
 
                    i = 0;
 
                }
 
            }
 
        };
 
    }
        ()));
 
// start with default settings
game.state.start('circles');
```

When I call game.state.start with just the key of the state, the demo will go by everything I put in the defaults object I defined in the init method, but as you can see the method accepts an argument. This argument can be used to set some different settings other than the default.

```js
```
