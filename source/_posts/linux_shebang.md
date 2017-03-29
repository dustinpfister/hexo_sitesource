---
title: The node.js shebang
date: 2017-03-26 11:48:00
tags: [linux,js,node.js]
layout: post
categories: node
id : 6
---

{% mytags_postwords js,javaScript,shebang,linux,node.js %}

So real quick and simple, yes here it is:

```
#!/usr/bin/env node
```

What is it? It's the [node.js](https://nodejs.org/en/) [shebang](https://en.wikipedia.org/wiki/Shebang_&#40;Unix&#41;). What's a shebang? Well the definition I found for the word "shebang " is "a matter, operation, or set of circumstances." The set of circumstances part is what will apply here, it's a way of declaring what environment is being used in a script.

<!-- more -->

## Do you need to use the shebang?

In some cases it does not seem to matter, so far I have only run into a problem not using it when making a script of mine a stand alone global CLI tool. Other than that if you just always call your script directly from the command line like so.

```
# node myscript.js
```

Then chances are you will never have to bother with it.

## check your jsMin, or jsFormat tools.

If you use formating or minification tools it can sometimes mess up the shebang, so if you are using one make sure that it leaves it alone.

## conclusion

That's it, short post, if I need to expand on it I will.