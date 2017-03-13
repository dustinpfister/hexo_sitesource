---
title: MDFG ( Mark Down file Generator)
date: 2017-03-13 17:13:00
tags: [markdown]
layout: post
categories: mdfg
---

The name should say it all, but just in case you need more input by all means read on.

## Mark Down file Collection tasks

### replace-taks plugin

```
$ MDFG --plug replace-task --arguments allot,a lot --source ./source --target ./target
```

Say you have a blog that contains some 300 posts that you have written over the years. One day someone comes along and says "say did you know that you type allot when you meant to type a lot?". After a quick goggle search is preformed you become aware of a certain problem that would take a great deal of time to fix. You must open up your bery first blog post in an editor, do a ctrl + f, search for all instances of a certain text pattern, make a change if necessary, save, and then move on to the next. All 300 of them, yikes.

This is where MDFG comes into play to help speed up this kind of process, perhaps even automate it if doing so is possible. MDFG will loop threw all *.md files in a source folder, and build a revised collection in a target folder.

### spelling plugin

### hexo-tag-inject plugin
### hexo-tag-remove plugin

### date-set-fsmeta plugin

set the date written in a mark down file to the date created in the OS file system meta mata.

## Static Site generator build tasks.

I am using hexo.io as my current static site generator. I can copy and paste the built mark down file collection into the source folder of my hexo project, but in stead I just type:

```
$ MDFG --generate hexo --deploy
```

which will generate a hexo site that I have in my /staic_sites folder with the markdown files in my /build folder and deploy what is in /static_sites/hexo/public to my dustinpfister.github.io repository.

Whats supper cool about this is that switching to jekyll is often as simple as

```
$ MDFG --generate jekyll --deploy
```

The goal here is to be able to make my markdown files highly portable.