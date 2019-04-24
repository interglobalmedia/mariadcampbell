---
title: 'The Chrome Favicon Nightmare And How I Finally Fixed It'
image: favicons.png
description:
    The other night was a real doozy, because I decided to add favicons to all
    my gh-pages hosted projects on Github.
date: '2017-02-25'
tags: ['favicons', 'chrome', 'google-chrome-favicon-bug']
categories: ['front-end-development', 'web-development']
author: 'Maria D. Campbell'
---

The other night was a real doozy. I decided to add `favicons` to all my
`gh-pages` **hosted** projects on **Github**. A while ago I had added a
`favicon` to a project using one of the images for project itself and I had no
problems after installation. So yesterday I thought, why not install a new brand
favicon that would match the look of the front of my new business card? I wanted
to get started on developing my new brand image and make it easy for people to
recognize MY work. Favicons are great for that.

So I went ahead and installed my newly generated favicon on all relevant
gh-pages-hosted projects. In the beginning, everything seemed fine locally.
However, once the favicon was pushed remotely, things got hairy locally and
remotely. I would get an infinitely spinning wheel on page load.

At first I thought it might be the font. But I thought it couldn’t be the case,
because I always choose speedy Google fonts and never had any problems.
Nevertheless, I tried replacing one font in a project to see what would happen.
It made no difference. It’s then that I knew that it must be the favicon.

Then I tested the `localhost` link in **Firefox** and the `gh-pages` link in
**Firefox**. There was no problem with page load. And **Safari** simply doesn’t
display favicons at all.

I started `Google Searches` for `“Favicon Bugs in Chrome”` and
`“Chrome issues favicons”`, to name a couple. Did not come up with much of
anything at first, but it was only as I dug deeper and deeper, and finally
`conducted a search` entitled `“Refreshing favicons in Chrome”` that I came up
with my solution. It was a **StackOverflow** post entitled
[“How do I force a favicon refresh”](https://stackoverflow.com/questions/2208933/how-do-i-force-a-favicon-refresh)
from 7 years ago! The answer that solved my problem was NOT the most upvoted on
the page but the following:

```html
801 Ok, after 10 minutes of wtf'ing, the easy way to fix it is close to that of
lineofbirds Type in www.yoursite.com/favicon.ico (or
www.yoursite.com/apple-touch-icon.png, etc.) Push enter ctrl+f5 Restart Browser
(IE, Firefox)
```

This does **_NOT_** just apply to **IE** or **Firefox**. It also applies to
**Chrome**. But since this was written 7 years ago, **Firefox** has since fixed
its favicon bug. It was **only Chrome** that caused me problems. **Safari**
fixed its issue by NOT **_displaying favicons_** AT ALL.

The solution above fixed my problem and I haven’t had an issue since.
