---
title: Deleting a collection of files recursively with rimraf
date: 2017-05-27 16:29:00
tags: [js,node.js]
layout: post
categories: node.js
---

Some times you might want to delete a whole bunch of files that exist in a filesystem structure. If the project you are making is aways going to be running in a POSIX environment, you could use the rm command with a child process, but say you want to make the app more portable. This is where [rimraf](https://www.npmjs.com/package/rimraf) comes in.

<!-- more -->

## Deleting all files for a certain type

```js
var rimraf = require('rimraf');
 
rimraf('./source/**/*.txt', function (e) {
 
    console.log(e);
    console.log('okay');
 
});
```

notice the ** glob, this will cause rimraf to search the whole structure in the source folder for text files and delete them.