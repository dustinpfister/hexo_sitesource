---
title: The lodash _.once method use examples.
date: 2017-12-04 09:01:00
tags: [js,lodash]
layout: post
categories: lodash
id: 105
updated: 2017-12-4 9:7:37
version: 1.0
---

Part of my debugging process involves placing a console.log in my code at some point to log out to the console the status of some value. Often it might be placed in the body of some code that ends up getting called often, and as such it will get logged to the console a whole bunch of times real fast. This is where using something like [\_.once](https://lodash.com/docs/4.17.4#once) in [lodash](https://lodash.com/) can be helpful when working on a project that uses lodash as part of it's codebase.

<!-- more -->
