---
title: A general overview of Models in backbone.js
date: 2017-11-02 09:15:00
tags: [js,backbone]
layout: post
categories: backbone
id: 80
updated: 2017-11-2 10:30:7
version: 1.0
---

In this post I will be writing a general overview of [Models in backbone](http://backbonejs.org/#Model). This post will not cover everything there is to know about them, but it will be a good starting point, and I will link to any, and all other posts of mine that have to do with backbone Models.

<!-- more -->

## The Whole Idea of Models in backbone

If you are new to javaScript, or for that matter coding in general, you might not be aware of the reasons why you might want to break things down into many separate components that may or may not depend on each other. Going on my experience so far whenever I start to make a project that is a little complicated there is a tenancy for things to get a little messy, one way to go about remedying that is to pull code that has to do with one thing, away from another. Such as removing code that has to do with the state, and management of a Model away from code that has to do with displaying some of that model, and allowing for an interface to work with it.

## A simple backbone model Example

If I where to make the most simple example of a backbone model it will typically still need to set some defaults for properties for that model. That can be done with a defaults object like this.

```js
var Item = Backbone.Model.extend(
 
    {
 
        // these are the default values that will
        // be augmented with the object that is passed
        // to the constructor function
        defaults : {
            title : 'unknown',
            done : false
        },
 
        // simple log method
        log : function () {
 
            console.log('title: ' + this.get('title') + '; done: ' + this.get('done'));
 
        }
 
    }
 
);
 
var blankItem = new Item();
 
blankItem.log(); // 'title: unknown; done: false
 
var it = new Item({title : 'foo'});
 
it.log(); // 'title: foo; done: false
```

## Making a custom constructor method for the model

Most of the time just having a defaults object will work just fine, but I do now and then need to define my own constructor method. Doing so just involves writing over the default constructor that is put in place.

```js
var Item = Backbone.Model.extend({

        // these are the default values that will
        // be augmented with the object that is passed
        // to the constructor function
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
 
    });
 
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

## Conclusion

The most important thing to understand about models is that they work independently from a certain view, and over all client system. It is possible to make a view with backbone, I have covered that briefly in my [getting started post](/2017/11/01/backbone-getting-started/) on backbone. However The model should also work by just calling methods from the javaScript console, and as such I can do anything I want when it comes to making a client system.

I will be writing many [posts on backbone](/categories/backbone/), as time goes on this post will be updated.