---
title: Clean site!
date: 2020-06-18 09:32:00
tags: [blog]
layout: post
categories: blog
id: 0
---

This is a clean source folder that is being used as a way to quickly just get a sense of how a new theme looks. The reason why I have bothered with this is that the actual source folder contains over 600 blob posts so it takes a long time to build now. So I have this clean source folder that I can use that just contains this post as a way to create a quick clean build.

<!-- more -->

## 1 - Check your _config.yml file

If you want to build the actual site you are going to want to set the following in the _config.yml file in the main hexo_sitesource folder.

```
# Directory
source_dir: source
public_dir: public
```

To build this quick clean site just use the clean folders

```
# Directory
source_dir: source_clean
public_dir: public_clean
```

## 2 - Might need to delete the db.json file

Some times it might be necessary to delete the dp.json file, and let hexo build a new one if you run into problems with that.