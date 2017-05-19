---
title: Whats the deal with Bytes?
date: 2017-05-19 13:14:00
tags: [js,node.js]
layout: post
categories: node.js
---

So [bytes](https://www.npmjs.com/package/bytes) is one of those npm packages that presents a certain something that might not take that much time to develop on your own, but yet again maybe it will, so then yeah you just use it and move on with your life.

<!-- more -->

What bytes does is it just converts a number amount of bytes to a string representation of that value

```js
var bytes = require('bytes');
 
// convert a number to a string rep
console.log(bytes(13400, {
 
        decimalPlaces : 4
 
    })); // 13.0859kB
 
// convert a string to a number rep
console.log(bytes('13.08kb', {
 
        decimalPlaces : 4
 
    })); // 13393
```

Thats all there is to it. Sure there are some advanced features.