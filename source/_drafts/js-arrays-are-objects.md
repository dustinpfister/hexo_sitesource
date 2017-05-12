---
title: JavaScript Arrays are Objects.
date: 2017-05-12 07:59:00
tags: [js]
layout: post
categories: js
---

In core javaScript Arrays are technically not Arrays, but Objects. The thing about Arrays that are made with the core js Array constructor, is that they are a special kind of object in which the objects constructor name is Array.

<!-- more -->

You can gain a better sense of what is going on by checking out what the constructor is of an Object.

```js
console.log( [].constructor.name ); // Array
```

Any object created with the Array literal notation, like in the above example, will result in an object that is an instance of Array, and therefore has Array methods like splice, slice, and join in it's prototype.

## Making a plain old object like an Array.

It is possible to make just a plain old object with the object literal notation, and call Array methods on it using call.

```js
// make an object like this
var obj = {

   0 : 'one',
   1 : 'two',
   2 : 'three'
   
};

// set a length property, with its value equal to the number of keys.
obj.length = Object.keys(obj).length

// it's constructor is Object, not Array.
console.log( obj.constructor.name );

// becuase it is not an array it does not have array methonds like slice in it's proototype, but we can use Array methonds on it by using call.
console.log( [].slice.call(obj,1,3) );
```

So it is not an Object with a constructor name of Array, but if it is formatted in a certain way it can still be used as an Array. Often you may come across something in javaScript that looks like an Array, but is really just a plain old Object, or an instance of some other constructor function such as HTMLCollection.

## The arguments object in functions.

An example of an Array like Object that is not an Array is the arguments object in functions. Every time a function is called there is an arguments object that is Array like in the sense that each of the arguments that you pass to the function is in it, in a fashion where the first argument is in a property called '0', and the second argument is in a property called '1', and so forth. In addition it even has a length property just like an Array, but it is not.

```js
 
func(1,2,3);
 
function func(one,two,three){
 
    console.log(arguments[1]); // 2
 
    console.log(arguments.length) // 3
 
    console.log( arguments.constructor.name ); // Object (not an Array)
 
    // we can use call to invoke an Array method on it.
    console.log( [].splice.call(arguments,1,2) ); // [2,3]
 
};
```

## HTMLCollection Objects

Another example of Array like Objects that are not Arrays are instances of HTMLCollection. This is what you end up with when you use a method like document.getElementsBytagName to get a collection of HTML DOM element references in a document, when it comes to client side javaScript.

Say you just have some simple paragraph elements.

```html
<p>one</p>
<p>two</p>
<p>three</p>
```

```js

var p_tags = document.getElementsByTagName('p');

console.log( [].slice.call(p_tags,1,2)[0].innerHTML ); // two
```
