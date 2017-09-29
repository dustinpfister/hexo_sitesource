---
title: Attaching mousedown event handlers to a collection of elements using jQuery.
date: 2017-09-29 15:42:00
tags: [js,jquery]
layout: post
categories: jquery
---

Attaching and event hander to an html element in javaScript is fairly simple it often involves grabbing a reference to an element, then using one of several options to define a method that will fire when a certain event occurs.

<!-- more -->

## Attaching an event in vanilla js

Attaching a single event hander

something like this:

```html
<div id="the_div">I am the div</div>
<script>
document.getElementById('the_div').addEventListener('mousedown', function(e){
 
   console.log(e.target.innerHTML); // I am the div
 
});
</script>
```

So there is the issue with addEventListener not working on old versions of IE, but if you do not care about that there is also the problem of how to go about not attaching a handler to a collection of elements.

## Attaching a handler to a collection of elements in vanilla js

Doing the same for a collection of elements is a a little more intense.

```js
 <p>one</p>
 <p>two</p>
 <p>three</p>
 
 <script>
 
 [].forEach.call(document.getElementsByTagName('p'), function(el){
 
    el.addEventListener('mousedown', function(e){
 
        console.log(e.target.innerHTML); // inner html of the p
 
    });
 
 });
 
 </script>
```

Using getElementsByTagName does not return an array, but it does return an array like object, so I can use Array.forEach to loop over the elements with call. Yes an easier way would be to use the newer document.querySelectorAll method in place of getElementsByTagname like this:

```js
document.querySelectorAll('p').forEach(function(el){
 
    el.addEventListener('mousedown', function(e){
 
        console.log(e.target.innerHTML); // inner html of the p
 
    });
 
 });
```

but does that still compare to this in jQuery?

```js
$('p').mousedown(function(e){
 
    console.log(e.target.innerHTML); // I am the div
 
});
```

This is why jQuery is still very popular, event though its original purpose is no longer needed as badly as in once was. If it is in the code base it helps to keep things concise.
