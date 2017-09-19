---
title: JavaSccripts Array.shift vs the lodash _.drop method
date: 2017-09-19 09:26:00
tags: [js,lodash,node.js]
layout: post
categories: lodash
---

It looks like lodash is a bit of a mixed bag of helper methods some of which do not exist in javaScripts built in Array prototype, and other methods that appear to be redundant. If a method is redundant maybe there is some kind of reason why I might still want to use it such as backward compatibility, but more often then not I tend to prefer to just work within core js.

<!-- more -->

Sometimes it seems like I come across something like _.drop in lodash, and scratch my head wondering if looking into lodash is a wise investment of time. If would seem that over all, it may not be a wast of time. A lot of these methods do work differently, and provide a certian something that does go beyond what may be in the core of js itself.

## So what does _.drop do?

Its a quick way to create a new array in which one or more elements are dropped from the beginning of the array. 

## What does Array.shift do?

It returns the first element from the beginning of the Array, and it also directly modifies the Array that it is invoked on resulting in an array that is now one element shorter each time it is called.
