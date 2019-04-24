---
title: 'Importing Images in React 2.0: Jest (and Babel 7)'
image: react_jest.png
description:
    Yesterday I added an image to a new project, and I tried to implement it
    using the workflow I had set up in my previous custom React Workflow, and it
    DID NOT WORK!
date: '2018-12-02'
tags:
    [
        'jest',
        'webpack-4',
        'babel-7',
        'react',
        'workflows',
        'front-end-development',
        'modern-javascript',
    ]
categories:
    [
        'web-development',
        'front-end-development',
        'react',
        'web-development-workflows',
    ]
author: 'Maria D. Campbell'
---

**Note December 3, 2018:** There were some changes I had to make after adding
support for image imports into React because it caused “side effects”. Please
visit my article entitled [The Jest Side Effect](/blog/the-jest-side-effect/)
and [The New Babel Config](/blog/the-new-babel-7-config/) to get the whole
picture. There were some **_issues_** **along the way** **_due to_** **breaking
changes** in **Babel 7** which **_affected_** **Jest**, **React**, and
**ESLint**. **_Unless_** you are **using** **_create-react-app_**, your
**workflow** might have to be **_adjusted_** depending on what **support** you
want to **_provide_** in any given **application**. I have brought **_all
resources_** **together** in the **_repository_** for the **second edition** of
my **custom React Workflow** on **Github**. Please visit
[issues](https://github.com/interglobalmedia/react-workflow-updated-2018/issues/1)
to learn more.

Yesterday I **_added an image_** to a **new project**. I tried to implement it
using the **“image” workflow** I had set up **_based on_** the **first edition**
of my **custom React Workflow** (without create-react-app), and it DID NOT WORK!

**_Of course not_**. I am not using the same dependency versions I did more than
a year ago. Things always change, but now they are changing more quickly than
ever! Not only are they changing, but it seems that whatever is released needs
to be tweaked as well.

It’s **_not necessarily_** that something **isn’t good** when it is released,
but it **_still_** has to be able to **play well** with its **_“playmates”_**.
That doesn’t always end up being the case. **_Old playmates_** **disappear**,
and **_new ones_** **come in** to **_replace them_**.

For instance, I used to be able to **create** an **_images folder_** in the
**_root_** of **my projects** and an `index.js` file in the **_root_** of the
**images folder**, then **_export_** the **images** from `index.js` so that I
could use them anywhere in my project. That’s because way back when, images had
to be in the same folder as all other files needed for production. That
(usually) was a **folder** **_called_** `src`. But because I used a lot of
images, and liked to have an **_organized folder structure_** in my **dist**
(build) folder, I created my own image workflow to make that happen.

Now that there is **_Babel 7_** and the **Babel configuration** has drastically
changed, certain **modern JavaScript syntax** in our code is no longer
recognized when we are developing inside our **text editors** or **IDE**s. This
means that **TDD software** **_such as_** **Jest** is affected as well.

I **_just completed_** the **second edition** of my **custom React Workflow**
the other day. It works well for what it offers out of the box. However, just as
with the first edition, I only included a favicon and no images. I ended up
**_taking images into consideration_** for the **workflow** **_later_**.

I would like to discuss the changes in the custom workflow (providing support
for images) that have taken place since I wrote the article
[Importing images in React](/blog/importing-images-in-react/) on **_October 7,
2017_**. A few things (like the folder structure) may be the same, but I can
**no longer** **_export_** my **images** from an `index.js` file in the **images
folder**. I think it might have something to do with **_what_** my **Babel 7
configuration** is **_no longer providing_** **me**, but I have to investigate
further to find out the answers.

**_If_** **you are going to** or **already started** to use **React
16.6+**(**_I_** currently **_use_** **React 16.6.3** in my **_workflow_**),
**Webpack 4+** (**I use 4.3.0**), **Babel 7**, **Jest** (**_I use_**
**23.6.0**), and **ESLint** (**_I use_** **5.9.0**), and want to ADD IMAGES to
your **_projects_**, **_please follow the steps I discuss here_** **for
starters**, and **_ignore_** the **Jest configuration** in both the **_first_**
and **_second edition_** of my **custom workflow**. If you **_only_** are
**adding a favicon** or **_no image at all_**, then **_keep_** the
**configuration** **_provided_** in the **second edition**.

In the **presentation/documentation** for the **_second edition_** of my
**custom workflow** **_for React_**, I have the **_following_** **dependencies**
and **devDependencies** in my `package.json`:

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

My **_workflow_** **provides** **_support_** **_for_** **SCSS**, **CSS
Modules**, and **_files_** such as `favicon.ico`. I can only **_attest to_** the
**_support for favicons_**, as that is all that I added to the project I used as
an example in my workflow presentation/documentation.

That being said, **my Jest** **_configuration didn’t_** **successfully mock
out** **_image import_** in **components** **_in testing_**. **_Result_**? My
**_test_** for `App.js`, where an image was imported, failed. When I ran

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

A **_year ago_**, I had **no need for** a **_custom transformer_** or a
**_transform option_** in my `package.json`. The `"setupFiles"` and
`"moduleNameMapper"` **option configurations** shown here was **_all I needed_**
**as far as** **_Jest_** **was concerned**. **_Now_**, **however**, it was
**_looking for_** a **custom transformer** and a **transform** **_option_**.
Why?

Because the **moduleNameMapper** **_configuration_** I previously used **_did
not fulfill_** **my** (current) **requirements**. In that case, the **_following
is suggested_** in the **Jest documentation** for **_version 23.6_** entitled
[Using Jest With Webpack](https://jestjs.io/docs/en/webpack):

> If `moduleNameMapper` cannot fulfill your requirements, you can use Jest’s
> [`transform`](https://jestjs.io/docs/en/configuration#transform-object-string-string)
> config option to specify how assets are transformed. For example, a
> transformer that returns the basename of a file (such that
> `require('logo.jpg');` returns `'logo'`) can be written as:

```js
// fileTransformer.js
const path = require('path')

module.exports = {
    process(src, filename, config, options) {
        return (
            'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
        )
    },
}
```

I created a `fileTransformer.js` file in the root of my project folder where my
`package.json` resides, and added the above code to it.

Next, according to the suggestions the same **Jest** documentation,
[Using Jest With Webpack](https://jestjs.io/docs/en/webpack) (Jest 23.6 docs),
provided, I **_replaced_** the **moduleNameMapper** **_option configuration_** I
was **using** with the **abridged version** **_suggested_**, and **_added_** a
**transform option** which basically **_picked up the rest_** of what
**_previously resided_** in **moduleNameMapper**:

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

Then **I ran my tests** **_again_**, and **this time** they **_all passed_**:

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

**_Advice_** for **dealing** with **rapidly changing technology**? **_Start
from_** your **point(s)** of **knowledge**. With **_each error you encounter_**,
**deal with it** **_one at a time_**. When I started developing projects with
**React 16.6.+**, **Webpack 4**, and **Babel 7**, I **_first_** **set up** my
**project** **_with my old workflow_**, **_expecting_** things to **break**, but
**_knowing_** that **starting from** _SOMEWHERE_ I was **_familiar with_** was
going to be **_better than_** trying to **start** ALL **over** **_from
scratch_**. This way, I got to a point of success much more quickly, and I
learned much more. I compared the differences along the way and gained a much
better understanding of how things worked both previously and now. Keeping
historical records of things and building a knowledge base from them is very
important.

> That’s why seasoned developers who “have seen it all from the beginning” are
> so integral to any developer community or team! – me

To view the project structure and files associated with the project I am
currently working on, and which is using the changes to the Jest configuration
discussed here, please visit my
[Text To Speech repository](https://github.com/interglobalmedia/text-to-speech-app).

### Related Resources:

-   [Importing images in React (October 7, 2017)](/blog/importing-images-in-react/)

-   [React workflows Without Create-React-App First Edition (2017)](https://github.com/interglobalmedia/react-workflow-presentation)

-   [React workflows Without Create-React-App Second Edition (updated 2018)](https://github.com/interglobalmedia/react-workflow-updated-2018)

-   [Using Jest With Webpack (Jest 23.6 docs)](https://jestjs.io/docs/en/webpack)
