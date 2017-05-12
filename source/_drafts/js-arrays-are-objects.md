---
title: Arrays are Objects.
date: 2017-05-12 07:59:00
tags: [js]
layout: post
categories: js
---

In core javaScript Arrays are technically not Arrays, but Objects. The thing about Arrays that are made with the core js Array constructor, is that they are a special kind of object in which the objects constructor name is Array.

<!-- more -->

```js
console.log( [].constructor.name ); // Array
```
