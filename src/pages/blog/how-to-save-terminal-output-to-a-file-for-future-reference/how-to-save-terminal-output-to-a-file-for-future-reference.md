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

```shell
ruby -v 2>&1 | tee ~/desktop/ruby_output.txt
```

This ***resulted*** in both `output` to the `console` AND `output` to a ***new file*** on my **desktop** called `ruby_output.txt`. If I had already known about this command, I could have re-run the `ruby -v` command along with the rest of this new command in **Terminal** after receiving the **Ruby** related errors so as to reference that information when writing my post! This time around I went back to my **Google** ***searches*** to see what I had googled. But in future, I will have a much more reliable and (time) efficient solution!

**Important note:** If you want to **add** another **command output** to the ***same file*** that ***doesn’t overwrite*** the **previous output**, do NOT use this exact command. It ***will*** **overwrite** the **previous output**. What happens is, a new file of the same name overwrites the existing file and also replaces the previous output with the current output! In order to **append** ***new output*** **without** ***overwriting*** the **previous output**, use the following command:

```shell
sass --watch public/styles/styles.scss >> ~/desktop/ruby_output.txt
```

***However***, **nothing gets output** to **Terminal**. Only to the file! If you want to **see the output** in **Terminal** as well as outputting to the file, run the following command:

```shell
ruby -v 2>>&1 | tee -a ~/desktop/ruby_output.tx
```

Let’s break this down. `ruby -v` is the command I wanted to run in **Terminal** to get back the system version I am using on my computer. The following is `output` in **Terminal**:

```shell
ruby 2.7.0dev (2019-01-17) [x86_64-darwin18]
```

`2` and `1` are `file descriptors`. `2` stands for `standard error` (`stderr`), and `1` stands for `standard output` (`stdout`). pipe, `|`, in this case, is used to ***pass*** the `stdout` or the `stderr` to the `tee -a ~/desktop/ruby_output.txt` command. `>>` means to append. I am telling **Terminal** to ***append*** the `stdin` and `stdout`. If I only used `>`, then there would be an ***overwrite***, as shown previously. `tee` allows you to ***send*** `stdout` to a file while **piping** the ***same*** `stdout` to ***another*** **command**. Here, the ***other command*** is `-a`. `tee` is **always used with** a `pipe` (`|`) ***preceding*** it.

AND it was also output to the `ruby_output.txt` file living on my desktop. In addition, ***nothing was overwritten***. The `stdout` was simply ***appended*** to the rest of the stdout I had added previously. The key to this is in the `-a` ***flag***, which is short for **append**. For example, this is what is currently residing in that file:

```shell
ruby 2.7.0dev (2019-01-17) [x86_64-darwin18]
>>> Sass is watching for changes. Press Ctrl-C to stop.
ruby 2.7.0dev (2019-01-17) [x86_64-darwin18]
```

If I really wanted to get fancy, I could have done the following:

```shell
script -a ~/desktop/log-all.txt
```

I would **start this script** at the ***beginning*** of a **Terminal** session. `script` means that I am starting a **script** ***native*** to **Unix** which will print out ***both*** **Terminal** `stdin` AND `stdout` to a file on my desktop called `log-all.txt`. The default command for this on **Linux** is `script session.log`. However, I have seen the log file can be called anything that will NOT overwrite some important system file of the same name in the same location!!! So be careful when creating a **script** with `script`. The above command `output` the following in **Terminal**:

```shell
Script started, output file is /Users/mariacam/desktop/log-all.txt
```

***Then***, when I wanted to **stop** the **script**, I typed the following in **Terminal**:

```shell
exit
```

You can also **end a session** with `Control + D`. Then all `stdin` and `stdout` from **Terminal** is printed out to the destination file.

But let’s say I just wanted to print out a **history** of my commands to a file. This is actually what I did just now:

```shell
history >> ~/desktop/history_log.txt
```

And I get the my **Command Line** `history` printed out in `history_log.txt` on my desktop. I am not sharing it here as some sensitive information is logged there! **Anything** you ***type out*** in **Command Line**, ***including*** **passwords** and such, ***will appear*** in **your history**. So be careful about what kind of **Command Line** ***information*** you share.

Some of the commands listed there I hadn’t even used in AGES! And it goes up to the latest one, not including those in the current session. I have to log out of it before it is included in that **history**.

This is all well and good. From too little information to too much! I like the `script session approach` for my current purposes of committing information to “printed history”. It gives me the information I need and from the time I need to include both **Terminal** `stdin` and `stdout`! Of course if I forget to run script at the beginning of my session (and even later), and I just want to save the anomalies I come across, I can just use the command:

```shell
ruby -v 2>>&1 | tee -a ~/desktop/ruby_output.txt
```

for example.

There is so much more on this topic. I highly encourage everyone to delve deeper into **Command Line**. Believe me, it will help you to become a much better developer in so many different ways. Not just through `npm i` or `git init`, but will permit you to easily retrieve why something worked or didn’t work (and write an accurate post about it even after logging out of your **Terminal** ***instance***). And so much more! Last but not least, it permits you to gain a better understanding and control of your machine!

## Related Resources:

[In the shell, what does “2>&1” mean?](https://stackoverflow.com/questions/818255/in-the-shell-what-does-21-mean)

[script (Unix)](https://en.wikipedia.org/wiki/Script_(Unix))

[The Unix “SCRIPT” command : a command recorder](https://www.ibm.com/developerworks/community/blogs/nix/entry/the_unix_script_command_a_command_recorder2?lang=en)

[script: Save Your Session Log](https://www.unixtutorial.org/script-save-your-session-log)

[How do I save Terminal output to a file?](https://askubuntu.com/questions/420981/how-do-i-save-terminal-output-to-a-file)




