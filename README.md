# hexo_sitesource

This is the old hexo folder for my hexo generated github pages site, [here at github athttps://dustinpfister.github.io/(https://dustinpfister.github.io/).

## The _post folder

When I first started this project I stored the posts here, but now I keep my _post folder in a separate repository called [blog_posts](https://github.com/dustinpfister/blog_posts) and then create a symbolic link to it. This seems necessary as I experiment more with hexo, and also at some time maybe additional static site generators.

## API keys

What is not stored in the repository is my API keys. As such I keep a file called apikeys.json in the root path that looks something like this:

```js
{
 
    "fake-site-one" : "a032ff37de8c",
    "fake-site-two" : "fa7200b8cd68"
 
}
```