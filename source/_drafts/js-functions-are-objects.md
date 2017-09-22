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
