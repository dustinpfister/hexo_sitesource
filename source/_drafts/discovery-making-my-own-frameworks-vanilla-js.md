---
title: Making my own line of javaScript frameworks.
date: 2017-09-13 15:11:00
tags: [js]
layout: post
categories: discovery
---

In the spirit of vanilla js, I have been working on my own collection of frameworks. Don't get me wrong I sure do understand the other mindset on this, I have a series of posts on node.js that mainly have to do with npm packages that help to save time. Still sometimes if I want a job done right, I need to just do it myself.

<!-- more -->

## Name of the line of projects

All of the projects filenames begin with 'mf_', which at first meant Micro Framework, but now because some of the projects may become not so micro in size I am thinking My Framework is a better name. So I call it the "My Framework line of projects"

### Toolkits

### [mf_shell](https://github.com/dustinpfister/mf_shell)

This project contains just some usual suspects when it comes to working with things that have to do with geometry, and working within a client side environment. Basically any code that repeats across frameworks a lot ends up getting dumped here by default, as such it is a common dependency of many other frameworks. No clear identity with it so far, but I like the name, so chances are it will always be something.

## Canvas, and display

So far I just have one canvas project so this will be a short list

### [mf_canvas](https://github.com/dustinpfister/mf_canvas)

This is a project that involves the use of a single canvas element to help with rendering. Nothing fancy, just the basic deal to help get the job done.

### [mf_vp](https://github.com/dustinpfister/mf_vp)

A very basic view port manager. Supper basic, so basic it is a wonder why I even have it broken down like this. Well I ended up going down a rabbit hole of sorts on this one when it comes to making something like this that is not so basic called mf_vp_zoom.

### [mf_vp_zoom](https://github.com/dustinpfister/mf_vp_zoom)

A far more advanced view port manager that allows for zooming.