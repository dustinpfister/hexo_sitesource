---
title: The Phaser main game object, and the Phaser.Game constructor.
date: 2017-10-05 15:18:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

The most important component of [phaser](http://phaser.io) may very well be the main phaser game object constructor. This is what I call to make an instance of the main Phaser.game object that I typically set to a variable called game. This main game object is then referenced a lot, in each state of the game. Long story short this is where the magic happens with phaser.

<!-- more -->

## This is not a getting started post

The aim of this post is to help give a solid understanding of the Phaser.Game constructor. It does not touch base on everything that can be worked with the game object that is returned by that constructor, that would be a dissertation of a blog post. However it is not a getting started post as well, [I got that one out of the way](/2017/10/04/phaser-getting-started/) before.

## Width and Height

So the first two values that are passed to the constructor are width and height. If given a number it is an actual pixel amount, and if given a string it is a value between 0 and 100 that is the percentage of the parent container. Mainly I just go with a certain mobile friendly resolution of 320 by 240.

## Choose a renderer

The third argument given to the constructor is the renderer to use, If set to AUTO (the default), phaser will automatically use webgl if available, else default to regular old canvas. There is also a HEADLESS option if it is a game in which there is something else plained for rendering, most of the time so far I just leave this on AUTO.

## The parent element

Because this is an html 5 game this project will most likely be on a website somewhere, as such it is important to give phaser a parent element in which to inject the project.

```js
var game = new Phaser.Game(320,240,Phaser.AUTO);
``` 

