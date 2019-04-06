---
title: "When a Bare Bones Automated JS Workflow Makes Sense"
image: build_npm.jpg
description: Sometimes there are JavaScript projects which  don't need workflow tools such as Gulp, Grunt, Browserify, Webpack, etc.
date: '2018-11-20'
tags: ["npm"," local-scripts", "javascript-automated-workflows", "rimraf",  "gh-pages", "revealjs", "prebuild", "build", "postbuild"]
author: "Maria D. Campbell"
---

Sometimes we have ***JavaScript projects*** which don’t need workflow tools such as Gulp, Grunt, Browserify, Webpack, and the like. But we want to be able to simplify our lives with a ***simple*** **automated workflow**.

Right now I am working on ***updating*** my **React workflow** to ***reflect the changes*** that have taken place in **React**, **Webpack**, and **Babel**. I am using the [reveal.js](https://revealjs.com/#/) **presentation deck**, and I wanted to be able to ***quickly*** and ***easily*** **deploy** my presentation to **gh-pages**. I didn’t want to integrate some complicated tooling into the project, and neither is it necessary. I like how the [gh-pages](https://www.npmjs.com/package/gh-pages) **npm package** works for my **React applications**, and figured I could use it for my **React Workflow** ***documentation*** created with [reveal.js](https://revealjs.com/#/). What I came up with is really simple to use and quick to deploy.

First I ***initialized*** **npm** with the command

```shell
npm init
```

Then I added the `gh-pages` **npm package** as a ***dependency*** with the command

```shell
npm i gh-pages -S
```

Then I added the `rimraf` **npm package** as a ***devDependency*** with the command

```shell
npm i rimraf -D
```

Next I had to create my ***custom local scripts*** in my `package.json`. This is how my `scripts property` looked like initially:

```js
"scripts": {
    "clean": "rimraf dist",
    "dist": "mkdir dist",
    "buildfiles": "cp index.html dist/",
    "builddirs": "cp -R plugin lib js images css dist/",
    "deploy": "gh-pages -d dist"
},
```

## rimraf

The `rimraf` **npm package** is known as

```markdown
The UNIX command `rm -rf` for node.
```

In other words, it will ***remove*** whichever **folder** you want ***removed*** from your **project**. My `local script`

```js
"clean": "rimraf dist"
```

***removes*** my `dist` **folder**. I do this whenever I have made ***changes*** to my **project**. I need to be able to **deploy** an ***updated version*** of `dist`, so I **first remove** the ***old version*** to **make room** for the ***new***.

My `local script`

```js
"dist": "mkdir dist"
```

**creates** a **directory** called `dist`. Since I am ***not*** using **Webpack** here, which normally would take care of **creating** a `dist` **folder** for me somewhere in my `webpack config`, I need to ***initially create*** a `dist` **folder** where all my project files and folders go for ***deployment*** to `gh-pages`. Each time I remove my `dist` **folder** with the `npm run clean` **command**, I have to ***recreate*** my `dist` **folder**.

The **script**

```js
"buildfiles": "cp index.html dist/",
```

***copies*** my `index.html` which is in `root` into my ***newly*** **created** `dist` **folder**.

I couldn’t copy both files and folders all in one command, so I created a second script,

```js
"builddirs": "cp -R plugin lib js images css dist/",
```

which ***copied*** the folders I needed from root into the `dist` **folder**.

With all ***necessary*** **files** and **folders** ***copied*** into `dist`, I am ready to ***deploy*** my **project** to `gh-pages` with the following command:

```js
"deploy": "gh-pages -d dist"
```

The `-d` **flag** stands for deployment. The `script` means that the `dist` **folder** will be ***deployed*** to `gh-pages` with the `npm run deploy` **command**.

I realized that I ***could***, however, **improve** upon this **automation**. I ended up with the following ***terser*** **automation** utilizing the following ***sequence of scripts*** in my `package.json`:

```js
"scripts": {
    "clean": "rimraf dist && mkdir dist",
    "prebuild": "cp index.html dist/",
    "build": "cp -R plugin lib js images css dist/",
    "postbuild": "gh-pages -d dist"
},
```

Instead of separating `rimraf dist` from `mkdir dist`, I combined the two, thereby getting rid of the `npm run dist` **command**. Instead of naming my ***remaining*** `scripts` `buildfiles`, `builddirs`, and `deploy`, I ***named*** **them** `prebuild`, `build`, and `postbuild`. With the ***former*** `script` **naming**, I would ***have to*** **type out** ***all three*** `scripts`, because they are ***not*** **naming** ***conventions***, **built in** `script` **names**. ***Naming*** my **last three** `scripts` `prebuild`, `build`, and `postbuild`, I ***only*** **have to run** ONE `script`:

```shell
npm run build
```

***All three*** `scripts` would **run** ***in sequence***. ***First*** `prebuild`, ***then*** `build`, and ***last*** `postbuild`.

And that’s it! No fuss, no muss, and only took a minute or two to create.

***Happy Bare Bones Automated JS Workflows!***

### Related Resources:

+ [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8)