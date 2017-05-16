---
title: Woking with very big numbers in node.js with big-integer
date: 2017-05-16 13:14:00
tags: [js,node.js]
layout: post
categories: node.js
---

Want to do some math in a node.js environment involving really big numbers? Then look into the npm package called [big-integer](https://www.npmjs.com/package/big-integer)

<!-- more -->

# The hello world project
```js
var bigInt = require("big-integer");

// plain old JavaScript number
console.log(Math.pow(2,128));
 // 3.402823669209385e+38

// JavaScript number to big int
console.log( bigInt( Math.pow(2,128) ).toString());
// 340282366920938500000000000000000000000

// big int
console.log( bigInt(2).pow(128).toString() );
// 340282366920938463463374607431768211456
```

