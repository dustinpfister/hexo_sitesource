---
title:  Progressive enhancement of static site structurer, with Hexo, and the Fixer.io JSON API
date: 2017-05-18 14:41:00
tags: [js,JSON,automation]
layout: post
categories: api
---

{% mytags_postwords fixer.io,api&#32;fixer,jsonp,hexo,progressive,enhancement %}

A few months back I [wrote a post on the fixer api](https://dustinpfister.github.io/2017/02/09/api-fixer/), and how it is a great free solution for grabbing up to date currency exchange rates. When I wrote the post I was still somewhat new to using hexo, and how to properly handle things when it comes to progressive enhancement of my simple static website.

<!-- more -->

# The situation

Say you have this situation in which you have a static web page, that has content that is augmented with data that is gained via an API call to some kind of micro service hosted at another domain ( such as [fixer.io](http://fixer.io) ). You want to have it so that if the call to the service fails, for whatever reason, an out of date, but still useful static alternative of the content is still presented. This results in a nice, robust solution, that will always present something of value, even in the event of failure.

## Hard Code State

This is a situation in which an API call has failed, and to make matters even worse JavaScript has failed to execute as well, so any value that exists as a javaScript value in a variable is not being displayed as well, as the necessary DOM manipulation has not taken place. 

This may happen because the visitor has JavaScript disabled, or for whatever reason my code broke when it ran client side. As such only what is "hard coded" in the HTML itself is what will be displayed to the visitor. This is a kind of worst case scenario fail safe of sorts, that helps to give be peace of mind in the event that everything goes wrong. Yes the data may be out of date, but at least the visitor sees something.

## Warn state

This is a situation in which javaScript executed, but something went wrong with the request to fixer. As such javaScript is working, but up to date data has not been retrieved. As such the same out of data data is being used as a fall back still.

As long as JavaScript continues to work, things can be programed in a fashion in which the project will keep trying again every once in a while, until a success state is achieved.

## Success state

This is a state in which my javaScipt program has succeed in retrieving up to date data from fixer.io. All is well in this case, and the only thing to care about at this point is if the program should still check in every once in a while for newer data. Considering that the values at fixer are only updated once a day, and the average visitor to my site spends no more than six minutes at a page, I would not say that is necessary, but in other projects like this it may be important.


## The static HTML

So The static html that will go inti the post will end up looking something like this:

```html
<div class="augmented-content">
 
  <h1>Dollars to Rupess</h1>
 
  <p>status: <span id="fixer-status" class="fail-text">hard code</span></p>
  <p>date: <span id="fixer-date">2017-05-17</span></p>
  <p>rate: <span id="fixer-rate">64.101</span></p>
 
  <table>
    <tr>
      <td>Dollars</td>
      <td>Rupess</td>
    </tr>
    <tr>
      <td>1000</td>
      <td id="fixer-amount">64,101</td>
    </tr>
  </table>
 
</div>
```

The data that goes into this HTML can be updated manually, or I could have a automation script of some kind that does it. In any case it should inform the visitor of how dated that data may be.

## The javaScript app

```js
(function() {
 
    var amount = 1000,
      status = 'warn',
 
      // js hard coded data
      data = {
 
        base: 'USD',
        date: '2017-05-17',
        rates: {
 
          INR: 64.101
 
        }
 
      },
 
      get = function(id) {
 
        return document.getElementById(id);
 
      },
 
      // augment the old static content, with current data
      augmentTable = function(res) {
 
        var statEl = get('fixer-status');
 
        if (status === 'success') {
 
          statEl.innerHTML = 'success';
          statEl.className = 'success-text';
 
        } else {
 
          statEl.innerHTML = 'warn';
          statEl.className = 'warn-text';
 
        }
 
        get('fixer-amount').innerHTML = amount * data.rates.INR;
        get('fixer-date').innerHTML = data.date;
        get('fixer-rate').innerHTML = data.rates.INR;
 
      },
 
      // making a request for a more up to date rate
      updateTable = function() {
 
        var req = new XMLHttpRequest();
 
        req.open('GET', 'https://api.fixer.io/latest?base=USD');
 
        req.onreadystatechange = function() {
 
          if (this.readyState === 4 && this.status === 200) {
 
            data = JSON.parse(this.response);
            status = 'success';
 
            console.log(data);
 
            augmentTable();
 
          }
 
        }
 
        req.send();
 
      };
 
    // agument with what we have
    augmentTable();
 
    updateTable();
 
  }
  ());
 
```

So there is always a better way of doing it, but hopefully you get the idea in mind here. You have the hard coded HTML only level content that is what is always displayed, then you have a state in which javaScript is working but for whatever the reason it was unable to gain more up to date data from fixer.io. Then if all goes well in which the code does not break, and a response is gained, you have a final success state in which the static content is updated. This is an example of progressive enhancement working the way that it should, where there is always a fall back of sorts, that can potential get enhanced.