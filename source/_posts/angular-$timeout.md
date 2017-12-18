---
title: Having a loop in angular with $timeout
date: 2017-12-18 10:29:00
tags: [js,node.js,hapi,angular]
layout: post
categories: angular
id: 117
updated: 2017-12-18 10:33:13
version: 1.0
---

When first starting out with angular I found myself having logic 

<!-- more -->

```js
var app = angular.module('app', []);
 
app.factory('loop', function ($timeout) {
 
    // a state
    var state = {
 
        start: new Date(),
        time: 0,
        count: 0,
        ms: 250
 
    },
 
    // loop
    loop = function () {
 
        var now = new Date();
 
        state.time = now - state.start;
 
        state.count += 1;
 
        $timeout(loop, state.ms);
 
    };
 
    // start loop
    loop();
 
    // api
    return {
 
        // grab the current state
        grab: function (func) {
 
            return state;
 
        }
 
    };
 
});
 
app.controller('fact-control', function ($scope, loop) {
 
        // reference the state object
        var state = loop.grab();
        $scope.state = state;
 
});
```

```html
<div ng-app="app" ng-controller="fact-control" >
 
    <p>start time {{state.start}}</p>
    <p>time {{state.time}}</p>
    <p>count every {{state.ms}} ms</p>
    <p>count: {{state.count}}</p>
 
</div>
```

