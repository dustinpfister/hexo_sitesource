---
title: Basic text in phaser
date: 2017-10-14 08:43:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

In just about any [phaser](http://phaser.io) project there is going to be a need to display some text, either because it is something that needs to be displayed, or for debugging purposes. There is of course bitmap text that can be used in Phaser, but that is a bit involved, as it requires a few asset files. If you just simply want to display some text, and are not two concerned about how it will look for now, there are the text game objects that can be used.

<!-- more -->

## Phaser text hello world example

To add a text display object, just call game.add.text, and pass it a few arguments that have to do with position, content, and style of the text.

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', 
 
    {
 
        create : function () {
 
            game.add.text(0, 0, 'Hello World', {fill : 'white'});
 
        }
 
    }
 
);
```

The first two arguments are the x, and y position of the text. The third argument is the content of the text, and the final argument is a style object.

## Changing text content

To change the content of the text there is the text property of the text display object that is returned when calling game.add.text.

```js
var game = (function () {
 
    var tx,
    foos = 0;
 
    return new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {
 
        // create method
        create : function () {
 
            tx = game.add.text(20, 20, '', {
                    fill : '#ffffff'
                });
 
        },
 
        // the update method will be called on each tick
        update : function () {
 
            tx.text = 'foos: ' + foos;
 
            foos += 1;
        }
 
    });
 
}
    ());
```

## Changing position of text

Because a text object is a display object, it has many of the same properties as sprites, including of course x, and y. Changing the position of text is than just as simple.

```js
var game = (function () {
 
    var tx,
    i = 0,
    maxI = 500,
    per = 0,
    bias = 0;
 
    return new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {
 
        // create method
        create : function () {
 
            tx = game.add.text(20, 20, '', {
                    fill : '#ffffff'
                });
 
        },
 
        // the update method will be called on each tick
        update : function () {
 
            per = i / maxI;
            bias = 1 - Math.abs(.5 - per) / .5;
 
            tx.text = 'i: ' + i;

            // changing text position on each update
            tx.x = 150 * bias;
            tx.y = Math.sin(Math.PI * 2 * bias) * 50 + 70;
 
            i += 1;
            if (i >= maxI) {
 
                i = i % maxI;
 
            }
        }
 
    });
 
}
    ());
```