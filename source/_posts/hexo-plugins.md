---
title: Getting started with Hexo Plug-ins, and scripts
date: 2018-01-03 22:11:00
tags: [hexo,js,node.js,ejs]
layout: post
categories: hexo
id: 125
updated: 2018-01-04 21:45:31
version: 1.4
---

These days I am interested in ether making my own static site generator from the ground up, or just making plug-ins for one that all ready exists such as [hexo](https://hexo.io/). I might work on making one just for the sake of having a long term pet project to work on, but for now I am leaning more in the direction of making plug-ins for one that all ready exists before hand, and I might as well make it the one that I am using to begin with.

<!-- more -->

## Scripts and plug-ins

There are two general ways of extending hexos functionality, one way is to just make a script folder in the root name space of the hexo project, and place a \*.js file in there. The other way is to make a completely separate project folder and develop something that I will go in the node_modules folder of the hexo project.

## Start with scripts

It might be best to start with scripts first, and then progress into the more professional way of extending hexo functionality by way of plug-ins. The reason why may be because they are easier to make as it just involves placing a \*.js file in a scripts folder that will be placed in the root name space of the hexo project.

## Progress to plug-ins

It might be preferred to have what it is that is being made placed in it's own folder, to be added to a hexo project by some means. That is by way of an npm install command, or a copy and past action of one kind or another into the node_modules folder of a hexo project. If it is something very completed this might be the preferred coarse of action to take.

## The extensions there are work with when making a plug-in or script.

What does the plug-in need to do? Do you want to have something that can be using when writing markdown files that will inject html that way? If So you want a [tag](https://hexo.io/api/tag.html). Do you want to make a function that can be called from an \*.ejs template to generate some html in the theme? Then a [helper](https://hexo.io/api/helper.html) is what is called for. Do you want to make a whole new complete site structure, containing many \*.html files in a certain path in the public html folder? Then you will want to look into [generators](https://hexo.io/api/generator.html). 

The [full list of hexo extensions](https://hexo.io/api/) can be found on the hexo site api documentation. I will be covering the ones I use the most in my projects here:

### Generators

Read my [full post on hexo generators](/2018/01/04/hexo-generators/)

### Helpers

Helpers are methods that can be called when working with a template.

### Tags

read my [full post on hexo tags](/2017/02/04/hexo-tags/)

This allows for the addition of methods that can be used when writing markdown file for the sites blog posts.