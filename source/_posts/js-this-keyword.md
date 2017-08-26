---
title: The this keyword.
date: 2017-04-14 10:45:25
tags: [js,blog,corejs]
layout: post
categories: js
id: 13
updated: 2017-04-14 11:01:24
version: 1.1
---

Every javaScript developer that runs a blog ends up writing at least one post on the this keyword. So I thought I should get this one out of the way quick, so I can get to writing about more obscure and uncovered aspects of the JavaScript ecosystem, as there is all ready a great many posts on this subject. Still if I am going to make yet another one, I should be able to do a descent job on it considering there is so much great content on it out on the Internet all ready, so here we go.

<!-- more -->

## this is dynamic

The this keywords value changes with a wide range of situations, such as if the code is executed at the top level, if you are using strict mode, and even the JavaScript spec of the browser (es3,es5,es2015+).

This is why I see code like this in many JavaScript modules.

```js
var global = this || (typeof window !== 'undefined' ? window : global);
```

More on why that is later, but for now I thought I would start out by saying yes the this keyword is a little tricky. Once you think you have this all snuffed out you end up leaning more about it. 

## At the top level

It would seem that typically in most cases the this keyword refers to the global object at the top level when it is code that is executed at the top level. As far as I can tell it would appear that this is always the case. If the code is at the top level this will refer to whatever the global object is in the environment.

```js
this; // the global object
```

## Inside a function.

This is where things can get a little confusing, as the this keyword can change depending on a lot of factors. I will cover as many of them as I am aware of here.

## An es5 (non strict mode) IIFE

If you use this inside an IIFE, and do not do anything to change the state of this by using call, apply, or the new keyword, then the this keyword will continue to do the same as when it is top level code.

```js
(function(){
 
   console.log(this);  // window (if in the browser)
 
}());
```

## An ES5 (strict mode) IIFE

Using ES5 javaScript strict mode will result in the this keyword having a value of undefined.

'use strict';
```js
(function(){
 
   console.log(this);  // undefined
 
}());
```

This is why I see that expression that I mentioned earlier, sometimes getting the global object is not that easy when you are trying to design code that will work in any run time environment. As such you just have to use some conditionals.

```js
'use strict';
 
(function(){
 
 console.log(this || (typeof window !== 'undefined' ? window : global));
 
}());
```

## The new keyword

The new keyword is used when calling a function to create a new instance of a constructor function. Writing something about constructors, Classes, and the prototype chain is outside the scope of this post. So I will just say that constructors come in handy when you want to make a whole bunch of objects that share a set of methods.

```js
var global = this || (typeof window !== 'undefined' ? window : global),
 
Foo = function(){
 
    if(this === global){
 
        console.log('you did not call Foo with the new keyword');
 
        return {};
 
    }
 
    this.bar = 'foo';
    this.now = new Date();
 
},
 
noNew = Foo(),
yesNew = new Foo();
 
console.log(noNew); // just an Object
console.log(noNew.constructor.name); // Object
 
console.log(yesNew); // An instance of Foo
console.log(yesNew.constructor.name); // Foo
```

If you just call Foo normally it will result in the global object or undefined like always, however if you call it with the new keyword it will return an object that is an instance of the Foo constructor.

## Using call

Call is a way that you can call a method on any object, regardless if it is an instance of it's prototype or not. It works by changing the value of this to whatever object you give it.

One example of how this comes in handy is with instances of HTMLCollection. They are array like, but are not instances of the constructor Array, therefore they do not have methods such as Array.forEach. So one way to quickly loop over an HTMLCollection is to use call, and give the collection as the first argument.

```js
var divs = document.getElementsByTagName('div')
 
console.log(divs.constructor.name); // HTMLCollection ( not Array )
 
[].forEach.call(divs,function(div){
 
    console.log(div);
 
});
```

With call the first argument is the value you want this to be, and every argument after that is just the normal set of arguments that you would give to the method. In the case of Array.forEach it is the method I want called for each element of an array. 

## Apply

Apply works in the same way as call only you give it just two arguments the second of which is an array of arguments that are to be used with the method you are using with Apply.

```js
var divs = document.getElementsByTagName('div');
 
[].slice.apply(divs,[1,3]).forEach(function(div){
 
    console.log(div.innerHTML);
 
});
```

Here I am again using an Array method on an instance of HTMLCollection. in this case it is slice which returns an instance of Array that is a section from the HTMLCollection with the given index values in the array that I have given apply as the second argument.

I could use call in the same way like this:

```js
[].slice.call(divs,1,3).forEach(function(div){
 
    console.log(div.innerHTML);
 
});
```

Not all methods work though If I used Array.splice that would cause and error as the HTMLCollection instances are read only. Call, and Apply can be used anywhere where appropriate, including your own methods that are part of the Constructors that you define.

## Conclusion

So the this keyword is a little strange, hopefully this post will shed some light on the subject.