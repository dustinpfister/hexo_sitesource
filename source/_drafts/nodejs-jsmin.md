---
title: Compressing javascript files with jsmin
date: 2017-08-18 17:00:00
tags: [js,node.js,js13k]
layout: post
categories: node.js
---

Today I am working on my 2017 submission to [js13kgames.com](http://js13kgames.com/) in which I must make a JavaScript game in which all the source code and any additional assets takes up 13kb or less of space. As such it is important to crunch the size of the source code down, as the development form of any game I make often surpasses that limit in a heart beat. There are many solutions for this, but for this post I will be writing on [jsmin](https://www.npmjs.com/package/jsmin).


<!-- more -->

## Using jsmin from the command line

If I want to just quickly 
