---
title: 'When a Bare Bones Automated JS Workflow Makes Sense'
image: build_npm.jpg
description:
    Sometimes there are JavaScript projects which  don't need workflow tools
    such as Gulp, Grunt, Browserify, Webpack, etc.
date: '2018-11-20'
tags:
    [
        'npm',
        'local-scripts',
        'javascript-automated-workflows',
        'rimraf',
        'gh-pages',
        'revealjs',
        'prebuild',
        'build',
        'postbuild',
    ]
categories:
    [
        'front-end-development',
        'node-package-manager',
        'web-development-workflows',
        'osx',
        'command-line',
    ]
author: 'Maria D. Campbell'
---

Sometimes we have **_JavaScript projects_** which don’t need workflow tools such
as Gulp, Grunt, Browserify, Webpack, and the like. But we want to be able to
simplify our lives with a **_simple_** **automated workflow**.

Right now I am working on **_updating_** my **React workflow** to **_reflect the
changes_** that have taken place in **React**, **Webpack**, and **Babel**. I am
using the [reveal.js](https://revealjs.com/#/) **presentation deck**, and I
wanted to be able to **_quickly_** and **_easily_** **deploy** my presentation
to **gh-pages**. I didn’t want to integrate some complicated tooling into the
project, and neither is it necessary. I like how the
[gh-pages](https://www.npmjs.com/package/gh-pages) **npm package** works for my
**React applications**, and figured I could use it for my **React Workflow**
**_documentation_** created with [reveal.js](https://revealjs.com/#/). What I
came up with is really simple to use and quick to deploy.

First I **_initialized_** **npm** with the command

```shell
npm init
```

Then I added the `gh-pages` **npm package** as a **_dependency_** with the
command

```shell
npm i gh-pages -S
```

Then I added the `rimraf` **npm package** as a **_devDependency_** with the
command

```shell
npm i rimraf -D
```

Next I had to create my **_custom local scripts_** in my `package.json`. This is
how my `scripts property` looked like initially:

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

In other words, it will **_remove_** whichever **folder** you want **_removed_**
from your **project**. My `local script`

```js
"clean": "rimraf dist"
```

**_removes_** my `dist` **folder**. I do this whenever I have made **_changes_**
to my **project**. I need to be able to **deploy** an **_updated version_** of
`dist`, so I **first remove** the **_old version_** to **make room** for the
**_new_**.

My `local script`

```js
"dist": "mkdir dist"
```

**creates** a **directory** called `dist`. Since I am **_not_** using
**Webpack** here, which normally would take care of **creating** a `dist`
**folder** for me somewhere in my `webpack config`, I need to **_initially
create_** a `dist` **folder** where all my project files and folders go for
**_deployment_** to `gh-pages`. Each time I remove my `dist` **folder** with the
`npm run clean` **command**, I have to **_recreate_** my `dist` **folder**.

The **script**

```js
"buildfiles": "cp index.html dist/",
```

**_copies_** my `index.html` which is in `root` into my **_newly_** **created**
`dist` **folder**.

I couldn’t copy both files and folders all in one command, so I created a second
script,

```js
"builddirs": "cp -R plugin lib js images css dist/",
```

which **_copied_** the folders I needed from root into the `dist` **folder**.

With all **_necessary_** **files** and **folders** **_copied_** into `dist`, I
am ready to **_deploy_** my **project** to `gh-pages` with the following
command:

```js
"deploy": "gh-pages -d dist"
```

The `-d` **flag** stands for deployment. The `script` means that the `dist`
**folder** will be **_deployed_** to `gh-pages` with the `npm run deploy`
**command**.

I realized that I **_could_**, however, **improve** upon this **automation**. I
ended up with the following **_terser_** **automation** utilizing the following
**_sequence of scripts_** in my `package.json`:

```js
"scripts": {
    "clean": "rimraf dist && mkdir dist",
    "prebuild": "cp index.html dist/",
    "build": "cp -R plugin lib js images css dist/",
    "postbuild": "gh-pages -d dist"
},
```

Instead of separating `rimraf dist` from `mkdir dist`, I combined the two,
thereby getting rid of the `npm run dist` **command**. Instead of naming my
**_remaining_** `scripts` `buildfiles`, `builddirs`, and `deploy`, I **_named_**
**them** `prebuild`, `build`, and `postbuild`. With the **_former_** `script`
**naming**, I would **_have to_** **type out** **_all three_** `scripts`,
because they are **_not_** **naming** **_conventions_**, **built in** `script`
**names**. **_Naming_** my **last three** `scripts` `prebuild`, `build`, and
`postbuild`, I **_only_** **have to run** ONE `script`:

```shell
npm run build
```

**_All three_** `scripts` would **run** **_in sequence_**. **_First_**
`prebuild`, **_then_** `build`, and **_last_** `postbuild`.

And that’s it! No fuss, no muss, and only took a minute or two to create.

**_Happy Bare Bones Automated JS Workflows!_**

### Related Resources:

-   [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8)
