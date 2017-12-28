---
title: What to know about working with paths in node.js
date: 2017-12-27 21:27:00
tags: [js,node.js]
layout: post
categories: node.js
id: 122
updated: 2017-12-27 22:5:8
version: 1.0
---

Working with paths in node.js is something that comes up all the time. A nice way to help with joining paths togeather, and help with problems that have to do with the difereneces of how paths are handled in windows and linux systems. For this there is no need to bother with an npm package of any kind the node.js built in path module can help with a great deal of these kinds of tasks.

<!-- more -->

## Finding out if a path is a sub dir of another path

I recently ran into a situation in which I need to find out if a path is a sub dir of another path in order to exclude it if it is. Path.relative comes in handy with this.

```js
let isSub = function (rootPath, testPath) {
 
    let relative = path.relative(rootPath, testPath);
    return !!relative && !relative.startsWith('..') && !path.isAbsolute(relative);
 
};
```

