---
title: A jQuery.prototype.add method example
date: 2017-09-30 13:57:00
tags: [js,jquery]
layout: post
categories: jquery
---

I am very late to the seen when it comes to jQuery, in many ways it's time has passed. Still it is very popular, so I feel compelled to learn a thing or two about it, and author some content on it.

This post will be about the .add jQuery prototype method that is used on a collection to add some elements from one selection too another. Out of the gate this does not quite work as expected, but once you get how it works it is easy to see why it is helpful.

<!-- more -->

## The html example

Say you are dealing with an html structurer that looks something like this:

```html
<body>
    <div id="section_one">
        <p>foo 1</p>
        <p>foo 2</p>
        <p>foo 3</p>
    </div>
    <div id="section_two">
        <p>man 1</p>
        <p>man 2</p>
        <p>man 3</p>
    </div>
    <p>chew 1</p>
    <p>chew 2</p>
    <p>chew 3</p>
</body>
```

## The $(selection).add() example.

You want to select the p elements that are attached to body, and in the section_one div, but NOT the section_two div, how would you do it? One way is to use $(selection).add.

```js
$('body>p').add($('#section_one>p')).each(function(){
 
    console.log(this);
 
});
```