---
title: How to style terminal output text with node.js using chalk
date: 2017-05-31 10:37:53
tags: [js,node.js]
layout: post
categories: node.js
id : 26
updated: 2017-05-31 10:37:53
version: 1.0
---

When making any kind of node.js project that may involve output to the command line interface, it may be desired to style that output, for the sake of adding emphases, or just to make it look nice. Many CLI tools make use of color, for one reason or another, so if you want to add color to the output of you node.js CLI tools, you might want to check out [chalk](https://www.npmjs.com/package/chalk).

<!-- more -->

# The Chalk Hello world app.

Getting started with chalk is real simple, after adding it to your project with the usual

```
$ npm install chalk --save
```

Throwing together a simple hello world that should demonstrate it's capability can be as simple as this.

```js
var chalk = require('chalk');
 
if (chalk.supportsColor) {
 
    console.log( chalk.blue('yes your terminal supports color, this text should be blue.') );
 
} else {
 
    console.log('sorry the terminal does not support color.');
 
}
```

As you may have gathered you can use the supportsColor property of chalk to find out if the terminal that you are using supports color in the first place or not.

## Defining your own style

You can use a chainable API to define a custom style, and set it to a variable, like so.

```js
var chalk = require('chalk'),
 
myStyle = chalk.bold.green;
 
console.log(myStyle('This is my term text style'));
```

## conclusion

Thats all, chalk is a nice little dependency that can be used to quickly add color to a CLI tool of yours.