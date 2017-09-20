---
title: Using jQuerys core \$.nodeName method.
date: 2017-09-20 15:32:00
tags: [js,jquery]
layout: post
categories: jquery
---

If you are like me, you like to comb over all the methods and properties of a javaScript project to fully understand the full range of what exists in the project. When doing so I have come accross a simple little core method in jQuery /$.nodeName.

<!-- more -->

## What does it do?

It returns true if the given element has a node name that matches the given node name string.

```html
<div id="theDiv"></div>
```

```js
console.log( $.nodeName($('#theDiv')[0],'div') ); // true
console.log( $.nodeName($('#theDiv')[0],'p') ); // false
```