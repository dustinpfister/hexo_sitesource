---
title: Getting started with deterministic systems using javaScript and canvas.
date: 2017-08-05 09:32:00
tags: [js,discovery,deterministic,canvas,animation]
layout: post
categories: discovery
---

Now that I have a decent understanding of a certain programing environment I find myself facing a new kind of problem with respect to what it is that I want to do with my coding ability, that is why I stared the [discovery category](/categories/discovery/) of [this site](/). 


Anyway in my efforts to find something interesting to work on, I have come across the concept of something called a [deterministic system](https://en.wikipedia.org/wiki/Deterministic_system). From what I have found out so far it is a fancy name for a system in which there is no randomness, or variation of any kind when the system exists in a state with the same time index, and initial model values.

<!-- more -->

Think of it this way, a deterministic system is more like a movie than that of a video game, but it is not just a fixed collection of frames. Each frame is the result of some kind of procedure, and although each frame is the same every time given the same time index value, this is only true if the initial state is the same. I can play around with the initial state values, changing the outcome of all the frames of the movie.

## The criteria.

Do not let the fancy name fool you, a deterministic system can be very complicated, but they can also be stupid simple as well. Regardless of how simple or complex this kind of system is, it should meet certain criteria which I would say follows these rules.

* It has a certain initial state
* It has one or more methods that change that state over time (it's a kind of animation).
* The methods do not make use of any kind of randomness, user input, or any other kind of data that will result in variations in future states.
* Any frame will be the same as it was last time the simulation ran, assuming the initial state has not changed.
* variation of any kind is only achieved by way of manipulation of the initial state.

## The basic box deterministic system

So a hello world of sorts is in oder for this so lets start with how I would go about setting up just some basic concepts for this, that I can then expand into a full application.