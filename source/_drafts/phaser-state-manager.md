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
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea',
 
    {
 
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
 
    }
 
);
```

When I make a new instance of a phaser game, the object that I pass to the main Phaser.game constructor, after the id of the container element, will become the default game state object.

## StateManager.add

There are many methods for an instance of StateManager one of the most important of them, may be StateManger.add, as it allows me to write more than one State object for a project. With the add method the above demo can also me written like this.

```js
// I did not give a default State
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea');
 
// I can add one with StateManager.add
game.state.add('default',
 
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
 
    }
 
);
 
// start the default State
game.state.start('default');
```

This approach may be more desirable as it allows me to break things down into many separate files, one for each State Object. Instead of having everything in my main.js file, I could have a default.js (or maybe boot.js), load.js, title.js, game.js, ect.

## StateManager.start, and More than one State Object

The start method is another must know, for both starting a state, as well as for changing between them. This allows for flow between many different States in one of my projects.