---
title: 'How to uninstall postgreSQL on OSX and reinstall with Homebrew'
image: postgresql.jpg
description:
    In this post, I list the steps I took to uninstall postgreSQL installed from
    the postgreSQL website and reinstall it using Homebrew.
date: '2018-05-01'
tags:
    [
        'osx',
        'command-line',
        'terminal',
        'homebrew',
        'full-stack-javascript',
        'postgresql',
        'web-development',
    ]
categories:
    [
        'web-development',
        'command-line',
        'full-stack-javascript',
        'homebrew',
        'osx',
        'postgresql',
        'terminal',
    ]
author: 'Maria D. Campbell'
---

Earlier today I wrote a post about what happens when you migrate your data from
an older macbook pro (mine was from late 2013) to a newer one (mine is from
late 2016) with the **OSX Migration Assistant**.

In this post, I list the steps I took to uninstall **postgreSQL** installed from
the **postgreSQL** [website](https://www.postgresql.org/about/) and reinstall it
using [Homebrew](https://brew.sh/).

For those of you not familiar with it, **Homebrew** is
`the missing package manager for macOS`. Created by developer **Max Howell** in
**_2009_**, **Homebrew** `installs the stuff you need that Apple didn't`.

I swear by it. So many other developers on `OSX` swear by it for so many
different things. Today it saved me yet again.

These are the steps I took to **_uninstall_** my `postgreSQL` **install** from
the `postgreSQL` **website**:

First I backed up my two postgreSQL installs, version 9.0.4 and version 10.3 to
my external hard drive, JUST IN CASE.

-   I uninstalled postgreSQL with the postgreSQL uninstaller. Since I had
    inadvertently installed two versions of posgreSQL. version 9.0.4 and then
    version 10.3. I uninstalled both. The data directory remained after both
    uninstalls, so I manually removed both.

-   Then I had to make sure to remove all files and directories related to
    postreSQL before re-installing. So I checked to see if anything was left
    over by going into the following path in command line:

```shell
/usr/local/var/postgres
```

-   Then I did an ls -a to see if there was anything in there. There was, so I
    typed the following in command line:

```shell
rm -rf /usr/local/var/postgres
```

-   This removed everything within the postgres directory. Some take it a step
    further to remove all local traces of postgres (I did not because I had done
    an postgreSQL uninstall and then removed the data directory via GUI. I can’t
    vouch for this step since I did not do it.):

```shell
rm -rf .psql_history .psqlrc .psql.local .pgpass .psqlrc.local
```

To **view** the `original source` for this information, please visit
[Completely Uninstall and Reinstall PSQL on OSX](https://medium.com/@bitadj/completely-uninstall-and-reinstall-psql-on-osx-551390904b86)
by **_Bita Djaghouri_**.

-   Then I typed the following command to install postgreSQL with Homebrew:

```shell
brew install postgreSQL
```

In some places you may see `brew install postgres`. I went with the former.

-   Then, for the sake of ease and time saving, I started postgreSQL with
    Homebrew by typing the following command:

```shell
brew services start postgresql
```

-   If you restart PostgreSQL using Homebrew with this command, you will not
    have to restart Postgres services every time you want to run `psql`. It is a
    matter of preference.

-   Now comes the cool part. Instead of inheriting the default postgres db that
    comes with the GUI (Graphical User Interface) installation, you can create a
    customized one with your system username by typing the following command in
    Terminal/command line:

```shell
createdb `whoami`
```

exactly as shown, with back ticks and all.

-   `whoami` is actually a command you type in Terminal when you want to confirm
    what user you are in at any given time. By typing the above command, you are
    telling `postgres` to **_create_** your `default database` and **_name it_**
    with **your** **_username_**. In my case, it is `mariacam`, so my default
    database is `mariacam` instead of `postgres`.

-   Next I typed the following command:

```shell
psql
```

And this is what was returned in the **Terminal** console:

```shell
psql (10.3)
Type “help” for help.
mariacam=#
```

-   The last step was to make sure that my projects were connecting with the
    database they were associated with and that my code was working. That part
    is up to you!

### Releated Resources:

-   [postgreSQL and the OSX Migration Assistant](/blog/postgresql-and-the-osx-migration-assistant)

-   [Installing pgAdmin Only after installing PostgreSQL with Homebrew](/blog/installing-pgadmin-only-after-installing-postgresql-with-homebrew/)
