---
title: Playing with lines in phaser with Graphics.lineTo
date: 2017-10-22 08:40:00
tags: [js,phaser,games]
layout: post
categories: phaser
---

I have [made a post on graphics in general](/2017/10/21/phaser-graphics/) in phaser and as such I spent some time playing with Graphics.lineTo, and Graphics.moveTo when it comes to drawing lines in phaser. Because there is a great deal that can be done with lines, and graphics I thought that this needs a post of it's own.

<!-- more -->

## Just drawing a single line

To draw A line I first need a Graphics display object to work with, once I have that it is just a matter of using moveTo to move to a certain point, relative to the display object position, and then use lineTo to actually draw the line.