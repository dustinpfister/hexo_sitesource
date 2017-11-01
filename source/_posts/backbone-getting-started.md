---
title: Getting started with backbone.js
date: 2017-11-01 12:10:00
tags: [js,backbone]
layout: post
categories: backbone
id: 79
updated: 2017-11-1 15:14:0
version: 1.1
---

After viewing a few terms on [Google trends](https://trends.google.com/trends/explore?q=backbone,underscore,lodash) it appears that [backbone.js](http://backbonejs.org/) is still popular these days. So as such I will commit to writing a few posts on it, and as always with this sort of thing, it will require a getting started type post.

<!-- more -->

## Setting up

[Backbone.js](http://backbonejs.org/) uses [underscore](http://underscorejs.org/) as its one dependency, although it may not be need it is also a good idea to have [jQuery](https://jquery.com/) at the ready as well. So I just put together a project folder containing all of these JavaScript files in a lib folder, and also started a demo folder in which to start making backbone demos. Each demo will of course contain links to these files, loading jQuery first, then underscore, and finally backbone.

## Backbone hello world

So now that I have a work environment together, there is the concept of a stupid simple hello world example, just for the sake of, well getting started. So my first backbone project will be a hello world project in my demos folder.

So in my demos folder I will have a hello_world.html file that will look like this:

```html
<!doctype html>
<html>
    <head>
        <title> backbone.js demo </title>
    </head>
    <body>
 
        <!-- a single container div for now -->
        <div id="container"></div>
 
        <!-- the files I will need -->
        <script src="../lib/jquery.3.2.1.js"></script>
        <script src="../lib/underscore.1.8.3.js"></script>
        <script src="../lib/backbone.1.3.3.js"></script>
 
        <!-- I will also be linking to my own js file-->
        <script src="hello_world.js"></script>
 
    </body>
 
</html>
```

and a hello_world.js file that will look like this:

```js
var View = Backbone.View.extend(
 
    {
 
        el : $('#container'),
 
        initialize : function () {
 
            this.render();
 
        },
 
        render : function () {
 
            this.$el.html('hello world');
 
        }
 
    }
 
);
 
// creating an instance of the Model
var app = new View();
```

So far I have not even worried about setting up an html server, sometimes I can get away with just opening up the javaScript file with a ctrl+o in chrome. When I do so I end up seeing hello world in the browser, so far so g-g-good.

## Templates

Now that I have a hello world example, a next step might be to get up to speed on how to deal with templates in backbone. Because I am using underscore there is the \_.template method in underscore that can be used to create a template, and then I can just pass an object to that template.

As such I can write the line in my render method like this:
```js
this.$el.html(_.template('<p>message: <%- mess %></p>')({mess:'hello world'}));
```

Or better yet I can define a template in the View, so then my View can look like this then:

```js
var View = Backbone.View.extend(
 
    {
 
        el : $('#container'),
 
        template : _.template('<p>message: <%- mess %></p>'),
 
        initialize : function () {
 
            this.render();
 
        },
 
        render : function () {
 
            this.$el.html(this.template({mess:'hello world'}));
 
        }
 
    }
 
);

// creating an instance of the Model
var app = new View();
```


## Having a model

```js
var Model = Backbone.Model.extend({

        hardMess : 'Hello Model! ', // a hard coded message
        mess : '', // the current message
        i : 0, // and index value
 
        // this method will be called once when an
        // instnace of the model is created
        set : function () {
 
            this.mess = this.hardMess;
            this.i = 0;
 
        },
 
        // set message basses on current index
        setMess : function () {
 
            this.mess = '';
 
            var i = 0,
            len = this.hardMess.length,
            ci = this.i;
            while (i < len) {
 
                this.mess += this.hardMess[ci];
 
                ci += 1;
                if (ci >= len) {
 
                    ci = 0;
 
                }
 
                i += 1;
            }
 
        },
 
        // what to do when there is a user action
        action : function () {
 
            // step index
            this.i += 1;
 
            // set back to zero if we reach the end
            if (this.i >= this.hardMess.length) {
 
                this.i = 0;
 
            }
 
            // set the message
            this.setMess();
 
        }
 
    });
 
var m = new Model();
 
console.log(m.i + ' : ' + m.mess); // 0 : Hello Model! 
 
m.action();
 
console.log(m.i + ' : ' + m.mess); // 1 : ello Model! H
```


## Add an event In My View

So now there is the question of how to get started with events

First I need to restructure my html to something where I have a container, and separate display, and input elements inside that container.

```html
<div id="container">
 
    <div id="disp"></div>
    <input id="action" type="button" value="action">
 
</div>
```

```js
var View = Backbone.View.extend({
 
        // so my container element is still the container
        el : $('#container'),
 
        // I am now using the Model I made in this view
        model : new Model(),
 
        // same old template
        template : _.template('<p>message: <%- mess %></p>'),
 
        // So Now I am adding an event
        events : {
 
            // it is a click event, for the element
            // with an id of action, and I am calling
            // the onAction method of this view when
            // it happens.
            'click #action' : 'onAction'
 
        },
 
        initialize : function () {
 
            this.render();
 
        },
 
        render : function () {
 
            // now I am finding the display element in the container
            // and I am updating the template with the instance of my Model
            this.$el.find('#disp').html(this.template(this.model));
 
        },
 
        // the onAction method
        onAction : function () {
 
            console.log('action!');
 
            // call the action method of the model
            this.model.action();
 
            // render again.
            this.render();
 
        }
 
    });
 
// creating an instance of the Model
var app = new View();
```