---
title: "The Importance Of ESlint (And React)"
image: eslint_react.png
description: Eslint (or some other code formatter) is very important in (code) development.
date: '2018-11-19'
tags: ["eslint", "eslint-configuration", "linters", "react", "babel-7", "webpack-4", "react-16-6-3", "react-custom-workflows", "javascript", npm, "command-line", "terminal-program", "osx"]
categories: ["web-development", "front-end-development", "react", "web-development-workflows", "osx", "command-line", "terminal"]
author: "Maria D. Campbell"
---

Please also visit my post ***entitled*** [ESLint parsing (in React)](/blog/eslint-parsing-in-react/).

**ESlint** (or some other code formatter) is very important in (code) development. I have been using it for **JavaScript** development for a very long time. When using **Create React App**, I depended on its code formatting suggestions, and took built in code formatting for granted. Then I kind of slipped lately because I use my own ***custom*** **React** workflow. I was ***using ESlint***, but noticed recently that there was something ***wrong*** with my configuration for **React**.

A lot has changed since I created my last **React workflow**. Then I was using **React 16.5+**, **Webpack 3.6**, and **Babel 6+**. A month ago I started using **React 16.6.0**, **Webpack 4.3.0**, and **Babel 7**. Today I am using **React 16.6.3**, **Webpack 4.3.0**, and **Babel 7**. Believe me, changes occurred between **React 16.6.0** and **16.6.3** that ***affected*** my **updated workflow**! So that means that things were changing regarding **ESlint configuration** for **React** since I created my last workflow a year ago, especially since it depends on **Babel** as a parser!

I decided to execute a Google search regarding  very recent articles about **ESlint configuration** for **React**, and immediately found what I was looking for.

Yes, my **ESlint configuration** was totally wrong! This means I have to go back and check my **ESlint configs** in other ***recent*** **React applications** and ***update*** them where ***necessary***.

## How ESlint Should be Configured with React 16.6.3

+ First make sure that you have installed **ESlint** as a `devDependency` in your project. `npm i eslint -D`

+ Then make sure to install the `eslint-loader` so that you can add `eslint` to your `webpack config`.  `npm i eslint-loader -D`

+ Then start setting up your basic `eslint config` using `node_modules/.bin/eslint --init`. That’s the same you would do when configuring `eslint` for a ***regular*** **JavaScript application**. For a step by step guide, please visit [ESlint User Guide - Getting Started](https://eslint.org/docs/user-guide/getting-started) and [ESLint Introduction](http://www.logicative.com/code/web-thoughts/eslint-introduction/).

+ After you have run the command `node_modules/.bin/eslint --init` inside the root of your project, the following will appear in your **Terminal** window:

```shell
How would you like to configure ESLint? (Use arrow keys)
Use a popular style guide
❯ Answer questions about your style
Inspect your JavaScript file(s)
```

I usually like to choose `Answer questions about your style`, but choose whatever you are most comfortable with.

```shell
How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use?
  ES3
  ES5
  ES2015
  ES2016
  ES2017
❯ ES2018
```

I like to choose the **latest version** of `ECMAScript`, which right now is `ES2018`.

```shell
How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use? ES2018
? Are you using ES6 modules? (y/N)
```

Of course I am using `ES6 modules`, so I choose `y`.

```shell
node_modules/.bin/eslint --init
? How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use? ES2018
? Are you using ES6 modules? Yes
? Where will your code run?
 ◉ Browser
❯◉ Node
```

I just choose `Browser` and `Node` to cover all my bases. Why not, right? Well, actually, there is a reason for including **Node** for running my code. If I don’t include it, I would get the following error, for example:

```shell
error 'process' is not defined no-undef

node_modules/.bin/eslint --init
? How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use? ES2018
? Are you using ES6 modules? Yes
? Where will your code run? Browser, Node
? Do you use CommonJS? Yes
```

`CommonJS` is required when using `require`, which is used only in `Node` now, but I choose it anyway just in case if there is a package out there that still requires `require`.

```shell
node_modules/.bin/eslint --init
? How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use? ES2018
? Are you using ES6 modules? Yes
? Where will your code run? Browser, Node
? Do you use CommonJS? Yes
? Do you use JSX? Yes
```

Of course I am using `JSX` since I am using `React`, so I choose `y`.

```shell
node_modules/.bin/eslint --init
? How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use? ES2018
? Are you using ES6 modules? Yes
? Where will your code run? Browser, Node
? Do you use CommonJS? Yes
? Do you use JSX? Yes
? Do you use React? Yes
```

And of course I choose `y` for `React`!

```shell
node_modules/.bin/eslint --init
? How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use? ES2018
? Are you using ES6 modules? Yes
? Where will your code run? Browser, Node
? Do you use CommonJS? Yes
? Do you use JSX? Yes
? Do you use React? Yes
? What style of indentation do you use? (Use arrow keys)
❯ Tabs
Spaces
```

I find `tabs` much easier, so I choose `Tabs`.

```shell
node_modules/.bin/eslint --init
? How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use? ES2018
? Are you using ES6 modules? Yes
? Where will your code run? Browser, Node
? Do you use CommonJS? Yes
? Do you use JSX? Yes
? Do you use React? Yes
? What style of indentation do you use? Tabs
? What quotes do you use for strings?
Double
❯ Single
```

I just find choosing `Single` for ***quotes*** more ***convenient*** and therefore ***easier***, so I choose `Single`.

```shell
node_modules/.bin/eslint --init
? How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use? ES2018
? Are you using ES6 modules? Yes
? Where will your code run? Browser, Node
? Do you use CommonJS? Yes
? Do you use JSX? Yes
? Do you use React? Yes
? What style of indentation do you use? Tabs
? What quotes do you use for strings? Single
? What line endings do you use? (Use arrow keys)
❯ Unix
Windows
```

I use a `Macbook Pro`, which means that I am on `Unix`, so I choose `Unix`.

```shell
node_modules/.bin/eslint --init
? How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use? ES2018
? Are you using ES6 modules? Yes
? Where will your code run? Browser, Node
? Do you use CommonJS? Yes
? Do you use JSX? Yes
? Do you use React? Yes
? What style of indentation do you use? Tabs
? What quotes do you use for strings? Single
? What line endings do you use? Unix
? Do you require semicolons? No
```

When asked if I ***require*** `semicolons`, I choose `n`. We really don’t need them as of `ES6` anyway. However, I ***do*** use them because of convention and that it also **defines** the **end of a line** (when appropriate).

```shell
Where will your code run? Browser, Node
? Do you use CommonJS? Yes
? Do you use JSX? Yes
? Do you use React? Yes
? What style of indentation do you use? Tabs
? What quotes do you use for strings? Single
? What line endings do you use? Unix
? Do you require semicolons? No
? What format do you want your config file to be in? JSON
```

I choose `JSON` for my `config format`, but you choose whatever you are most comfortable with.

+ When I have completed my `eslint` set up successfully, the following is returned at the end:

```shell
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
Successfully created .eslintrc.json file in /Users/mariacam/Development/eslint-config
```

So I am being told that ***at very least*** I need to install the latest version of the `eslint-plugin-react@latest` **npm** package.

+ Next you have to add the `eslint-loader` into your `Webpack config` file. I have two config files. One called `webpack.base.config.js` and one called `webpack.prod.config.js`. `webpack.prod.config.js` is only related to **production**. `webpack.base.config.js` is related to **development**, but ***also*** to **production** ***conditionally***. If there are configs that are for development only but also need to be configured for production, they would appear in `webpack.base.config.js` as well. In that case, I use `ternary operators` to ***cover*** **both environments**.

+ But it doesn’t end there. We also have to configure `Babel` to include `eslint`, and `Eslint` to include `Babel`. Otherwise, we will obtain ***errors*** related to `JSX` in `Command Line` when running our application in development. We need `Babel` to ***parse*** our **JSX**. We also have to take into consideration the changes that have taken place with regards to `Babel 7`, `React 16.6+` and `Webpack 4+`! So next I have to install the `eslint-loader` and add it to my `Webpack config`. In my `webpack.base.config.js` file, I do the following:

```js
rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader:'babel-loader'
        }
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
            'babel-loader',
            'eslint-loader'
        ]
    }],
```

+ Then in my `eslintrc.json` file, I do the following:

```js
"parser": "babel-eslint",
```

at the top of the file.  This means that I have to include the `babel-eslint` **npm** package so that `Babel` will ***know*** to parse my `React JSX`. 

```shell
npm i babel-eslint -D
```

+ Next I also have to add the following to my `eslintrc.json` file:

```js
"extends": ["eslint:recommended", "plugin:react/recommended"],
```

This means that I am extending my `eslint configuration` to include recommendations not only for `vanilla JavaScript`, but for `React JSX` as well.

+ You can also include other style guides such as the [Airbnb Style Guide](https://github.com/airbnb/javascript), ***very popular*** among **React developers**, if you like. It is included as an option when initially configuring Eslint. **Airbnb** open sourced its own [ESLint configuration](https://www.npmjs.com/package/eslint-config-airbnb) that everyone can use it in their `ESLint configuration`.

When I finally had **ESlint** configured properly for **React**, I immediately benefitted from it and found an `error` in my code I never realized was an error to begin with! But apparently, it was even regarded as a security risk. And for those of us that know why **React** was created to begin with, we know historically how ***serious*** **Facebook** is about ***security***. I like to add `target="blank"` to my links so that when people visit a site of mine or a post and click on a link, they will be directed to the link in a new window of their browser. In this way, they would easily be able to return to my site or post! I had been told a long time ago that this was a good approach. Well, according to **ESlint**, it recommended the following:

```shell
ERROR in ./src/components/speech/Speech.js

/Users/mariacam/Development/speech-to-text-app/src/components/speech/Speech.js
100:29 error Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener react/jsx-no-target-blank

1 problem (1 error, 0 warnings)
```

So I added `rel="noopener noreferrer"` to my link. This is just one tiny example of why one should use a popular and widely accepted code formatter in one’s workflows. It even referred to an article on the topic written by [Mathias Byens](https://twitter.com/mathias), a developer who works on the **V8 engine** at **Google** and on **ECMAScript** through their **Technical Committee 39**.

There are other things that I had to resolve as well. For instance, I did not know why `describe()`, `it()`, `expect()`, etc. would result in an error with **Jest** (or any other testing program for that matter). The tests would pass (or not pass), but `describe()`, `it()`, `expect()`, etc., would throw a syntactical error. Today I found out that I had to add a configuration to my `eslintrc.json` in order to get rid of these errors. I added the following to my `eslint config`:

```js
"env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true
},
```

`"jest": true` removed the `eslint` errors.

Since `eslint-plugin-react@7.11.1`, if one does not explicitly state the ***version*** of **React** they are using in their `eslint config`, the following error is thrown when starting up a `React application` locally:

```shell
Warning: React version not specified in eslint-plugin-react settings. 
See https://github.com/yannickcr/eslint-plugin-react#configuration.
```

In order to remove this warning, I added the following to my `eslintrc.json` file:

```js
"settings": {
    "react": {
        "pragma": "React",
        "version": "16.6.3"
     }
},
```

`"pragma"` refers to how the compiler (in our case **Babel**) should compile the code in my (**React**) application. To learn more about pragmas, please visit [https://en.wikipedia.org/wiki/Directive_(programming)](https://en.wikipedia.org/wiki/Directive_(programming). `"version"` refers to the ***version*** of React I am using. When this was added to the `eslint config`, the warning went away.

Another thing I found out today is that by installing `babel-eslint` and declaring it as my parser in my `eslintrc.json`, I remove the error that `=` is an unexpected token. For example, the following used to throw a syntactical error for me:

```js
state = { listening:false }
```

After I added `babel-eslint` to my workflow and declared it as my parser in `eslintrc.json`, the error went away!

You can take things a step further and add an `eslint script` in your `package.json` so that you can check for ***errors*** in all your **Javascript/React** related files all at once:

```js
"scripts": {
    "lint" : "eslint ."
},
```

There are all sorts of configurations you can add to your `eslint config` which I won’t mention here, because I would end up going on and on. Everyone has different needs and has to figure out for themselves how to make them happen! But this is a good start when it comes to ***configuring*** **ESlint** for **React**. I am adding links to resources related to configuring `eslint` for **React** at the end of this post. I highly recommend reading them. I am also ***including*** the **link** to my ***latest*** **React application** which ***includes*** an `eslint config` for **React**.

***Configuring*** **ESlint** for **React** is IMPORTANT for ***improving*** your **React** `code`, but it also ***includes*** IMPROVING your **JavaScript** `code`! This way you `kill two birds with one stone`!

### Related Resources:

+ [error using Class Properties with React](https://github.com/standard/eslint-config-standard-react/issues/46)

+ [Warning: React version not specified in eslint-plugin-react settings](https://github.com/yannickcr/eslint-plugin-react/issues/1955)

+ [INTRODUCTION TO ESLINT](http://www.logicative.com/code/web-thoughts/eslint-introduction/)

+ [React Code Style with ESLint + Babel + Webpack](https://www.robinwieruch.de/react-eslint-webpack-babel/)

+ [Practical Tutorial To Add Eslint To Your ReactJS Project Fast](https://felipelinsmachado.com/eslint-react/)

+ [Speech To Text App: my latest React application](https://github.com/interglobalmedia/speech-to-text-app)

