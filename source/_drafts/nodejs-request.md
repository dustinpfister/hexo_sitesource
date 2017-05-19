---
title: Supper simple http requests
date: 2017-05-19 9:26:00
tags: [js,node.js]
layout: post
categories: node.js
---

making https requests to certain resources online can not be made much more simple than this.

<!-- more -->

```js
var request = require('request');
request('http://www.google.com', function (err, res, body) {
 
    if(err){
 
        console.log(err)
 
    }else{
 
        console.log(body);
 
    }
 
});
```