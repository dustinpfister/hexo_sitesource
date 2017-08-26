---
title: Super simple http GET requests in node.js
date: 2017-05-23 12:17:00
tags: [js,node.js]
layout: post
categories: node.js
id : 23
updated: 2017-05-23 12:34:18
version: 1.1
---

In many node.js projects it is necessary to grab resources that may exist on some kind of external source. In general often you may just need to get what is there, just a simple get request, and thats it. It would also be nice to use some kind of package that helps to make it stupid easy, for this there is a popular npm package simply called [request](https://www.npmjs.com/package/request).

<!-- more -->

## Using the NPM package request

Although this is of course something that can be done within node by itself with the [http](https://nodejs.org/api/http.html) core module. A popular NPM package called request is often used to help make requests a little easier.

So go ahead and install request into a demo project, and give it a try.

```
$ npm install request --save
```

Here is a quick demo as to how to go about making that simple get request.

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

When you compare the two it is easy to see why the request npm package helps to make grabing at resourcses a little easer. As i see it, I do not think that it can be much more easy then that. At a minamum I would need to give a url, and a callback that has access to what is spit back at me when making the call.