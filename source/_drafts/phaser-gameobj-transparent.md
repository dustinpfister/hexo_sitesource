---
title: Setting a transparent background for a Phaser game, by just setting a boolean.
date: 2017-10-05 15:58:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

So sometimes I might have some background worked out in the html of a project, just some staic background say and image, and as such I want my phaser project to just be a bunch of sprites running around and thats all. This can be done with the transparent boolean of the main phaser Game object.

<!-- more -->

{% phaser_top %}

{% phaser_if_new_mess %}

## Setting the boolean when constructing the game object.

If I want to set the boolean to true this way it is the sixth argument given to the constructor.

```js
var game = new Phaser.Game(320,240,Phaser.AUTO,document.body,Boot,true);
``` 

But it might be better to have it as something that I may or may not set true durring one of my Sates, such as the Boot State

```js
var Boot = {
 
    init : function(){
 
        // sure set it true here
        game.transparent = true;
 
    },
 
    preload : function(){
 
        game.load.image('loadingbar', '/img/loadingbar.png');
 
    },
 
    create : function(){
 
        game.state.add('load',Load);
        game.state.start('load');
 
    }
 
};
```

{% phaser_bottom %}