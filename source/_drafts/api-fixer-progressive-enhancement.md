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

```html
```