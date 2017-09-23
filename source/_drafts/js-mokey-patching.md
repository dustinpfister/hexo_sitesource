---
title: Examples of Monkey Patching in JavaScript
date: 2017-09-23 16:52:00
tags: [js,blog,corejs]
layout: post
categories: js
---

[Monkey patching](https://en.wikipedia.org/wiki/Monkey_patch) is the process of replacing, modifying, and extending upon built in javaScript Objects, and methods. Some times I would say it is called for, but generally it seems it is viewed as bad practice, in favor of alternative methods that are contained in a utility library, or write your own methods.

<!-- more -->

## What happens when you Monkey Patch the Object prototype.

If you monkey patch a method into the Object prototype that method will be available to 

## Monkey patching Number.isNaN

This is a responcabul example of mokey pacthing as in this case monkey patching Number.isNaN support is just making sure that it will work on old browsers that do not have it there.

```js
Number.isNaN = Number.isNaN || function(n){

   return isNumber(n) && n != +n;

};
```