---
title: "Fixing Your NVM Install"
image: nvm.jpg
description: The other day I wrote a post about Oh my zsh in which I mentioned that my next post would be about fixing my nvm install, so this morning I did just that.
date: '2017-01-15'
tags: ["nvm", "nodejs", "fixing-nvm-install", "command-line", "z-shell", "oh-my-zsh", "osx"]
author: "Maria D. Campbell"
---

The other day I wrote a post [What To Do When You Can’t Upgrade Oh my zsh](https://www.mariadcampbell.com/blog/what-to-do-when-you-cant-upgrade-oh-my-zsh/) in which I mentioned that my next post would be about fixing my nvm install. So this morning I did just that. I fixed my nvm install, and now it works. It only took a couple of minutes out of my morning, and now there is one less headache on my machine!

I had tried to install NVM (Node Version Manager) a while back, and it never took. Who knows exactly why, but it never did. And I never took the time to sit down and figure out. But back then, Command Line was not so much a part of my workflow either. Then when it did become a large part of it, I didn’t bother to fix it. However, as I also mentioned in previous posts, one of my New Year’s resolutions for 2017 is to become very well acquainted with Command Line and my machine! And all this took now was 2 minutes or < of my time!

First I did a bit of research on the topic, and came up with the ***thread*** [Node Version Manager install – nvm command not found](https://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found), because that is what I would come up with when trying to find out what version of nvm I had installed on my computer. `Z shell` had ***not been recognizing*** **anything** `nvm`. Then I ***followed*** the **link** in the ***thread*** to [NVM on Github](https://github.com/creationix/nvm) and read more on installing nvm. The thread on StackOverflow was a bit more pertinent to my situation, so I stuck with the explanation there. One thing I should note that might confuse you if you decide to go the NVM on Github route, is to ignore the suggestion to type the `nvm -v` **command** to check and see what ***version*** of `nvm` you have on your computer if you use `Z shell`. That command will not be recognized by it. When I typed `nvm -v` in `CL`, then I received

```shell
Node Version Manager

Note: <version> refers to any version-like string nvm understands. This includes:
- full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)
- default (built-in) aliases: node, stable, unstable, iojs, system
- custom aliases you define with `nvm alias foo`

Usage:
nvm --help Show this message
nvm --version Print out the latest released version of nvm
nvm install [-s] <version> Download and install a <version>, [-s] from source. Uses .nvmrc if available
--reinstall-packages-from=<version> When installing, reinstall packages installed in <node|iojs|node version number>
--lts When installing, only select from LTS (long-term support) versions
--lts=<LTS name> When installing, only select from versions for a specific LTS line
nvm uninstall <version> Uninstall a version
nvm uninstall --lts Uninstall using automatic LTS (long-term support) alias `lts/*`, if available.
nvm uninstall --lts=<LTS name> Uninstall using automatic alias for provided LTS line, if available.
nvm use [--silent] <version> Modify PATH to use <version>. Uses .nvmrc if available
--lts Uses automatic LTS (long-term support) alias `lts/*`, if available.
--lts=<LTS name> Uses automatic alias for provided LTS line, if available.
nvm exec [--silent] <version> [<command>] Run <command> on <version>. Uses .nvmrc if available
--lts Uses automatic LTS (long-term support) alias `lts/*`, if available.
--lts=<LTS name> Uses automatic alias for provided LTS line, if available.
nvm run [--silent] <version> [<args>] Run `node` on <version> with <args> as arguments. Uses .nvmrc if available
--lts Uses automatic LTS (long-term support) alias `lts/*`, if available.
--lts=<LTS name> Uses automatic alias for provided LTS line, if available.
nvm current Display currently activated version
nvm ls List installed versions
nvm ls <version> List versions matching a given <version>
nvm ls-remote List remote versions available for install
--lts When listing, only show LTS (long-term support) versions
nvm ls-remote <version> List remote versions available for install, matching a given <version>
--lts When listing, only show LTS (long-term support) versions
--lts=<LTS name> When listing, only show versions for a specific LTS line
nvm version <version> Resolve the given description to a single local version
nvm version-remote <version> Resolve the given description to a single remote version
--lts When listing, only select from LTS (long-term support) versions
--lts=<LTS name> When listing, only select from versions for a specific LTS line
nvm deactivate Undo effects of `nvm` on current shell
nvm alias [<pattern>] Show all aliases beginning with <pattern>
nvm alias <name> <version> Set an alias named <name> pointing to <version>
nvm unalias <name> Deletes the alias named <name>
nvm reinstall-packages <version> Reinstall global `npm` packages contained in <version> to current version
nvm unload Unload `nvm` from shell
nvm which [<version>] Display path to installed node version. Uses .nvmrc if available

Example:
nvm install v0.10.32 Install a specific version number
nvm use 0.10 Use the latest available 0.10.x release
nvm run 0.10.32 app.js Run app.js using node v0.10.32
nvm exec 0.10.32 node app.js Run `node app.js` with the PATH pointing to node v0.10.32
nvm alias default 0.10.32 Set default node version on a shell

Note:
to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder (usually `~/.nvm`)So, as stated above, typenvm --version
```

So, as stated above, type

```shell
nvm --version
```

Just be aware that there are ***some*** differences between between bash commands and Z shell (Oh my zsh) commands. They even have written books on it. ***From Bash to Z Shell: Conquering the Command Line*** is one. Don’t know if it’s any good and it is somewhat dated, but serves as an example.

Next I went into my `~/` (home) directory in `iTerm2` to make sure that I did indeed have an `~/.nvm` folder, and I did. Then, after a bit of research and falling back on what I had learned when [fixing](https://www.mariadcampbell.com/blog/what-to-do-when-you-cant-upgrade-oh-my-zsh/) my `Z Shell` (`Oh my zsh`) install, I typed

```shell
source ~/.nvm/nvm.sh
```

in the ***current*** `iTerm2` **instance**. This is the message I received when I hit return:

```shell
nvm is not compatible with the npm config "prefix" option: currently set to "/Users/mariacam/.npm-global"
Run `npm config delete prefix` or `nvm use --delete-prefix v4.4.7 --silent` to unset it.
```

I chose the former and typed

```shell
npm config delete prefix
```

After that I typed

```shell
nvm --version
```

in `CL` and received the following when I hit return

```shell
0.31.4
```

I guess I should be updating my NVM install! Perhaps we’ll cover that in my next post.

```shell
OSX operating system: El Capitan 10.11.6
```

**Note:** When I checked to see what **version** of `Node` I had installed on my computer, I was surprised to see that I had ***version*** `4.4.7` installed. I had been downloading latest versions via `Command Line` for a while ***thinking*** that I was being **automatically updated** as in the past. However, I had installed `NVM` since then, and it takes care of managing which versions you want to use. So simply downloading Node expecting a miracle to happen won’t work. You have to do the following:

```shell
nvm install 7.4.0
```

for example, or whichever other version you want to use. It’s that simple! Happy ***noding***!

