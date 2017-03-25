---
title: Tasks automation.
date: 2017-03-13 17:13:00
tags: [git,js,node.js]
layout: post
categories: git
---

Taking the time to write my own task automation tool is something I do not care to take the time to do. If it can at all can be avoided by just simply using what is all ready there for me, great, I want to spend the bulk of my time actually developing a project rather than spending time on something like this.

Luckily there is allot of great stuff out there all ready to help automate repetitive work, and help free up time that can be spend on the more important novel stuff. Lets take a look as some examples

## option 1 : git hooks

git hooks are scripts that I can place in the hooks folder that resides in the hidden .git folder of a project working tree. Because I use git as my system of source control this is an option that I can use to help automate tasks.


So a simple little hello world "pre-commit" node.js hook might look something like this.

```js
#!/usr/bin/env node
 
console.log('Hey a commit was made.');
```

I will want to use the node.js shebang at the top of my script to make it clear that the environment i am using is node. In addition I will want to name the file "pre-commit" in the hooks folder if I want a script to run every time I make a commit.

When it comes to writing a more useful pre-commit hook, I could write something that will check if everything is up to snuff before allowing a commit to be made. The basic idea here is to call a process.exit(1) if something does not look good, therefore keeping me form making a commit until it is resolved.


This tells git what it needs to use in order to run the script.

## option 2 : npm scripts
