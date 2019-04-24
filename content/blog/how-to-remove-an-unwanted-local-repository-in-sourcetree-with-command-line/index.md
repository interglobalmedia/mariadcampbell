---
title:
    'How to remove an unwanted local repository in Sourcetree with Command Line'
image: kazuend-30877-unsplash.jpg
description:
    Last week, I forgot to drag the folder I wanted to track into the Sourcetree
    bookmarks window and created a new repository directly in the bookmarks
    window.
date: '2015-07-08'
tags: ['distributed-version-control', 'git', 'sourcetree', 'git-gui']
categories: ['command-line', 'git', 'sourcetree']
author: 'Maria D. Campbell'
---

So you may ask yourself “What is the big deal about removing an unwanted
repository in [Sourcetree](https://www.sourcetreeapp.com/) with `Command Line`?
I mean, like, I remove unwanted local repositories all the time!” Well, the kind
of unwanted local repository I’m talking about is the kind that incorporates all
the files in your computer. “But how is that possible?” you may ask. I’ll tell
you.

I am still fairly new to [Sourcetree](https://www.sourcetreeapp.com/), but have
become much more familiar with it as a result of a “brain fart” I experienced
last week. I forgot to drag the folder I wanted to track into the
[Sourcetree](https://www.sourcetreeapp.com/) bookmarks window. Instead, I
created a new repository directly in the bookmarks window.

Take a look at the image of the [Sourcetree](https://www.sourcetreeapp.com/)
bookmarks window located above. There you will see a tab called “New
Repository”. If you create a repository in that way, you will also be creating a
local git (or mercurial) repository at the same time, AND it will by default
create a path from your home directory. And as we all know, that is where all
the files on our computer reside! I had a brain fart and created my repository
in this way instead of dragging a folder from one of my local installs into the
bookmarks window. When you drag a folder into the bookmarks window,
[Sourcetree](https://www.sourcetreeapp.com/) immediately recognizes the path to
that folder, which is really cool. Not so cool when you inadvertently create the
repository within the bookmarks window.

So what is a girl to do when her whole computer resides in a
[Sourcetree](https://www.sourcetreeapp.com/) repository? First of all, I did
NOTHING with this repository. Luckily, I immediately realized my mistake.
Luckily, I realized that I shouldn’t take any kind of action. In other words, I
shouldn’t track anything. I shouldn’t commit anything. I should do NOTHING until
I learned how to get rid of it. That was the only thing to do here. And I also
knew that I had to exhibit extreme patience. I knew that there was definitely a
way out of my dilemma. I just didn’t know how to get out of it myself. I left a
message on the [Atlassian Forums](https://community.atlassian.com/) regarding my
dilemma, and I RSVPed to a [Hacker Hours](https://www.meetup.com/hackerhours/)
meetup (which I attended yesterday) just in case.

I didn’t receive any response to my dilemma from **Atlassian Support**. I
received an automated message indicating receipt of my email, but that was it. I
received a response from someone in the Forums with a possible solution, but was
not able to respond to his response! I had made a total combination of 3
questions/comments in the Forums, so I wasn’t able to initiate any more activity
there until I accumulated 25 points. “How retarded is that?” I told myself. I
had this major issue I had to resolve, and there was no way for me to
communicate with anyone in the Forum! I prayed hard that someone would be able
to help me at Hacker Hours.

Lo and behold, I overheard a conversation about `Command Line` going on behind
me during [Hacker Hours](https://www.meetup.com/hackerhours/), and I knew that I
was in the right place. Jasmine, the meetup lead, showed me how to get rid of
the local `.git` I had inadvertently created with my home directory in
[Sourcetree](https://www.sourcetreeapp.com/) using `Command Line`:

```shell
rm -rf .git
```

Basically, this command gets rid of the local `.git` folder that’s created when
you create local `.git` repositories. When you get rid of this folder,
[Sourcetree](https://www.sourcetreeapp.com/) will no longer recognize the
repository associated with that folder. The downside is that if you have other
local repositories that you have created in the same location, you will lose
them as well. What made it so easy for me to get rid of my local `.git`
repository was that I hadn’t tracked any files, and I hadn’t committed anything.
In addition, I hadn’t created any other local `.git` repositories on my
computer. Only this one. All my other repositories were created via drag and
drop, and therefore were not local `.git` repositories. They were just local
repositories that I hadn’t connected to any remote repositories either.

I took away a couple of very important things from this experience:

-   Be patient. Being impatient or impulsive will only lead to disaster. If you
    aren’t sure about how to rectify a situation, wait until you come across the
    sure fire solution. Better yet, wait until you come across an opportunity to
    resolve your issue face-to-face with people who know what they are doing.

-   If you are lucky enough to immediately recognize that you’ve made a mistake,
    DON’T DO ANYTHING. Just let the repository sit there until you have the
    appropriate knowledge to remove it. Don’t be tempted to track anything just
    because. Don’t be tempted to commit anything just because. Just forget about
    it, just because!
