---
title: Working with arrays of points, and polygons in phaser
date: 2017-10-22 09:37:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 71
updated: 2017-10-23 11:56:27
version: 1.6
---

When working with on the fly graphics in [phaser](http://phaser.io/), there might come a time in which i might want to do something with a collection of points that form a shape, or drawing, or polygon. In this post I will be writing about how to make on the fly shapes without using any external assets in phaser.

<!-- more -->

<!-- demo app -->
<div id="gamearea" style="width:320px;height:240px;margin-left:auto;margin-right:auto;"></div>
<script>

// Poly Model Example
var PM = (function () {

    var api = {

        pointCount : 10,

        // the points
        points : [],

        // parallel array of delta values for the points
        data : [],

        // set the staring status of points
        setPoints : function () {

            // current point index
            var pi = 0,
            data;

            this.points = [];

            // set the values for each point
            this.setData();
            while (pi < this.pointCount) {

                data = this.data[pi];

                // push x first, then y
                this.points.push(Math.floor(Math.cos(data.radian) * data.radius));
                this.points.push(Math.floor(y = Math.sin(data.radian) * data.radius));

                pi += 1;

            }

            // push first point at the end
            this.points.push(this.points[0]);
            this.points.push(this.points[1]);

        },

        forAll : function (func) {

            var i = 0,
            api;
            while (i < this.pointCount) {

                api = {

                    i : i,
                    xi : i * 2,
                    yi : i * 2 + 1,
                    data : this.data[i],
                    points : this.points,
                    pointCount : this.pointCount

                };

                api.x = api.points[api.xi];
                api.y = api.points[api.yi];

                func.call(api, api.x, api.y);

                i += 1;
            }

        },

        // set data values
        setData : function () {

            var i = 0;

            this.data = [];
            while (i < this.pointCount) {

                this.data.push({

                    radius : 80,
                    radian : Math.PI * 2 / this.pointCount * i,
                    deltaRadius : 1 - Math.floor(Math.random() * 2) * 2,
                    radiusMin : 70 - Math.floor(Math.random() * 30),
                    radiusMax : 90 + Math.floor(Math.random() * 30),
                    rate : 33 + Math.floor(66 * Math.random()),
                    lastTime : new Date(),
                    prop : Math.random() * .25 + .25

                });

                i += 1;

            }

        },

        update : function () {

            var i = 0,
            roll,
            now,
            data;
            while (i < this.pointCount) {

                data = this.data[i];

                now = new Date();
                roll = Math.random();

                if (roll < data.prop) {

                    data.rate = 33 + Math.floor(66 * Math.random())

                }

                if (now - data.lastTime >= data.rate) {

                    data.radius += data.deltaRadius;

                    if (data.radius <= data.radiusMin) {

                        data.radius = data.radiusMin;
                        data.deltaRadius = 1;

                    }

                    if (data.radius >= data.radiusMax) {

                        data.radius = data.radiusMax;
                        data.deltaRadius = -1;

                    }

                    this.points[i * 2] = Math.cos(data.radian) * data.radius;
                    this.points[i * 2 + 1] = Math.sin(data.radian) * data.radius;

                    data.lastTime = now;
                }

                i += 1;

            }

            // splice out the last point
            // and set it to the first point
            this.points.splice(this.points.length - 2, 1, this.points[0]);
            this.points.splice(this.points.length - 1, 1, this.points[1]);

        }

    };

    return api;

}
    ());

var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {

        // create method
        create : function () {

            PM.setPoints();

            var back = game.add.graphics(game.world.centerX, game.world.centerY);

            back.lineStyle(3, 000000, .4);

            PM.forAll(function (x, y) {

                back.moveTo(Math.cos(this.data.radian) * this.data.radiusMin,
                    Math.sin(this.data.radian) * this.data.radiusMin);
                back.lineTo(

                    Math.cos(this.data.radian) * this.data.radiusMax,
                    Math.sin(this.data.radian) * this.data.radiusMax);

            });

            // add a graphics object to the world
            var gra = game.add.graphics(game.world.centerX, game.world.centerY);

        },

        update : function () {

            var gra = game.world.children[1];

            gra.clear();

            PM.update();

            gra.lineStyle(6, 0x000000);

            gra.drawPolygon(PM.points);

            gra.lineStyle(2, 0xffffff);

            gra.drawPolygon(PM.points);
        }

    }, true);

</script>

{% phaser_top %}

{% phaser_if_new_mess %}

## A Graphics.drawPolygon example

I often start a post off with a simple example of what I will be writing about in more detail in post. As such here is a quick, simple example of use for [Graphics.drawPolygon](http://phaser.io/docs/2.6.2/Phaser.Graphics.html#drawPolygon) in phaser.

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', 
{
 
        // create method
        create : function () {
 
            // add a graphics object to the world
            var gra = game.add.graphics(game.world.centerX, game.world.centerY);
 
            gra.lineStyle(3, 0x00ff00);
            gra.drawPolygon([0, -100, 100, 0, 0, 100,-50,100,-50,50,-100,50,-100,-50,-50,-50,-50,-100,0,-100]);
 
        }
 
    }
 
);
```

Here I just made a very bad drawing of an arrow, but you should get the basic idea. You need create a Graphics Display Object, set a style for it, and then pass an array of points to it that follow the simple formula of:

```js
var x = pointIndex * 2,
y = pointIndex * 2 + 1;
```
## Arrays of points

How would you go about having an array of points in javaScript? Would you store an array of objects that have x, and y properties? Would you have an array of arrays where the first element is x, and the second element is y? Or would you just have a linear array of numbers that follow a certain formula?

```js
var ptFormat1 = [{x:10,y:20},{x:25,y:-50}], // Array of objects
ptFormat2 = [[10,20],[25,-50]], // Array of arrays
ptFormat3 = [10,20,25,-50];  // Formula (this is what we use in phaser)
```

Well regardless of how you might think with this in phaser just a single linear array is used, so whenever you want to feed some points to a method like Graphics.drawPolygon this is the format the array of points should be in.

## Generating a points array

So when it comes to making a shape in phaser I want to think in terms of of an array of numbers that are the x, and y values of each point.

```js
var points = (function () {
 
    var pCT = 10, // point count
    p = [], // points array to be returned
    pi = 0; // current point index
 
    while (pi < pCT) {
 
        // set some radian, and radius values for each point
        var ra = Math.PI * 2 / pCT * pi,
        ri = 75 + Math.random() * 25;
 
        // push x first, then y
        p.push(Math.cos(ra) * ri);
        p.push(y = Math.sin(ra) * ri);
 
        pi += 1;
 
    }
 
    // push first point at the end
    p.push(p[0]);
    p.push(p[1]);
 
    // return the points
    return p;
 
}
    ());
 
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', 
 
{
 
        // create method
        create : function () {
 
            // add a graphics object to the world
            var gra = game.add.graphics(game.world.centerX, game.world.centerY);
 
            gra.lineStyle(3, 0x00ff00);
            gra.drawPolygon(points);
 
        }
 
    }
 
);
```

## Add Phaser Graphics display Object

Once I have an array of points to pass to the polygon method, the next step is the add method of the main game object that is used to create a new graphics display object via game.add.graphics(x,y). This is what I call first in my create method to get a new graphics display object that will contain the drawPolygon method, along with a bunch of other useful stuff.

```js
var gra = game.add.graphics(game.world.centerX, game.world.centerY);
```

## Setting Graphics line Style in phaser

Another important method to know of is the graphics lineStyle method, this is what to use to style lines that are used to draw polygons, and anything else in the graphic that involves drawing a line. This is a method in which I pass lineWidth, color, and alpha too in order to set line style.

```js
gra.lineStyle(3,0x00ff00,.8);
```

this sets a lineWidth of 3, a lineColor of green, and an lineAlpha (or transparent) value of .8. Of course Alternatively I can directly set those values by setting each property independently as well.

```js
gra.lineWidth = 3;
gra.lineColor = 0x00ff00;
gra.lineAlpha = .8;
```

Looking at the source code is may be generally better to use the lineStyle method as it also runs some checks on the currentPath

## Conclusion

I hope this post has helped you gain a better understanding of how to work with polyGons in phaser. If you liked this post you might want to check out my [many other posts](/categories/phaser/) on phaser. Because this post is not graphics my post on [Graphics in general](/2017/10/21/phaser-graphics/) in phaser might be of specific interest.

in any case have fun working (or playing), with phaser.

{% phaser_bottom %}