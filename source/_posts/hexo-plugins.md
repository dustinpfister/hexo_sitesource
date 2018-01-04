---
title: Getting started with Hexo Themes
date: 2018-01-03 22:11:00
tags: [hexo,js,node.js,ejs]
layout: post
categories: hexo
id: 125
updated: 2018-1-3 22:22:14
version: 1.0
---

These days I am interested in ether making my own static site generator from the ground up, or just making plug-ins for one that all ready exists such as [hexo](https://hexo.io/). I might work on making one just for the sake of having a long term pet project to work on, but for now I am leaning more in the direction of making plug-ins for one that all ready exists before hand, and I might as well make it the one that I am using to begin with.

<!-- more -->

## Scripts and plug-ins

There are two general ways of extending hexos functionality, one way is to just make a script folder in the root name space of the hexo project, and place a *.js file in there. The other way is to make a completely separate project folder and develop something that I will go in the node_modules folder of the hexo project.