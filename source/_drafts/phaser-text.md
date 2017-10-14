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