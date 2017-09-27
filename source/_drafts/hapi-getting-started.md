---
title: Getting started with full stack development with the hapi framework.
date: 2017-09-27 17:15:00
tags: [js,node.js]
layout: post
categories: hapi
---

I did some reading on the [hapi framework](https://hapijs.com/) for quickly making full stack applications. From what I have gathered it is a little more full featured out of the box compared to [express](https://expressjs.com/), so I thought I would give it a try.

<!-- more -->

As such this will be a sort of getting started, and first impressions kind of post. 

## Getting started

As with starting any node project I start my making a test folder that will contain a package.json file, a .gitignore file, and all the other files that will compose the test project.

```js
$ git init
$ npm init
$ npm install hapi --save
```

In this post I will keep things simple, and just start with a very simple hello world project. So I just need to have hapi itself installed for now.

## The server.js file

Now that I have hapi installed in my projects folders node_modules folder I will want to have a server.js file which I will start from the command line. It will look something like this:

```js
```