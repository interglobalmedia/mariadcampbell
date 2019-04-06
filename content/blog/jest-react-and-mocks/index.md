---
title: "Jest, React and mocks"
image: react-jest.png
description: Yesterday, I ran a test to make sure that the changes I made to my Work component passed in my Portfolio React app, but it did not!
date: '2017-10-12'
tags: ["react", "jest", "mocks", "testing"]
author: "Maria D. Campbell"
---

I use **Facebook**’s **Jest** to ***test*** my **React applications**. Yesterday, I ran a test to make sure that the changes I made to my `Work` **component** ***passed*** in my **Portfolio React** ***app***. It did ***not***! But as indicated in the **iTerm2** `console`, it was ***not*** **because of any errors** in the `Work` **component**. It was because I am **using** a `.pdf` file in my `About` **component**, and **Jest** does ***not*** take kindly to it.

```shell
npm run test
✹ ✭

> react-universal-blog-app@1.0.0 test /Users/mariacam/Development/portfolio-react
> jest

PASS src/sum.test.js
FAIL src/App.test.js
● Test suite failed to run

/Users/mariacam/Development/portfolio-react/images/resume/mdcResume8217.pdf:1
({"Object.":function(module,exports,require,__dirname,__filename,global,jest){%PDF-1.3
^

SyntaxError: Unexpected token %

at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:305:1)
```

I include it in my `webpack configs` so that `webpack` knows to load it:

```js
// in webpack-dev.config.js
{ test: /\.(pdf|jpg|png|gif|svg|ico)$/, use: [ { loader: 'url-loader', options: { limit: 100000 } }, ]},


// in webpack-prod.config.js
{ test: /\.(jpg|png|gif|svg|pdf|ico)$/, use: [ { loader: 'file-loader', options: { name: '[path][name]-[hash:8].[ext]' }, }, ]},
```

Then why was this happening? I mock out files for **Jest** to ***ignore*** in my `package.json`, so I went to see what types of files I had included there:

```js
"jest": {
  "setupFiles": [
    "raf/polyfill"
  ],
  "moduleNameMapper": {
    "\\.(|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
},
```

Apparently I hadn’t included `.pdf`! That was because I had added that asset much later, and didn’t think to add it to my `jest` **configuration** in `package.json`. That resulted in my test failing. I added `pdf` to the mix:

```js
"jest": {
  "setupFiles": [
    "raf/polyfill"
  ],
  "moduleNameMapper": {
    "\\.(pdf|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
},
```

Then I ran `npm run test` in **iTerm2** again. And guess what? My test ***passed***!

So if you are using **Jest** to ***run tests*** in your **React application**, make sure that you mock out certain types of assets that would otherwise cause your tests to fail! I have included links to resources related to this topic at the end of the article.

Happy ***React testing*** with **Jest**!

### Related Resources:

+ [React workflows without Create React App](https://interglobalmedia.github.io/react-workflow-presentation/#/)

+ [Jest and webpack](https://jestjs.io/docs/en/webpack.html)

+ [Handling Static Assets with Jest](https://jestjs.io/docs/en/webpack.html#content)

+ [Testing React Apps With Jest](https://jestjs.io/docs/en/tutorial-react.html#content)
