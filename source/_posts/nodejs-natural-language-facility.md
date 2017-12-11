---
title: Traversing over an object in node.js
date: 2017-08-26 15:16:49
tags: [js,node.js]
layout: post
categories: node.js
id: 111
updated: 2017-12-11 10:18:14
version: 1.1
---

I have been writing this blog for the better part of a year, and so far it seems like it is just starting to take off. I am not spaming my content on social media (as of this writing at least), and I also so far am not spending even so much as a single penny a month on paid advertising. In stead I am focusing entirely on what needs to be done to help improve organic search results, so far I am doing okay, but there is much room for improvement. As such I have wanted to find, or make some tools to help me with keyword planing, and general evaluation of my sites content in a [node.js](https://nodejs.org/en/) environment.. In my travels browsing and searching I have come across the npm package called [natural](https://www.npmjs.com/package/natural).

<!-- more -->

Natural is a great little tool to use with any node.js project If you have interest to do anything that involves text or [lexical analyses](https://en.wikipedia.org/wiki/Tokenization_(lexical_analysis)), or natural language processing. It has some of the basic tools you would expect such as a tokenizer, as well as more advanced tools that help with the process of finding out how well content may rank with respect to certain terms.

## The very basics of text, or lexical analyses ( tokenization ).

This topic is a little advanced to maybe it would be best to start off with a simple vanilla js example of text analyses.

```js
// tokenize an English natural language string
var tokenizer = function(str) {
 
    // pattrens
    var pat_nl = /\n/g, // new line
    pat_spec = /[.,\/#!$%\^&\*;:{}=_`\"~()]/g; // special chars
 
    // replace new lines with spaces, replace special chars with nothing,
    // and split the string into an array of words
    return str.toLowerCase().replace(pat_nl, ' ').replace(pat_spec, '').split(' ');
    
};
 
// now I can feed it some content and I get an array of words
var content = 'This is some example text!',
tokens = tokenizer(content);
 
console.log(tokens);
// ['this','is','some','example','text']
```

I want something that will take a natural language string, and return a clean array of words rather than raw content. depending on the source of the content there might be additional steps to get the end result, but you get the basic idea of what is to be achieved with this. 

## Word Count

Once I have my array of words I can now figure things out about the content, such as it's word length.

```js
console.log( tokenizer('what is this word count?').length ); // 5
```

World count is the first thing that comes to mind when evaluating my content. I hear a lot of chatter about making your posts at least three hundred words. If you ask me it seems it is the further nature of the content beyond that that truly matters, but yes knowing world count is a factor of interest. Right off the bat you know where this is going and why its helpful if you want a successful blog, but before I get into the natural project more lets explore something a bit more advanced than just word count.