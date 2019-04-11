---
title: "Installing pgAdmin Only after installing PostgreSQL with Homebrew"
image: postgresql.jpg
description: I hadn't installed pgAdmin with Homebrew previously because it is severely outdated, but decided I should give it a try on the pgAdmin website.
date: '2018-06-15'
tags: ["web-development", "full-stack-javascript", "postgresql", "command-line", "homebrew"]
categories: ["web-development", "full-stack-javascript", "postresql", "command-line", "homebrew"]
author: "Maria D. Campbell"
---

**Update June 17, 2018:** I revisited this issue just now and the set up really is easy. I will be writing a post on this and will link it to here. I much prefer using **Homebrew**, especially for local development, but I also like having the ability to use a **GUI**. This set set up just makes life so much easier if you want to push your local repo to remotes such as **Github**!

**Note 6.16.18:** I did find out after, however, that it can be very difficult to set up without the graphical interface/server installed with it. I switched over to the **GUI install** because I like to be able to go in there and take a look around like I do with **MongoDB** and as I had done with **PHPAdmin** back in the day. My only concern is that down the line I will have issues with the **Migration Assistant** when I get a new computer. It was a hell when I got my current computer recently. That’s why I then switched to **Homebrew**. We shall see. I still might switch back after I get more familiar with the `RDBMS`.

I recently started to learn **PostgreSQL**, and installed it on my **Mac High Sierra** with **Homebrew**. Today, I decided to delve much deeper into it and found a couple of interesting courses on it on [Udemy](https://www.udemy.com/postgresql-from-zero-to-hero/). I hadn’t installed **pgAdmin** with **Homebrew** previously because it is ***severely outdated***, but decided I should **give it** ***a try*** on the **pgAdmin website**. I installed it and tried to log in. I received the message that the ***role*** `postgres` was ***missing***, and I could not log in. That is because I had chosen to use my **computer shortname** instead. I decided to investigate the matter.

After some searching, I came up with the following from **Stackoverflow**:

+ [psql: FATAL: role “postgres” does not exist](https://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist)

The part that worked for me, and should for anyone else in a similar situation, is the following in the thread:

```markdown
@RogerLipscombe if you run brew link postgresql after the installation, there's no need to append the whole path to createuser, a simple createuser -s postgres will work great
```

It is a comment there, and it worked like a charm! I went back into **pgAdmin**, the **GUI** recognized my ***new*** `postgres user`, and I was able to log in.

For me, using **Homebrew** to manage my activity in `postgres` was the way to go, but I also wanted to be able to go into the **pgAdmin GUI** and get a comprehensive overview of my database activity.

Hope this helps, and **happy** ***pgAdmining***!

### Related Resources:

+ [How to uninstall postgreSQL on OSX and reinstall with Homebrew](/blog/how-to-uninstall-postgresql-on-osx-and-reinstall-with-homebrew)
