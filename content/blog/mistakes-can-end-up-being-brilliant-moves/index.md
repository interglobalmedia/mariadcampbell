---
title: "Mistakes can end up being brilliant moves"
image: postgresql.jpg
description: My teacher said that if I was working on shared code with others using postgreSQL databases, that I should create another account because of security reasons.
date: '2018-05-02'
tags: ["web-development", "full-stack-javascript", "postgresql", "command-line", "terminal", "homebrew"]
categories: ["command-line", "full-stack-javascript", "homebrew", "postgresql", "terminal", "web-development"]
author: "Maria D. Campbell"
---

In a ***recent post***, I spoke about how the **OSX Migration Assistant** created a new user from my **postgreSQL** ***install*** on my **new laptop**. ***Subsequently*** I talked about ***uninstalling*** **postgreSQL** ***installed***via the **postgreSQL GUI** and ***reinstalling*** directly into my **administrator account** via **Homebrew**.

I mentioned my moves to my teacher, and he said that if I was working on shared code with others using `postgreSQL databases`, that I should create another account because of security reasons. A light bulb went on in my head, and I decided to use my ***new*** `postgreSQL user` **account** for just that kind of purpose. I had ***uninstalled*** the `postgreSQL` **install** located in the **administrator account**, thankfully ***not*** the **new user account**. ***Going forward***, I will be **dedicating** ***that account*** to **development projects** related to `postgreSQL` or other similar **team development** ***scenarios***.

It will mean setting up a separate **Github repo** with a ***separate*** `public/private ssh` **key pair**, for example, but any extra step is well worth the effort. Sometimes “mistakes” can result in brilliant moves!

**Note 4.6.19:** I have since abandoned this approach. It did not work well for me in the end. Can't have two separate super user accounts on the same computer!