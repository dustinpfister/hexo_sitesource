---
title: How to get going with a simple asset loader in phaser
date: 2017-10-05 10:35:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

First off it might be best to start by reading my posts on getting started, and state machines in general with phaser. In this post I am covering how I go about getting a loading screen working okay, and I am not covering certain basics here.

<!-- more -->

## The Loader I use so far

So I like the idea of breaking things down into many states that interrelate to each other. At a minimum if there are some images I want to use, I will have a Boot, Load, and Game states. Where Boot is the very first state that is started, then I progress to Load, and once the Load state fires it's create method I can go on to whatever is next.

As such I work with something like this.

```js
// th Boot State
var Boot = {
 
    preload : function () {
 
        game.load.image('loadingbar', '/img/loadingbar.png');
 
    },
 
    // create method
    create : function () {
 
        game.state.add('load', Load);
        game.state.start('load');
 
    }
 
};
 
// the load state
var Load = {
 
    preload : function () {
 
        var loadSprite = game.add.sprite(0, 0, 'loadingbar');
        loadSprite.width = 0;
        loadSprite.x = game.world.centerX - loadSprite.width / 2;
        loadSprite.y = game.world.centerY - 16;
 
        game.load.onLoadStart.add(function () {}, this);
        game.load.onFileComplete.add(function (progress) {
 
            loadSprite.width = game.width * (progress / 100);
            loadSprite.x = game.world.centerX - loadSprite.width / 2;
 
        }, this);
        game.load.onLoadComplete.add(function () {}, this);
 
        // start loading the asset files
        game.load.image('phaser', '/img/phaser.png');
 
    },
 
    // when done create will be called
    create : function () {
 
        console.log('ready to rock!');
        game.state.add('game', Game);
        game.state.start('game');
 
    }
 
};
 
// the actual Game state once everything is loaded
var Game = {
 
    create : function () {
 
        game.add.sprite(0, 0, 'phaser');
 
    },
 
    update : function () {}
 
};
 
// the main game variable
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', Boot);
```

As things get completed each of these states might be pulled onto there own *.js files, but the will need to be loaded in a manner in which Phaser.Game is called last.
