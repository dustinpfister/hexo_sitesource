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

Here I am passing a state object to Phaser.Game after the id of the container element. When I add a state this way it's key is "default", and it starts automatically. The Other method it is define one or more states with StateManager.add, in which case the above hello world, can also be written like this:

```js

var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea');

game.state.add('default',{

    create : function () {

        console.log('hello world!');

    }

},true);
```

## game.state vs game.state.states

Keep in mind that there is the StateManager, and then one or more State objects. As such game.state is a reference to the StateManager, and game.state.states is the collection of state objects.

## Switching between states

When having more than one state I use game.state.start to switch between them.

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea');
 
game.state.add('foo',{
 
        create : function () {
 
            console.log('foo!');
 
            // starting foo
            game.state.start('bar');
 
        }
 
    });
 
game.state.add('bar',{
 
        create : function () {
 
            console.log('bar!');
 
        }
 
    });
 
game.state.start('foo'); // foo! bar!
```

All of my states are in the game.state.states collection

```js
console.log(game.state.states.foo); // the foo state
console.log(game.state.states.bar); // the bar state
```

##  The core methods