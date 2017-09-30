---
title: Adding classes to a selection of elements using jQuerys addClass
date: 2017-09-30 15:25:00
tags: [js,jquery]
layout: post
categories: jquery
---

What to add a CSS class to a selection of elements without typing class="foo" over and over again?

<!-- more -->

So is there something about this that bothers you?

```html
<div class="wrap_main">
    <p class="text_nice">one</p>
    <p class="text_nice">two</p>
    <p class="text_nice">three</p>
    <p class="text_nice">four</p>
    <p class="text_nice">tive</p>
</div>
```

Me too, yes there are a lot of ways of doing this differently, some of which can be done with CSS alone. However this is a jQuery post, as such it can be done with addClass in jQuery.

```js
$('.wrap_main>p').addClass('text_nice');
```