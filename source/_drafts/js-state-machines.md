---
title: Getting started with vanilla js state machines.
date: 2017-08-29 13:00:00
tags: [js,js13k]
layout: post
categories: js
---

When it comes to making an advanced project such as a game, state machines come to mind as a good place to start with the structure of a game.

<!-- more -->

## My state machine hello world

```js
(function() {
 
  // the current state
  var currentState = 'init',
 
    // the machine states
    states = {
 
      // called once to set things up
      init: function() {
 
        console.log('i run once, and set things up');
 
        currentState = 'run';
 
      },
 
      // runs on each frame tick
      run: function() {
 
        console.log('i run on each frame tick.');
 
      }
 
    },
 
    // the main app loop
    loop = function() {
 
      requestAnimationFrame(loop);
 
      states[currentState]();
 
    };
 
  // hold on to your butts
  loop();
 
}());
```