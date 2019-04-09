---
title: "Renaming Your Remote Github Repository"
image: remote_repo.png
description: Today I came across a repository which I wanted to rename, because it did not mirror the name in the JavaScript30 repository on Github!
date: '2017-01-16'
tags: ["command-line-interface", "unix", "osx", "oh-my-zsh", "z-shell", "mv-command", "case-sensitivity", "uppercase", "lowercase", "git", "github", "local-repository", "remote-repository", "renaming-git-repositories"]
categories: ["github", "git", "distributed-version-control"]
author: "Maria D. Campbell"
---

Today I was going through and re-organizing my JavaScript30 projects and adding Github Wiki pages to them. I came across one repository which I wanted to rename, because it did not mirror the name in the JavaScript30 repository! In addition, I wanted to rename the local repository to mirror the name of my remote repository.

First I renamed the local repository. I was already in the repository which I wanted to rename, `array-cardio`s. I wanted to rename it to `array-cardio-day-1`. In `CLI` (`Command Line Interface`) I typed

```shell
mv ~/development/array-cardio ~/development/array-cardio-day-1
```

That renamed `array-cardio` to `array-cardio-day-1`. However, the `mv` command** can also be used to ***move*** files and directories. If I wanted to move my `cardio1.js` file into my `~/development` folder where I have all my projects, for example, I would type

```shell
mv cardio1.js ~/development/
```

and c`ardio1.js` which was residing in

```shell
~/development/array-cardio-day-1
```

would now be residing in the

```
~/development/
```

***development*** folder (aka ***directory***) itself. If I wanted to move it back to the `array-cardio-day-1` **directory** and within the `scripts` **directory** in `array-cardio-day-1`, I would type

```shell
mv cardio1.js array-cardio-day-1/scripts/
```

from within the `~/development` folder. So in other words, I would make sure that I was first within the `~/development` folder, and then I would type the command. I don’t have to append `~/development` to the beginning of the destination path, because I am already there.

Then I checked to make sure I had done it right and cd(ed) into the project by typing:

```shell
array-cardio-day-1
```

while still in the `~/development` folder. It took me right to it. This is just one of the features that attracted me to `Oh my zsh`. I didn’t have to type `cd array-cardio-day-1`, just `array-cardio-day-1`.

Another great little thing that I have with my `Oh my zsh` install, is that I can type `development` lowercase or `Development` uppercase. The folder was actually created with an uppercase D, `Development`. But I can type either development or Development to cd into the folder, or use either in commands. As shown above, I used the lowercase d for speed, ease of convenience. What’s even more interesting is that when I type

```shell
development
```

and hit return, this is how the path I receive looks in `iTerm2`

```shell
~/development:
```

When I type

```shell
Development
```

and hit `return`, this is how the path I receive looks in `iTerm2`

```shell
~/Development:
```

As I mentioned earlier, I wanted to rename my remote git repository. After renaming my local git repository, I went to Github to rename my remote repository.

I first went into the `Settings` tab of the `array-cardio` (it’s original name) repository, and at the top was the option `Repository Name`. Underneath that, I just typed in the name I wanted to change the repository to, and then hit the `rename` button. Now `array-cardio-day-1` appeared as the name of the repo. Next I exited settings and clicked on the `repository name` to access the `clone` or `download` button. I ***copied*** the `new path` to the `repository` using `SSH`, and did the following in `CLI`:

```shell
git remote rm origin
```

This removed the old `remote origin` path (aka the old remote repo path). Then I typed

```shell
git remote add origin git@github.com:interglobalmedia/array-cardio-day-1.git
```

This added the ***new*** `remote origin` path to the `local repo`. Remember how you always type in this second line when pushing your local repository to your remote repository on Github for the first time? Well, it’s the same thing here after you have renamed your remote repo. You are adding a new name/path to your local repository. If you want to be really anal about it, the next time you push to the remote repo, you can type

```shell
git push -u origin master
```

to make sure that local and remote repos are keeping track of each other. `-u` is shorthand for `-upstream`. `git push -u origin master` is what you would type when ***pushing*** a `local repo` to **Github** for the first time.

How do things work for you using Oh my zsh? I would love to know!

Have fun `commanding` with ***Oh my Zsh***!

