---
title: "Class Conflicts"
image: richard-lee-788052-unsplash.jpg
description: Today I learned about how one can scope the css files of React components to the styling of only the components themselves using css modules.
date: '2017-11-09'
tags: ["react", "css-modules", "scope"]
categories: ["react"]
author: "Maria D. Campbell"
---

Today I learned about how one can scope the css files of React `components` to the styling of only the components themselves using `css modules`. For example, `App.css` would contain styles only for `App.js`, `Person.css`, i.e., would only contain styles for `Person.js`, etc.

I am using **CRA** for this project (for a change), and had to eject out of it in order to make the necessary changes in my **CRA** `webpack.config.dev.js` and `webpack.config.prod.js` **files**.

The ***only*** **other thing** that ***needed to be done*** was to **add** the ***following*** to **both** the `webpack.config.dev.js` and `webpack.config.prod.js` in the `css module` within the `module object`:

```js
{
    test: /\.css$/,
    use: [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]',
            },
        },
    ]
}
```

***Specifically***, I added `modules: true`, and `localIdentName: ‘[name]__[local]__[hash:base64:5]’`.

`css-loader` ***parses*** and ***converts*** our `css`, ***extracts it***, ***stores it***, AND supports `css-modules`.

The ***addition*** of `modules:true` **and** `localIndentName: [name]__[local]__[hash:base64:5]` is ***critical*** for your **styles**, and your `css classes` getting **unique names** ***per component*** so that they **don’t override** ***each other*** **globally** ***across*** the **application**.

`[name]`: ***refers to*** your `css className`.

`[local]`: allows ***css-loaders*** to **assign it** (the `className`) to a `local component`. In other words, ***scope*** it.

`[hash:base64:5]`: gives your ***className*** a `unique hash` to make sure you ***don’t*** **overwrite** your `styles` ***globally*** **across** your **application**.

And that’s all that had to be done to ***enable*** `css modules`. But ***remember***, once you ***eject***, **you can’t go back**!

Then I went into my **App** `component`, `App.js`, and **imported** my ***classes*** from `App.css` with the **variable name** `classes.`

```jsx
// App.js
import classes from './App.css';
```

After that, I needed to **update** my `className` ***properties*** so that my `classes` would **work** ***again***. By `scoping` my `css classes` in `App.css` to `App.js`, they ***no longer worked*** as **strings** in the `JSX`.

So this is what my `code` ***initially*** **looked like**:

```jsx
// App.js in return statement for the render() method

return (
    <div className={classes.App}>
    <h1 className={classes.title}>Hi, I'm a React App</h1>
    <p className={classes.join(' ')}>This is really working.</p>
    <button style={buttonStyle}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
    </div>
);
```

Looks **pretty** ***straightforward***, right? But ***guess what***. It didn’t work. I scratched my head wondering, “why not?”, for a few minutes. Then I checked on the [CRA Github repo](https://github.com/facebook/create-react-app) for any **CRA** `css modules` related issues that might be out there, because **CRA** ***still*** does NOT **support** `css modules` ***out of the box***. There has been a lot of buzz around adding support for it for the longest time, and purportedly there will be ***full support*** with the release of **CRA 2**. When that is taking place, however, is not known.

Next I tackled my ***other component***, `Person.js`, to see what would happen there. I did the following at the top of the file:

```jsx
// Person.js
import personClasses from './Person.css';
```

And then ***within the body*** of the `Person` **component**:

```jsx
const Person = (props) => {
    return (
        <div className={personClasses.Person}>
        <p onClick={props.click}>I am {props.name} and I am    {props.age} years old!</p>
        <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    );
}
export default Person;
```

I encountered ***no problems***. ???

Then I went ***searching*** for an **article** that might have discussed this ***particular workaround***. I found it immediately, and gave it a read. It seemed to work pretty much for everyone, so no issue there. So then what could be the **issue** which **prevented** my `classes` ***from being added*** to my `JSX`? Then it dawned on me all of a sudden. Of course! I was ***experiencing*** `CLASS (NAMING) CONFLICTS`. I had ***named*** the `import variable` for my `App.css`, `classes`. I had ***named*** **another variable** unrelated to `css modules` `classes` as well. Therein **arose** the `class conflict`. I had given **two different variables** the ***same name***.
For `importing` my `classes` from `App.css`, I ended up ***switching*** from `classes` to `appClasses`:

```js
import appClasses from './App.css';
```

For the `array` **variable**, I ***kept*** the **name** `classes`.

```js
// App.js
const classes = [];
```

But then I had to ***push*** some **conditional** `classes `into the `classes array`, AND I had to **append** the `import` **variable** to ***those*** `classes`.

```js
const classes = [];
if(this.state.persons.length <= 2) {
    classes.push(appClasses.rebeccapurple);
}
if(this.state.persons.length <= 1) {
    classes.push(appClasses.bold);
}
```

And then in my ***main*** `App.js` `div`:

```jsx
return (
    <div className={appClasses.App}>
    <h1 className={appClasses.title}>Hi, I'm a React App</h1>
    <p className={classes.join(' ')}>This is really working.</p>
    <button style={buttonStyle}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
    </div>
);
```

Now everything worked. You see why things could get pretty confusing! So be sure to remember ***what you named what*** as you add more and more layers to your **React** ***application***.

### Related Resources:

+ [I gave my first presentation tonight (on React workflows)](https://www.mariadcampbell.com/blog/i-gave-my-first-presentation-tonight)

+ [How to Use CSS Modules with Create React App](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)

+ [Add support for CSS Modules with explicit filename — [name].module.css #2285](https://github.com/facebook/create-react-app/pull/2285)