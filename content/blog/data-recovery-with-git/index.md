---
title: "Data Recovery with Git"
image: fredy-jacob-764477-unsplash.jpg
description: Why is there data recovery? Because sometimes you may lose a commit. Stuff happens! Remember. Nothing is perfect.
date: '2016-10-23'
tags: ["git", "distributed-version-control", :data-recovery", "branching", "data-backup"]
author: "Maria D. Campbell"
---

So I just did my ***first*** `data recovery` with `Git`. `Git` really is an ***amazing tool***. It thinks of all the possible events that may happen, including a glitch in its own process.

***Why*** is there `data recovery`? Because sometimes you may lose a commit. Stuff happens! Remember. Nothing is perfect.

I had made a lot of changes. I was trying to ignore my node_modules, and it wasn’t going so smoothly with the `.gitignore` file. I deleted the modules and re-installed a couple of times to get the `.gitignore` to ***ignore them***. And somewhere down the line, I lost the precious work I had been laboring over for the past couple of days. So what was I to do?

First I tried a couple of `git reverts`. I only had a couple of commits to begin with. The files were nowhere to be seen. The I tried to find a command that would take me back to the original state of the repository when I `git init`. I didn’t come up with anything more than I already knew.

Then I ***came across*** [GIT – MAINTENANCE and DATA RECOVERY](https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery). Don’t think that just because you may be fairly new to git (or even a seasoned pro), that stuff like this just doesn’t happen. It does. Computers crash and perhaps through no fault of your own. Git is not impervious to strange happenings either. That’s where DATA RECOVERY comes in.

The first thing to do is NOT TO PANIC.

The second thing to do is NOT TO ACT IMPULSIVELY. Think through all your options. Read the documentation you come up with very carefully. One wrong move could result in permanent loss of your data.

After much research and revisiting [GIT – MAINTENANCE and DATA RECOVERY](https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery) several times, I decided to give it a shot.

The first thing I had to do was to determine when was the last point in time that I had all the files I wanted to recover in my repository. I remembered that it was when I made my first commit. The following are the steps I took to find out which commit that was:

+ `git log -g`: purportedly this `command` ***lets you see*** the **same information** as with `git reflog`, but it didn’t specify as clearly, at least to me, which of my commits was the initial one.

+ `git reflog`: also listed all my commits, but lets me know specifically which commit was my first commit indicated by (initial).

+ ***Following*** the `Git Book Documentation` in [GIT – MAINTENANCE and DATA RECOVERY](https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery), I created a new branch called recover-branch and added the commit hash at the end of the command like so: `git branch recover-branch` `<commit hash>`.

+ Then I `checked out` to ***that branch:*** `git checkout recover-branch`.

***Low and behold***, ALL my files ***were there***! I double checked the content of the files, and then checked its appearance/status in the browser and the JS console. Everything looked as it should. ***All*** my **data** had been `recovered`.

+ This `next move` was `crucial` and ***would be*** `crucial` ***for you*** too. I made a copy of the repository’s recover-branch and dragged it to the desktop. This was a `copy` of the `new recover-branch` with `all` the `recovered master branch` ***files***, and the last (and first) good commit. I wanted to make doubly sure that no matter what happened in my next commit, I had a backup of my work.

+ I did a `git status` to see if there was anything that I had to commit before switching back to master branch. There was, and so I committed everything with the commands `git add -A` (adding everything at once to the staging area), and then `git commit` followed by a `commit message` in `Vim`.

+ Then I `switched back to master` with the **command** `git checkout master`. Then I decided to merge the two branches so I could bring back all the recovered files into `master` from `recover-branch`. Guess what? There were a lot of `conflicts`. Files that had been deleted in commits in the master branch were of course still present in recover-branch. I ***aborted the merge*** with the **command** `git merge --abort`. Then I went back to my recover-branch copy on my desktop and compared my data there with the data in master. I copied anything missing in master from recover-branch, and even went through all the code to make sure that it matched. When I was satisfied that the two folders contained the same files, I committed them and pushed them to origin master.

+ I ***went back into*** my `master folder` and `checked` all my `data` ***again***. There were ***still*** `a couple of files missing`, and I went back into the `recover-branch` ***copy***, retrieved them, and copied them into master. I pushed those subfolders and files to origin master. Then I was done.

I could have made life difficult for myself and gone a more complicated route to achieve the same result, but this was quicker and safer.

### Related Resources

+ [GIT – MAINTENANCE and DATA RECOVERY, from The Git Book, 2nd Edition](https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery)