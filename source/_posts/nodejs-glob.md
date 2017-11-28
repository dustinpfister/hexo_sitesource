---
title: Working with glob patterns in node.js using the glob npm package
date: 2017-11-28 14:25:00
tags: [js,node.js]
layout: post
categories: node.js
id: 101
updated: 2017-11-28 14:44:33
version: 1.0
---

If you have been using computers as long as I have you might have by now come across the use of [glob patterns](https://en.wikipedia.org/wiki/Glob_(programming)) as a way to use \* wildcard to represent any string of characters. I am pretty comfortable with this method of selecting files that fit a certain pattern, and the npm package [glob](
https://www.npmjs.com/package/glob) is a great solution for selecting files in a workspace this way.

<!-- more -->

## what are globs

It is a way of making use of a wildcard character \* to represent any string of characters so that:

```
*.txt
```

means any file with a .txt extension which will match helloworld.txt, and readme.txt, but not index.js in a given directory.

## Basic usage of glob in nodejs

The name of the package is just simply glob, as such I can add it to a node.js project link this

```
$ npm install glob
```

In a test project folder I made a simple basic.js file that looks like this:

```js
var glob = require('glob');
 
glob('**/*.md', function (err, files) {
 
    if (err) {
 
        console.log(err);
 
    } else {
 
        // a list of paths to markdown files
        // in the current wording directory
        // and all paths from that point (recursive)
        console.log(files);
 
    }
 
});
```