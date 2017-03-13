---
title: git hooks, npm scripts, and my own tool for "pre-committing" tasks automation.
date: 2017-03-13 17:13:00
tags: [git,js]
layout: post
categories: git
---

Taking the time to write my own pre-commiting, pre-release, pre-commit, ect tool is something I do not care to take the time to make. If it ar all can be avoided by just simply using what is all ready there for me, great, I want to spend the bulk of my time actually developing a project rather than spending time on something like this.

I once thought about writing my own static site generator, but then I thought "That wold take allot of time, and that is probably something that has been done all ready, why don't you check whats out there first". After that I found out about hexo, 

## option 1 : git hooks

## option 2 : npm scripts

## option 3 : pusher

I should not have to bother with making my own tool to do these kinds of things, but all to often it seems nessavery

```js
var pusher = require('pusher');

pusher.setProcess({

    pre_stage : function () {

        console.log('i run before anything is staged with $ git add');

    },

    post_stage : function () {},

    pre_commit : function () {},

    post_commit : function () {},

    pre_push : function () {},

    post_push : function () {

        /*    do something after a successful push
              such as shooting an e-mail to your boss that says something like:

              "see, this is what you pay me for."

         */

    }

});

pusher.start();
```
