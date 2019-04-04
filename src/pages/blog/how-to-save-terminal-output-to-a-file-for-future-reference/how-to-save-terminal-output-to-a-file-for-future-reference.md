---
title: "How to save terminal output to a file for future reference"
image: terminal.png
description: what I did when my Ruby system install broke.
date: '2019-01-08'
tags: ["command line", "osx", "terminal", "history", "output to file", "session log", "stdin", "stdout", "unix script command"]
author: "Maria D. Campbell"
---

Recently I upgraded to **Mojave** on my **Macbook Pro** (late 2015). I then decided it was also time to upgrade **Homebrew**. I needed to update `postgres`, so thought I would update everything else. `postgres` was a success. Read more in my posts entitled [Upgrading PostgreSQL from version 10.4 to 11.1 via Homebrew (OSX)](https://www.mariadcampbell.com/upgrading-postgresql-via-homebrew/) and [Changing your (Homebrew) PostgreSQL configuration from trust to md5]().
 
Unbeknownst to me until today, my **Ruby** system install broke in the process. I hadn’t done anything related to **Ruby** installations in a couple of years, and had to refresh my memory on it. Had I installed with **RVM**? I checked to see if I had it installed on my computer. **No**. What else could I have used to ***manage*** my **Ruby** installs? I googled for information regarding the error I got when trying to watch a file on a Node project I am working on in which I decided to **switch** ***from*** **CSS** to **SCSS** (today). I just find it to be a much more efficient and powerful way to work with global styles.

HOWEVER, when I wanted to go back and write about this experience after I had already closed my **Terminal** ***instance***, I couldn’t retrieve the `output` or `stderr(s)` of my commands! So I decided to look into a way of making sure that it would not happen again. My search was successful. I found a command(s) that would print out either the output of a command or the `stderr` in **Terminal** to a text file of my choosing. I made sure to test it before writing this post, and it worked!

I took a simple command, `ruby -v`, which outputs the (system) version of ruby that is running on my machine and printed it to a file on my desktop called `ruby-output.txt`. The following is the ***command*** I ran in **Terminal**:

```markdown
ruby -v 2>&1 | tee ~/desktop/ruby_output.txt
```