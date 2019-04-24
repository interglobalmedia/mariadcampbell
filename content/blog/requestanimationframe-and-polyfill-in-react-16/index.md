---
title: 'requestAnimationFrame and polyfill in React 16'
image: raf.png
description:
    React depends on requestAnimationFrame, so make sure that you load a
    polyfill in older browsers.
date: '2017-09-27'
tags: ['react', 'react-16', 'dependencies', 'new-features', 'workflows']
categories: ['front-end-development', 'react', 'web-development']
author: 'Maria D. Campbell'
---

If you read my previous post, [My first time using React 16.0](), you know that
I got the **_following warning_** when I typed npm run test in **Terminal**:

```shell
react-universal-blog-app@1.0.0 test /Users/mariacam/Development/react-universal-blog-app> jest

PASS&nbsp; src/sum.test.jsPASS&nbsp; src/App.test.js

● Console
console.error node_modules/fbjs/lib/warning.js:33

Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills

Test Suites: 2 passed, 2 totalTests: 2 passed, 2 totalSnapshots: 0 totalTime: 1.669sRan all test suites.
```

Notice something different?

```shell
console.error node_modules/fbjs/lib/warning.js:33
Warning: React depends on requestAnimationFrame.
Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
```

The
[React Polyfills](https://reactjs.org/docs/javascript-environment-requirements.html)
link took me to the **gist** on **Github** entitled
`React 16 JavaScript Environment.md`. There, I learned that **React 16**
**_depends on_** the **collection types** `Map` and `Set`. And, that if
developers

> are supporting older browsers and devices which may not yet provide these
> natively (e.g. IE < 11), (they should) consider including a global polyfill in
> (their) bundled application, such as
> [core-js](https://github.com/zloirock/core-js) or
> [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill/).

Since their example used `core-js`, I decided to go that route. Next, the
**_warning_** in **Terminal** also let me know that **React** **_depends on_**
`requestAnimationFrame`, even in `test environments`. And the **React Team**,
specifically `@gaearon (Dan Abramov)`, states:

> React also depends on requestAnimationFrame (even in test environments). A
> simple shim for testing environments would be:
> `global.requestAnimationFrame = function(callback) {setTimeout(callback, 0);};`

So I first installed `core-js` using `npm`:

```shell
npm install core-js --save-dev
```

Then, in `index.js`, I added the following at the top:

```jsx
import React, {Component} from 'react'
import {render} from 'react-dom'
import 'core-js/es6/map'
import 'core-js/es6/set'
import './images/favicon.ico'
```

And in `App.test.js`, right below my imports, I **_added_**:

```js
global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0)
}
```

Next, I installed `raf`:

```shell
npm install raf --save-dev
```

After that, I **_added_** the following in my `package.json` within my **Jest
configuration**:

```jsx
"jest": {
    "setupFiles": [
      "raf/polyfill"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "identity-obj-proxy"
    }
},
```

And lastly, I decided to install the `identity-obj-proxy` **npm package** so
that I could `mock a proxy` for my **className** `lookups` in **Jest Snapshot
Testing** because I use `CSS Modules`:

```shell
npm install identity-obj-proxy --save-dev
```

t comes [recommended](https://jestjs.io/docs/en/webpack.html).

Then I **typed** `npm run test` **_again_** to see what happens. This is what
was **_returned_** in **Terminal**:

```shell
PASS  src/App.test.js PASS  src/sum.test.js
Test Suites: 2 passed, 2 totalTests: 2 passed, 2 totalSnapshots: 0 totalTime: 1.274s
```

Success! I added **_all the new features_** **required** for `React 16` (**_so
far_**), and all my warnings and errors were gone.

I think the **React Team** is realizing that there are more and more developers
either **_customizing_** `create-react-app` or **_developing_** their **own
workflows**. Either way, I am grateful for all this awesome documentation.
**_Thanks React_**, **espcially** `@gaearon (Dan Abramov)`, who made this gist!

### Related Articles:

-   [React v16.0, facebook.github.io](https://reactjs.org/blog/2017/09/26/react-v16.0.html)

-   [Using requestAnimationFrame, CSS Tricks](https://css-tricks.com/using-requestanimationframe/)

-   [window.requestAnimationFrame(), MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

-   [Animating with requestAnimationFrame, Kirupa](https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm)
-   [requestAnimationFrame for Smart Animating, Paul Irish, creator of requestAnimationFrame](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)
