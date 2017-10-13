---
title: An overview of the main phaser input manager via game.input
date: 2017-10-13 09:22:00
tags: [js,phaser,games]
layout: post
categories: phaser
id: 63
updated: 2017-10-13 10:19:12
version: 1.0
---

This post is an overview of the main [phaser](http://phaser.io/) input hander that can be found at game.input in a phaser game object instance. There is much to be said about [Input](http://phaser.io/docs/2.6.2/Phaser.Input.html) (what is used via game.input), and [InputHander](http://phaser.io/docs/2.6.2/Phaser.InputHandler.html) (what is used in game objects like sprites). However this post is mainly just an outline of what there is to work with via the Input instance at gane.input. I am putting a lot of time into rapidly expanding my posts on phaser, as such the content here will be updated often as my collection of content on phaser grows.

<!-- more -->

## What you should know before hand

I assume you have a strong foundational understanding of front end javaScript itself, and have broke at least some ground with phaser, and are now interested in learning more about how to handle input in phaser. If not get up to speed with all of that then come back here.

## Two general approaches with input

There are two general ways of handling input with phaser. One is to take a look at the state of objects that exist via game.input, and this post you are reading mainly covers this approach. Another approach is to use the input handers that are attached to sprites.

## input and inputHander

What is given at game.input is an instance of input which differs from Phasers inputHander which is used in game objects like sprites. If you just want to know what the current status of some device is, then you would want to check out what is going on with instnace of input at game.input. However if you want to attach some kind of event handler to a game object, which in many cases may be a better alternative, then you want to look into the Phaser inputHander, which is outside the scope of this post.


