---
title: Core javaScript, sticking to the core.
date: 2017-03-25 14:25:00
tags: [js,blog,corejs]
layout: post
categories: js
---

Core javaScript is the base part of javaScript that is consistent across different environments. That is that the same Constructors, properties, ect are the same in both the browser as well as a different environments outside of the browser. There is something to be said about the different specs (ES3,ES5,ES2015+), but for the most part if I write my javaScript in a certain faction it can become very portable.

<!-- more -->

For example the Date constructor is an example of core JavaScript because the same line of code should work just fine in any environment. In contrast window.document is not an example of core javaScript but is instead and example of client-side javaScript.

```js
var now = new Date(), // core js
el = document.getElementById('foo'); // client-side js
```

## Sticking to the core.

When I start to write a new javaScript project one of many questions that I ask myself is "can I make this a core javaScript project"? If I can I will, because it helps to make my code more portable between the server, and client.

So sticking to just the core is a good idea if it can be managed. Even if I come to a point where I do need to make more than one version of a script, I have come to find that it is always a good starting point.

## One size fits all.

With the introduction of node.js, in the past few years I see that some developers design there modules in a fashion in which the module will work in node as well as most client environments by detecting if the module is in a client or server environment.

## One size does not fit all.

The sever is a computer where you always have a least a degree of control with the environment. This is fully true when you are hosting your back end system on your own physical hardware that you own on site. With a hosting company it is possible that they may only provide a certain version of node, and maybe for whatever the reason your code will break because of it. However once you have a deployment up and running all is well.

This of coarse is not the case when it comes to the client systems out there. It is a whole world better than it once was, but there is still a need to maintain platform specific variants of dependencies if you want to march backward compatibility back a good distance.

Still I would say that it all comes down to a certain core that will work on a wide range of environments. Then make platform specific changes when needed.