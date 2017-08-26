---
title: The node.js shebang
date: 2017-03-26 11:48:00
tags: [linux,js,node.js]
layout: post
categories: linux
id: 6
updated: 2017-05-03 09:47:27
version: 1.1
---

{% mytags_postwords js,javaScript,shebang,linux,node.js %}

So real quick and simple, yes here it is:

```
#!/usr/bin/env node
```

What is it? It's the [node.js](https://nodejs.org/en/) [shebang](https://en.wikipedia.org/wiki/Shebang_&#40;Unix&#41;). What's a shebang? Well the definition I found for the word "shebang " is "a matter, operation, or set of circumstances." The set of circumstances in this case is what scripting language is being used. It is then important for a program loader to know what interpreter should be used to run a script in question, in the case of server side JavaScript it is typically node.

<!-- more -->

## Do you need to use the shebang?

It depends on the situation if you are calling your node script like this:

```
# node myscript.js
```

Then it is not at all important as you are directly calling node. It becomes important to use it when developing a stand alone Command Line Interface tool using node.

## Check your jsMin, or jsFormat tools.

If you use formating or minification tools it can sometimes mess up the shebang, so if you are using one make sure that it leaves it alone.

## Conclusion

That's it, this is a short post aimed at a very specific topic of interest. It is a relevant part of getting into what is needed to be understood when it comes to developing CLI tools with node.js, but that is a whole other ball of wax as I see it. When it comes to it I will link and and expand this post accordingly.