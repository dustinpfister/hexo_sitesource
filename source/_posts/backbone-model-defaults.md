---
title: Setting, and working with default values in backbone.js
date: 2017-11-02 09:37:00
tags: [js,backbone]
layout: post
categories: backbone
id: 81
updated: 2017-11-2 11:15:13
version: 1.1
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
            time : new Date(0) // and old date (more later)
        }
 
    }
);
 
var blank = new Item();
 
console.log(blank.get('title')); // 'unknown'
 
var book = new Item({title:'A tree grows in brooklyn'});
 
console.log(book.get('title')); // 'A tree grows in brooklyn'
```

## Set Model defaults with a function

For the most part setting some defaults with an object will work just fine, but it is true that objects are referenced, and not copied in javaScript. As long as the fact that all instances of the Model using the same object is not a problem, then there is nothing to worry about, unless it is a problem. In which case a function can be used in place of a plain old object that will return a new object each time.

```js
var Item = Backbone.Model.extend(
 
    {
 
        // some defaults set with a function
        defaults : function (obj) {
 
            // return a new object
            return {
 
                title : 'unknown',
                done : false,
                time : new Date() // set the current date each time
 
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

Using a function will allow for dynamic defaults. This can be used in place of more complex methods of doing this, such as defining a custom constructor method.

## Conclusion

backbone handles this aspect of making, and maintaining a Model well. It did not take me to log to get up to speed on how to do this, and I am moving on to more advanced aspects of MVC development with backbone.