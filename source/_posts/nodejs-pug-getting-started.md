---
title: The pug template engine in node.js getting started
date: 2017-12-05 10:33:00
tags: [js,node.js]
layout: post
categories: node.js
id: 109
updated: 2017-12-5 10:56:23
version: 1.0
---

When it comes to node.js template engines I am a big fan of ejs, but a pretty nice alternative is [pug](https://www.npmjs.com/package/pug) (formerly known as jade). It uses a clean whitespace sensitive syntax similar to markdown, but a bit more powerful. I still like ejs a lot becuase it is pretty much just an argument html, put pug is kind of like markdown in the sense that it helps keep things clean and simple.

<!-- more -->

## Getting started

As with most projects like this I set up a test folder, and install the package with npm.

```
$ mkdir test_pug
$ cd test_pug
$ npm install pug
```

One that is done I made a basic.js file that will be a hello world sort type js file that uses the project, that looks like this:

```js
var pug = require('pug');
 
console.log( pug.render('p This is some pug') );
```

In this basic example I am using pugs render method that accepts a string of pug text, and returns plain old html.

```
$ node basic
<p>This is some pug</p>
```

## Some basics of the language

With pug the first few characters are interpreted as a tag, and a return is considered an end of the tag. Tags can also be nested by placing a return right after writing the first tag.

```
p this is some pug
br
p
 
   span I can make nested tags
```

becomes

```html
<p>this is some pug</p><br/><p><span>I can make nested tags</span></p>
```