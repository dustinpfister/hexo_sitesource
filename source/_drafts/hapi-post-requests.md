---
title: Getting started with post requests using hapi and node.js
date: 2017-09-29 10:13:00
tags: [js,node.js]
layout: post
categories: hapi
---

Post requests are an important aspect of any kind of full stack application. You have some data on the client, and you need to shoot it over to the back end system. Doing so in hapi is pretty easy, in this post I will be covering a very basic approach that does not even require any kind of client system, apart from just a simple postIt function that will be copied into the console.

<!-- more -->

## The postIT function

If I am just interested in shooting out a simple post request to a back end I am developing there is a need for a simple method that I can just place in the content that gets delivered, or if even that is not going on copied and pasted into the JavaScript console.

It will likely be a simple method written in vanilla js, because at the earliest stages of development I may not have even decided if I am going to use jquery, or some other deal on the client side. In addition I will want to custom tailer some of the default values of the method so that it works very quickly with just one argument, but can also be used to post in just about any kind of fashion.

As such that method might look something like this.

```js
var postIt = function (data, url, beforeSend, done, fail) {
 
    var xhr = new XMLHttpRequest();
 
    url = url || 'http://localhost:3000';
    data = data || {};
    beforeSend = beforeSend || function(xhr,next){
       next();
    },
    done = done || function (xhr) {
        console.log(xhr);
    };
    fail = fail || function (xhr) {
        console.log(xhr);
    };
 
    xhr.open('post', url);
 
    xhr.onreadystatechange = function () {
 
        if (this.readyState === 4) {
 
            if (this.status === 200) {
 
                done(this);
 
            } else {
 
                fail(this);
 
            }
 
        }
 
    };
 
    beforeSend(xhr, function(){
 
        xhr.send(data);
 
    });
 
};
```