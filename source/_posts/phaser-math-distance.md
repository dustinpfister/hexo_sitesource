---
title: Finding the distance between two points in Phaser
date: 2017-10-27 12:17:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 76
updated: 2017-10-27 12:22:41
version: 1.0
---

In [Phaser](http://phaser.io/) there is a Math object like that of the Math object in core javaScript. There are a few methods there that come in handy, one of which is a usual suspects in most projects that is used to find the distance between two points. That is the 2d distance formula that can be found at Phaser.Math.distance.

<!-- more -->

<div id="gamearea" style="width:320px;height:240px;margin-left:auto;margin-right:auto;"></div>
<script>
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {

        // create method
        create : function () {

            var one = game.add.graphics(game.world.centerX, game.world.centerY),
            text = game.add.text(0, 0, '', {
                    fill : '#ffffff',
                    font : '15px courier'
                });

            one.beginFill(0xff0000);
            one.drawCircle(0, 0, 25);
            one.endFill();

            var two = game.add.graphics(100, 50);
            two.beginFill(0x00ff00);
            two.drawCircle(0, 0, 25);
            two.endFill();

            two.data = {

                dx : 0,
                dy : 0,
                heading : 1,
                headingDelta : 0,

                // no mathematical modulo?
                modulo : function (x, m) {

                    return (x % m + m) % m;

                },

                // how about an array of conditions
                // and what happens if the condition is true
                actions : [{

                        condition : function () {

                            var roll = Math.random();

                            return roll > .5;

                        },

                        run : function () {

                            this.headingDelta += .001;

                        }

                    },
                    {

                        condition : function () {

                            var roll = Math.random();

                            return roll > .5;

                        },

                        run : function () {

                            this.headingDelta -= .001;

                        }

                    }

                ],

                update : function (gra) {

                    var self = this;

                    this.actions.forEach(function (action) {

                        if (action.condition()) {

                            action.run.call(self);

                        }

                    });

                    this.heading += this.headingDelta;

                    this.dx = Math.cos(this.heading) * 1;
                    this.dy = Math.sin(this.heading) * 1;

                    gra.x += this.dx;
                    gra.y += this.dy;

                    gra.x = this.modulo(gra.x, game.world.width);
                    gra.y = this.modulo(gra.y, game.world.height);

                }

            };

            console.log(Phaser.Math);

            //console.log(Phaser.Math.distance(one.x, one.y, two.x, two.y));

        },

        // the update method will be called on each tick
        update : function () {

            var text = game.world.children[1],
            one = game.world.children[0],
            two = game.world.children[2];

            two.data.update(two);

            text.text = 'distance: ' + Phaser.Math.distance(one.x, one.y, two.x, two.y).toFixed(2);

        }

    });
</script>

{% phaser_top %}

{% phaser_if_new_mess %}

{% phaser_bottom %}