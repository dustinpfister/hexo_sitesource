---
title: Hexo tags
date: 2017-02-04 18:40:00
updated : 2017-02-12 12:44:00
tags: [hexo,blog]
layout: post
categories: Hexo
---

This is my first post for my [hexo.io](https://hexo.io) generated blog. Hexo is a [node.js](https://nodejs.org) powered static site genertor that can take markdown files and generate a collection of html files with a given theme. It is a very useful tool that can automate a great deal of work that would otherwise be hand coded.

<!-- more -->

Speaking of hexo I thought I would make my first post about one of the static site generators features called [tags](https://hexo.io/api/tag.html). Hexo tags are a way that I can quickly append generated html content in my blog posts.

For example embedding a youtube video into one of my posts is as simple as typing this is my markdown.

```
{% youtube duVq7cXWcYw %}
```

When I generate my site the above is parsed into the following HTML.

```html
<div class="video-container"><iframe src="//www.youtube.com/embed/duVq7cXWcYw" frameborder="0" allowfullscreen></iframe></div>
```

So say I want to embed one of my favortie [cyriak](https://www.youtube.com/channel/UC9Ntx-EF3LzKY1nQ5rTUP2g) videos into a blog post. Doing so is as simple as finding the id of the video I want to post, and then use that id as the single argument given to the tag.

{% youtube duVq7cXWcYw %}

# Writing my own tag.

Say I want to write my own hexo tag, rather then using a built in one. To do so I need to save a js file in my root scripts folder in my hexo project working tree. Maybe call it something like my-tags.js, hexo does not care what the name of the file is that much as long as it is a *.js file. Inside the js file is where I will write my tag.

So for an example why don't I throw together a simple little tag that will inject a random quote from the Simpson's. Well maybe that will be what happens if I don't give an argument actually.

So then I would write something like this in the my-tags.js file:

```js
// write a random message on building
hexo.extend.tag.register('mytags_say', function (args) {
 
    // use the given say type or defaul to simpsons
    var sayType = args[0] || 'simpsons',
 
    data = {
 
        simpsons : {
 
            defaultName : 'The Simpsons',
 
            says : [
 
                ['I’d rather let a thousand guilty men go free than chase after them.', 'Chief Wiggum'],
                ['It’s all over, people! We don’t have a prayer!', 'Reverend Lovejoy'],
                ['Inflammable means flammable? What a country.', 'Dr. Nick Riviera'],
                ['My eyes! The goggles do nothing!', 'Rainer Wolfcastle'],
                ['Oh, loneliness and cheeseburgers are a dangerous mix.', 'Comic Book Guy']
 
            ]
        },
 
        watts : {
 
            defaultName : 'Allen Watts',
 
            says : [
 
                'No valid plans for the future can be made by those who have no capacity for living now. ',
                'You do not play a sonata in order to reach the final chord, and if the meanings of things were simply in ends, composers would write nothing but finales.',
                'Human desire tends to be insatiable.'
            ]
        }
 
    },
 
    len = data[sayType].says.length,
 
    index = Math.floor(Math.random() * len),
 
    text = data[sayType].says[index];
 
    if (typeof text === 'object') {
 
        text = '\"' + text[0] + '\" -' + text[1];
 
    } else {
 
        text = '\"' + text + '\" -' + data[sayType].defaultName;
 
    }
 
    return '<span style="font-weight: bold;">' + text + '</span>';
 
});
```

So then if I put this in my markdown:

```
{% mytags_say %}
```

I get a Simpson's quote:

{% mytags_say %}

I can later on expand this so that I can set a certain style of quote that is maybe a little more meninful by giving it a argument so that:

```
{% mytags_say watts %}
```

gives me an Allen Watts quote:

{% mytags_say watts %}

# More than one argument

