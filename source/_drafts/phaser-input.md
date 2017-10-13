---
title: An overview of the main phaser input manager
date: 2017-10-11 14:11:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

This post is an overview of the main phaser input hander that can be found at game.input in a phaser game object instance. However this post also serves as a home base of sorts for all things in phaser that have to do with input. I am putting a lot of time into rapidly expanding my posts on phaser, as such the content here will be updated often as my collection of content on phaser grows.

<!-- more -->

## What you should know before hand

I assume you have a strong foundational understanding of front end javaScript itself, and have broke at least some ground with phaser, and are now interested in learning more about how to handle input in phaser. If not get up to speed with all of that then come back here.

## Two general approaches with input

There are two general ways of handling input with phaser. One is to take a look at the state of objects that exist via game.input, and this post you are reading mainly covers this approach. Another approach is to use the input handers that are attached to sprites.


