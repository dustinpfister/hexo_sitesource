---
title: Working with promises in node.js with bluebird
date: 2017-12-02 19:48:00
tags: [js,node.js]
layout: post
categories: node.js
id: 103
updated: 2017-12-2 20:29:59
version: 1.1
---

Today I will be writing about the npm package [bluebird](https://www.npmjs.com/package/bluebird), which is a fully featured featured promise library for [node.js](https://nodejs.org/en/). There is built in support for promises in node.js as well in any version that is up to spec with [ES2015+ javaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects), so I will see about how bluebird compares to native promise support.

<!-- more -->

## Some Basics with promises

Take into account the following code.

```js
var fs = require('fs');
 
fs.stat('README.md', function (err, stats) {
 
    if (err) {
 
        console.log('error getting readme stats');
        console.log(err);
 
    } else {
 
        console.log('readme stats: ');
        console.log(stats);
 
    }
 
});
```

This is an example of something where there are two possible outcomes, one where I will be getting the stats of a readme file logged to the console, and another in the event that some kind of error happens. As such the above example can be written as a promise like this:

```js
// a getStats method that will return a promise
var getStats = function (path) {
 
    // the promise to return
    return new Promise(function (resolve, reject) {
 
        require('fs').stat(path, function (err, stats) {
 
            if (err) {
 
                // if error reject, and pass the error
                reject(err);
 
            } else {
 
                // else resolve with that stats
                resolve(stats);
 
            }
 
        });
 
    });
 
};
 
// get readme stats promise style!
getStats('README.md').then(function (stats) {
 
    console.log('readme stats:');
    console.log(stats);
 
}).catch (function (err) {
 
    console.log('error getting readme stats');
    console.log(err);
 
});
```