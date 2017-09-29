---
title: Using jQuerys core \$.get method as a request shorthand
date: 2017-09-29 11:21:00
tags: [js,jquery]
layout: post
categories: jquery
id: 48
updated: 2017-9-29 11:46:39
version: 1.0
---

Do not confuse the core jQuery $.get method with the .get method when working with a dom collection, they have nothing to do with each other at all. The core method is a shorthand for preforming an ajax get request, while the .get method has to do with getting a single element from a collection of dom elements.

<!-- more -->

## Simple example of $.get()

```js
$.get('/', function(res){
 
    var html = new DOMParser().parseFromString(res, "text/html"),
    divs = html.querySelectorAll('div');
 
    [].forEach.call(divs, function(div){
 
        console.log(div);
 
    });
 
});
```

If I am using jquery in a project I will quickly go ahead and use this in place of my vanilla js method alternatives. It works in a very simple fashion where I just give a path, and a response method when the response is received. 

## But what if there is not a 200 status?

no problem check it:

```js
$.get('/foo', function(res) {
 
  console.log('we are good');
 
}).done(function(res) {
 
  var html = new DOMParser().parseFromString(res, "text/html"),
    divs = html.querySelectorAll('div');
 
  [].forEach.call(divs, function(div) {
 
    console.log(div);
 
  });
 
}).fail(function(res) {
 
  console.log('something went wrong');
  console.log(res);
 
});
```

## conclusion

I might be making a whole lot more posts on the [hapi]() framework, and as such I might get into how to go about throwing together a custom client system that might have jQuery in the mix. It seems like jQuery is one of those projects that is a little dated, but just wont die.