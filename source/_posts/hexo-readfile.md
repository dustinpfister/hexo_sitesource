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

I will want to use a promise, as this is often what is used within hexo. 

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

# A Read File Tag

So I might want a tag that I can use to inject data from anywhere in my root namespace into a blogpost.

```js
// read a file from the base dir forward.
hexo.extend.tag.register('mytags_readfile', function (args) {
 
    var filename = args[0];
 
    log('reading file : ' + filename);
 
    return readFile(hexo.base_dir, filename).then(function (content) {
 
        log('file read good.');
 
        return '<pre><code>' + content + '</code></pre>';
    }).catch (function (err) {
 
        log('error reading file');
 
        return '<pre>Error reading file ' + filename + '</pre>';
 
    });
 
}, {
    async : true
});
```

Here for example I will use it to inject the package.json file fr my hexo project.

```
{% mytags_readfile package.json %}
```

{% mytags_readfile package.json %}

# Geting an access key, or token from my apikeys.json file.

{% mytags_github %}