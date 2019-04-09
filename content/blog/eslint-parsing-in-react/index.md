---
title: "ESLint parsing (in React)"
image: formatter_logos.png
description: I just completed creating a new custom workflow for React which included support for CSS Modules, SCSS, and image imports.
date: '2018-12-04'
tags: ["eslint", "react", "airbnb-style-guide", "prettier-code-formatter", "osx", "command-line", "terminal", "vs-code", "front-end-development", "web-development-workflows"]
categories: ["front-end-development", "react", "code-editors", "vs-code", "web-development-workflows", "osx", "command-line", "terminal"]
author: "Maria D. Campbell"
---

**Note:** I use **VS Code**.

I just completed creating a ***new*** **custom workflow** for ***React*** which included **support** ***for*** **CSS Modules**, **SCSS**, and **image imports**. I use **ESLint** as my ***linter***, went full throttle with an ***extended configuration*** as well as ***adding*** a `babel-eslint` **loader** in my `webpack.base.config.js`. I added a custom `lint: eslint .` ***script*** in my `package.json`.

I found, however, when I ran the `npm run lint` **script** ***after*** a **production build**, the script crashed, and some strange errors showed up in the **Terminal** window:

```shell
npm run lint                                                           ✹ ✭

> text-to-speech-app@0.0.1 lint /Users/mariacam/Development/text-to-speech-app
> eslint .

/Users/mariacam/Development/text-to-speech-app/dist/scripts/main.8e368452603a22c92485.chunk.js
  1:262   error  'n' is a function  no-func-assign
  1:918   error  'f' is a function  no-func-assign
  1:1302  error  'p' is a function  no-func-assign
  1:1433  error  'c' is a function  no-func-assign

/Users/mariacam/Development/text-to-speech-app/dist/scripts/vendors~main.0115179be4c4c7cf2ff7.chunk.js
  14:249     error  Empty block statement  no-empty
  14:543     error  Empty block statement  no-empty
  14:1656    error  Unsafe usage of ThrowStatement  no-unsafe-finally
  14:18780   error  Expected method 'get' to always return a value  getter-return
  14:22945   error  Empty block statement  no-empty
  14:23591   error  Empty block statement  no-empty
  14:24257   error  Unnecessary escape character: \-  no-useless-escape
  14:26108   error  Empty block statement  no-empty
  14:30390   error  Unnecessary escape character: \/  no-useless-escape
  19:3379    error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  19:3744    error  Empty block statement  no-empty
  19:3897    error  Empty block statement  no-empty
  19:5999    error  '__g' is not defined  no-undef
  19:6528    error  '__e' is not defined  no-undef
  19:6759    error  Empty block statement  no-empty
  19:7409    error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined  no-undef
  19:7453    error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined  no-undef
  32:569575  error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:5670    error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:6292    error  Invalid typeof comparison value  valid-typeof
  40:6465    error  Invalid typeof comparison value  valid-typeof
  40:9166    error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:9881    error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:11790   error  Unnecessary escape character: \/  no-useless-escape
  40:13040   error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:15236   error  Unnecessary escape character: \-  no-useless-escape
  40:22277   error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:22343   error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:28937   error  Expected a 'break' statement before 'case'  no-fallthrough
  40:29048   error  Expected a 'break' statement before 'case'  no-fallthrough
  40:33033   error  Expected a 'break' statement before 'case'  no-fallthrough
  40:35337   error  'MSApp' is not defined  no-undef
  40:35385   error  'MSApp' is not defined  no-undef
  40:39725   error  Empty block statement  no-empty
  40:44284   error  Expected a 'break' statement before 'case'  no-fallthrough
  40:46469   error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:47961   error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:57374   error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:58505   error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:74919   error  Unnecessary escape character: \/  no-useless-escape
  40:88727   error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:92518   error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  40:95464   error  'Ec' is a function  no-func-assign
  40:96239   error  'Ac' is a function  no-func-assign
  40:96273   error  'Pc' is a function  no-func-assign
  40:96934   error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined  no-undef
  40:97143   error  Empty block statement  no-empty

/Users/mariacam/Development/text-to-speech-app/dist/sw.js
  14:1  error  'importScripts' is not defined  no-undef
  16:1  error  'importScripts' is not defined  no-undef
  26:1  error  'workbox' is not defined        no-undef
  27:1  error  'workbox' is not defined        no-undef

✖ 55 problems (55 errors, 0 warnings)

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! text-to-speech-app@0.0.1 lint: `eslint .`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the text-to-speech-app@0.0.1 lint script.
npm ERR! This is probably not a problem with npm. There is likely additional logging
```

At first I thought there might be something wrong with my code even though the src code passed with flying colors.

After a lot of research, I added an `.eslintignore` file so that I could keep my lint script to `"script": eslint ."` and not see all those incomprehensible errors occurring in `dist`:

```js
dist/
```

All those errors went away, and my code passed with flying colors. But I still wanted to know ***why*** they had **appeared** in the ***first place***, and how I could ***fix*** them.

I decided to ***extend*** **ESLint** with the **Airbnb style guide**. I wanted to ***improve upon*** my ***code even more***, and if possibly some of the errors I was seeing ***extended only with***

```js
"extends": ["eslint:recommended", "plugin:react/recommended", "plugin:import/recommended"],
```

might (eventually) go away. I had to remove `dist/` from `.eslintignore` in order for the errors to appear in **Terminal** again.

At first, that was NOT the case. **This time** the ***number of errors*** was **almost** ***double***. I got the following in **Terminal**:

```shell
npm run lint                                                           ✹ ✭

> text-to-speech-app@0.0.1 lint /Users/mariacam/Development/text-to-speech-app
> eslint .

/Users/mariacam/Development/text-to-speech-app/babel.config.js
   4:28  error  Missing trailing comma                         comma-dangle
   6:30  error  Missing trailing comma                         comma-dangle
  17:48  error  Missing trailing comma                         comma-dangle
  18:6   error  Missing trailing comma                         comma-dangle
  20:2   error  Newline required at end of file but not found  eol-last

  /Users/mariacam/Development/text-to-speech-app/config/webpack.base.config.js
   2:17  error  'webpack' should be listed in the project's dependencies, not devDependencies                  import/no-extraneous-dependencies
   3:27  error  'copy-webpack-plugin' should be listed in the project's dependencies, not devDependencies      import/no-extraneous-dependencies
   4:15  error  'webpack-merge' should be listed in the project's dependencies, not devDependencies            import/no-extraneous-dependencies
   5:30  error  'mini-css-extract-plugin' should be listed in the project's dependencies, not devDependencies  import/no-extraneous-dependencies
   6:27  error  'html-webpack-plugin' should be listed in the project's dependencies, not devDependencies      import/no-extraneous-dependencies
   7:28  error  'clean-webpack-plugin' should be listed in the project's dependencies, not devDependencies     import/no-extraneous-dependencies
   8:23  error  'workbox-webpack-plugin' should be listed in the project's dependencies, not devDependencies   import/no-extraneous-dependencies
  10:18  error  Expected parentheses around arrow function argument having a body with curly braces            arrow-parens
  10:25  error  Block must not be padded by blank lines                            padded-blocks
  17:39  error  Missing trailing comma                            comma-dangle
  22:57  error  Missing trailing comma                            comma-dangle
  26:34  error  Missing trailing comma                            comma-dangle
  27:18  error  Missing trailing comma                            comma-dangle
  34:47  error  Missing trailing comma                            comma-dangle
  35:22  error  Missing trailing comma                            comma-dangle
  42:40  error  Missing trailing comma                            comma-dangle
  43:22  error  Missing trailing comma                            comma-dangle
  56:76  error  Missing trailing comma                            comma-dangle
  60:38  error  Missing trailing comma                            comma-dangle
  61:22  error  Missing trailing comma                            comma-dangle
  68:64  error  Missing trailing comma                            comma-dangle
  72:18  error  Missing trailing comma                            comma-dangle
  79:33  error  Missing trailing comma                            comma-dangle
  85:39  error  Missing trailing comma                            comma-dangle
  88:36  error  Missing trailing comma                            comma-dangle
  92:73  error  Missing trailing comma                            comma-dangle
  93:19  error  Missing trailing comma                            comma-dangle
  97:2   error  Newline required at end of file but not found                            eol-last

  /Users/mariacam/Development/text-to-speech-app/config/webpack.prod.config.js
   1:17  error  'webpack' should be listed in the project's dependencies, not devDependencies                             import/no-extraneous-dependencies
   2:15  error  'webpack-merge' should be listed in the project's dependencies, not devDependencies                       import/no-extraneous-dependencies
   4:24  error  'webpack-manifest-plugin' should be listed in the project's dependencies, not devDependencies             import/no-extraneous-dependencies
   5:33  error  'optimize-css-assets-webpack-plugin' should be listed in the project's dependencies, not devDependencies  import/no-extraneous-dependencies
   6:24  error  'uglifyjs-webpack-plugin' should be listed in the project's dependencies, not devDependencies             import/no-extraneous-dependencies
   7:20  error  'webpack-visualizer-plugin' should be listed in the project's dependencies, not devDependencies           import/no-extraneous-dependencies
  11:27  error  Expected parentheses around arrow function argument having a body with curly braces                       arrow-parens
  11:34  error  Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`     arrow-body-style
  27:1   error  Line 27 exceeds the maximum line length of 100                                       max-len
  35:42  error  Missing trailing comma                                       comma-dangle
  36:26  error  Missing trailing comma                                       comma-dangle
  44:39  error  Unexpected require()                                       global-require
  44:39  error  'cssnano' should be listed in the project's dependencies. Run 'npmi -S cssnano' to add it                import/no-extraneous-dependencies
  46:39  error  Missing trailing comma                                       comma-dangle
  47:23  error  Missing trailing comma                                       comma-dangle
  52:54  error  Missing trailing comma                                       comma-dangle
  55:66  error  Missing trailing comma                                       comma-dangle
  56:14  error  Missing trailing comma                                       comma-dangle
  57:10  error  Missing trailing comma                                       comma-dangle
  61:18  error  Expected parentheses around arrow function argument having a body with curly braces                       arrow-parens
  61:25  error  Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`     arrow-body-style
  63:2   error  Newline required at end of file but not found                                       eol-last

  /Users/mariacam/Development/text-to-speech-app/fileTransformer.js
  6:16  error  Unexpected string concatenation                prefer-template
  8:3   error  Newline required at end of file but not found  eol-last

/Users/mariacam/Development/text-to-speech-app/postcss.config.js
  3:9   error  Unexpected require()                           global-require
  3:32  error  Missing trailing comma                         comma-dangle
  4:6   error  Missing trailing comma                         comma-dangle
  5:2   error  Newline required at end of file but not found  eol-last

/Users/mariacam/Development/text-to-speech-app/src/App.js
   4:1   error  `@fortawesome/react-fontawesome` import should occur before importof `./components/text/Text`         import/order
   5:1   error  `@fortawesome/free-solid-svg-icons` import should occur before import of `./components/text/Text`      import/order
  12:34  error  Missing trailing comma                                    comma-dangle
  15:19  error  Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`  arrow-body-style
  17:9   error  JSX not allowed in files with extension '.js'                                    react/jsx-filename-extension
  17:9   error  Expected indentation of 6 space characters but found 8                                    react/jsx-indent
  18:13  error  Expected indentation of 10 space characters but found 12                                    react/jsx-indent
  19:17  error  Expected indentation of 14 space characters but found 16                                    react/jsx-indent
  20:21  error  Expected indentation of 18 space characters but found 20                                    react/jsx-indent
  23:13  error  Expected indentation of 10 space characters but found 12                                    react/jsx-indent
  24:17  error  Expected indentation of 14 space characters but found 16                                    react/jsx-indent
  25:21  error  Expected indentation of 18 space characters but found 20                                    react/jsx-indent
  26:21  error  Expected indentation of 18 space characters but found 20                                    react/jsx-indent
  29:21  error  Expected indentation of 18 space characters but found 20                                    react/jsx-indent
  37:20  error  Newline required at end of file but not found                                    eol-last

/Users/mariacam/Development/text-to-speech-app/src/App.test.js
   8:25  error  JSX not allowed in files with extension '.js'  react/jsx-filename-extension
  10:3   error  Newline required at end of file but not found  eol-last

/Users/mariacam/Development/text-to-speech-app/src/components/text/Text.js
   4:7   error  Use object destructuring                                  prefer-destructuring
   7:9   error  Unused state field: 'listening'                           react/no-unused-state
   7:25  error  Missing trailing comma                                    comma-dangle
   9:5   error  Expected blank line between class members                 lines-between-class-members
  11:13  error  JSX not allowed in files with extension '.js'             react/jsx-filename-extension
  11:13  error  Expected indentation of 10 space characters but found 12  react/jsx-indent
  11:41  error  A space is forbidden before closing bracket               react/jsx-tag-spacing
  12:17  error  Expected indentation of 14 space characters but found 16  react/jsx-indent
  13:17  error  Expected indentation of 14 space characters but found 16  react/jsx-indent
  16:17  error  Expected indentation of 14 space characters but found 16  react/jsx-indent
  17:21  error  Expected indentation of 18 space characters but found 20  react/jsx-indent
  18:25  error  Expected indentation of 22 space characters but found 24  react/jsx-indent
  18:55  error  '?' should be placed at the beginning of the line         operator-linebreak
  19:71  error  ':' should be placed at the beginning of the line         operator-linebreak
  28:21  error  Newline required at end of file but not found             eol-last

/Users/mariacam/Development/text-to-speech-app/src/index.js
   8:17  error  JSX not allowed in files with extension '.js'  react/jsx-filename-extension
  10:59  error  Newline required at end of file but not found  eol-last

/Users/mariacam/Development/text-to-speech-app/src/sum.js
  1:15  error  A space is required after ','                  comma-spacing
  5:22  error  Newline required at end of file but not found  eol-last

  7:3  error  Newline required at end of file but not found  eol-last

/Users/mariacam/Development/text-to-speech-app/src/sw.js
  2:37  error  Unexpected use of 'self'                         no-restricted-globals
  2:37  error  Unexpected dangling '_' in '__precacheManifest'  no-underscore-dangle
  2:68  error  Newline required at end of file but not found    eol-last

<img draggable="false" data-mce-resize="false" data-mce-placeholder="1" data-wp-emoji="1" class="emoji" alt="✖" src="https://s.w.org/images/core/emoji/11/svg/2716.svg"> 101 problems (101 errors, 0 warnings)
  76 errors and 0 warnings potentially fixable with the `--fix` option.

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! text-to-speech-app@0.0.1 lint: `eslint .`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the text-to-speech-app@0.0.1 lint script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/mariacam/.npm/_logs/2018-12-04T15_27_23_030Z-debug.log
```

I did further investigation into the ins and outs of `ESLint`, and the `eslint-cli`.

I installed the `eslint-cli` as a `devDependency`. According to the `ESLint` ***docs***, I could use the following command

```shell
npx eslint . --fix
```

to ***fix*** **linting errors**. However, the `ESLint` docs ***warn***

```shell
Specifying Parser
By default, ESLint uses Espree as its parser. You can optionally specify that a different parser should be used in your configuration file so long as the parser meets the following requirements:

It must be an npm module installed locally.
It must have an Esprima-compatible interface (it must export a parse() method).
It must produce Esprima-compatible AST and token objects.
Note that even with these compatibilities, there are no guarantees that an external parser will work correctly with ESLint and ESLint will not fix bugs related to incompatibilities with other parsers.
```

I decided that there must be a **way** to ***integrate*** the `Airbnb style guide` into ***ESLint recommendations***, so I did another **Google Search**. I came up with the ***following thread*** on **StackOverflow**:

[JSX not allowed in files with extension ‘ .js’ with eslint-config-airbnb](https://stackoverflow.com/questions/43031126/jsx-not-allowed-in-files-with-extension-js-with-eslint-config-airbnb)

If you look carefully, you will notice that ***I was*** **getting** such ***an error*** when I ran my `lint` ***script***. At the ***top*** of the `StackOverflow thread`, I saw the following:

```js
"extends": "eslint-config-airbnb",
```

It was located at the ***top*** of the person’s (the one asking for help) `.eslintrc` ***file***. I decided to ***look into*** what `eslint-config-airbnb` was. I looked for it on [npmjs.com](https://www.npmjs.com/package/eslint-config-airbnb). The package addresses the following:

```markdown
This package provides Airbnb's .eslintrc as an extensible shared config.
```

In other words, once you install ***all*** the **peerdeps** you need for this to work, you can add `"airbnb"` to your `"extends"` options in your `.eslintrc`:

```js
"extends": ["eslint:recommended", "plugin:react/recommended", "plugin:import/recommended", "airbnb"],
```

As per the suggested solution to the `no JSX in .js` rule in the StackOverflow Thread I found, I also ***added*** the **following line** to my `.eslintrc.json` within `"rules"`:

```js
"react/jsx-filename-extension": [1, {
    "extensions": [".js", ".jsx"]
}],
```

Once I added this line, the `no JSX in .js` errors went away.

I had ***another*** **unexpected error** which ***appeared*** when I **ran** the `lint` ***script***. It was ***related to*** my `postcss.config.js` file. I got the following error in **Terminal** output:

```shell
/Users/mariacam/Development/text-to-speech-app/postcss.config.js
  3:9  error  Unexpected require()  global-require
```

I couldn’t understand why that would happen. I ***knew*** that I had **configured** my `postcss.config.js` correctly. But then ***integrating*** `ESLint` into my application as I did was new for me. ***Before***, I **added** an `.eslintrc.json` **file** to a project, but I did ***not explicitly*** **add** `extensions options` or `extends options` and a ***whole lot of other changes*** which **did not seem necessary** in the ***first edition*** of my **custom React workflow**. I did another **Google** search, and this is what I came up with in a `postcss-loader` [issue](https://github.com/postcss/postcss-loader/issues/358) in their **Github** [repository](https://github.com/postcss/postcss-loader/):

```markdown
You are revering to extends within eslintrc configs which isn't currently supported by postcss.config.js directly. A postcss.config.js file is scoped to the project, but you may require() a preset shared through an node module as follows:

postcss.config.js
module.exports = require('my-preset')(options)
```

***by*** **michael-ciniawsky**, ***core*** **webpack contributor**.

I made the following changes in `postcss.config.js`:

```js
module.exports = require('autoprefixer');
```

And then ran the `lint` ***script*** again. That error went away as well as the ***squiggly red line*** that was in the file ***indicating*** the **parsing error**.

After I made all these changes, I ended up only with ***one error*** when I ran my `start` script. When I ran the `lint` ***script*** the `require()` ***errors*** were **gone**. The ***only ones*** I had **left** were the following:

```shell
npm run lint                                                           ✹ ✭

> text-to-speech-app@0.0.1 lint /Users/mariacam/Development/text-to-speech-app
> eslint .

/Users/mariacam/Development/text-to-speech-app/config/webpack.base.config.js
  2:17  error  'webpack' should be listed in the project's dependencies, not devDependencies                  import/no-extraneous-dependencies
  3:27  error  'copy-webpack-plugin' should be listed in the project's dependencies, not devDependencies      import/no-extraneous-dependencies
  4:15  error  'webpack-merge' should be listed in the project's dependencies, notdevDependencies            import/no-extraneous-dependencies
  5:30  error  'mini-css-extract-plugin' should be listed in the project's dependencies, not devDependencies  import/no-extraneous-dependencies
  6:27  error  'html-webpack-plugin' should be listed in the project's dependencies, not devDependencies      import/no-extraneous-dependencies
  7:28  error  'clean-webpack-plugin' should be listed in the project's dependencies, not devDependencies     import/no-extraneous-dependencies
  8:23  error  'workbox-webpack-plugin' should be listed in the project's dependencies, not devDependencies   import/no-extraneous-dependencies

  /Users/mariacam/Development/text-to-speech-app/config/webpack.prod.config.js
   1:17  error  'webpack' should be listed in the project's dependencies, not devDependencies                             import/no-extraneous-dependencies
   2:15  error  'webpack-merge' should be listed in the project's dependencies, not devDependencies                       import/no-extraneous-dependencies
   4:24  error  'webpack-manifest-plugin' should be listed in the project's dependencies, not devDependencies             import/no-extraneous-dependencies
   5:33  error  'optimize-css-assets-webpack-plugin' should be listed in the project's dependencies, not devDependencies  import/no-extraneous-dependencies
   6:24  error  'uglifyjs-webpack-plugin' should be listed in the project's dependencies, not devDependencies             import/no-extraneous-dependencies
   7:20  error  'webpack-visualizer-plugin' should be listed in the project's dependencies, not devDependencies           import/no-extraneous-dependencies
  26:1   error  Line 26 exceeds the maximum line length of 100                                       max-len

/Users/mariacam/Development/text-to-speech-app/src/components/text/Text.js
  7:9  error  Unused state field: 'listening'  react/no-unused-state

/Users/mariacam/Development/text-to-speech-app/src/sw.js
  2:37  error  Unexpected use of 'self'                         no-restricted-globals
  2:37  error  Unexpected dangling '_' in '__precacheManifest'  no-underscore-dangle

✖ 17 problems (17 errors, 0 warnings)

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! text-to-speech-app@0.0.1 lint: `eslint .`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the text-to-speech-app@0.0.1 lint script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/mariacam/.npm/_logs/2018-12-04T18_50_14_449Z-debug.log
```

Most of these errors have to do with the ***opinionated nature*** of **Airbnb** and involve code created by plugins (the `workbox-webpack-plugin` ***specifically***, for example, that I do not want to tamper with!). Not bad considering I started off with 102 errors! As for

```shell
Unused state field: 'listening'  react/no-unused-state
```

I ***expected*** **this one**. I put this line there to ***make sure*** that `(proposed) static class properties` ***didn’t throw*** a **parsing error** ***after*** I **created** the ***new*** `babel.config.js` and made `babel-eslint` my `eslint parser` in `.eslintrc.json`.

I never **realized** the ***importance*** of the `Airbnb style guide` in **React** ***applications*** until I started taking a ***deep dive*** into my **custom workflow**. It is important to know exactly what is and should be under the hood in order to improve your ***code***, **development** ***skills***, ***quality***, and ***speed***. If there hadn’t been such ***breaking changes*** in my **workflow** in the ***first place***, I ***might not have made*** a **deeper dive** into my ***workflow*** and ***toolset*** to take my **skills** as a **developer** to the ***next level***.

It is ***totally fine*** to use tools such as `create-react-app` if you ***want*** or ***need to*** **save time**. ***However***, don’t just ***“blindly”*** keep on using them without finding out ***how*** things like that work and ***why*** it is so fantastic (because it is). I’m ***not saying*** you should **replicate** what they have ***created***. Absolutely ***not***. The whole point is to create your OWN ***custom workflow*** ***with tools*** that **fit** the ***requirements*** of the **applications** ***you*** are **creating**.

### For those of you willing to stick around and take it a step further

I wanted to make my ESLint configuration even more all encompassing. I had heard about Prettier and how great it was. So why not see if I could add it to the current ESLint stack? I did a Google search, and found the answer: YES!

`Prettier` is another ***opinionated*** `code formatter`. ***Adding*** `Prettier` to the `ESLint` stack is ***similar*** to ***adding*** `Airbnb`.

+ **Install Prettier:** `npm i prettier -D`

+ **Install eslint-config-prettier:** `npm i eslint-config-prettier -D`

+ **Install eslint-plugin-pretter:** `npm i eslint-plugin-prettier -D`

+ **Create a** `.prettierrc` **file** – I created a `.prettierrc.json` file since I already had an `.eslintrc.json` file

+ **Create your own custom configs there**

+ **Integrate Prettier into your** `.eslintrc.json` **file**

I added the following to my `.prettierrc.json` file:

```js
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "SingleQuote": true
}
```

I ***integrated*** `Prettier` into `ESLint` in the ***following*** way in my `.eslintrc.json`:

```js
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true,
        "serviceworker": true
    },
    "extends": [
        "airbnb",
        "prettier"
    ],
    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.6.3"
        }
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": [
            "error"
        ],
        "react/jsx-indent": [
            0
        ],
        "no-underscore-dangle": 0,
        "max-len": ["off", {
            "code": 80
        }],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true
            }
        ],
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "react/display-name": [0],
        "no-unused-vars": 0,
        "no-console": 0,
        "indent": [
            0
        ],
        "linebreak-style": [
            "off",
            "eol-last"
        ],
        "quotes": [
            0
        ],
        "semi": [
            0
        ]
    },
    "globals": {
        "window": true,
        "document": true,
        "localStorage": true,
        "FormData": true,
        "FileReader": true,
        "Blob": true,
        "navigator": true
    }

}
```

This is my ***latest*** `.eslintrc.json` **configuration** based on the errors I was getting at first when I started working on my Text To Speech App. I made quite a few changes since I ***wrote*** the **article** entitled [The importance of ESLint (And React)](). In ***addition***, I ***integrated*** the `Airbnb Style Guide` and `Prettier`. Except for

```shell
error  Unused state field: 'listening'  react/no-unused-state
```

which will be rectified when I add more code to Text.js and ultimately complete the application, I was able to get rid of or fix all my linting errors!

There are so many different ways to configure ESLint or linters in general. Again, a drop in the bucket if not the ocean. What may be good for me may not be good for you, but this is a starting point to a better understanding!

To view the `src code` for the ***app*** I **used** ***as a reference***, please visit the [Text To Speech repository](https://github.com/interglobalmedia/text-to-speech-app) on **Github**.

***Happy developing!***

### Related Resources:

+ [ESLint: Getting Started](https://eslint.org/docs/user-guide/getting-started)

+ [Prettier](https://prettier.io/)

+ [Integrating Prettier + ESLint + Airbnb Style Guide in VSCode](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)

+ [How to integrate Eslint & Prettier in React](https://medium.com/quick-code/how-to-integrate-eslint-prettier-in-react-6efbd206d5c4)

+ [Unexpected use of ‘self’ no-restricted-globals React](https://stackoverflow.com/questions/44292520/unexpected-use-of-self-no-restricted-globals-react)

+ [Validate JSX indentation (react/jsx-indent)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)

+ [eslint should be listed in the project’s dependencies, not devDependencies](https://stackoverflow.com/questions/44939304/eslint-should-be-listed-in-the-projects-dependencies-not-devdependencies)

+ [Your last ESLint config](https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99)

+ [JSX not allowed in files with extension ‘ .js’ with eslint-config-airbnb](https://stackoverflow.com/questions/43031126/jsx-not-allowed-in-files-with-extension-js-with-eslint-config-airbnb)

+ [The Importance Of ESlint (And React)](https://http://www.mariadcampbell.com/the-importance-of-eslint-and-react/)




