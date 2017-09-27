---
title: Setting up a static file server with hapi.
date: 2017-09-27 17:44:00
tags: [js,node.js]
layout: post
categories: hapi
---

So now that I have got the simple hello world project down with hapi, it is tile to find out how to make a simple static file server with hapi. This should not be to hard, so lets get it out of the way so I can move on to the real cool stuff.

<!-- more -->

## Getting started

So basically its the same setup process as the hello world project, but now I am going to be installing one plug-in for hapi called [inert](https://www.npmjs.com/package/inert)

```
$ npm int
$ npm install hapi --save
$ npm install inert --save
```