---
title: The lodash _.debounce method for delay of function invoking.
date: 2017-12-03 20:01:00
tags: [js,lodash]
layout: post
categories: lodash
id: 104
updated: 2017-12-3 20:6:47
version: 1.0
---

The [\_.debounce](https://lodash.com/docs/4.17.4#debounce) method in [lodash](https://lodash.com/) is great for delaying the invocation of a method for a certain about of time. In addition it can be canceled, or flushed at once when called.

<!-- more -->

## Basice example of \_.debounce

I just need to call it and pass the function that I want debounced, and a time in milliseconds. Once that is done a debounced function will then be returned, once called the function will be invoked once the given about of time passes.

```js
var bounced = _.debounce(function(){
 
    console.log('debounced');
 
}, 30000);
 
bounced(); // logs 'debounced' after 30 seconds
```