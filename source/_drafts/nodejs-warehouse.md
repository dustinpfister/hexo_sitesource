---
title: creating a simple database without MongoDB in node.js with warehouse
date: 2017-05-27 16:29:00
tags: [js,node.js,JSON,database]
layout: post
categories: node.js
---

I like MongoDB I really do, it's just that it does have it's shortcomings. I am no database expert, but I am pretty sure that I would be using something else if I was. Database expert or not, with some projects it may not be needed, and as such it makes things more complicated than they need to be. One drawback that I am aware of with mongoDB does not have to do with performance, or security, but with ease of setup and deployment. MongoDB is not a pure javaScript project, it depends on an additional back end written in a low level language along side the node environment. So when it comes to deployment, or setup it's another thing that needs to be installed, and setup on the server, or client in order to get things going.

<!-- more -->

Often doing so may be called for, there is just no getting around it, you need a few things other than node installed on the server. Still with some projects, such as a static site generator, it is not necessarily called for, as performance, and security, are not of dire concern. A simple solution involving a JSON file stored in a certain name space alone will work just fine. If that is the case then check out something called [warehouse](https://www.npmjs.com/package/warehouse)

One of the dependency of hexo.io is a project walled warehouse, it is used to create a

```js
var Database = require('warehouse');
var db = new Database();
 
var Post = db.model('posts', {
  title: String,
  created: {type: Date, default: Date.now}
});
 
Post.insert({
  title: 'Hello world'
}).then(function(post){
  console.log(post);
});
```