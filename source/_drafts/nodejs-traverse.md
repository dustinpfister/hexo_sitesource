---
title: Traversing over an object in node.js
date: 2017-08-26 08:16:00
tags: [js,node.js]
layout: post
categories: node.js
---

Sometimes I get into a situation in which I may want to loop over all the nodes of a given object. That is I want to traverse, or loop over an object an preform a certain action with certain node values. I could slap together my own solution, maybe starting with a for in loop that I use in a method that is called recursively. However a much better option would likely be to just go ahead and use [traverse](https://www.npmjs.com/package/traverse).

<!-- more -->
