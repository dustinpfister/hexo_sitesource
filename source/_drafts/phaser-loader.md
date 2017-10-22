---
title: The phaser loader, a general overview.
date: 2017-10-10 12:32:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

This is a post that servers as a general overview of the asset loader in [phaser](http://phaser.io). As such I am covering most parts of it in general, and providing links to all of my other relevant content on asset loading in a phaser project. As such this post should serve as a good starting point about loading assets.

<!-- more -->

{% phaser_top %}

{% phaser_if_new_mess %}

## What to know before hand

Besides needing to have knowledge of front end javaScript in general, if you are still new to phaser it might be better to start with [my post on getting started with phaser](/2017/10/04/phaser-getting-started/). Once you have phaser up and running it would be best to get familiar with the main game object constructor more, and state machines, which will lead to wanting to know more about the loader which will bring you here on this post.

## The most basic loader example

This is a phaser loader hello world of sorts that I have come up with.

```js
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea',

        // here
    {

        preload : function () {
 
            game.load.image('test1', '/img/test1.png');
 
        },
 
        create : function () {
 
            game.add.sprite(0, 0, 'test1');
 
        }
 
    });
```

Often most of my game projects so far involve no assets at all, or just images. If that is the case then the image method is the first and foremost method of concern with phasers loader.

## Conclusion

There is much more to cover just with phasers loader. I am a visual person, as such I have not covered anything on audio with phaser so far. This might change if I every get around to playing with audio, but I will want to get into the sprites, and the physics engine before that.

My [posts on phaser](/categories/phaser/) asset loading, and on phaser in general is expanding very fast, as such this post, and many others on phaser will be expanded on, and revised as time goes on. Phaser is a pretty advanced project, and it might be possible that I will end up with 100+ posts on phaser alone, as of this writing I am just getting started.

{% phaser_bottom %}
