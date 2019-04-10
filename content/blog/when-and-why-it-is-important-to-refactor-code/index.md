---
title: "When and why it is important to refactor code"
image: the_cat_whisperer_1024_488.jpg
description: Why I refactored the code for my app called The Cat Whisperer, and what I learned from the experience regarding future developments for the application.
date: '2019-01-09'
tags: ["web-development", "front-end-development", "javascript", "node-package-manager", "nodejs", "node-security", "react", "web-development-workflows", "code-refactoring", "webpack-4", "babel-7"]
categories: ["front-end-development", "javascript", "node-package-manager", "nodejs", "react", "web-development-workflows"]
author: "Maria D. Campbell"
---

This post is about why I **refactored** the **code** for my **app** called **The Cat Whisperer**, and what I learned from the experience regarding future developments for the application.

The **Cat Whisperer App**, available for viewing on **Github** ***gh-pages*** and on my **portfolio site** there, is a little app I created so that cat lovers could be inspired to write about their cats using the **Speech Synthesis API** while being inspired by the app’s **cat image fader slideshow**. There is also music if one wants to listen while writing. The user’s text is ***saved*** to session storage. If he/she does reach the **5mb limit**, he/she can save it to a `.txt`file and **download** it on their desktop. In **iOS** ***mobile***, he/she can save it to an app. I save it to my **Wunderlist** app, for example. In **iOS**, however, downloading the **session storage** text ***only works*** (interestingly enough) in **Safari**. It does ***not work*** in **Chrome** or **Firefox**. **Firefox** is ***no longer supported*** by **iOS** anyway.

## The Original App (in brief):

### 📝 The workflow tools:

**devDependencies:** autoprefixer, babel-core, babel-loader, babel-preset-es2015, browser-sync, del, eslint, gulp, gulp-cssnano, gulp-gh-pages, gulp-imagemin, gulp-modernizr, gulp-postcss, gulp-rev, gulp-uglify, gulp-usemin, gulp-watch, postcss-hexrgba, postcss-import, postcss-mixins, postcss-nested, postcss-simple-vars, webpack

**dependencies:** jquery, normalize.css, picturefill

Originally I used **local storage** as a means of for the user to save his/her data to their computer/mobile device and to a `.txt` file which they could **download** and take away. I also used the **speechSynthesis API** for ***text-to-speech*** **functionality**, a **CSS slider** for entertainment, **accompanied** ***by*** **music** when the user either hovered over the image or clicked on a play button. There was also the ability for the user to **clear/empty** the **local storage** on their machine.

I used **POSTCSS** instead of **SCSS** at the time because I thought it was ***so cool*** to be able to style my apps with something that was itself ***created with JS***. **POSTCSS** can only work with apps ***driven by*** **npm**.

## The App Today (in brief):

### 📝 The workflow tools:

**devDependencies:** @babel/core, @babel/core, @babel/plugin-proposal-export-namespace-from, @babel/plugin-proposal-object-rest-spread, @babel/plugin-proposal-throw-expressions, @babel/plugin-syntax-dynamic-import, @babel/plugin-transform-modules-commonjs, @babel/plugin-transform-object-assign, @babel/preset-env, babel-core, babel-eslint, babel-loader, clean-webpack-plugin, copy-webpack-plugin, css-loader, eslint, eslint-cli, eslint-config-prettier, eslint-loader, eslint-plugin-import, eslint-plugin-prettier, file-loader, html-webpack-plugin, htmlhint, lint-staged, mini-css-extract-plugin, node-sass, optimize-css-assets-webpack-plugin, postcss, postcss-loader, prettier, rimraf, sass-loader, style-loader, uglifyjs-webpack-plugin, url-loader, webpack, webpack-cli, webpack-dev-server, webpack-merge, workbox-webpack-plugin

**dependencies:** autoprefixer, gh-pages

Today there are many more **devDependencies** than before, but the actual code it takes to create the workflow is much more terse. It is also the latest and greatest in **Open Source** that is so very well maintained! With the ***advent*** of **Node Security** mid last year, maintainers can’t hide behind a curtain anymore. If there are vulnerabilities or security issues, we developers find out about them immediately. Something may pass as secure one week, and as soon as the next may reveal a vulnerability. They range from very low to critical!

Speaking of ***security issues*** and ***vulnerabilities***, after noting that the **local storage** of a couple of of my apps, this one being one of them, ***shared data*** with each other on my machine, I decided to ***bag*** **local storage** and ***replace*** it with **session storage**. So now users can save their cat story data during an app session, but once they close out on it, the data does not persist in storage and is lost. The ***best of both worlds*** that way.

When I learned that **POSTCSS** did not offer the wide range of features provided by **SCSS/SASS**, I switched back to **SCSS**. I use it in my **React**, **Vanilla JS**, and **Node** ***apps***. And it works ***seamlessly*** now with **Webpack**. That was not always the case in the past.

## What I would do differently:

I would build this application using a framework or library. The first that comes to mind ***for me*** is **React**. As far as ***performance optimization*** regarding ***images***, I would not necessarily simply look to **compression** or different image sizes for different screen widths embedded in ***non JSX*** html as my answer to image upload optimization. Some compression is necessary in the workflow, but ***dynamic imports*** of **images** into **JS** files and **Webpack** ***code splitting*** are definitely the way to go. I will be developing this app further, and those changes are on the horizon!

### 📝 Project Related Links:

+ [View The Cat Whisperer App on Github](https://interglobalmedia.github.io/the-cat-whisperer/)

+ [My Portfolio Site (The Cat Whisperer)](https://interglobalmedia.github.io/portfolio/#/work/cat-whisperer-app)

+ [Source Code](https://github.com/interglobalmedia/the-cat-whisperer)

+ [Refactoring your JS workflow when your images are in your CSS only]()