---
title: Making my chart element using angular.js and chart.js
date: 2017-12-20 14:30:00
tags: [js,node.js,hapi,angular,canvas]
layout: post
categories: angular
id: 119
updated: 2017-12-20 14:40:16
version: 1.0
---

I have been diving into [angular.js](https://angularjs.org/) these days, and it is turning out to be one of those things I wish I did a long time ago. I have been making a lot of demos for my [test_angular](https://github.com/dustinpfister/test_angular) project and then writing about them here. For one of my demos I thought it would be fun to begin to explore this idea of using angular to extend html by making my own elements. A little ways back [I wrote a post](/2017/12/01/canvas-chartjs/) on [chart.js](http://www.chartjs.org/) Which is a pretty cool project for making canvas charts, so why not some kind of chart element that makes use of angular.js and chart.js?

<!-- more -->

## The chart element

So at the time the chart element I made looks like this:

```html
<x-chart 
    type="line"
    width="320"
    labels="week1;week2;week3;week4"
    colors="red;blue"
    datasets="impressions[1024;700;650;1200 clicks[35;29;14;45"></x-chart>
```

Of course this is all data that I use in the link method of the directive that I made. I just wrote a post on [how to make custom directives]() so I will not get to deep into that here.
