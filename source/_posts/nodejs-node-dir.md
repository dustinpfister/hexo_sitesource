---
title: Looping over a bunch of files in Node.js with node-dir 
date: 2017-11-05 21:08:00
tags: [js,node.js]
layout: post
categories: node.js
id: 86
updated: 2017-11-7 11:28:0
version: 1.1
---

So you have a bunch of files in a folder, and you want to do something involving the content of each file. You might only want to bother with a certain kind of file, and you might want to know each filename. Well one npm package that I have found that helps a whole lot with that is node-dir, and I find it a bit of a time saver compared to just making something from the ground up.

<!-- more -->

## Getting started with a new project

First things first, create a new project folder, cd into it, set up a package.json file, and install node-dir. Maybe call it something like node-dir-demo.

```
$ cd node-dir-demo
$ npm init
$ npm install node-dir --save
```

When making a simple demo project like this I often just run threw and set default values for each value in the package.json file. If you are new to node.js development the --save flag adds node-dir to the dependences list of the package.json file.

## Basic readFiles hello world example of node-dir

Once that is done it's time to make an index.js file for the project. As with any post of mine where I write about an npm package like this I start off with a simple hello world style example of it's use. For this I thought I would start off with a script that logs to the console the fileNames, and content of all files found in the root path in which it is called.

```js
var dir = require('node-dir');
 
dir.readFiles('./', function (err, content, fileName, next) {
 
    console.log('********************');
    if (err) {
 
        // if there is an error log that
        console.log(err);
 
    } else {
 
        // else log filename, and content of a file
        console.log(fileName);
        console.log('**********');
        console.log(content);
 
    }
    console.log('********************');
 
    next(); // next file
 
});
```

## Turn the project into a global CLI tool

If I feel as thought I am starting to develop some kind of project that will work well as a CLI tool, there is the option of adding the node.js shebang to the top of the index file, and using an option parser with the project.
