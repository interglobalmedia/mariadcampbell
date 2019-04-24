---
title: 'When your Ruby system install breaks after a Homebrew upgrade'
image: ./ruby-sass.jpg
description:
    Recently I upgraded to Mojave on my Macbook Pro (late 2015). Unbeknownst to
    me until today, my Ruby system install broke in the process.
date: '2019-01-18'
tags:
    [
        'ruby',
        'homebrew',
        'mojave',
        'gem-install-sass',
        'brew-upgrade',
        'rbenv',
        'system-version',
        'command-line',
        'commands',
        'unix-scripting',
        'osx',
    ]
categories:
    ['web-development-workflows', 'osx', 'command-line', 'terminal', 'homebrew']
author: 'Maria D. Campbell'
---

Recently I upgraded to **Mojave** on my **Macbook Pro** (late 2015). I then
decided it was also time to upgrade **Homebrew**. I needed to update `postgres`,
so thought I would update everything else. `postgres` was a success. Read more
in my posts entitled
[Upgrading PostgreSQL from version 10.4 to 11.1 via Homebrew (OSX)]() and
[Changing your (Homebrew) PostgreSQL configuration from trust to md5]().

Unbeknownst to me until today, my **Ruby** system install broke in the process.
I hadn’t done anything related to **Ruby** installations in a couple of years,
and had to refresh my memory on it. Had I installed with **RVM**? I checked to
see if I had it installed on my computer. No. What else could I have used to
**_manage_** my **Ruby** installs? I googled for information regarding the error
I got when trying to watch a file on a Node project I am working on in which I
decided to **switch** **_from_** **CSS** to **SCSS** (today). I just find it to
be a much more efficient and powerful way to work with global styles. When I
tried to run `sass --watch public/styles/styles.scss`, I got the following error
in my **Terminal** console:

```shell
can't find gem sass (>= 0.a) with executable sass (Gem::GemNotFoundException)
```

So then I decided to `re-install` **Sass**. I ran

```shell
gem install sass
```

That did not work either. It installed **Sass** alright, but I had updated
**Ruby** with **Homebrew**, so installing the gem that way did not reach the
**Homebrew** **_Cellar_**. Then I remembered that since **El Capitan**, **OSX**
is a **_rootless_** system, and **Apple** prevents user applications (or users)
to modify `/usr/bin` for security reasons. A
[StackOverflow thread](https://stackoverflow.com/questions/40957368/gem-install-sass-error)
I came across mentioned `rbenv.` Like `rvm`, `rbenv` is a **_Ruby_**
**installer** and **version manager** which one can install via **Homebrew**.
And that is what I had done ages ago. I checked to see if it was installed on my
machine, and indeed it was! Then I googled to see how I could fix my issue with
`rbenv`. I came across a very helpful post that helped me resolve my **Ruby**
problem.

The post takes you through the steps of **_installing_** `rbenv`, but I already
had it installed. When I ran `brew upgrade`, the upgrade probably affected
`rbenv` as well! Evidently, the path to my **Ruby** got a bit screwed up. So
this is what I did:

First I checked to see what **_versions_** of **Ruby** I had available to me by
`rbenv` to install with the command `rbenv install -l`.

Next I wanted to make sure that my `rbenv` **_system version_** was the same as
my `ruby -v`. I ran `rbenv global` and version `2.3.7` was returned from both
`rbenv global` and `ruby -v`.

Then I installed the **_latest version_** of **Ruby** available in `rbenv` with
the command `rbenv install 2.7.0-dev`.

Next I ran the command `rbenv global` to check what my system version of
**Ruby** was **_after_** the `rbenv install`. It returned `2.7.0-dev`. After
that, I checked to so what `ruby -v` would output to **Terminal** just to make
sure that everything was on the same page. It too returned version `2.7.0-dev`.

Then I had to set a **_new_** **global default version** with `2.7.0-dev` using
`rbenv`, so I ran the command `rbenv global 2.7.0-dev`. I was not successful the
first time around. Probably because I had run the command `gem install sass`
which I did before fixing my **Ruby** upgrade. I suggest testing your
`sass gem install` in an application to make sure it actually works. Version
displays mean nothing. It is the path that counts. Installing `rbenv` modifies
the `PATH` variable, adding its own directory before any of the others.
`rbenv`'s path to **Ruby** when it executes a **Ruby** install is different from
what the default would be.

At first I got a **_strange stderr_** in **Terminal** when I tried to run
`sass --watch` **_after_** **installing** `ruby -v 2.7.0-dev` with `rbenv` and
setting the **_new_** **system version** `2.7.0-dev` with `rbenv global`. It was
the following:

```shell
Traceback (most recent call last): 2: from /usr/local/bin/sass:22:in <main>' 1: from /usr/local/Cellar/ruby/2.6.0/lib/ruby/2.6.0/rubygems.rb:302:inactivate_bin_path' /usr/local/Cellar/ruby/2.6.0/lib/ruby/2.6.0/rubygems.rb:283:in `find_spec_for_exe': can't find gem sass (>= 0.a) with executable sass (Gem::GemNotFoundException)
```

Thinking at first that I **_should install_** version `2.6.0` with `rbenv` and
use it instead, I tried installing `2.6.0` and setting it as the system default.
After that, I ran `sass --watch` and the `resulting output` to **Terminal** was
that **sass commands** were only available with `version 2.7.0-dev`. I
**_switched back_** to `2.7.0-dev` as my default system version and ran
`sass --watch` again. This time I was successful. I don't know how I got to the
point of success, but I did. I think this was related to the path issue I
mentioned earlier. Later I found another
[StackOverflow thread](https://stackoverflow.com/questions/45261658/why-cant-i-install-sass-on-mac-os-sierra)
regarding the topic that might help those that have encountered **Ruby** issues
with their Mac for the first time that might be of help. It relates to **High
Sierra**, but should also apply to **Mojave**.

As mentioned in my article entitled
[How to save terminal output to a file for future reference](), I **_closed out
of_** the **Terminal instance** containing the **stderr(s)** **_related to_**
**Ruby/Sass** before I could copy and paste them to a file for future reference.
There I do discuss how to create commands or scripts to automate the process.
This fuzziness will never happen again thanks to **Command Line** **_commands_**
and **Unix scripting**!

**Homebrew** is fantastic and I have been using it since its inception. As with
anything else, it too can have its moments. But in the end, everything is always
ironed out.

**Note:** It is situations like this that got me started with this Developer
Blog. Now I contribute to it much more religiously to record such occurrences
and their resolutions for future reference. Writing things down is also a great
way of committing it to memory and gaining a greater understanding of the
subject matter! It's also a way of giving back because of **_others_** **who
have helped** **_me_** along the way.

## Related Resources:

-   [How to save Terminal output to a file for future reference](/blog/how-to-save-terminal-output-to-a-file-for-future-reference/)

-   [Installing rbenv and Updating to the Newest Ruby Version on macOS 10.13.5](https://medium.com/@gratefulcheddar/installing-rbenv-and-updating-to-the-newest-ruby-version-22c465063450)

-   [rbenv on Github](https://github.com/rbenv/rbenv)

-   [a lot of error after updating to mojave #4975](https://github.com/Homebrew/brew/issues/4975)

-   [Can't find gem sass (&gt;= 0.a) with executable sass](https://stackoverflow.com/questions/48461207/cant-find-gem-sass-0-a-with-executable-sass)

-   [Why can't I install Sass on Mac OS Sierra?](https://stackoverflow.com/questions/45261658/why-cant-i-install-sass-on-mac-os-sierra)

-   [Ruby Sass to be put to pasture on March 26, 2019](https://css-tricks.com/ruby-sass-to-be-put-to-pasture-on-march-26-2019/)
