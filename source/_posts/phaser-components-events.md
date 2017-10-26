---
title: The Phaser events component, setting up event handlers for Sprites and Graphics
date: 2017-10-26 09:25:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 75
updated: 2017-10-26 13:29:23
version: 1.4
---

The events component in phaser adds event handers to a display object such as onInputDown, and onDragStop. I just need to enable them with certain booleans, and I am ready to go with handing input for a certain display object in a project. This post will be a general overview of how to get going with the events display object component.

<!-- more -->

<div id="gamearea" style="width:320px;height:240px;margin-left:auto;margin-right:auto;"></div>
<script>
var game = (function () {

    // a model
    var model = {

        // some model values
        current : 'rest',
        lastUpdate : new Date(),
        size : 45,
        deltaSize : 1,

        dragCount : 0,

        // rest state
        rest : {

            sizeLow : 40,
            sizeHi : 50,
            rate : 120,
            color : 0x808080

        },

        over : {

            sizeLow : 40,
            sizeHi : 50,
            rate : 120,
            color : 0x008080

        },

        // down state
        down : {

            sizeLow : 50,
            sizeHi : 60,
            rate : 60,
            color : 0x008000

        },

        // drag state
        drag : {

            sizeLow : 70,
            sizeHi : 80,
            rate : 30,
            color : 0x00ff00

        },

        // update the model
        update : function () {

            var now = new Date(),
            cur = this[this.current];

            if (now - this.lastUpdate >= cur.rate) {

                this.size += this.deltaSize;

                if (this.size >= cur.sizeHi) {

                    this.size = cur.sizeHi;
                    this.deltaSize = -1;

                }

                if (this.size <= cur.sizeLow) {

                    this.size = cur.sizeLow;
                    this.deltaSize = 1;

                }

                this.lastUpdate = now;
            }

        },

        // draw the model with the given Graphics Disp Object
        draw : function (gra) {

            var cur = this[this.current];

            // main circle
            gra.clear();
            gra.beginFill(cur.color);
            gra.drawCircle(0, 0, this.size, this.size);
            gra.endFill();

        },

        checkBounds : function (gra) {

            if (gra.x < gra.width / 2) {

                gra.x = gra.width / 2;

            }

            if (gra.x > game.world.width - gra.width / 2) {

                gra.x = game.world.width - gra.width / 2;

            }

            if (gra.y < gra.height / 2) {

                gra.y = gra.height / 2;

            }

            if (gra.y > game.world.height - gra.height / 2) {

                gra.y = game.world.height - gra.height / 2;

            }

        }

    };

    return new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {

        // create method
        create : function () {

            var gra = game.add.graphics(game.world.centerX, game.world.centerY),
            text = game.add.text(5, 5, '', {
                    fill : '#ffffff',
                    font : '15px courier'
                });

            //drawCircle(gra);

            // prevent context menu on long press, or right click
            game.canvas.oncontextmenu = function (e) {
                e.preventDefault();
            }

            // enable input for the Graphics Display Object
            // this will add an instance of inputHanddler at gra.input
            // some event handlers at gra.events will now work like
            // gra.events.onInputDown
            gra.inputEnabled = true;

            // enable draggable events like gra.events.onDragStart
            gra.input.draggable = true;
            console.log(gra.input.draggable);

            gra.events.onDragStart.add(function (gra) {

                console.log('Drag start.');

                model.current = 'down';

            });

            gra.events.onDragUpdate.add(function (gra) {

                console.log('Drag update.');

                if (model.dragCount >= 5) {

                    model.current = 'drag';

                }
                model.dragCount += 1;

                model.checkBounds(gra);

            });

            gra.events.onDragStop.add(function (gra) {

                console.log('Drag stop.');

                //model.current = 'rest';

                model.dragCount = 0;

            });

            // add a single handler for onInputDown
            gra.events.onInputDown.add(function (gra) {

                //console.log('down');

                model.current = 'down';

            });

            // add a single handler for onInputDown
            gra.events.onInputUp.add(function (gra) {

                console.log('up');

                model.current = 'rest';

                console.log(game.input.mousePointer);
                console.log(gra);

            });

            gra.events.onInputOver.add(function (gra) {

                console.log('over');

                model.current = 'over';

            });

            gra.events.onInputOut.add(function (gra) {

                console.log('out');

                model.current = 'rest';

            });

        },

        // the update method will be called on each tick
        update : function () {

            var gra = game.world.children[0],
            text = game.world.children[1];

            //text.text = gra.events;


            //drawCircle(gra);

            model.draw(gra);

            model.update();

        }

    },true);

}
    ());

</script>

{% phaser_top %}

{% phaser_if_new_mess %}

## A basic example of usage of the events component

Although The events component is there to work with off the bat there are some boolean values that need to be set true in order for any of them to work. So a basic example will involve at least a single display object that has both the events, and input components (Sprites, Graphics). This display object will have it's input handler enabled by setting the inputEnabled boolean true, at which point a few event handlers will now work such as onInputDown.

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', 
 
    {
 
        create : function () {
 
            // making a graphics display object object
            var gra = game.add.graphics(game.world.centerX, game.world.centerY),
 
            // draw method for the object
            draw = function (color, size) {
 
                color = color || 0xff0000;
                size = size || 75;
 
                gra.clear();
                gra.beginFill(color);
                gra.drawRect(-size / 2, -size / 2, size, size);
                gra.endFill();
 
            };
 
            // make sure input is enambed for the object
            gra.inputEnabled = true;
 
            // now I can set some event handlers
            gra.events.onInputDown.add(function () {
 
                draw(0x00ff00, 150);
 
            });
 
            gra.events.onInputUp.add(function () {
 
                draw();
 
            });
 
            draw();
 
        }
 
    }
 
);
```

I use the add method for a certain event handler such as onInputDown to add a single event handler to an array of methods that are to be called for that handler. That is because onInputDown is an instance of Phasers Signal Constructor, and as such works similarly to addEventListener in vanilla js, in the sense that I can have more than one callback for a certain event.

## Be sure to set inputEnabled to true

The events object is there to play with no matter what, but I will want to set inputEnabled true or else none of them will work. This also sets up an instance of inputHandler for the display object. Be sure to check out the post I wrote on [inputEnabled](/2017/10/23/phaser-components-input-enabled/) component.

## onInutDown

This is a handler that will fire when a mouse click, or touch start event occurs on the sprite, graphics or other display object. This event fires just once, and will not fire over, and over again after a pause like some other handlers.

```js
gra.events.onInputDown.add(function (dispObj, pointer) {

    // the display object (in this case gra)
    console.log(dispObj);

    // the pointer object of the mouse, or touch
    console.log(pointer);

});
```

## onInputUp

Same as onInputDown, but if fires when the mouse button is release, or a touch event has ended.

## onInputOver, and onInputOut

These are additional handlers in the events object that are fired when a mouse cursor is hovering over the display object, and when it leaves, which is useful for desktop projects.

## Getting started with drag events

In order to get started with drag events in addition to setting the inputEnabled bool to true, there is also an additional bool to set true in the inputHandler of the display object at gra.input.draggable.

```js
// make some graphics
var gra = game.add.graphics(0,0);
 
gra.beginFill(0x00ff00);
gra.drawRect(0,0,50,50);
gra.endFill();
 
// enable input for the graphics
gra.inputEnabled = true;
 
// make the graphics draggable
gra.input.draggable = true;
```

Be sure to check out my [post on draggable](/2017/10/24/phaser-inputhandler-draggable/) input in phaser. To know a bit more about what is need to know with the inputHander, this post will cover more about the events involved.

##  Preventing the context menu from showing up with preventDefault

A context menu may show up when I long press, or right click a projects canvas element, there is of course the preventDefault bool that can called. A reference to the canvas element can be found at game.canvas where something like this can be done:

```js
// prevent context menu on long press, or right click
game.canvas.oncontextmenu = function (e) {
    e.preventDefault();
}
```

{% phaser_bottom %}
