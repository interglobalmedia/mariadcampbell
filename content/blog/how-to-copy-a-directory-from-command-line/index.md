---
title: "How to copy a directory from Command Line"
image: terminal.png
description: Sometimes you just might want to copy a directory that is in one location to another location, for whatever reason.
date: '2018-04-19'
tags: ["osx", "command-line", "copy-directories"]
categories: ["command-line", "osx", "terminal"]
author: "Maria D. Campbell"
---

In my last post I talked about zipping and unzipping a directory from the Command Line. I also mentioned how you could ignore directories within the root directory you are zipping. But sometimes you just might want to copy a directory that is in one location to another location, for whatever reason.

Today, for example, I just completed a new project for my class for which I need to upload the complete directory (minus the node modules of course). However, I first want to copy the directory to my desktop to prevent any potential disaster taking place with the directory when I upload it from command line. This way I work indirectly with the directory (the copy) instead of directly (with the original).

So this is the `command` I ***typed*** in **Terminal**:

```shell
cp -R ~/development/bulletin-board-app ~/desktop/
```

There are two things to keep in mind/remember when copying a directory:

+ That you actually have the read access for the files directory in question. Typically, one would at least have read access on one’s one computer. On another, it is probably a good idea to check.

+ Don’t forget to add the `/` at the end of the location (target directory) you are copying your directory to. Otherwise, the target directory itself will be overwritten by the contents.

To check whether you have read access to files within a directory or to the directory itself, change into (cd into) the directory which contains the files or directory for which you want to view the permissions, and then type the following command in **Terminal**:

```shell
ls -l
```

To learn how to compress and uncompress directories from the Command Line, please visit my article entitled [Compressing and uncompressing directories from the Command Line](/blog/how-to-copy-a-directory-from-command-line).

**Happy** ***commanding***!

### Related Resources:

+ [Copy recursively files and folders, but preserving everything while gaining ownership?](https://apple.stackexchange.com/questions/180982/copy-recursively-files-and-folders-but-preserving-everything-while-gaining-owne)

+ [Terminal 101: File Permissions](https://www.techradar.com/how-to/computing/apple/terminal-101-file-permissions-1305647)

