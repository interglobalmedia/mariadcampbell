---
title: "To NPM Trash Or NOT To NPM Trash"
image: randy-laybourne-712849-unsplash.jpg
description: I just finished watching Wes Bos' Command Line For Power Users series, and it was great.
date: '2017-01-16'
tags: ["command-line-interface", "osx", "el-capitan", "npm", "trash-npm-package", "local-installs", "global-installs", "atom-text-editor","rm-command", "zsh", "z-shell", "unix"]
categories: ["command-line", "node-package-manager", "z-shell", "zsh"]
author: "Maria D. Campbell"
---

**Note:** This article doesn’t go into depth about commands, i.e. rm, rm -r, etc/ It’s about ***options***. To read more about those commands, please visit [Master the command line: Deleting files and folders](https://www.macworld.com/article/2082021/master-the-command-line-deleting-files-and-folders.html), also included at the end of the article.

I just finished watching Wes Bos’ ***Command Line For Power Users*** series, and it was great. It focused on `Z Shell`, which is what I use, and I learned a lot. It opened new doors for me regarding `Command Line for Mac`, and I got to know my computer even better. But then I got to the last video about using the `rm` **command** in `CLI` or installing the `npm trash package`. This package allows you to move files to the trash instead of deleting them forever, as the `rm/ rm -r` **command** does. `rm` removes files, `rm -r` removes folders.

I noticed that the most ***effective*** way to install it is globally. However, I have permission issues when I try and install globally with El Capitan, and there is always a potential issue or conflict when updating anything that has been installed globally. That is why I only do local installs within projects themselves. In order to use the trash package the way I would want to, I would have to do an `npm init` everywhere. In order for it to work for me, I would have to install `trash` as a devDependency in every folder I have created on my computer that contains files that I use. Well, that does not work for me. Some folders don’t even have workflows that use ***npm***.

At first I was going to totally ***“trash”*** the idea of using the plugin, but then I decided that maybe it would be nice to use it in some projects that already use npm, and for those that don’t, I could just continue deleting files and folders via my **Atom** text editor. It’s just as easy to do, and it never deletes anything permanently. It just provides the `move to trash` option. Works well for my code related projects!

There is also another solution. If you still want to delete via the Command Line but you want to “play it safe”, there are “safety net” commands you can use that will ask you if you really want to delete something before it gets deleted forever. There is an article I came across on **macworld** entitled [Master the command line: Deleting files and folders](https://www.macworld.com/article/2082021/master-the-command-line-deleting-files-and-folders.html) that could prove useful. For instance, if you wanted to delete a file, and wanted to be asked if you wanted to delete the file before it was deleted forever, you would type

```shell
rm -i dummy-file.txt
```

for example, and when you hit return you receive

```shell
remove dummy-file.txt?
```

and you could either type `yes` or `y` and hit return. This way you have a chance to think twice about it and thus change your mind. If you do change your mind when asked, you simply would type `no` or `n`. Then if you typed

```shell
ls
```

to see if it was still there, it would be, because you didn’t type `yes` or `y`. And ***btw***, the `-i` flag is short for `-interactive`.

There are a slew of ***“safety net”*** commands out there, and this article is a great place to start. There is  a lot of useful information that will make you an even better CLI power user!

### Related Resources:

+ [Command Line For Power Users](https://commandlinepoweruser.com/): Wes Bos Video Series on Command Line/Z Shell/Oh my zsh

+ [Master the command line: Deleting files and folders](https://www.macworld.com/article/2082021/master-the-command-line-deleting-files-and-folders.html): Januaray 2, 2014, [Kirk McElhearn](https://www.macworld.com/author/Kirk-McElhearn/), Senior Contributor, *macworld*

[sindresorhus/trash on github](https://github.com/sindresorhus/trash): ***npm package*** that permits you to move files and folders to the trash from `Command Line` into the trash instead of deleting them forever