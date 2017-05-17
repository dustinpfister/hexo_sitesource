---
title:  Progressive enhancement of static site structurer, with Hexo, and the Fixer.io JSON API
date: 2017-02-09 13:11:00
tags: [js,JSON,automation,hexo,node.js]
layout: post
categories: api
---

{% mytags_postwords fixer.io,api&#32;fixer,jsonp,hexo,progressive,enhancement %}

A few months back I [wrote a post on the fixer api](https://dustinpfister.github.io/2017/02/09/api-fixer/), and how it is a great free solution for grabbing up to date currency exchange rates. When I wrote the post I was still somewhat new to using hexo, and how to properly handle things when it comes to progressive enhancement of my simple static website.

<!-- more -->

# The situation

Say you have this situation in which you have a static web page, that has content that is augmented with data that is gained via an API call to some kind of micro service hosted at another domain ( such as [fixer.io](http://fixer.io) ). You want to have it so that if the call to the service fails, for whatever reason, an out of date, but still useful static alternative of the content is still presented. This results in a nice, robust solution, that will always present something of value, even in the event of failure.

## Hard Code State

This is a situation in which an API call has failed, and to make matters even worse JavaScript has failed to execute as well, so any value that exists as a javaScript value in a variable is not being displayed as well, as the necessary DOM manipulation has not taken place. 

This may happen because the visitor has JavaScript disabled, or for whatever reason my code broke when it ran client side. As such only what is "hard coded" in the HTML itself is what will be displayed to the visitor. This is a kind of worst case scenario fail safe of sorts, that helps to give be peace of mind in the event that everything goes wrong. Yes the data may be out of date, but at least the visitor sees something.

## Warn state

This is a situation in which javaScript executed, but something went wrong with the request to fixer. As such javaScript is working, but up to date data has not been retrieved. As such the same out of data data is being used as a fall back still.

As long as JavaScript continues to work, things can be programed in a fashion in which the project will keep trying again every once in a while, until a success state is achieved.

## Success state

This is a state in which my javaScipt program has succeed in retrieving up to date data from fixer.io. All is well in this case, and the only thing to care about at this point is if the program should still check in every once in a while for newer data. Considering that the values at fixer are only updated once a day, and the average visitor to my site spends no more than six minutes at a page, I would not say that is necessary, but in other projects like this it may be important.


```html
```