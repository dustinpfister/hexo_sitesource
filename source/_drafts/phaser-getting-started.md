---
title: Getting started with phaser for HTML 5 game development
date: 2017-10-03 12:29:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

I have a long history of making games in a vanilla js style in which I am writing everything from the ground up. I do like that approach, but the draw back is that it is time consuming. Another part of me wants to just work with what is out there to begin with, and just focus on whatever it is that sets my project apart from the epic ton of games that are out on the internet all ready. So That being said I have been focusing in on [phaser](http://phaser.io/) as my first major HTML game framework to help me speed things along on game prototypes.

<!-- more -->

## Why Phaser?

For one it is popular, and thus also well supported. Also so far it seems to have all the features I can think of that I would want if I where to ask the time to write my own framework, which I am not going to do. Speaking of not making a game framework, yes that is the major reason why I have been looking into phaser. I have nothing against the other mindset about this, there are good reason to write everything from the floor up, but the appeal here is of course to save time.

## Getting started with phaser, node.js, and hapi

So phaser has there [own getting started tutorial](http://phaser.io/tutorials/getting-started) that you might also want to try. With me I am using [node.js](https://nodejs.org/en/), and the [hapi framework](https://hapijs.com/) with the [inert plugin](https://www.npmjs.com/package/inert) to get up and running with server a simple static site locally on my computer. I am not doing anything fancy with my front end for now, aside from just having phaser dropped in a js folder in the public folder of my phaser demos project. This post will just be an outline on how to go about doing just that.

If what I am talking about doe not sound good for you, no problem just use whatever means you need to serve up what you will be working on via http:// rather than file://