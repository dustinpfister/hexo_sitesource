---
title: A real good option parser for Node.js called nopt
date: 2017-04-20 21:19:00
tags: [js,node.js]
layout: post
categories: node.js
---

So you find yourself writing some kind of Command Line Interface tool with node.js, and as such you want to make it so it will accept some arguments from the command line. Just like that of many other CLI tools that you may be familiar with if you are somewhat POSIX or powerShell savvy.

<!-- more -->

As such you might find yourself throwing together something like this.

```js
 
var args = process.argv.slice(2),
 
options = {
 
    readOnly : false,
    sourcePath : '.'
 
};
 
args.join().split('-').forEach(function (arg) {
 
    arg = arg.split(',');
 
    if (arg[0] === 'r') {
 
        options.readOnly = true;
 
    }
 
    if (arg[0] === 'd') {
 
        options.sourcePath = arg[1];
 
    }
 
});
 
console.log(options);
 
```

If so stop what you are doing now, you are making a mistake. It's okay we have all been there, but yes you are making a mistake. Yes this has been done before. Yes there is a dependency for that you can install, and use right now that will handle this much better.

What is starting to come together in the above example can be called an option parser. It is an important component of any CLI tool. In this post I will be giving an example of how to use the option parser [nopt](https://github.com/npm/nopt).


