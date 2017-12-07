---
title: The pug template engine in node.js getting started
date: 2017-12-07 14:25:00
tags: [js,node.js]
layout: post
categories: node.js
id: 110
updated: 2017-12-7 15:3:41
version: 1.1
---

I just recently wrote a post on the node.js powered html template engine called pug, and mentioned that I have some experience working with ejs, which So far I seem to like the best when it come to doing this sort of thing in a node.js environment. However so far I have not wrote a post on ejs.

<!-- more -->

## Why EJS

EJS stands for Embedded JavaScript and it I see it as an enhanced HTML. It differs from the syntax used in pug and markdown in the sense that it might not be a clean language, but it more closely resembles tired yet true plain old Hyper Text.

## Getting stared with the EJS npm package

Probably one of the best ways to work with ejs would be to use [the ejs npm package on npmjs.com](https://www.npmjs.com/package/ejs). I assume as always with these kinds of posts that you have a background with javaScript, and have [node.js](https://nodejs.org/en/) and it's package manager npm installed on your computer. If so I just create a new project folder, and install ejs into it with npm.

```
$ mkdir test_ejs
$ cd test_ejs
$ npm install ejs
```

Once that is done I made an ejs folder in the root path of test_ejs, this is where I placed my ejs files. Also within the ejs folder I also placed a _parts folder for my ejs partial files.

## Basic EJS example, just rendering a simple ejs string to HTML

The whole point of EJS, or any template engine and language is to ultimately render plain old HTML which will be written out as HTML files, or delivered to the client on demand if we are talking about some kind of advanced content management system rather than the simple static site generators that I often work with.

So lets start out with a basic example of this. In my project folder I made a basic.js file that looks like this.

```js
var ejs = require('ejs'),
 
html = ejs.render('<p> hello <%= name %> </p>', {name: 'ejs'});
 
console.log(html); // <p> hello ejs </p>
```

Here we have the whole idea of this to begin with at a very simple, and easy to understand level. I give the render method of the ejs package a string of ejs markup, and an object containing values that can be used when rendering out the HTML. There is a great deal more to cover of course, but you should see where this is going.

## Some basics of the syntax

One of the most important aspects of ejs is of course the angle bracket and percentage sign patterns, these are what are used to tell the ejs parser that there is some javaScript to execute rather than just plain old static html.


## Escaped, and unescaped html

When working with a string in javaScript that is an html string you will want to use the dash rather than the equal sign, unless for some reason you want the html escaped.

```js
var ejs = require('ejs'),
 
htmlString = '<p>Yes this is some html</p>';
 
// escaped
console.log(ejs.render('<%=  \'' + htmlString + '\' %>'));
// &lt;p&gt;Yes this is some html&lt;/p&gt;
 
// Unescaped
console.log(ejs.render('<%-  \'' + htmlString + '\' %>'));
// <p>Yes this is some html</p>
```