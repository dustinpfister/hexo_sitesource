---
title: getting started with jQuery
date: 2017-09-19 15:53:00
tags: [js,jquery]
layout: post
categories: jquery
---

So yes I will be writing a few posts on jQuery, purely because it is popular. Like any other series of posts it is always best to start with some kind of getting started post, so lets get this out of the way. i assume that you are someone that has some advanced knowledge of the basics of getting things done with client side JavaScript, if not get started with that first.

<!-- more -->

## Taking a look at $

So any javaScript variable must begin with a letter or the \_ and \$ characters. When jQuery is loaded it creates a some global variables that are used to work with jQuery. One of which is the variable \"jQuery\", but what is also defined is the \$ variable. Most of the time that is what is used in various examples.

So one way to get started is to take a look at what is given when starting to use something.

```js
console.log($);
```