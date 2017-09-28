---
title: Getting started with post requests using hapi and node.js
date: 2017-09-28 11:56:00
tags: [js,node.js]
layout: post
categories: hapi
---

<!-- more -->

## The minimal client system

```js
var postIt = function (url, data, done, fail) {
 
    var xhr = new XMLHttpRequest();
 
    url = url || 'http://localhost:3000';
    data = data || {};
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
 
    xhr.send(data);
 
};
```