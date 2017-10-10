---
title: Setting a base url with phasers asset loader
date: 2017-10-10 12:37:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

This is a quick post on how to go about setting a baseurl with phasers asset loader, there is not much to cover on it, so lets get to the point.

<!-- more -->

## A baseURL example

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea',
 
    {
 
        preload : function () {
 
            game.load.baseURL = '/img/';
 
            // start loading the asset files at '/img/'
            game.load.image('test1', 'test1.png');
            game.load.image('test2', 'test2.png');
            game.load.image('test3', 'test3.png');
        },
 
        create : function () {
 
            game.add.sprite(0, 0, 'test1');
 
        }
 
    });
```