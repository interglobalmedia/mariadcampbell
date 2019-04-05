---
title: "Importing Images in React 2.0: Jest (and Babel 7)"
image: react_jest.png
description: Yesterday I added an image to a new project, and I tried to implement it using the workflow I had set up in my previous custom React Workflow, and it DID NOT WORK!
date: '2018-12-02'
tags: ["jest", "webpack-4", "babel-7", "react", "workflows", "front-end-development",  "modern-javascript"]
author: "Maria D. Campbell"
---

**Note December 3, 2018:** There were some changes I had to make after adding support for image imports into React because it caused “side effects”. Please visit my article entitled [The Jest Side Effect](https://www.mariadcampbell.com/blog/the-jest-side-effect/) and [The New Babel Config](https://www.mariadcampbell.com/blog/the-new-babel-7-config/) to get the whole picture. There were some ***issues*** **along the way** ***due to*** **breaking changes** in **Babel 7** which ***affected*** **Jest**, **React**, and **ESLint**. ***Unless*** you are **using** ***create-react-app***, your **workflow** might have to be ***adjusted*** depending on what **support** you want to ***provide*** in any given **application**. I have brought ***all resources*** **together** in the ***repository*** for the **second edition** of my **custom React Workflow** on **Github**. Please visit [issues](https://github.com/interglobalmedia/react-workflow-updated-2018/issues/1) to learn more.

Yesterday I ***added an image*** to a **new project**. I tried to implement it using the **“image” workflow** I had set up ***based on*** the **first edition** of my **custom React Workflow** (without create-react-app), and it DID NOT WORK!

***Of course not***. I am not using the same dependency versions I did more than a year ago. Things always change, but now they are changing more quickly than ever! Not only are they changing, but it seems that whatever is released needs to be tweaked as well.

It’s ***not necessarily*** that something **isn’t good** when it is released, but it ***still*** has to be able to **play well** with its ***“playmates”***. That doesn’t always end up being the case. ***Old playmates*** **disappear**, and ***new ones*** **come in** to ***replace them***.

For instance, I used to be able to **create** an ***images folder*** in the ***root*** of **my projects** and an `index.js` file in the ***root*** of the **images folder**, then ***export*** the **images** from `index.js` so that I could use them anywhere in my project. That’s because way back when, images had to be in the same folder as all other files needed for production. That (usually) was a **folder** ***called*** `src`. But because I used a lot of images, and liked to have an ***organized folder structure*** in my **dist** (build) folder, I created my own image workflow to make that happen.

Now that there is ***Babel 7*** and the **Babel configuration** has drastically changed, certain **modern JavaScript syntax** in our code is no longer recognized when we are developing inside our **text editors** or **IDE**s. This means that **TDD software** ***such as*** **Jest** is affected as well.

I ***just completed*** the **second edition** of my **custom React Workflow** the other day. It works well for what it offers out of the box. However, just as with the first edition, I only included a favicon and no images. I ended up ***taking images into consideration*** for the **workflow** ***later***.

I would like to discuss the changes in the custom workflow (providing support for images) that have taken place since I wrote the article [Importing images in React](https://www.mariadcampbell.com/blog/importing-images-in-react/) on ***October 7, 2017***. A few things (like the folder structure) may be the same, but I can **no longer** ***export*** my **images** from an `index.js` file in the **images folder**. I think it might have something to do with ***what*** my **Babel 7 configuration** is ***no longer providing*** **me**, but I have to investigate further to find out the answers.

***If*** **you are going to** or **already started** to use **React 16.6+**(***I*** currently ***use*** **React 16.6.3** in my ***workflow***), **Webpack 4+** (**I use 4.3.0**), **Babel 7**, **Jest** (***I use*** **23.6.0**), and **ESLint** (***I use*** **5.9.0**), and want to ADD IMAGES to your ***projects***, ***please follow the steps I discuss here*** **for starters**, and ***ignore*** the **Jest configuration** in both the ***first*** and ***second edition*** of my **custom workflow**. If you ***only*** are **adding a favicon** or ***no image at all***, then ***keep*** the **configuration** ***provided*** in the **second edition**.

In the **presentation/documentation** for the ***second edition*** of my **custom workflow** ***for React***, I have the ***following*** **dependencies** and **devDependencies** in my `package.json`:

```js
{
  name: "speech-to-text-app",
  version: "0.0.1",
  private: true,
  description: ""A voice controlled notes app that allows you to take notes by recording your voice"",
  main: "index.js",
  scripts: {
    test: "jest",
    lint: "eslint .",
    clean: "rimraf dist",
    cleanSrc: "rimraf dist/src",
    start: "webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback --env.PLATFORM=local --env.VERSION=stag",
    predeploy: "webpack --mode production --config config/webpack.prod.config.js --env.PLATFORM=production --env.VERSION=stag --progress",
    deploy: "gh-pages -d dist"
  },
  jest: {
    setupFiles: [
      "raf/polyfill"
    ],
    moduleNameMapper: {
      \.(pdf|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$: "<rootDir>/__mocks__/fileMock.js",
      \.(css|less|scss)$: "identity-obj-proxy"
    }
  },
  author: "Maria D. Campbell",
  license: "ISC",
  dependencies: {
    @fortawesome/fontawesome-svg-core: "^1.2.8",
    @fortawesome/free-brands-svg-icons: "^5.5.0",
    @fortawesome/free-regular-svg-icons: "^5.5.0",
    @fortawesome/free-solid-svg-icons: "^5.5.0",
    @fortawesome/react-fontawesome: "^0.1.3",
    core-js: "^2.5.7",
    gh-pages: "^2.0.1",
    react: "^16.6.3",
    react-dom: "^16.6.3",
    react-loadable: "^5.5.0"
  },
  devDependencies: {
    @babel/core: "^7.1.6",
    @babel/plugin-proposal-class-properties: "^7.1.0",
    @babel/plugin-proposal-export-namespace-from: "^7.0.0",
    @babel/plugin-proposal-throw-expressions: "^7.0.0",
    @babel/plugin-syntax-dynamic-import: "^7.0.0",
    @babel/polyfill: "^7.0.0",
    @babel/preset-env: "^7.1.5",
    @babel/preset-react: "^7.0.0",
    @babel/register: "^7.0.0",
    autoprefixer: "^9.3.1",
    babel-core: "^7.0.0-bridge.0",
    babel-eslint: "^10.0.1",
    babel-jest: "^23.6.0",
    babel-loader: "^8.0.4",
    clean-webpack-plugin: "^1.0.0",
    copy-webpack-plugin: "^4.6.0",
    css-loader: "^1.0.1",
    enzyme: "^3.7.0",
    eslint: "^5.9.0",
    eslint-config-airbnb: "^17.1.0",
    eslint-loader: "^2.1.1",
    eslint-plugin-import: "^2.14.0",
    eslint-plugin-jsx-a11y: "^6.1.2",
    eslint-plugin-react: "^7.11.1",
    file-loader: "^2.0.0",
    html-webpack-plugin: "^3.2.0",
    identity-obj-proxy: "^3.0.0",
    jest: "^23.6.0",
    jest-enzyme: "^7.0.1",
    mini-css-extract-plugin: "^0.4.4",
    node-sass: "^4.10.0",
    optimize-css-assets-webpack-plugin: "^5.0.1",
    postcss: "^7.0.5",
    postcss-loader: "^3.0.0",
    prop-types: "^15.6.2",
    raf: "^3.4.1",
    react-test-renderer: "^16.6.1",
    regenerator-runtime: "^0.12.1",
    rimraf: "^2.6.2",
    sass-loader: "^7.1.0",
    style-loader: "^0.23.1",
    uglifyjs-webpack-plugin: "^2.0.1",
    url-loader: "^1.1.2",
    webpack: "^4.3.0",
    webpack-cli: "^3.1.2",
    webpack-dev-server: "^3.1.10",
    webpack-manifest-plugin: "^2.0.4",
    webpack-merge: "^4.1.4",
    webpack-visualizer-plugin: "^0.1.11",
    workbox-webpack-plugin: "^3.6.3"
  }
}
```

My ***workflow*** **provides** ***support*** ***for*** **SCSS**, **CSS Modules**, and ***files*** such as `favicon.ico`. I can only ***attest to*** the ***support for favicons***, as that is all that I added to the project I used as an example in my workflow presentation/documentation.

That being said, **my Jest** ***configuration didn’t*** **successfully mock out** ***image import*** in **components** ***in testing***. ***Result***? My ***test*** for `App.js`, where an image was imported, failed. When I ran

```shell
npm run test
```

I got the following error on fail:

```shell
npm test                                                              ⏎ ✹ ✭

> text-to-speech-app@0.0.1 test /Users/mariacam/Development/text-to-speech-app
> jest

● Validation Error:

  Module custom-transformer in the transform option was not found.
         <rootDir> is: /Users/mariacam/Development/text-to-speech-app

  Configuration Documentation:
  https://jestjs.io/docs/configuration.html

npm ERR! Test failed.  See above for more details.
```

A ***year ago***, I had **no need for** a ***custom transformer*** or a ***transform option*** in my `package.json`. The `"setupFiles"` and `"moduleNameMapper"` **option configurations** shown here was ***all I needed*** **as far as** ***Jest*** **was concerned**. ***Now***, **however**, it was ***looking for*** a **custom transformer** and a **transform** ***option***. Why?

Because the **moduleNameMapper** ***configuration*** I previously used ***did not fulfill*** **my** (current) **requirements**. In that case, the ***following is suggested*** in the **Jest documentation** for ***version 23.6*** entitled [Using Jest With Webpack](https://jestjs.io/docs/en/webpack):

> If `moduleNameMapper` cannot fulfill your requirements, you can use Jest’s [`transform`](https://jestjs.io/docs/en/configuration#transform-object-string-string) config option to specify how assets are transformed. For example, a transformer that returns the basename of a file (such that `require('logo.jpg');` returns `'logo'`) can be written as:

```js
// fileTransformer.js
const path = require('path');

module.exports = {
  process(src, filename, config, options) {
      return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
```

I created a `fileTransformer.js` file in the root of my project folder where my `package.json` resides, and added the above code to it.

Next, according to the suggestions the same **Jest** documentation,  [Using Jest With Webpack](https://jestjs.io/docs/en/webpack) (Jest 23.6 docs), provided, I ***replaced*** the **moduleNameMapper** ***option configuration*** I was **using** with the **abridged version** ***suggested***, and ***added*** a **transform option** which basically ***picked up the rest*** of what ***previously resided*** in **moduleNameMapper**:

```js
// package.json (for custom transformers and CSS Modules)
{
  "jest": {
    "moduleNameMapper": {
      "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    "transform": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"
    }
  }
}
```

Then **I ran my tests** ***again***, and **this time** they ***all passed***:

```shell
npm test                                                              ⏎ ✹ ✭

> text-to-speech-app@0.0.1 test /Users/mariacam/Development/text-to-speech-app
> jest

 PASS  src/sum.test.js
 PASS  src/App.test.js

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.265s
Ran all test suites.
```

***Advice*** for **dealing** with **rapidly changing technology**? ***Start from*** your **point(s)** of **knowledge**. With ***each error you encounter***, **deal with it** ***one at a time***. When I started developing projects with **React 16.6.+**, **Webpack 4**, and **Babel 7**, I ***first*** **set up** my **project** ***with my old workflow***, ***expecting*** things to **break**, but ***knowing*** that **starting from** *SOMEWHERE* I was ***familiar with*** was going to be ***better than*** trying to **start** ALL **over** ***from scratch***. This way, I got to a point of success much more quickly, and I learned much more. I compared the differences along the way and gained a much better understanding of how things worked both previously and now. Keeping historical records of things and building a knowledge base from them is very important.

> That’s why seasoned developers who “have seen it all from the beginning” are so integral to any developer community or team! – me

To view the project structure and files associated with the project I am currently working on, and which is using the changes to the Jest configuration discussed here, please visit my [Text To Speech repository](https://github.com/interglobalmedia/text-to-speech-app).

### Related Resources:

+ [Importing images in React (October 7, 2017)](https://www.mariadcampbell.com/blog/importing-images-in-react/)

+ [React workflows Without Create-React-App First Edition (2017)](https://github.com/interglobalmedia/react-workflow-presentation)

+ [React workflows Without Create-React-App Second Edition (updated 2018)](https://github.com/interglobalmedia/react-workflow-updated-2018)

+ [Using Jest With Webpack (Jest 23.6 docs)](https://jestjs.io/docs/en/webpack)
