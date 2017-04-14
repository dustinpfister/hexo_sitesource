---
title: Node.js Command Line Interface Hello World
date: 2017-04-13 20:04:00
tags: [js,node.js,cli]
layout: post
categories: node.js
---

I have written a quick post on the [node.js shebang](http://localhost:4000/2017/03/26/linux_shebang/) a while back, but did not go into detail about it, and why it is necessary.

<!-- more -->

# Lets start with a simple script

So lets start with just throwing together a real basic command line tool in JavaScript that takes to arguments that are numbers, adds them together and returns the sum.

```js
var args = process.argv.slice(2, process.argv.length);
 
console.log('I am a simple addition cli tool');
 
if (args.length >= 2) {
 
    console.log(Number(args[0]) + Number(args[1]));
 
}
```

# Calling the script directly with Node.

In the command line I can call this directly with node like this.

```
$ node my-command.js 1 1
I am a simple addition cli tool
2
```

