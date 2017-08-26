---
title: Deleting a collection of files recursively with rimraf
date: 2017-05-14 16:41:38
tags: [js,node.js]
layout: post
categories: node.js
id : 19
updated: 2017-05-14 16:49:0
version: 1.1
---

Some times you might want to delete a whole bunch of files that exist in a filesystem structure. If the project you are making is aways going to be running in a POSIX environment, you could use the rm command with a child process, but say you want to make the app more portable. This is where something like [rimraf](https://www.npmjs.com/package/rimraf) may come in handy.

<!-- more -->

## Deleting all files of a certain type recursively

```js
var rimraf = require('rimraf');
 
rimraf('./source/**/*.txt', function (e) {
 
    console.log(e);
    console.log('okay');
 
});
```

Notice the ** [glob](https://en.wikipedia.org/wiki/Glob_(programming), this will cause rimraf to search the whole structure in the source folder for text files and delete them.

## Plain JS alternative

You may be of a mindset where you always think to yourself "do I really need this dependency". You may often think about how hard it might be to put together something on your own, just working with what there is to play with when it comes to the node.js core modules.

As such yes it is not to hard to get something together to do this. I was able to quickly throw together something using fs.readdir, fs.lstatSync, and fs.unlink.

```js
var fs = require('fs'),
path = require('path'),
 
matchPat = /\.txt$/,
 
readDir = function (dir, forItem) {
 
    forItem = forItem || function (itemLoc) {
        console.log(itemLoc)
    };
 
    // read the given dir
    fs.readdir(dir, function (err, content) {
 
        // for all contents in the path
        content.forEach(function (item) {
 
            itemLoc = path.join(dir, '/' + item);
 
            // if a dir, continue recursively
            if (fs.lstatSync(itemLoc).isDirectory()) {
 
                readDir(itemLoc, forItem);
 
            }
 
            // log the current item
            forItem(itemLoc);
 
        });
 
    });
 
};
 
// call readDir with the given forItem method.
readDir('./source', function (itemLoc) {
 
    // if there is a match
    if (itemLoc.match(matchPat)) {
 
        console.log(itemLoc.match(matchPat));
 
        // unlink (delete)
        fs.unlink(itemLoc, function (e) {
 
            if (e) {
 
                console.log(e);
 
            }
 
        });
 
    }
 
});
```

Keep in mind this is something I put together in about fifteen minutes maybe. I could invest some more time, and make it a bit more robust. It could make use of promises, work well as a CLI tool, so forth, and so on. It may be a bit time consuming to get this solution to work well with respect to a wide range of use case scenarios.

## Conclusion

rimraf works pretty well for this task. It might be nice to have something that does this that also has RegEx support, but most of the time globs get the job done just fine.