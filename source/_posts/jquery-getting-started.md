---
title: Getting started with jQuery
date: 2017-09-20 12:09:00
tags: [js,jquery]
layout: post
categories: jquery
id : 38
updated: 2017-9-21 8:46:44
version: 1.0
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

## The main jQuery Function ($)

The Main jQuery Function is what gets added to the global name space you can access it via the global variable \"jQuery\", but most of the time people use the \"$\" variable that is also defined. This function ( which is also an object mind you, as is following the pattern described above ) can be used to get a collection of elements to work with, by calling the function, but also has methods such as \$.each() attached to it as well.

For starters maybe it would be wise to use $.each to loop over $.
```js
$.each($, function(prop){
 
    console.log(prop);
 
});
```
When I do this I count some 94 properties, by contrast there is only one property \"Function\" when doing so with a blank function. So there is a great deal to work with, even when it comes to stand alone methods.

## Calling the main jQuery Function

So there are the stand alone methods that come in handy, and then there is the object that gets returned when you call the main jQuery function. This helps to quickly grab an HTML element, or a collection of elements, and do something with it.

```html
<p class="mess"></p>
<p class="mess"></p>
<p class="mess"></p>
```

```js
var mess = ['foo','man','chew'];
$('.mess').each(function(i,e){
 
    e.innerHTML = mess[i];
 
});
```

So this has always been one of the vary helpful things about jQuery, it allows for quick and easy access to an element, or collection of elements. However there are also a lot of methods that have to do with working with that collection as well, such as looping over them all with .each. Keep in mind that there is a difference with $.each, and $(selection).each() that kind of thing happens now and then.

## conclusion

Thats it for now, however it is very likely that this post will be updated in the future as my collection of posts on jQuery grows.