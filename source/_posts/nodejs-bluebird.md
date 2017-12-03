---
title: Working with promises in node.js with bluebird
date: 2017-12-02 19:48:00
tags: [js,node.js]
layout: post
categories: node.js
id: 103
updated: 2017-12-3 9:41:37
version: 1.2
---

Today I will be writing about the npm package [bluebird](https://www.npmjs.com/package/bluebird), which is a fully featured featured promise library for [node.js](https://nodejs.org/en/). There is built in support for promises in node.js as well in any version that is up to spec with [ES2015+ javaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects), so I will see about how bluebird compares to native promise support.

<!-- more -->

## Some Basics with promises

If you do not know anything about promises they are [worth checking out](https://en.wikipedia.org/wiki/Futures_and_promises). In a nut shell promises are a great way to handle anything that needs to be done in an async kind of way and or anything that may result in a pass or fail result.

If you are not going to bother with promises one alliterative is to have high level functions with pass and fail callbacks, although it works things can get a little messy. As such a lot of developers like to use promises.

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

In the above example I am using the built in Promise constructor that comes in any version of node that supports promises. In most cases it works okay, but bluebird provides a few more features, some of which are pretty helpful.

so add it to a project can check it out:

```
$ npm install bluebird --save
```

## Bluebirds promisify method

This is a great method in bluebird

```js
var Prom = require('bluebird');
 
// The node.js Built in Promise constructor does not have promisify (4.3.2)
console.log(Promise.promisify); // undefined
 
// but bluebird does
console.log(Prom.promisify); // [Function]
 
var getStats = Prom.promisify(require('fs').stat);
 
// Hey now I can just give the nodeFunction to bluebirds
// promisify method, pretty sweet!
getStats('README.md').then(function (stats) {
 
    console.log('readme stats:');
    console.log(stats);
 
}).catch (function (err) {
 
    console.log('error getting readme stats');
    console.log(err);
 
});
```