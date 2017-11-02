---
title: A general overview of Models in backbone.js
date: 2017-11-02 09:15:00
tags: [js,backbone]
layout: post
categories: backbone
---

In this post I will be writing a general overview of [Models in backbone](http://backbonejs.org/#Model). This post will not cover everything there is to know about them, but it will be a good starting point, and I will link to any, and all other posts of mine that have to do with backbone Models.

<!-- more -->

## The Whole Idea of Models in backbone

If you are new to javaScript, or for that matter coding in general, you might not be aware of the reasons why you might want to break things down into many separate components that may or may not depend on each other. Going on my experience so far whenever I start to make a project that is a little complicated there is a tenancy for things to get a little messy, one way to go about remedying that is to pull code that has to do with one thing, away from another. Such as removing code that has to do with the state, and management of a Model away from code that has to do with displaying some of that model, and allowing for an interface to work with it.

