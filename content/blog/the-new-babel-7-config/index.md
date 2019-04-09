---
title: "The New Babel 7 Config"
image: babel_jsx.png
description: For the last day or so, I have been working on making Jest play nice with the new Babel 7.
date: '2018-12-03'
tags: ["jest", "babel-7", "web-development-workflows", "react", "webpack", "test-driven-development"]
categories: ["web-development", "front-end-development", "react", "tdd", "web-development-workflows"]
author: "Maria D. Campbell"
---

**Update December 3, 2018:** There were some ***issues*** along the way ***due to*** **breaking changes** in **Babel 7** which ***affected*** **Jest**, **React**, and **ESLint**. ***Unless*** you are using `create-react-app`, your **workflow** might have to be ***adjusted*** depending on what **support** you want to ***provide*** in any given **application**. I have brought ***all resources*** **together** in the ***repository*** for the **second edition** of my ***custom React Workflow*** on **Github**. Please visit [issues](https://github.com/interglobalmedia/react-workflow-updated-2018/issues/1) to learn more.

For the last day or so, I have been ***working on*** making **Jest** ***play nice*** with the ***new*** **Babel 7**. It was quite the journey, but I finally got there. So far!

+ First I created an application with my ***updated*** **custom React workflow** that ***only*** **supported** ***favicons***, and no images. That worked fine.

+ Now I am working on another application that  is ***supposed to*** **support** both **favicons** and **images** (jpgs). I ***immediately*** **encountered issues** with **Jest** (`unexpected token import`) and had to reconfigure it. Then it **worked fine** ***temporarily***.

+ It ***ended up*** that I had to **change** my **Babel 7 configuration file** from `.babelrc` to `babel.config.js`. **Babel 7** ***no longer*** **automatically loads** `.babelrc`. New to **Babel** in ***7***, is the **concept** of a `"root" directory`. For ***project-wide*** **configuration**, **Babel** will automatically search for a `"babel.config.js"` in this ***root directory***:

>Because project-wide config files are separated from the physical location of the config file, they can be ideal for configuration that must apply broadly, even allowing plugins and presets to easily apply to files in `node_modules` or in symlinked packages, which were traditionally quite painful to configure in Babel 6.x. – [Babel Docs](https://babeljs.io/docs/en/next/config-files#project-wide-configuration)

+ I created a ***new*** `babel.config.js` in the ***root*** of my **project**:

```js
module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-throw-expressions",
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-object-assign"
    ]

}
```

When I made the changes, I also **created a script** to ***clear*** the Jest **cache**:

```js
"clear": "jest --clearCache"
```

After clearing the `Jest` ***cache***, I ran my `npm run test` script and my **tests** ***passed***.

One more very important thing that relates to syntax error(s) related to the proposed static class properties in React. Yesterday I added the following in my .eslintrc.json to make it go away:

```js
"parser": "babel-eslint",
```

When I introduced image imports to my project causing my **Jest** ***tests*** to fail, it also ***affected*** the ***proposed*** **static class properties** I was using in one of my components. Nothing seemed to make it go away until I added this line to my `.eslintrc.json`. I found this ***fix*** in the [ESLint](https://eslint.org/docs/user-guide/configuring) ***docs*** and subsequently in the [Babel-Eslint](https://github.com/babel/babel-eslint) **Github repository**.

### Related Resources:

+ [Babel7 Jest unexpected token export](https://stackoverflow.com/questions/52387820/babel7-jest-unexpected-token-export)
