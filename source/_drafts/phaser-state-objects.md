---
title: What to know about the state objects in phaser
date: 2017-10-05 09:42:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

When getting started with [phaser](http://phaser.io) it is important to have a certain foundational understanding of some of the core features of how phaser works, no matter what the project may be you are going to want to know a thing or two about State Objects.

If you are new to phaser you might want to start with [my getting started post](/2017/10/04/phaser-getting-started/), and also there is the StateManager, and the Main Phaser.Game constructor that is of interest also.

<!-- more -->

## The Most basic State Object

A state object can often just be a plain old object that is passed to Phaser.Game when creating an instance of that main constructor function. However it must contain at least one method with a certain key named preload, create, update or render. More about those methods later, but for now a simple State object example:

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {
 
        create : function () {
 
            console.log('hello world!');
 
        }
 
    });
```

Here I am passing a state object to Phaser.Game after the id of the container element. When I add a state this way it's key is "default", and it starts automatically.