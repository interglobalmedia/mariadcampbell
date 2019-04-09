---
title: "My first time using React 16.0"
image: alejandro-alvarez-150154-unsplash.jpg
description: Yesterday React 16.0 was released, and guess what happened to my project.
date: '2017-09-27'
tags: ["react", "react-16"]
categories: ["front-end-development", "react", "web-development"]
author: "Maria D. Campbell"
---

Yesterday I started working on a ***new*** **React project** which I am calling for the time being `React Universal Blog`. I set up my basic workflow, directory structure, and files. I set up for `Jest testing`, initially mocking out stylesheets and images to make sure everything was working properly. Later I’ll switch over to `mocking CSS Modules`, because I use them with `POSTCSS`. It’s not necessary to do that unless you intend to use `Jest Snapshot Testing`, and I do! I really want to check it out, and it just makes sense when you **do** **use** `CSS Modules` in `development`.

But that’s not why I am writing this post. I started this new project yesterday. And guess what big event took place yesterday! **React 16.0** was released! And guess what happened in my project. I ***installed*** **React 16.0**.

Before I realized all this, I decided to make sure that my `Jest configuration` was ***working***, so today I **typed** `npm run test` in **Terminal**. This is what was printed out to the `console`:

```shell
> react-universal-blog-app@1.0.0 test /Users/mariacam/Development/react-universal-blog-app
> jest

PASS src/sum.test.js
PASS src/App.test.js
● Console

console.error node_modules/fbjs/lib/warning.js:33
Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills

Test Suites: 2 passed, 2 total
Tests: 2 passed, 2 total
Snapshots: 0 total
Time: 1.669s
Ran all test suites.
```

Notice something different?

```shell
console.error node_modules/fbjs/lib/warning.js:33
Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
```

That’s what reminded me that **React 16.0** was released yesterday, and that my project must be using it! I wonder what other new goodies I will encounter!

***Happy coding!***