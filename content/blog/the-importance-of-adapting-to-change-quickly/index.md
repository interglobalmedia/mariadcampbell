---
title: "The Importance Of Adapting To Change Quickly"
image: node_npm.jpg
description: Recently, I started revisiting some of the front end projects I had created some time ago.
date: '2018-10-28'
tags: ["web-development", "full-stack-javascript", "nodejs", "web-development-workflows"]
author: "Maria D. Campbell"
---

Lately I had been focusing more on the backend of web development. Recently, I started revisiting some of the front end projects I had created some time ago. Some were even from more than two years ago! One static app in particular, no longer even worked locally or remotely (for different reasons).

Looking on it, I found that **Front End** ***development*** can be ***extremely*** workflow heavy. In fact, it usually is, if there is anything of any import going on. But with knowledge of the big picture, one can pare down the workflow drastically if it is a simple application.

More than two years ago, I had created a static app called **Random Quote Machine**. I used ***webpack***, many ***npm packages***, **ES6 modules**, **jQuery**, **JavaScript**, **Gulp**, etc. It was just a single page app! Yes, I had developed a great front end workflow which I re-used in many of my static apps, so that made set up fairly quick. BUT it had taken a long time to fine tune it! I had much more code dedicated to the workflow than I did to the app code itself.

When I revisited my **Random Quote Machine** to update it, I found that it would involve a complete revamp. First of all, a ***number*** of the **packages** I had been using now **revealed** ***vulnerabilities***. How do I know that? Because ***as of*** `npm@6`, a **new feature** called `npm security audits` began. ***Fixing*** these **vulnerabilities** if they are ***not*** **immediately** ***fixable*** with the `npm audit fix` **command** can be ***fairly complicated***. And many packages are not regularly maintained in the long run. A package can be the hottest thing around one day, and abandoned or lost its popularity to the next hottest thing the next day.

I really wanted to create a new random quote api app that was 

1. ***Free to use*** 

2. Had ***no api keys***. I finally came up with one! Not surprisingly, it was a `quotes api` consisting of ***Trump*** **quotes** called `What Does Trump Think?` For me it was not so much about getting the right kind of quotes, just that it was ***free*** and **did not require** `api keys`!

I also didn’t want to fiddle with updating a new front end workflow for this particular project. I ended up creating a [Nodejs](https://nodejs.org/en/) app using the [ejs](https://ejs.co/) (`embedded javascript`) ***view engine*** for [Express](https://expressjs.com/), a `minimalist framework for Nodejs`. I was only using one image which was not large, and there were no fancy animations involved.

I reduced my code drastically. I updated the method I used to call the API. I used the [fetch() API method](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) instead of [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX). This also meant that I could use pure [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) instead of mixing with [jQuery](https://github.com/jquery/jquery) as well.

I must admit that this was just a quick fix for something that really did not need more complexity and that I have to continue investigating what my new front end workflow should be. It still is a good example of adapting quickly to change when it comes to (web) development. One has to constantly be on one’s toes. I’m telling you, that is very hard to do!

### Related Resources:

+ [Running A Security Audit - npmjs.com](https://docs.npmjs.com/getting-started/running-a-security-audit)

+ [Trump Talks Trash app](https://trump-talks-trash.herokuapp.com/)

+ [Trump Talks Github Repository](https://github.com/interglobalmedia/trump-talks/)


