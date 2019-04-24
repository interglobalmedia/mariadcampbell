---
title: 'How to add files to your .gitignore with no sweat'
image: hans-reniers-743407-unsplash.jpg
description:
    I have only started to add .gitignore files to my projects on a more regular
    basis in the last few months.
date: '2016-07-15'
tags: ['gitignore', 'git', 'cli', 'terminal']
categories: ['command-line']
author: 'Maria D. Campbell'
---

I have only started to add `.gitignore` files to my projects on a more regular
basis in the last few months. The reason was because I started to use
development tools to improve my workflow environment. The more tools I added on,
the more I realized the need for a .gitignore file.

Tonight I created a `.gitignore` file for my new `simpleweather api` app. I had
created a `.txt` file where I keep notes on the project, but I didn’t want to
commit it to the repo. So I created a `.gitignore` file. I wanted to add the
text file to it, and I wanted to do it via `CLI`. I came across a nifty little
command that easily adds a new file to your `.gitignore` via the **Terminal**:

```shell
echo 'simpleweather.txt' >> .gitignore
```

Just doing this worked for me. Remember however, that you will make your life
easier if you don’t commit a file before deciding to ignore it. If you do commit
a file and then decide to ignore it later, you will have to execute some extra
commands before doing so. I will discuss how to ignore a file you have already
committed in another post.

To create a `.gitignore` file, make sure you are at the `root directory` of your
project in the **Terminal**.

-   Type `touch .gitignore`

-   Check for changes in your project via your favorite text editor. You should
    see your new `.gitignore` file listed there.

-   Type `echo name_of_file >> .gitignore`

-   Check your `.gitignore` file. The file you added via the **Terminal** should
    appear there.

-   Make sure that your `.gitignore` file is actually doing the work you want it
    to do by going back into the **Terminal** and checking on the status of your
    repository by typing `git status`

-   If the file you added to `.gitignore` no longer appears as an uncommitted
    file, then you know that your `.gitignore` file is doing its job for you!

### Related Posts:

-   [Ignoring Files: Github Help](https://help.github.com/en/articles/ignoring-files)

-   [How To Create a .gitignore File](https://stackoverflow.com/questions/10744305/how-to-create-gitignore-file)

-   [.gitignore.io](.gitignore.io)
