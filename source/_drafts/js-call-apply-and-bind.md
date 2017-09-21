---
title: Whats the dead with Call, Apply, and Bind
date: 2017-09-21 08:56:00
tags: [js,corejs]
layout: post
categories: js
---

I see a lot of posts on the this keyword ([including mine](/2017/04/14/js-this-keyword/)), and also the call, apply, and bind properties of the Function prototype. Seems like something I just have to get out of the way before moving on to less heavily traveled (but still traveled) paths when it comes to writing content for a javaScript blog.

<!-- more -->

## Where to get started with Call, Apply, and Bind.

Maybe a good place to start is to know that in javaScript you often have a situation in which you are working with one or more objects, and you also have methods that act on those objects. For example there are Arrays and then there are methods like join that act on those arrays.

```js
var arr = ['foo','man','chew','is','always','in','style'],
mess = arr.join(' ');
console.log(mess); // foo man chew is always in style
```

No confusion there, but with the power of call I can invoke the Array.join method on a plain old object.

```js
var arr = {0:'foo',1:'man',2:'chew',3:'is',4:'always',5:'in',6:'style',length:7},
mess = [].join.call(arr,' ');
console.log(mess); // foo man chew is always in style
```

The main point here is that yes there are methods that are associated with a certain kind of Object that is made with a certain kind of constructor function. However if any object just happens to have values that a method uses, call can be used to invoke a method on any object regardless if it is an instance of the constructor that it is associated with or not. A real simple way of thinking about it, is that Call can be used to free methods from there prototype.

## Call

So call is a property of the Function prototype, which means it is a method that works with any function, including methods that are part of the prototype of any kind of Object like Date, and Array. Call works by using the call method on any function that I want to use with a certain object in which it might work by passing that object as the first argument.