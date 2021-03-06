---
title: Why I still code in ES5 javaScript
date: 2017-04-26 16:02:00
tags: [js]
layout: post
categories: js
---

It is now 2017, and es2015 (formally known as ES6) standard javaScript has been out for a few years now. So why am I, and a whole lot of other developers still typing var all the time rather than let or const? That's a good question, and I have a lot to say about that, so this post alone will likely not do it justice. Still I thought I would get a few of the ideas as to why that are rattling around in my head out there.


<!-- more -->


## The concept is what matters most, not the expression of that concept.

I can't tell you how many blog posts I have read where the English is just absolutely awful. Misspellings, grammar errors, and hard evidence that the person writing the post is not a native English speaker litter the content of the page. Still after reading the post, I get the message that is being presented, and it helps me solve a certain problem that I was dealing with. Therefore the post is of value to me, poor English or not.

I feel the same way about javaScript, just like English it is a language of sorts. A language that can be used to express some pretty amazing things. Sometimes the code is elegant, other times it may be a bit messy, but what really matters is the concept that is being expressed with it. I don't care if a blogger writes there examples in ye old ES5, that is actually not all that old in the grand scheme of things. Mainly what I care about is of course the concept.

## The Pythagorean theorem.

Take for example the [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem) it gets it's name from the Greek mathematician named Pythagoras who died some 2500 years before the invention of javaScript as a means of high level computer programming.


I quickly put together this es5 code that expresses the concept that is the Pythagorean theorem.

```js
// return the length of a hypotenuse if you know the legs
var getHypo = function(leg1, leg2) {
 
    return Math.sqrt(leg1 * leg1 + leg2 * leg2);
 
  },
 
  // get the length of a leg, if you know the length of one leg, and the hypotenuse
  getLeg = function(hyp, leg) {
 
    return Math.sqrt(hyp * hyp - leg * leg);
 
  },
 
  // know all sides, but is it a right triangle?
  isRight = function(a, b, c) {
 
    return a * a + b * b === c * c;
 
  };
 
console.log(isRight(10, 24, 26)); // true (right triangle)
console.log('get hypo: ' + getHypo(12, 9)); // 15 (the length of the hyponuse)
console.log('get leg: ' + getLeg(15, 9)); // 12 (the length of the leg)
```

Yes this could easily be expressed as ES2015 javaScript, it could also be expressed in Basic. Yes you heard me, Basic.

```
10 CLS
20 LET a = 12
30 LET b = 9
40 LET c = SQR(a * a + b * b);
50 PRINT c
```

It could also be expressed in a wide range of other languages, and forms of notation. It can be expressed visually with graphics involving pictures of right triangles. The point I am trying to make here is that it is important to sort of abstract a concept away from the certain form of language that is being used to express that concept. Once you understand the concept itself, at that point it is a matter of semantics when it comes to the expression of that concept.

