---
title: Help with confusion over javaScripts Not a Number (NaN), and the isNan methods.
date: 2017-09-23 14:25:00
tags: [js,blog,corejs,lodash]
layout: post
categories: js
---

In JavaScript there is a special number value that happens as a result of a math operation with a String, or a variety of other situations such as division of zero over zero. 

<!-- more -->

## The nature of NaN

```js
console.log(0/0); // NaN
console.log(1 * 'foo'); // NaN
console.log(NaN); // NaN
```

What is strange about NaN is that it does not equal anything, not even itself. Because of this it makes testing for NaN a little strange. There is a well supported native method called isNaN, but also Number.isNaN both of which work differently.

## isNaN

So to some extent isNaN works as expected, but it also returns true for values that are not NaN, such as undefined.

```js
isNaN(12); // false
isNaN(NaN); // true
isNaN(undefined); // true
```

this behavior is not wrong in a way values like undefined, and null are Not Numbers, but it still may not really be the behavior that is expected.
