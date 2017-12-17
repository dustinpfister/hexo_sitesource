---
title: The deal with the angular.js factory service
date: 2017-12-16 10:02:00
tags: [js,node.js,hapi,angular]
layout: post
categories: angular
id: 115
updated: 2017-12-17 11:0:24
version: 1.1
---

I am still somewhat new with angular.js, but I have been working hard on making a lot of cool demos, and apps with in in my test_angular project. When first starting out I would have logic in my controllers, which is not what they are for, they should be thin. In addition I would keep writing some of my modules in my old vanilla js manner, which works of course, but I am using angular so I should do something that makes my modules angular like. One way to do this is to use a Factory, It is one of three ways to make what is called a service in angular speak.

<!-- more -->


## Basic Angular Modules Factory Example

So to get started understating factory's and why they are awesome, lets start with a real basic and easy to understand example.

### HTML

With the html I will just have a single div element with the usual ng-app directive to bootstrap the module that I will call _app_, and a single controller that I will call _fact-control_

```html
<div ng-app="app" ng-controller="fact-control" >
 
    <p>mess: {{mess}}</p>
 
</div>
```

### JS

With the javaScript I will of course have my _app_ module, and also my factory that I will call _Fact_ that will be used in my controller _fact-control_.

```js
var app = angular.module('app', []);
 
app.factory('Fact', function () {
 
    return {
 
        mess: 'I am a factory'
 
    };
 
});
 
app.controller('fact-control', function ($scope, Fact) {
 
    $scope.mess = Fact.mess
 
});
```

Right off the bat there are three things that are great about this:

* My object that contains a message value to display is not stored in a controller.
* I can separate everything into separate into three JavaScript files as long as they are loaded in a linear order, breaking down what might eventually become a complex application.
* I can define my own services that can be used in controllers, and other services like that of $scope, and $http.