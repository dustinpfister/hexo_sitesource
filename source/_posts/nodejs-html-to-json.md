---
title: Converting html code to a JavaScript object in node.js with html-to-json
date: 2017-11-06 17:06:00
tags: [js,node.js,blog]
layout: post
categories: node.js
id: 87
updated: 2017-11-12 20:11:36
version: 1.1
---

I have been writing a javaScript blog for a little under a year now, and would like to have some tools at my disposal that will help me improve the quality of the content in my posts.

So I wanted to make a simple tool to run threw all of my blog posts that have been parsed into html, and find certain values such as word count for my posts. So I wanted to find some kind of javaScript project that I can use in my CLI tool that would help easily turn some html into a javaScript object that I can then work with. I found a few projects that work nice, but settled in on something called [html-to-json](https://www.npmjs.com/package/html-to-json).

<!-- more -->

## Basic example of html-to-json in node.

So of couse as always the first thing is to install the package into a node project

```
$ npm install node-to-json --save
```
After that I wanted to make my typical hello world example of how to get started with html to json. As such I put together a simple example to just test out how it works, by seeing if I can just pull the text from a single paragraph element.

```js
var htmlToJson = require('html-to-json'),
 
htmlToJson.parse('<p>This is only an example</p>', {
 
    p: function (doc) {
 
        return doc.find('p').text();
 
    }
 
}).then(function (result) {
 
    console.log(result.p); // 'this is only an example'
 
});
```
