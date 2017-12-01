---
title: Using Chart.js to make and work with canvas charts with javaScript
tags: [js, canvas]
categories: canvas
date: 2017-12-01 11:48:00
id: 102
updated: 2017-12-1 15:46:1
version: 1.0
---

These days I am working out some projects that have to do with analyzing text, and it would be nice to find a way to visualize that data with canvas elements. I was thinking of making my own solution, but I am glad that I have found [charts.js](http://www.chartjs.org/docs/latest/) as it is pretty much just what I had in mind, and seems to work great!

<!-- more -->

## Basic example of charts.js use

```js
    var ctx = document.getElementById('thecanvas').getContext('2d'),
 
// chart
chart = new Chart(ctx, {
 
        type: 'line',
 
        data: {
 
            labels: ['one', 'two', 'three'],
            datasets: [{
 
                label: 'umm',
                borderColor: '#ff0000',
                data: [10, 20, 50]
 
            },{
 
                label: 'yeah',
                borderColor: '#00ff00',
                data: [5, 7, 12]
 
            }]
 
        }
 
    });
```