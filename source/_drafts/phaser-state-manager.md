---
title: What to know about the state manager in phaser
date: 2017-10-04 11:27:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

When I start making a javaScript project they almost always involve some kind of main game loop, and in more advanced projects an array of objects that contain methods for each game state. In [Phaser](http://phaser.io/) there is the StateManager, and State objects that are of concern when it comes to getting this done with phaser, rather than my usual vanilla js solutions.

<!-- more -->

## The state manager object

Typically there is a single instance of StateManager that ends up being stored at game.state, and a "default" game State instance at game.state.states.default. In this post I will be mainly writing about the StateManager, but I will also be touching base on State Objects as well.

## A very simple demo

For starters lets take a look at a stupid simple phaser project that is just a single create method, attached to a single State Object that will be the default state for the StateManager.

```js
var game = (function () {

    var bx, // ref to graphics object
    i = 0,
    maxI = 100;
 
    return new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {
 
        // create method
        create : function () {
 
            // game.state is a reference to the State Manager in phaser
            console.log(game.state); // the state manager object
 
            // game.state.states is where state objects are stored
            // including this one
            console.log(game.state.states.default); // this state object
 
            // this is a reference to this very function
            console.log(game.state.states.default.create); // this function
 
        }
 
    });
 
}
    ());
```