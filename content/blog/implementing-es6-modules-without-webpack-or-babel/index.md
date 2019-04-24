---
title: 'Implementing ES6 Modules Without Webpack or Babel'
image: browserify.png
description:
    ES6 modules have been supported in Chrome since version 65, So why do we get
    errors if we try and use the import export keywords to import or export
    modules?
date: '2018-07-11'
tags:
    [
        'javascript',
        'es-6-module-browser-support',
        'modular-web-development',
        'web-development-workflows',
        'webpack',
        'babel',
        'browserify',
    ]
categories: ['web-development', 'javascript', 'web-development-workflows']
author: 'Maria D. Campbell'
---

**ES6 Modules** have been around since **ECMAScript 2015** (aka **ES2015**,
**ES6**). When they were first introduced, we **_transpiled_** them somehow to
**ES5** via creation of a **_single_** `bundle.js` file. This was usually done
with `npm module bundling tools` such as `Browserify` or `Webpack`.

**ES6 modules** have been **_fully_** **supported** in **Chrome** since
`version 65`. So why do we still get errors if we try and use the
`import/export` **keywords** to import or export modules in **JavaScript**
files?

Even though **ES6 modules** ARE fully supported in **Chrome**, we still have to
tweak our code just a tad to make it work 100%. For small projects or
“playgrounds” in which we don’t want to bother setting up
[Webpack](https://webpack.js.org/) configurations and using
[Babel](https://babeljs.io/) to transpile our code from **ES6** to **ES5**, for
example, it’s way easier and faster than configuring
[Webpack](https://webpack.js.org/) or [Browserify](http://browserify.org/). Bear
in mind, however, that it is still best practice for the time being to use
module bundlers such as [Webpack](https://webpack.js.org/) or
[Browserify](http://browserify.org/) along with transpilers such as
[Babel](https://babeljs.io/) for **_production_**. Not all browsers behave the
same or provide the same level of support!

So what do we have to do to make **ES6 modules** **_work_** without
`Webpack/Browserify/Babel`? It’s very simple, really. In your `index.html` file:

```html
<script type="module" src="ES6-Node.js"></script>
```

Note `type="module"`.

Then in the **JavaScript** file itself:

```js
import * as area from './calcArea.js'
import Book from './Book.js'
```

Normally, when using tools such as [Webpack](https://webpack.js.org/) and
[Babel](https://babeljs.io/), there is no need to add the `.js` **extension**.
However, when those tools are not present, it IS necessary to add `.js`.
Otherwise, the browser will not acknowledge the existence of imported files.
These tweaks also permit the use of the export keyword as well. Nifty, right?

Happy `import/export` without [Webpack](https://webpack.js.org/) or
[Babel](https://babeljs.io/)!

### Related Resources:

-   [import not working in Chrome](https://stackoverflow.com/questions/49718855/import-not-working-in-chrome)
