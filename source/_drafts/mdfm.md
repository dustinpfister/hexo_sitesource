---
title: MDFG ( Mark Down file Generator)
date: 2017-03-13 17:13:00
tags: [markdown]
layout: post
categories: mdfg
---




The name should say it all, but just in case you need more input by all means read on.


# Mark Down file Collection tasks

Say you have a blog that contains some 300 posts that you have written over the years. One day someone comes along and says "say did you know that you type allot when you meant to type a lot?". After a quick goggle search is preformed you become aware of a certain problem that would take a great deal of time to fix. You must open up your bery first blog post in an editor, do a ctrl + f, search for all instances of a certain text pattern, make a change if necessary, save, and then move on to the next. All 300 of them, yikes.

This is where MDFG comes into play to help speed up this kind of process, perhaps even automate it if doing so is possible. MDFG will loop threw all *.md files in a source folder, and build a revised collection in a target folder.

# Static Site generator build tasks.

Using hexo.io? You can just simply copy and past the revised MDFG