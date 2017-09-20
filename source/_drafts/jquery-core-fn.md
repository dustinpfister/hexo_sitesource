---
title: Using jQuerys core \$.fn alias for the jQuery prototype
date: 2017-09-20 16:08:00
tags: [js,jquery]
layout: post
categories: jquery
---

So what is $.fn you might ask? The quick anwser is that it is an alias for the jQuery object prototype. So it is just a shorthand for $.prototype, this is something that I myself do now and then to just help reduce the volume of text in a project.

<!-- more -->

So to review there is the jQuery core methods, and then there is the jQuery prototype methods. That is there are methods that are contained in the main jQuery function (or Object), what are what I have come to call \"The core methods\" methods like $.each(), and then there are methods in the jQuery object prototype such as $('.foo').each().