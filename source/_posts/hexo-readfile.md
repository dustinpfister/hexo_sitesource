---
title: Reading files in Hexo
date: 2017-02-13 13:00:00
tags: [js,hexo]
layout: post
categories: Hexo
---

So now and then I might want to read a file in my hexo working tree that contains data that is needed when generating pages. For example I may have a file in my root name space that contains API access keys that are hidden from git with a .gitignore file. I might be using some API that requires an access key to get data that I used in the build process, so I will want to read that file, and fail gracefully if for some reason it's not there.

<!-- more -->

# The Promise.

I will want to use a promise.

```js
// the first promise I wrote myself
readFile = function (path, filename) {
 
    return new Promise(function (resolve, reject) {
 
        fs.readFile(path + filename, function (err, data) {
 
            if (err) {
 
                reject('Error reading file: ' + err);
 
            }
 
            resolve(data);
 
        });
 
    });
 
};
```

{% mytags_readfile source/json/fakekeys.json %}
