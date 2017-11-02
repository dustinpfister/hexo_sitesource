---
title: Setting, and working with default values in backbone.js
date: 2017-11-02 09:37:00
tags: [js,backbone]
layout: post
categories: backbone
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
