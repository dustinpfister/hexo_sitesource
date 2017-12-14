---
title: Controllers in angular
date: 2017-12-14 09:21:00
tags: [js,node.js,hapi,angular]
layout: post
categories: angular
id: 113
updated: 2017-12-14 10:1:38
version: 1.1
---

[Controllers](https://docs.angularjs.org/api/ng/directive/ngController) are a very important part of [Angular.js](https://angularjs.org/) development. They are a way of presenting data to an HTML view via a $scope, and creating a single bind between view and model.

In This post I will be covering my [controller-basic](https://github.com/dustinpfister/test_angular/tree/master/ejs/demos/controller-basic) demo of my [test_angular](https://github.com/dustinpfister/test_angular) project

<!-- more -->

## Whats first

This is not my getting started post [I got that out of the way](/2017/12/13/angular-getting-started/). I also assume you have at least a basic understanding of html, javascript, node, ect.

## The ng-controller directive

The other directive that I am using in this demo is the ng-controller directive, which attaches a controller class to the element. This is a key feature of the MVC design of angular, which will become clearer in additional future posts. 

For now just know that the string 'Hello World' in my javaScript is independent from my html, and any change to the string will effect the view of it. That is I do not have to make a change, then go to update my html.


## Basic Angular Controller example

### HTML
```html
<div ng-app="app" ng-controller="basic-control" >
 
    <p>{{mess}}</p>
 
</div>
```

### JS
```js
var app = angular.module('app', []);
 
app.controller('basic-control', function ($scope) {
 
    $scope.mess = 'Hello World';
 
});
```