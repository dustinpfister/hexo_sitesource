---
title: The lodash _.throttle method.
date: 2017-10-20 11:07:00
tags: [js,lodash]
layout: post
categories: lodash
id: 69
updated: 2017-10-20 11:10:32
version: 1.0
---

There are times when I want to fire a method once an amount of time has passed. I can always just use setTimeout or setInterval, and make my own solution that is some kind of advanced process management solution. However this is a [lodash](https://lodash.com/) post as such I shale be writing some [\_.throttle](https://lodash.com/docs/4.17.4#throttle) examples, which is one way to make throttled methods.

<!-- more -->

## _.throttle examples

So here are some quick examples.

```js
 var sec = _.throttle(function(){
 
    console.log('every second');
 
 },1000);
 
 var hundredMS = _.throttle(function(){
 
 
    console.log('every one hundred ms');
 
 },100);
 
 
 var loop = function(){
 
    setTimeout(loop,33)
 
    sec();
    hundredMS();
 
 
 };
 
 loop();
```

\_.throttle differers from setTimeout and setInterval as it returns a new function that will only fire once the amount of time has passed when it is being called, rather than setting a function to call after an amount of time has passed, or at a certain interval.
