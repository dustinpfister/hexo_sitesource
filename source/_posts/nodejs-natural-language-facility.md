---
title: Traversing over an object in node.js
date: 2017-08-26 15:16:49
tags: [js,node.js]
layout: post
categories: node.js
id: 111
updated: 2017-12-11 9:40:14
version: 1.0
---

I have been writing this blog for the better part of a year, and so far it seems like it is just starting to take off. I am not spaming my content on social media (as of this writing at least), and I also so far am not spending even so much as a single penny a month on paid advertising. In stead I am focusing entirely on what needs to be done to help improve organic search results, so far I am doing okay, but there is much room for improvement. As such I have wanted to find, or make some tools to help me with keyword planing, and general evaluation of my sites content in a [node.js](https://nodejs.org/en/) environment.. In my travels browsing and searching I have come across the npm package called [natural](https://www.npmjs.com/package/natural).

<!-- more -->

Natural is a great little tool to use with any node.js project If you have interest to do anything that involves text or [lexical analyses](https://en.wikipedia.org/wiki/Tokenization_(lexical_analysis)), or natural language processing. It has some of the basic tools you would expect such as a tokenizer, as well as more advanced tools that help with the process of finding out how well content may rank with respect to certain terms.

## The very basics of text, or lexical analyses.

This topic is a little advanced to maybe it would be best to start off with a simple vanilla js example of text analyses.