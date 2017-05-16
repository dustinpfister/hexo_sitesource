---
title: using yaml in place of JSON in node.js with js-yaml
date: 2017-05-16 13:45:00
tags: [js,node.js,JSON, hexo]
layout: post
categories: node.js
---

Why use

<!-- more -->

## What is YAML

[YAML](http://yaml.org/) is a recursive acronym for YAML Ain't Markup Language, that is used for data serialization. Often I see it used for configuration files in place of JSON (JavaScript Object Notation), as a means of soft coding settings. This is the case in [hexo](https://hexo.io), for the purpose of configuring settings for hexo itself, as well as the theme that is being used.


## Why use YAML over JSON?

In most cases JSON works just fine, but YAML is used in a wider range of programing environments outside that of javaScript.

## parsing YAML with js-yaml

This post will help you get started with js-yaml as a means of parsing a YAML file into an object that you can then use to soft code you node.js application.

## YAML file eample

```yaml
# username
userName: dustin
 
# config options
options :
   displayTime : true
   displayGreating : true
```

## The demo script

```js
var yaml = require('js-yaml'),
fs = require('fs');

fs.readFile('./config.yml', 'utf8', function (e, data) {

    var conf;

    if (e) {

        console.log('config.yml not found.');

    } else {

        conf = yaml.safeLoad(data, 'utf8');

        if (conf.options['displayGreating']) {

            console.log('hello ' + conf.userName);

        }

        if (conf.options['displayTime']) {

            console.log('the time is: ' + new Date());

        }

    }

});
```

<!-- notes 

http://stackoverflow.com/questions/1726802/what-is-the-difference-between-yaml-and-json-when-to-prefer-one-over-the-other


-->