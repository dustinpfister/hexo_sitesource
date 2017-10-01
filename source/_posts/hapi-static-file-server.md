---
title: Setting up a static file server with hapi.
date: 2017-10-01 15:30:00
tags: [js,node.js]
layout: post
categories: hapi
id: 50
updated: 2017-10-1 15:36:12
version: 1.0
---

So now that I have got the simple hello world project down with hapi, it is tile to find out how to make a simple static file server with hapi. This should not be to hard, so lets get it out of the way so I can move on to the real cool stuff.

<!-- more -->

## Getting started

So basically its the same setup process as the hello world project, but now I am going to be installing one plug-in for hapi called [inert](https://www.npmjs.com/package/inert)

```
$ npm int
$ npm install hapi --save
$ npm install inert --save
```

## The server.js file

```js
var Hapi = require('hapi');
 
// create a new instance of hapi server
var server = new Hapi.Server();
 
// port 3000, and I will be using localhost
// when running I will connect via http://localhost:3000
server.connection({
    port : 3000,
    host : 'localhost'
});
 
// register plug ins
server.register(
 
    // I could just have the one object, but yes
    // I can also pass an array of objects for each plugin I
    // am using
    [
 
        // inert plug in
        {
            register : require('inert')
 
        }
    ],
 
    // callback
    function (err) {
 
        if (err) {
            throw err;
        }
 
        // set a route
        server.route({
            method : 'GET',
            path : '/{param*}',
            handler : {
 
                directory : {
                    path : 'public'
                }
 
            }
        });
 
    }
 
);
 
// start the server
server.start(function () {
 
    console.log('hapi server up: ');
 
});
```

I could also set it up to serve just a single file rather than the whole public folder, but generally this is all I need it to do, and I can expand from here if needed.