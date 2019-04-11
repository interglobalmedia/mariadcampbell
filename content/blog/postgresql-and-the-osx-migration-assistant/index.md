---
title: "postgreSQL and the OSX Migration Assistant"
image: iorni-com-321845-unsplash.jpg
description: When I got home, I researched how to completely uninstall postgres on my administrator account, install it via Homebrew, and get subsequently get it running.
date: '2018-04-30'
tags: ["migration-assistant", "homebrew", "osx", "command-line", "terminal-program", "full-stack-javascript", "postgresql", "web-development"]
categories: ["web-development", "command-line", "full-stack-javascript", "osx", "postgresql", "terminal"]
author: "Maria D. Campbell"
---

Last week I received a new `macbook pro laptop` I had purchased. My old laptop had seen better days. I had lost functionality in my t key on my keyboard. My `external speakers` were shot. And after I had already purchased and received the laptop, I found out that my `thunderbolt port` was dying.

How did I find THAT piece of information out? I was trying to transfer my data from my old computer onto my new one with the `OSX Migration Assistant`, and nothing happened.

I wanted to know if I had perhaps made a mistake, so I took both laptops to the Apple Store at Grand Central to get the migration done there.

A very nice Apple Genius representative set me up and started the data migration process using the `OSX Migration Assistant`. It started alright, just as it had done at home, but then it suddenly stopped, as it had done at home. At first we continued with the process thinking that it was just a matter of data size. But after a while, we realized that no progress was being made. The Genius rep ran a diagnostic on my computer and didn’t find anything TOO terrible. My battery was running at 77%. It was at the ***consuming level***, so not yet in the danger zone. But definitely close! He guessed that it had to have something to do with my `thunderbolt connection`. He didn’t know if it was my port that was faulty, or the store’s. He recommended that I visit the `iStore`, an approved Apple Premier Support Provider. They specialize in data recovery, among other things. He said that they would be able to run a much deeper diagnostic of my computer.

I went. I dropped off. I waited two days. I returned and picked up. Everything seemed just fine. The only difference was that suddenly a `new user` had been created on my new laptop. It was called `postgreSQL`. I didn’t think much of it, and used the same credentials I had when I installed `postgres` on my old computer.

When I got home, I started working on a project which had worked well previously. ***However***, now I was not able to update table records. I only could create a table, add a record to a table, and delete a record from a table. I could not edit a record.

This drove me crazy. Was it my code? Was it the fact that all my `postgres` ***related directories*** were **located** in a ***separate*** `OSX user` ***created*** from the `migration` ***initiated*** by the `OSX Migration Assistant`? Or was it **something** ***else***?

I went back to the `iStore`. I talked to them about the ***new*** `postgreSQL user account` on my **laptop**. We looked into it together. I had `permissions issues` on ***that account*** because it was **separate**, and also a **standard account**. If I wanted to give it `administrative privileges` ***permanently***, I would have to ***either*** `downgrade` or `remove` my ***current*** `administrative account` **permanently**. THAT was NOT an option. Besides, my goal was to be `permanent owner` of my `postgres` **install**. That could ***only*** **be implemented** if I **installed** it ***via*** **Homebrew** on the `command line`.

I don’t like deleting things as a rule, but this was a necessary evil I knew I could not avoid. ***Of course*** I **created** a ***backup*** on my `external hard drive`.

The trip to the `iStore` to ***check out*** the `postgres user account` was earlier today. When I got home, I researched how to ***completely*** **uninstall** `postgres` on my `administrator account`, ***install it*** via `Homebrew`, and subsequently **get it** ***running***.

I ***uninstalled***. I ***re-installed*** via **Homebrew**. I got it running AND my code working on the front AND backend.

I am now the proud **OWNER** of my `postgreSQL` **install**. This is what **appeared** in the `command line` after I **installed** `postgres` with **Homebrew** on the `command line`:

```js
mariacam=# CREATE DATABASE paymore;
CREATE DATABASE
mariacam=# \c paymore
You are now connected to database "paymore" as user "mariacam".
paymore=# select * from shoes;
paymore=# select * from shoes;
paymore=# select * from shoes;
paymore=# select * from shoes;
paymore=# select * from shoes;
paymore=# select * from shoes;
paymore=# select * from shoes;
paymore=# select * from shoes;
paymore=# select * from shoes;
paymore=# \dt+
                    List of relations
 Schema | Name  | Type  |  Owner   | Size  | Description
--------+-------+-------+----------+-------+-------------
 public | shoes | table | mariacam | 16 kB |
(1 row)

paymore=#
```

There were steps that I had to make before I got to this point, but `postgres` now was **installed** ***directly*** into my **administrator account**. ***No question*** of **ownership** or ***permissions***!

I came across several resources on the web that helped me get there. You can find them below:

### Related Resources:

+ [WHAT IS POSTGRESQL?](https://www.postgresql.org/about/)

+ [How To Install Postgresql On Mac](http://www.binarywebpark.com/install-postgresql-mac/)

+ [PostgreSQL and PostGIS installation in Mac OS](https://medium.com/@Umesh_Kafle/postgresql-and-postgis-installation-in-mac-os-87fa98a6814d)

+ [Completely Uninstall and Reinstall PSQL on OSX ](https://medium.com/@bitadj/completely-uninstall-and-reinstall-psql-on-osx-551390904b86)

+ [Postgres login: How to log into a Postgresql database](https://alvinalexander.com/blog/post/postgresql/log-in-postgresql-database)

+ [Getting Started with PostgreSQL on Mac OSX](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)

+ [Homebrew](https://brew.sh/)