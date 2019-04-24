---
title: 'Mistakes can end up being brilliant moves'
image: postgresql.jpg
description:
    My teacher said that if I was working on shared code with others using
    postgreSQL databases, that I should create another account because of
    security reasons.
date: '2018-05-02'
tags:
    [
        'web-development',
        'full-stack-javascript',
        'postgresql',
        'command-line',
        'terminal',
        'homebrew',
    ]
categories:
    [
        'command-line',
        'full-stack-javascript',
        'homebrew',
        'postgresql',
        'terminal',
        'web-development',
    ]
author: 'Maria D. Campbell'
---

In a **_recent post_**, I spoke about how the **OSX Migration Assistant**
created a new user from my **postgreSQL** **_install_** on my **new laptop**.
**_Subsequently_** I talked about **_uninstalling_** **postgreSQL**
**_installed_**via the **postgreSQL GUI** and **_reinstalling_** directly into
my **administrator account** via **Homebrew**.

I mentioned my moves to my teacher, and he said that if I was working on shared
code with others using `postgreSQL databases`, that I should create another
account because of security reasons. A light bulb went on in my head, and I
decided to use my **_new_** `postgreSQL user` **account** for just that kind of
purpose. I had **_uninstalled_** the `postgreSQL` **install** located in the
**administrator account**, thankfully **_not_** the **new user account**.
**_Going forward_**, I will be **dedicating** **_that account_** to
**development projects** related to `postgreSQL` or other similar **team
development** **_scenarios_**.

It will mean setting up a separate **Github repo** with a **_separate_**
`public/private ssh` **key pair**, for example, but any extra step is well worth
the effort. Sometimes “mistakes” can result in brilliant moves!

**Note 4.6.19:** I have since abandoned this approach. It did not work well for
me in the end. Can't have two separate super user accounts on the same computer!
