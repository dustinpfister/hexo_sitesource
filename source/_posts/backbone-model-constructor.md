---
title: Making a custom backbone model constructor
date: 2017-11-02 10:36:00
tags: [js,backbone]
layout: post
categories: backbone
id: 82
updated: 2017-11-2 14:12:45
version: 1.1
---

Generally it is not need to make a custom [constructor method](http://backbonejs.org/#Model-constructor) for a backbone Model. However if for some reason it is needed doing so is as simple as just adding one to the object that is passed to Backbone Model.extend, when making the Model.
<!-- more -->

## Making a custom constructor method for the model

So to do this just add a constructor method to the model like this:

```js
var Item = Backbone.Model.extend(
 
    {
 
        // set some defaults
        defaults : {
            title : 'unknown',
            done : false,
            time : new Date(0) // and old date
        },
 
        // making a custom constructor
        constructor : function () {
 
            // Go ahead and apply what there is like normal
            Backbone.Model.apply(this, arguments);
 
            // but set the time to now (it's not 1969,
            // or whatever time I placed in the defaults object)
            this.set('time', new Date());
 
        },
 
        // simple log method
        log : function () {
 
            console.log('title: ' + this.get('title') + '; done: ' + this.get('done'));
 
        }
 
    }
 
);
 
var blankItem = new Item();
 
console.log(blankItem.get('time')); // the time it was created
 
var later = function () {
 
    var it = new Item({
            title : 'foo'
        });
 
    console.log(it.get('time')); // the time it was created
 
};
 
setTimeout(later, 3000);
 
```