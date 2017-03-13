---
title: Dig Game - Hide Methods
date: 2017-03-11 13:23:00
tags: [js,games]
layout: post
categories: games
---

So as of late I have been working on my first [phaser](phaser.io) powered game, that so far I just simply call "dig". As of this writing it is the first, and only game I have up in my games section of my github pages site. If you care to read what it is all about in detail check out the [readme at the main branch on github](https://github.com/dustinpfister/game_dig). However for the sake of just this post I would like to write about what I am calling "hide methods"

## What is a "hide method"?

The object of the game is to dig a land tile which may or may not contain an amount of in game currency that I call "pebble". Once you dig a tile, you have the option of digging another tile on the same land stack layer, or drop down to a lower layer.

As you may have guessed a "hide method" is an algorithm that determines the distribution of a given amount of total land stack pebble.

## Some thoughts to consider before designing a hide method.

* How will the total stack pebble be distributed per stack layer?

* How will an amount of layer pebble be distributed to each tile?

* What does the design represent, as such what should it be called?

* Is the distribution of total stack pebble fair, or well balanced?

## Some thoughts on distribution of available wealth.

As stated the purpose of a hide method is to distribute a total sum of pebble into a given land stack. With the general idea of what prompted the games development in the first place in mind. I have come to think that the main hide method in use should hide pebble in a "many but low, to few but high" dynamic. In other words there should be allot of loot tiles on the surface layer, but each tile will contain very small amounts of pebble, while the bottom layer will be the opposite of that.

This is what comes to mind when I think of the possible returns of a lateral vs linear approach of personal development. Becoming a "jack of all trades" will likely result in payoff, but in low amounts as you are a jack, not a master. While becoming a master at something might give great payoffs, but it is risky if it turns out that it is something that is not that marketable.

So far I have been developing a hide method that I just simply call "normal1" which holds true to this idea. However It goes without saying that this is just one aspect of the game that I can have a whole lot of fun with.

## Hide methods named after economic systems.

### The socialist hide method

Pretty straight forward to understand how that one would work. Just take the total sum of stack pebble, and divide it by the number of stack tiles. As simple as it may be there would still be some pit falls, such as what to do when the amount of stack pebble is less than the number of stack tiles. In addition there is something to be said about remaining pebble, and how it should be dished out.

### The capitalist hide method.

I would say the design would be one in which a single tile at the bottom of the stack simply holds the whole sum of stack pebble, pure and simple. This is what comes to mind when I think of pure, complete, unregulated capitalism. As such that would be a stupid simple one to write.

```js
land.addHideMethod({
 
    name : 'capitalist',
 
    method : function(hideKit){
 
        var options = hideKit.makeOptions(land.d-1),
 
        tile = hideKit.spliceFromOptions(options);
 
        hideKit.setAmount(tile,land.totalPebble);
 
    }
 
});
```

