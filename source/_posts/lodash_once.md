---
title: The lodash _.once method use examples.
date: 2017-12-04 09:01:00
tags: [js,lodash]
layout: post
categories: lodash
id: 105
updated: 2017-12-4 9:30:42
version: 1.1
---

Part of my debugging process involves placing a console.log in my code at some point to log out to the console the status of some value. Often it might be placed in the body of some code that ends up getting called often, and as such it will get logged to the console a whole bunch of times real fast. This is where using something like [\_.once](https://lodash.com/docs/4.17.4#once) in [lodash](https://lodash.com/) can be helpful when working on a project that uses lodash as part of it's codebase.

<!-- more -->

## Basic use example of \_.once in lodash

\_.once works by returning a function that will call the given function only once when called.

```js
 
 var trap = _.once(function(mess){
 
    console.log(mess);
 
 });
 
 trap('okay'); // 'okay' logged to the console
 trap('nope'); // ( nothing )
```

## How \_.once works

If you have some experience with [concept of closures](https://en.wikipedia.org/wiki/Closure_(computer_programming)), and guessed that is how \_.once works then you would be right.

I often like to study the source code of very popular javaScript projects in oder to have at least some understanding as to how it works, as such the source code of \_.once in v4.17.4 of lodash looks like this:

```js
function before(n, func) {
    var result;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    n = toInteger(n);
    return function() {
        if (--n > 0) {
            result = func.apply(this, arguments);
        }
        if (n <= 1) {
            func = undefined;
        }
        return result;
    };
}
 
function once(func){
    return before(2,func);
}
```

So the \_.once method is a good example of how closures come in handy. Once returns a function within a function, and the value of result in the before helper is what gets returned each time \_.once is called.