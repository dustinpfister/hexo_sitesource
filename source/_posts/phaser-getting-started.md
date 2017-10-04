---
title: Getting started with phaser for HTML 5 game development
date: 2017-10-04 11:41:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 53
updated: 2017-10-4 15:14:36
version: 1.1
---

I have a long history of making games in a vanilla js style in which I am writing everything from the ground up. I do like that approach, but the draw back is that it is time consuming. Another part of me wants to just work with what is out there to begin with, and just focus on whatever it is that sets my project apart from the epic ton of games that are out on the internet all ready. So That being said I have been focusing in on [phaser](http://phaser.io/) as my first major HTML game framework to help me speed things along on game prototypes.

<!-- more -->

## Why Phaser?

For one it is popular, and thus also well supported. Also so far it seems to have all the features I can think of that I would want if I where to ask the time to write my own framework, which I am not going to do. Speaking of not making a game framework, yes that is the major reason why I have been looking into phaser. I have nothing against the other mindset about this, there are good reason to write everything from the floor up, but the appeal here is of course to save time.

## Getting started with phaser, node.js, and hapi

So phaser has there [own getting started tutorial](http://phaser.io/tutorials/getting-started) that you might also want to try. With me I am using [node.js](https://nodejs.org/en/), and the [hapi framework](https://hapijs.com/) with the [inert plugin](https://www.npmjs.com/package/inert) to get up and running with server a simple static site locally on my computer. I am not doing anything fancy with my front end for now, aside from just having phaser dropped in a js folder in the public folder of my phaser demos project. This post will just be an outline on how to go about doing just that.

If what I am talking about doe not sound good for you, no problem just use whatever means you need to serve up what you will be working on via http&#58;&#47;&#47; rather than file&#58;&#47;&#47;

## Setting up the static server

I have written a full post on [how to do this](/2017/10/01/hapi-static-file-server/), you may have another node.js solution for this, or something involving a completely different environment for hosting a static site. However with my phaser demos I have gone in this direction.

## The public folder

With my phaser demos I have started manually making a simple hand coded template, for the static structure of the pages. If you want to use a static site generator, or do something completely different with a CDN that is your choice, but for me the focus is on just playing with phaser.

### The index file

The main index file in my phaser demos project will act just as that, an index for all demos where I am working a certain something out with phaser. Nothing fancy, just a simple web 1.0 style page will get the job done.

```html
<! DOCTYPE html>
<html>
    <head>
        <title>Phaser Demos</title>
        <link rel="stylesheet" href="/css/style_vanilla.css">
    </head>
    <body>
        <img class="logo_phaser" src="/img/phaser.png"></img>
        <h1 class="title">Phaser Demos</h1>
 
        <ul>
        <li><h2>Demos:</h2><ul>
 
            <li><h3><a href="/demos/state_machines_start/">Getting started with phaser, and state machines</a></h3></li>
 
            <li><h3><a href="/demos/state_machines_load/">preload, and load state</a></h3></li>
 
            <li><h3><a href="/demos/spritesheet/">spritesheet</a></h3></li>
 
        </ul></li>
        </ul>
 
        <script src="/js/jquery-3.2.1.min.js"></script>
        <script src="/js/phaser.min.js"></script>
    </body>
</html>
```

### The demos folder

This is a folder I placed in the public folder that will contain a folder for each phaser demo. In each project i can structor things however I need, but many of them will just be another index file.

### A demo index file

In each demo folder there will be an index file that is not much different from the main index, but will link to phaser in my main /js folder, and any other assets via a script tag. As such any demo index file may look like this.

```html
<! DOCTYPE html>
<html>
    <head>
        <title>Phaser Demos</title>
        <link rel="stylesheet" href="/css/style_vanilla.css">
    </head>
    <body>
 
        <div id="gamearea"></div>
 
        <script src="/js/jquery-3.2.1.min.js"></script>
        <script src="/js/phaser.min.js"></script>
        <script src="./main.js"></script>
 
    </body>
</html>
```

### The main.js file

Okay here is a simple phaser hello world of sorts which I save as a main.js file in a demo project folder.

```js
var game = (function () {
 
    var bx, // ref to graphics object
    i = 0,
    maxI = 100;
 
    return new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', {
 
        // create method
        create : function () {
 
            bx = game.add.graphics(0, 0);
 
            bx.beginFill(0x00ff00);
            bx.drawCircle(50, 50, 100);
            bx.endFill();
 
        },
 
        // the update method will be called on each tick
        update : function () {
 
            var r = Math.PI * 2 / maxI * i;
 
            bx.x = game.world.centerX - 50 + Math.cos(r) * 50;
            bx.y = game.world.centerY - 50 + Math.sin(r) * 50;
 
            i += 1;
 
            if (i === maxI) {
 
                i = 0;
 
            }
 
        }
 
    });
 
}
    ());
 
```