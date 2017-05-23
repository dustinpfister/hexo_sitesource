---
title: Super simple http requests in node.js
date: 2017-05-22 9:26:00
tags: [js,node.js]
layout: post
categories: node.js
---

In many node.js projects it is necessary to grab resources that may exist on some kind of external source. In general often you may just need to get what is there, just a simple get request, and thats it. 

<!-- more -->

## Using the NPM package request

Although this is of course something that can be done within node by itself with the [http](https://nodejs.org/api/http.html) core module. A popular NPM package called request is often used to help make requests a little easier.

```
$ npm install request --save
```

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

## Using the built in node.js http module.

For comparison here is how you would go about making the same get request using the built in http module in node itself without the addition of the request npm package.

```js
var http = require('http'),
 
req = http.request(

   // options
   {
        host : 'www.google.com',
        method : 'GET',
        path : '/'
 
    }, 
 
    // callback
    function (res) {
 
        res.on('data', function (data) {
 
            var html = data.toString();
 
            // Log The raw HTML
            console.log(html);
 
        });
 
    });
 
req.end();
```