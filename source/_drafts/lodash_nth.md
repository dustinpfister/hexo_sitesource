---
title: The lodash _.nth method use case example
date: 2017-10-11 17:27:00
tags: [js,lodash,node.js]
layout: post
categories: lodash
---



<!-- more -->

```js
 var arr = ['fear','the','foo','man','chew'];
 
 console.log(arr[-3]); // undefined
 console.log(_.nth(arr,-3)); // 'foo'
```