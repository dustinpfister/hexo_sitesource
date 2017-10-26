---
title: Playing with lines in phaser with Graphics.lineTo
date: 2017-10-22 08:40:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 72
updated: 2017-10-26 18:14:30
version: 1.2
---

I have [made a post on graphics in general](/2017/10/21/phaser-graphics/) in phaser and as such I spent some time playing with Graphics.lineTo, and Graphics.moveTo when it comes to drawing lines in phaser. Because there is a great deal that can be done with lines, and graphics I thought that this needs a post of it's own. This post will mostly be about use examples of lineTo in [phaser](http://phaser.io/).

<!-- more -->

<div id="gamearea" style="width:320px;height:240px;margin-left:auto;margin-right:auto;"></div>
<script>

var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {

        // create method
        create : function () {

            // add a graphics object to the world
            var gra = game.add.graphics(0, 0);

            // making an interesting data object for this one
            gra.data = {

                maxLines : 20,
                maxSets : 4,
                lines : [],
                sx : 0,
                sy : game.world.height / 2,

                drawCount : 2,
                lastTime : new Date(),
                rate : 150,

                genLines : function () {

                    var i,
                    sx,
                    sy,
                    ex,
                    ey,
                    line,
                    h = game.world.height,
                    hh = h / 2,
                    range = h / 2,
                    setI = 0;

                    this.lines = [];

                    // make line sets
                    while (setI < this.maxSets) {

                        i = 0;
                        sx = this.sx;
                        sy = this.sy;

                        // gen lines for current set
                        while (i < this.maxLines) {

                            range = hh * (i / this.maxLines);

                            ex = game.world.width / this.maxLines * (i + 1);
                            ey = Math.random() * range + (hh - range / 2);

                            line = new Phaser.Line(sx, sy, ex, ey);

                            this.lines.push(line);

                            sx = ex;
                            sy = ey;

                            i += 1;
                        }

                        setI += 1;

                    }

                },

                update : function () {

                    var now = new Date();

                    if (now - this.lastTime >= this.rate) {

                        this.drawCount += 1;

                        if (this.drawCount >= this.lines.length) {

                            this.drawCount = 1;

                            this.genLines();

                        }

                        this.lastTime = now;
                    }

                },

                // draw to the given graphics object
                draw : function (gra) {

                    var i = 0,
                    len = this.drawCount,
                    //setI,
                    per,
                    line;

                    gra.clear();

                    gra.lineStyle(5, 0x000000);
                    while (i < len) {

                        line = this.lines[i];

                        //setI = Math.floor(i / this.maxLines);

                        per = i / (len - 1);

                        gra.lineAlpha = 1 - per;

                        // start by moving to a point
                        gra.moveTo(line.start.x, line.start.y);

                        // draw a line
                        gra.lineTo(line.end.x, line.end.y);

                        i += 1;
                    }

                }

            };

            gra.data.genLines();

            gra.data.draw(gra);

        },

        update : function () {

            var gra = game.world.children[0];

            gra.data.update();
            gra.data.draw(gra);

        }

    }, true);
</script>

{% phaser_top %}

{% phaser_if_new_mess %}

## Getting started with lines in phaser with lineStyle, moveTo, and lineTo

To draw A line I first need to make a [Graphics](http://phaser.io/docs/2.6.2/Phaser.Graphics.html) display object via game.add.graphics to work with, once I have that I will want to set some style for the line so that I can see it if the background is black, because the default color for lines is also black, to do that I use [Graphics.lineStyle](http://phaser.io/docs/2.6.2/Phaser.Graphics.html#lineStyle) to set the style. Then it is just a matter of using [Graphics.moveTo](http://phaser.io/docs/2.6.2/Phaser.Graphics.html#moveTo) to move to a certain point, relative to the display object position, and then use [Graphics.lineTo](http://phaser.io/docs/2.6.2/Phaser.Graphics.html#lineTo) to actually draw a line.

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea',
 
    {
 
        // create method
        create : function () {
 
            // add a graphics object to the world
            var gra = game.add.graphics(game.world.centerX, game.world.centerY);
 
            // make it a red rectangle
            gra.lineStyle(3, 0xff0000);
 
            // start by moving to a point
            gra.moveTo(0, 0);
 
            // draw a line
            gra.lineTo(100, 0);
 
        }
 
    }
 
);
```

## Arrays of points

If you are thinking about something involving an array of points, you can use the lineTo method, but what I use in that case is the [Graphics.drawPolygon](/2017/10/22/phaser-graphics-polygon/) method.

## Conclusion

The lineTo method might be useful in some cases, but for the most part I like to use polygon's when it comes to working with on the fly graphics in place of external assets.

{% phaser_bottom %}
