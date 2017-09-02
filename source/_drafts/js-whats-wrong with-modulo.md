---
title: What is wrong with javaScript Modulo?
date: 2017-04-13 20:04:00
tags: [js,corejs]
layout: post
categories: js
---

When working with many javaScript projects the use of [modulo](https://en.wikipedia.org/wiki/Modulo_operation) comes up from time to time. 


<!-- more -->

## What is modulo used for?

In short the modulo operation is used to find the remainder of a division operation, and for the most part that is how the modulo operation works in javaScript. However there is more than one convention, and sometimes javaScripts modulo operator will not work as expected.

One typically use case might be something like this, say you have a grid that is ten by ten sections. You want to write a method where if given a certain index value from 0-99, you can get the x, and y grid position.


As such javaScripts modulo works just fine by itself as expected, not problem.

```js
var width = 10,
i = 13,
y = Math.floor(i / width),
x = i % width; // whats remains when diving by width
 
console.log(x + ',' + y); // 3,1
```

However when starting to work with negative numbers, this is where problems happen.

## Negative Number problem

Say you have a spinner in a game that is used to find the number of spaces a player moves, like in many board games.