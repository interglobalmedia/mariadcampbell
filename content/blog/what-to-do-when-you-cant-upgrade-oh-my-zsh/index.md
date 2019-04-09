---
title: "What To Do When You Can’t Upgrade Oh my zsh"
image: robby.jpg
description: I have been using the Z Shell, specifically Oh My Zsh, for almost two years now.
date: '2017-01-13'
tags: ["z-shell", "oh-my-zsh", "robby-russell", "path-configuration","upgrading-oh-my-zsh", "git-init", "git-fetch", "git-reset", "rvm", "ruby-gems", "goal-setting"]
categories: ["web-development"]
author: "Maria D. Campbell"
---

I have been using the `Z Shell`, specifically `Oh My Zsh`, for almost two years now. It worked without a hitch for a while, and then one day it didn’t work so smoothly. It had something to do with my PATH configuration. I’m not sure whether the issue began before or after I installed `El Capitan` (but I don’t think so), or if it was a `ruby gems` **installation issue**. I think it was the latter. Anyway, it never seemed to resolve itself.

I started to ***dive deeper*** into `Command Line`. I was getting to know my computer much better. One of my New Year’s Resolutions is to become extremely ***well acquainted with*** the `Command Line`, and therefore my computer. I know that this will make me a MUCH better developer, designer, and technologist in general. It will also help me with another of my New Year’s resolutions. Increasing my knowledge of personal cyber security. Everyone these days should educate themselves about personal cyber security. It’s a crazy world out there in the realm of technology!

But my `Z shell` education sky rocketed when I came across `Wes Bos`’ **video series** entitled `“Command Line For Power Users”`. In it he goes into depth about how to set up the `Z Shell` on your computer, and specifically `Oh my zsh`. There is not much great documentation on the topic all in one place geared at developers. Many even ***frown upon*** **replacing** the `default bash`. I ***disagree***. I think it’s great. I will be very soon learning more about exactly why. I’m only a bit more than halfway through the course.

But I digress. I ***re-encountered*** my `$PATH` problem with `oh-my-zsh` when playing around with the different `oh-my-zsh` **themes** I have installed on my computer. Everything was fine until I added the `Soliah theme`. It told me that my `rvm` (`Ruby Version Manager`) `$PATH` was ***configured incorrectly*** and that I should fix it.This is the message I would get in `Terminal` (now `iTerm2`):

```shell
Warning! PATH is not properly set up, '/Users/mariacam/.rvm/gems/ruby-2.2.2/bin' is not available,
usually this is caused by shell initialization files - check them for 'PATH=...' entries,
it might also help to re-add RVM to your dotfiles: 'rvm get stable --auto-dotfiles',
to fix temporarily in this shell session run: 'rvm use ruby-2.2.2'.
```

So I googled for a fix to the issue. After much searching, I finally came across a fix which was clearly explained:

```shell
This is what corrected the error for me:
My .bashrc:

The last line should be:

export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting

My .bash_profile

The last 2 lines should be:

[[ -s "$HOME/.profile" ]] && source "$HOME/.profile" # Load the default .profile

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
```

I found the same fix elsewhere, but the explanations were not as clear. My `.bashrc` ***already contained*** the **line mentioned above**, but my `.bash_profile` contained `PATH` ***instead of*** `HOME`. I think something happened during `installation` of my `ruby gems`. I installed that when I was taking a Web Development Course, and already had installed `Z shell/Oh my zsh`. I clearly remember the teacher telling me that I should be using the default bash shell, and I said “No. I want to use Oh my zsh.” Then he created a hack so that I would be able to use both (nightmare), and a whole bunch of other stuff which he didn’t even clue me in on. That’s why I will say it again (and again and again and again if I have to): so important to know Command Line, and thus get to know the inner workings of your computer, so that you don’t have to be at the mercy of others who then won’t even enlighten you as to what they have done to your machine! And their fix won’t necessarily be the right one for you OR your machine! It’s like a doctor not knowing his or her anatomy!

The issue wasn’t resolved immediately, however. Why? First of all, I ***didn’t completely quit** `iTerm2`. I only closed the window. In order for iTerm2 to register the change, you have to quit the program and re-open it. OR, you should type the **command** `source + path to file` that was changed. For instance, if I changed the `oh-my-zsh` **theme** I was using in `iTerm2` in my `.zshrc` file, I would save the file, go back into iTerm2 and type the command

```shell
source ~/.zshrc
```

and hit return. I would immediately notice **in** the ***current instance*** of `iTerm2` that my ***theme*** **had changed**. In the case of my `.bash_profile`, I typed

```shell
source ~/.bash_profile
```

to update it. OR ***completely quit*** `Terminal` and ***re-open*** **it**.

After I had gotten half-way into ***Wes’*** [course](https://commandlinepoweruser.com/), I became much more familiar with the `Z shell`, and realized that I ***hadn’t completely quit*** `Terminal` or **updated** my `.bash_profile` with the `source` **command**. So I did it, and this is what I subsequently got in `Terminal` when I ***checked*** for my **version** of `Ruby` AND `RVM`:

```shell
ruby -v
ruby 2.2.2p95 (2015-04-13 revision 50295) [x86_64-darwin14]

which ruby
/Users/mariacam/.rvm/rubies/ruby-2.2.2/bin/ruby

rvm -v
rvm 1.28.0 (latest) by Wayne E. Seguin <wayneeseguin@gmail.com>, Michal Papis <mpapis@gmail.com> [https://rvm.io/]
```

No more problems there!

My problems weren’t quite over yet, however. I ***still had*** the **issue** of ***not being able*** to **upgrade** `my oh-my-zsh`. That **started happening** ***after*** I installed `El Capitan`. Something happened to the `path` to my `oh-my-zsh` **local repository** on my computer when I ***upgraded*** to `El Capitan`. I would try and fix the issue as explained on `StackOverFlow` and elsewhere, but it never took. This is what would appear in `Terminal` when I would try and ***upgrade*** `oh-my-zsh`:

```shell
Upgrading Oh My Zsh
fatal: Not a git repository (or any of the parent directories): .git
There was an error updating. Try again later?
```

And when I would try and initialize it as a new (local) git repository, I would get the message:

```shell
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists. 
```

Well, yesterday I tried again after ***fixing*** the `$PATH` **issue**. And this time it took! This is what I did:

```shell
git init
git remote add origin git@github.com:robbyrussell/oh-my-zsh.git
```

The second line contains the SSH for oh-my-zsh, because that’s how I’m set up with Github. I use public and private SSH keys to identify myself, or rather my computer, with Github. If you are not set up that way, please switch over. It’s much more secure that way, and much less of a hassle in the long run! To learn about Github and SSH, please visit Github’s documentation [Adding a new SSH key to your GitHub account](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account).

And my initialization took! So I had to complete the process with:

```shell
git fetch
git reset --hard origin/master
git fetch fetches the latest version of the oh-my-zsh repository on Github, and git reset --hard origin/master means

throw away all my staged and un-staged changes, 
```

I found both solutions on `StackOverflow`. To read about the whole oh-my-zsh upgrading process fix, please visit [Upgrading Oh My Zsh gives me ‘not a git repository’ error](https://stackoverflow.com/questions/33486633/upgrading-oh-my-zsh-gives-me-not-a-git-repository-error). To learn more about

```shell
git reset --hard origin/master
```

please visit [What is the meaning of git reset –hard origin/master?](https://stackoverflow.com/questions/15432052/what-is-the-meaning-of-git-reset-hard-origin-master).

So now I have configured my `RVM $PATH` correctly and I will be able to ***update*** `oh-my-zsh` when changes have been made to the remote repository.

My next thing to tackle is `NVM` (`Node Version Manager`). Had similar problems there too which began with installation of `Node` way back when. You’ll be hearing about that as well!