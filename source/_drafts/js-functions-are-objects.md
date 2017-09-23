---
title: Functions are Objects in javaScript
date: 2017-09-21 19:47:00
tags: [js,blog,corejs]
layout: post
categories: js
---

One thing that is important to remember is that functions are objects in javaScript

<!-- more -->

```js
var mod = (function(){
 
    // private stuff and go here
 
    // public api
    return {
 
        x : 0,
        y : 0,
 
        moveAD : function(a,d){
 
           this.x += Math.cos(a) * d;
           this.y += Math.sin(a) * d;
        
        }
 
    };
 
}());
 
mod.moveAD(0,100);
console.log(mod);
```

```js
var mod2 = (function(){
 
    // private stuff and go here
 
    // a public api function
    var api = function(){
    
        return 'we are at ' + api.x + ',' + api.y;
    
    };
    
    api.x = 0;
    api.y = 0;
    api.moveAD = function(a,d){
    
         this.x += Math.cos(a) * d;
         this.y += Math.sin(a) * d;
      
    };
 
    // public api
    return api;
 
}());
 
mod2.moveAD(0,100);
console.log(mod2());
```

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

