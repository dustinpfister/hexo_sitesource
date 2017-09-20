---
title: Using jQuerys core \$.each method to loop over objects and Arrays
date: 2017-09-20 15:32:00
tags: [js,jquery]
layout: post
categories: jquery
---

So the \$.each method is a simple tool to loop over an object or array. This is not the first post I have written on a tool that does this, I wrote a post on the npm package traverse that is another tool that does basically the same thing. yes there is Array.forEach, the for in loop, and a wide range of other options that come to mind, but for now lets just keep it with an option in jQuery.

<!-- more -->

## A quick example of \$.each()

So one idea that comes to mind is to use jQuerys each method to look over jQuerys core object. 

```js
$.each($, function(prop){
 
    console.log(prop);
 
});
```

This is something that I like to do whenever working with something new, just to get a sense of what it is that I am working with.