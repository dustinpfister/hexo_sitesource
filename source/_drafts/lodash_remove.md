---
title: The lodash _.remove array method in action
date: 2017-09-19 09:26:00
tags: [js,lodash,node.js]
layout: post
categories: lodash
---

The process of removing a few elements from an array can sometimes be a little troubling, or at least I remember that it was back when I was first starting out. The trouble was mainly with looping threw an array from zero upwards, each time an element is removed it of course changes the length of an array. The way I would resolve the problem is often by looping threw the array backwards.

<!-- more -->

Anyway this post is about the _.remove array method in lodash that helps to make quick work of removing elements from an array.

### Basic example

It's pretty easy, just pass the array, and a method where you can define the conditions that will result in removal of the element.

```js
var arr = ['foo', 27, 'man', 42, 'chew'];
 
_.remove(arr, function (el) {
 
    // remove all numbers
    return typeof el === 'number';
 
});
 
console.log(arr); // ['foo','man',chew];
```