---
title: Node.js powered image processing thanks to Jimp.
date: 2017-04-10 19:29:00
tags: [js,node.js,jimp,automation]
layout: post
id: 12
categories: node.js
updated: 2017-4-11 16:43:55
version: 1.0
---

As of late I have touched base on how to go about setting up a gallery for a website. Lots of thoughts come to mind with this such as how to go about storing the images. Should they be stored as part of the sites structure itself? Should they be stored in a database, and accessed by way of an api or sorts? Should everything be developed and maintained by me, or should I look into what services are available for such a thing?

<!-- more -->

This is something I would like to work out, not just clients, but myself as well as I would like to have a few things going on at my site other than just this blog. So for now I have been looking into how to go about doing things on my own, and as such I would want to get into image processing with node.js. As such this is how I have come across [Jimp](https://www.npmjs.com/package/jimp).

## Image resize automation

One thing that is important when it comes to maintaining a large collection on images is having a system in place to automate the process of producing alternate resolution versions of each image. Say each source image is over five megapixels resulting in file sizes of about two to three mega bytes per image. If I place say about sixteen images per page that will result in a page download size of over forty megabytes.

Jimp can help with this process, doing a simple resize is as easy as this.

```js
// open a file called "test.png"
Jimp.read("test.png", function (err, img) {
 
    img.resize(32,32)
   .write('small.jpg'); // save
 
});
```

As you would expect this will result in an image called test.png to be resized to a 32 by 32 sized thumb image.

## preserving aspect ratio

Most images do not come in a one by one aspect ratio, and in some cases I might want lower resolution images with the same aspect ratio as the source image. For example say I have a source image that is 1600 by 900, and I want a scaled down version that is 32 by 18 rather than 32 by 32. This can be achieved with Jimps scaleToFit method.

```js
// open a file called "test.png"
Jimp.read("test.png", function (err, img) {
 
    img.scaleToFit(32, Jimp.AUTO, Jimp.RESIZE_BEZIER)
   .write('same_ratio.jpg'); // save
 
});
```
This will result in just what I wanted, using Jimp.AUTO will set the height to the proper scaled down resolution with respect to the aspect ratio of the source image.

## More then one size

I will most likely want to make an array of files. Some mobile friendly, some a bit more detailed.

```js
var Jimp = require("jimp");
 
// open a file called "blues.jpg" in the source folder
Jimp.read('./source/blues.jpg', function (err, img) {
 
    var sizes = [64, 128, 256],
    quality = 10;
 
    if (err) {
 
        throw err;
 
    }
 
    // resize for all sizes
    sizes.forEach(function (size) {
 
        console.log('resize to: ' + size);
 
        // resize, and save to the build folder
        img.scaleToFit(size, Jimp.AUTO, Jimp.RESIZE_BEZIER)
        .quality(quality)
        .write('./build/blues_q_' + quality + '_s_' + size + '.jpg'); // save
 
    });
 
});
```

I was thinking about making a structure in which the next write will not start until the first completes, but this seems to work okay.

# Future concerns

The great thing about jimp is that it is all written in JavaScript, however that is the bad thing as well. Image scaling is always going to take some resources though. I  also do have to admit that I like that I don't have to install any additional back ends to get things going. Still making child process calls to something written in a lower level language might be a bit faster.