---
title: _.merge in lodash as a means to recursively merge down objects.
date: 2017-11-17 12:21:00
tags: [js,lodash]
layout: post
categories: lodash
id: 93
updated: 2017-11-17 12:57:8
version: 1.0
---

These days I have been exploring all the options out there when it comes to merging down two or more objects into a single object. There are many ways to go about doing it that have different effects, there is the idea of just copying over key values, or just referencing them even. However it most cases I often want to merge them down like that of a bunch of sheets of acetate rather than that of paper. That is if a certain value is in one object, but not any other, it is the value that will end up in the final object. That is the effect that is achieved when using the lodash [\_.merge](https://lodash.com/docs/4.17.4#merge) method.

<!-- more -->

```js
// some default values
var defaults = {
 
    x : 320,
    y : 240,
    delta : {
 
       x : 0,
       y : 0
 
    }
 
},
 
// some input values
inputs = {
 
   delta : {
   
      x: 5
   
   }
 
},
 
// some methods that act on values
methods = {
 
    move : function(){
 
        this.x += this.delta.x;
        this.y += this.delta.y;
 
    }
 
};
 
var obj = _.merge(methods,defaults,inputs);
 
obj.move();
 
console.log(obj.x); // 325
```
