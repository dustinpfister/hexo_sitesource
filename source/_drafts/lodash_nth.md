---
title: The lodash _.nth method use case example
date: 2017-10-12 08:52:00
tags: [js,lodash,node.js]
layout: post
categories: lodash
---

When grabbing an element from an Array I need to give a zero relative index value between and including zero, and one less of the length of the Array. A trivial matter for even a beginer javaScript developer. There is a question of how to handle index values that fall outside the index range of the array though, it's not hard to resolve it in vanilla js, but if I am using  [lodash](https://lodash.com/) in a project there is [\_.nth](https://lodash.com/docs/4.17.4#nth).


<!-- more -->

```js
 var arr = ['fear','the','foo','man','chew'];
 
 console.log(arr[-3]); // undefined
 console.log(_.nth(arr,-3)); // 'foo'
```