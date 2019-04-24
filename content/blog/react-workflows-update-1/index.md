---
title: 'React workflows update 1'
image: react-workflows.jpg
description:
    I am refactoring my portfolio site using React, & while working on it, I
    checked another app I have on gh-pages, & noticed that it did not have
    production code.
date: '2017-10-04'
tags: ['react', 'react-workflows', 'webpack']
categories:
    [
        'front-end-development',
        'react',
        'web-development',
        'web-development-workflows',
    ]
author: 'Maria D. Campbell'
---

My **React Workflow** **_journey_** did not stop with my presentation on the
topic the other day. I am working on a new rendition of my **portfolio site**
using **React**, and while working on it, I **_checked_** **another
application** I have **_hosted_** on `gh-pages`, and noticed that it **_did
not_** **have** `production quality code`. I made the **necessary changes** to
my `webpack config`, **_splitting_** my **one** original **config** there
**_into two_**: `webpack-dev.config.js` and `webpack-prod.config.js`. And then I
**_updated them_** to the **latest changes** **_necessary_** to make the
**configs** **_valid_**. When I finally completed all changes, I `re-deployed`
the **app** in question to `gh-pages`. Now the `ReactDevTool` **showed** a
**_black icon_** **indicating** `production quality deployment`. What **made**
the `production quality`**_ possible_** was the **addition** of the
`webpack uglifyjs plugin`. However, in the past, with a couple of other apps I
had created, I had tremendous issues with the plugin. In one case, it might have
had to do with the code in all honesty. I’m not sure. In other cases, there
simply were conflicts with other plugins and configs in `package.json`. So
`minification` never even took place. At the time, I was using version 0.3
something of the plugin. Today, I installed version 0.4.6. And guess what? If
you are familiar with my presentation, remember the burning question I asked
regarding **keeping** the **_filenames_** of `[chunkhash] bundle.js` and
`runtime.js` the **_same_** if there were **no changes** to the **files**? When
I would **run** a **_new build_** in which there were no changes to either of
those files, their `[chunkhash]` would **_change_**. Today, when I **ran**
**_new builds_** in which there were **no changes**, none of my js files’
`chunkhashes` **changed**! I still had the **issue** of `no source-maps` being
**_emitted_** in `production` for **_any of_** my **js files** because of the
`webpack uglifyjs plugin`, but was very glad to know that I had achieved my
goal.

**_However_**, I’m not quite sure how I got there! I **_do_** **have**
**_additional plugins_** **installed**. The `webpack uglifyjs plugin` is a
**_different_** **version**. Go figure!

If anyone has had a similar experience and has figured out why I was successful
in making sure that the `chunkhashes` for all my `js files` would not change if
there were no changes, please let me know! The **webpack documentation** is not
very clear on this issue. It focuses mainly on the `vendor.js` **file**. Thanks!
