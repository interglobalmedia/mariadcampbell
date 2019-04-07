---
title: "My Amazon S3 Moment"
image: Custom-HTML5-Video-Player.jpg
description: Last week I decided to dive into a new project of my own creation, and the project entailed re-using code I had already created, so I was very excited about it. 
date: '2017-03-12'
tags: ["code-typo", "html5", "css3", "javascript", "favicon-ico", "favicon-link"]
author: "Maria D. Campbell"
---

Last week I decided to dive into a new project of my own creation. Part of the project entailed re-using code I had already created, so I was very excited about it. ***One of*** my **2017 New Year’s resolutions** was to create code that I would be able to re-use in other modules or projects, so I welcomed the opportunity.

Some re-usable code was related to cross-browser hacks for input ranges. I had already done quite a bit of research on the topic for my `Custom HTML5 video player`, and the code was pretty much complete. So I went to my **Github profile** and clicked on the link to the [custom-html5-video-player](https://github.com/interglobalmedia/custom-html5-video-player) `gh-pages` **website**. All the styling was gone! I was in a panic. There was a high probability that potential employers, team mates, or colleagues had visited the repository in this condition. Why did it happen, and what could I do to mitigate the severity of the situation? I looked over all the code and didn’t find anything at first. Then I had a sneaking suspicion that it might have had something to do with my custom favicon. I looked over the markup of the index.html for the custom player. Then the following stared at me in the face:

```js
<link rel="icon" href="https://interglobalmedia.github.io/custom-html5-video-player/favicon.ico" /
```

Were you able to catch it at first glance? I didn’t close the link tag. The ` >` was missing. I ***immediately*** **added it** and ***pushed*** the change to **Github**. So if you visited my [Custom HTML5 Video Player](https://interglobalmedia.github.io/custom-html5-video-player/) repo on **Github** in the past couple of weeks, there was no styling, because I had experienced my ***first*** `Amazon S3 **moment`, as I like to term it.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The Amazon S3 Outage Is What Happens When One Site Hosts Too Much of the Internet | WIRED <a href="https://t.co/jMLvrVi1gh">https://t.co/jMLvrVi1gh</a> <a href="https://t.co/sPqNl0isAX">pic.twitter.com/sPqNl0isAX</a></p>&mdash; Mark Wityszyn (@Coss4ck) <a href="https://twitter.com/Coss4ck/status/838765117517021185?ref_src=twsrc%5Etfw">March 6, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Perhaps the `Amazon S3` outage was a result of one site hosting too much of the internet, but in my case it was one person adding a favicon to too many projects in one fell swoop, and trying to get it done as quickly as possible. What did I learn? Don’t do it so quickly. Break up the tedious task into smaller chunks. Most important, don’t rush, no matter how much others want or expect you to. One has to find a balanced middle ground. Trying to race to the finish more often than not results in falling behind. Remember the **story** of the ***tortoise*** and the **hare**?

Please ***do*** visit the [repository](https://interglobalmedia.github.io/custom-html5-video-player/) now, as the issue has been fixed, and I am very proud of this project. I even added a couple of tweaks to make the visuals even more appealing. Thanks in advance for your patience and understanding!
