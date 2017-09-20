---
title: Getting started with jQuery
date: 2017-09-20 12:09:00
tags: [js,jquery]
layout: post
categories: jquery
---

So yes I will be writing a few posts on jQuery, purely because it is popular. Like any other series of posts it is always best to start with some kind of getting started post, so lets get this out of the way. I assume that you are someone that has some knowledge of the basics of getting things done with client side JavaScript.

<!-- more -->

## A word on versions

In this post I am using jQuery 3.2.1, as of this writing it is a late version. Keep in mind that over the years a whole lot has been added, and removed. As such jQuery is an example of something where the version number matters a whole lot.

## A word on the fact that functions are objects in javaScript

Before I start writing about the jQuery object, maybe it is a good idea to start by pointing out a certain something about functions in javaScript.

```js
// defining a function
var foo = function(){
 
    // this function returns an object
    return {
 
        // the object that gets returned can have some methods
        bar : function(){
 
            return 'foo';
 
        }
 
    };
 
};
 
// adding another function as a property of that function
foo.bar = function(){
 
    return 'bar';
 
};
```

What I am pointing out is that functions are objects in javaScript, and as such you can add properties to them just like any other object. It is possible then to follow a module design pattern in which you have a main function that can return something when called, and on top of that have a bunch of methods attached to it as well. jQuery follows this pattern, and it is something important to keep in mind.

## The main jQuery Object


```js
```