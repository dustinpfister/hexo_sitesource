# hexo_sitesource

This is the old hexo folder for my hexo generated github pages site, here at github at [https://dustinpfister.github.io/](https://dustinpfister.github.io/).

## 1 - setup

The setup process involves installing hexo-cli, assuming that node, and npm are installed before hand. Then clone down this repo, then clone down [blog_posts](https://github.com/dustinpfister/blog_posts) and create a symbolic link in the source folder of this project to the \_posts folder in blog_posts. Then do an npm install for this project, and then you should be ready to build the public folder.

### 1.1 - Install hexo-cli
First thing is first, make sure you have hexo cli installed globally.

```
$ sudo npm install hexo-cli -g
```

### 1.2 - Clone down the blog posts

When I first started this project I stored the posts here, but now I keep my _post folder in a separate repository called [blog_posts](https://github.com/dustinpfister/blog_posts) and then create a symbolic link to it. This seems necessary as I experiment more with hexo, and also at some time maybe additional static site generators.

First I would want to clone that down.

```
$ mkdir /home/dustin/github
$ cd /home/dustin/github
$ git clone --depth 1 https://github.com/dustinpfister/blog_posts
```

I will be making a symbolic link to the _posts folder in that repo from within this repo

### 1.3 - Clone down this repo, link, and install

So then I would clone down this repo, and cd into it then make a symbolic link to the _posts folder, and do an npm install.

```
$ git clone --depth 1 https://github.com/dustinpfister/hexo_sitesource
$ cd hexo_sitesource/source
$ ln -s ~/Documents/github_dustinpfister/blog_posts/_posts _posts
$ cd /home/dustin/github/hexo_sitesource
$ npm install
```

If I am working in on a windows system there is the [mklink](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/mklink) command

### 1.4 - Build the public folder

Once I have all that set up I can now build the public folder with hexo. If all goes well with the build I can then use the server command of hexo to take a look at the build to make sure it turned out okay before deploying.

```
$ cd /home/dustin/github/hexo_sitesource
$ hexo generate
$ hexo server -s -p 8000
```
