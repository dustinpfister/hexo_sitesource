---
title: Setting, and working with default values in backbone.js
date: 2017-11-02 09:37:00
tags: [js,backbone]
layout: post
categories: backbone
id: 81
updated: 2017-11-2 11:4:42
version: 1.0
---

This will be a quick post on how to set, and work with [default values in backbone](http://backbonejs.org/#Model-defaults). It sometimes just involves placing a defaults object of key and value pares, but things can become a little more complicated if you have a set method in the model.

<!-- more -->

## Set defaults with an object

The simplest way to set some defaults might be to just have a defaults object as part of the Model that is created with Backbone.Model.extend.

```js
var Item = Backbone.Model.extend(
 
    {
 
        // some defaults
        defaults : {
            title : 'unknown',
            done : false,
            time : new Date(0)
        }
 
    }
);
 
var blank = new Item();
 
console.log(blank.get('title')); // 'unknown'
 
var book = new Item({title:'A tree grows in brooklyn'});
 
console.log(book.get('title')); // 'A tree grows in brooklyn'
```

## Set Model defaults with a function

```js
var Item = Backbone.Model.extend(
 
    {
 
        // some defaults set with a function
        defaults : function (obj) {
 
            // return a new object
            return {
 
                title : 'unknown',
                done : false,
                time : new Date() // set the current date
 
            };
 
        }
 
    }
 
);
 
var now = new Item();
 
console.log(now.get('time')); // the time now
 
var func = function(){
 
    var later = new Item();
 
    console.log(later.get('time')); // a time three seconds later
 
};
 
setTimeout(func,3000);
```