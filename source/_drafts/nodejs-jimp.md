---
title: Node.js powered image processing thanks to Jimp.
date: 2017-04-10 19:29:00
tags: [js,node.js,jimp,automation]
layout: post
categories: node.js
---

As of late I have touched base on how to go about setting up a gallery for a website. Lots of thoughts come to mind with this such as how to go about storing the images. Should they be stored as part of the sites structure itself? Should they be stored in a database, and accessed by way of an api or sorts? Should everything be developed and maintained by me, or should I look into what services are available for such a thing?

This is something I would like to work out, not just clients, but myself as well as I would like to have a few things going on at my site other than just this blog. So for now I have been looking into how to go about doing things on my own, and as such i would want to get into image processing with node.js. As such this is how I have come across [Jimp](https://www.npmjs.com/package/jimp).

## Image resize automation

```js
var Jimp = require("jimp");
 
// open a file called "test.png"
Jimp.read("./source/blues.jpg", function (err, img) {
 
    var sizes = [64, 128, 256],
    quality = 10;
 
    if (err) {
 
        throw err;
 
    }
 
    // resize for all sizes
    sizes.forEach(function (size) {
 
        // resize, and save
        //img.resize(size, size) // resize
        img.scaleToFit(size, Jimp.AUTO, Jimp.RESIZE_BEZIER)
        .quality(quality)
        .write('./build/blues_stf_BEZIER_q' + quality + '_' + size + '.jpg'); // save
 
    });
 
});
```