---
title: The Phaser components mega post
date: 2017-10-23 14:39:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

[Phaser](http://phaser.io) display game objects include a certain collection of components that allow for certain features for the game object such as allowing for an input hander to be set up for it, or give it a few core values that should be the same across different game objects.

<!-- more -->

{% phaser_top %}

{% phaser_if_new_mess %}

## Phaser game objects vs the main game object

In the Phaser API documentation display objects are refereed to as game objects, game objects should not be confused with the main game object that is returned with the main game constructor method (Phaser.Game). Typically in a project you are dealing with just one main game object, but many game objects. 

## What is a Game Object?

It is any object that is a sprite, text, image, or a boxed off area of some kind where something is going on. As such they all hold certain values in common, but do not necessarily need the exact same values, and functionality. This is where components come in.

## What is a Game Object Component?

Components give a certain set of values, and methods, to a game object. Many components exist in phaser, and give display objects certain features such as allowing for an input handler to be set up for it, or allowing for a certain core set of values.

## How many components are there in phaser?

As of 2.6.2 it looks like there are some 23 components thar are in use for veriause things to work with in phaser.

## InputEnabled

This is by far one of the most important components to know about in phaser. It allows for me to set up input handling for a certain display object that uses this component (Sprites, Graphics, ect).

{% phaser_bottom %}
