---
title: A real good option parser for Node.js called nopt
date: 2017-04-20 21:19:00
tags: [js,node.js]
layout: post
categories: node.js
---

So you find yourself writing some kind of [Command Line Interface tool](https://en.wikipedia.org/wiki/Command-line_interface) with [node.js](https://nodejs.org/en/), and as such you want to make it so it will accept some arguments from the command line. Just like that of many other CLI tools that you may be familiar with if you are somewhat POSIX or powerShell savvy. If so you will want to check out [nopt](https://www.npmjs.com/package/nopt).

<!-- more -->

## Doing it the wrong way.

So you started developing a CLI tool, and it needs to accept some arguments from the command line, as such you might find yourself throwing together something like this.

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

If so stop what you are doing now, you are making a mistake. Yes there is a dependency for that you can install, and use right now that will handle this aspect of CLI tool development much better. What is starting to come together in the above example can be called an option parser. It is an important component of any CLI tool. In this post I will be covering the usage of a node.js dependency called nopt.

## Doing it the Correct way.

When testing out any new dependency I start by making a little demo app that uses the dependency in question. So start a new node.js project and do the usual npm int to get your package.json file for the app together then install nopt, and be sure to make it one of the apps dependences in the package.json file.

```
$ npm install nopt --save
```

Now you are ready to handle option parsing the correct way, but first what is option parsing?

## Option parsing is not so simple sometimes.

Accepting arguments from the command line may strike you as a trivial matter, and to some extent I suppose it is now and then, but sometimes it may not be that trivial with certain projects. You may have a situation that involves hard coded default values in the tool itself, soft coded values in a json file somewhere that can superseded those hard coded defaults, and values that are accepted via the command line.

When accepting values from the command line, how many possible values can be set via the CLI? Does an option just set a true or false boolean value? Does an option set a native OS, or URL style path? What about number, string, and object values? Can an option set one of several types of modes, from an array of options? Yes this can get a little tense, this is why we use dependences written by people that have been there, and done that, all of that and much much more.

