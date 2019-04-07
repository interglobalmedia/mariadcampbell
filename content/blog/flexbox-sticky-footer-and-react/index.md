---
title: "Flexbox sticky footer and React"
image: sticky-footer.jpg
description: I came across a design challenge in which pages which had little or no content meant a footer which failed to stay grounded to the bottom of the page.
date: '2017-10-04'
tags: ["flexbox", "sticky-footer", "react", "design"]
author: "Maria D. Campbell"
---

Currently I am working on a **React** ***version*** of my **portfolio site**. I like my **Jekyll** ***version***, but wanted to **compare** `UX` ***between*** **React** and **Jekyll**. I also wanted to ***add animation*** and ***interactivity*** which were not present in my **Jekyll site**.

I came across a design challenge pretty quickly into the project. The `“raised footer”` **issue**. Pages which had little or no content meant a footer which failed to stay grounded to the bottom of the page. It was time to add the `Flexbox “sticky footer” solution` ***developed by*** **Philip Walton**. Suggestions on **Github** that

```css
html, body {
    height: 100%;
}
```

would be enough is simply not true. Just check out devices with irregularly great heights like Kindle Fire HD or not so irregular devices like Nexus 10 and see what happens with your footer! better yet, check out your own empty or nearly empty pages!

I also found that **React developers** seem to have a hard time translating ***traditional implementations*** of **Flexbox** to **React DOM** ***configurations***. I had that problem at first as well. But then I started examining the ***structure*** of my **React application** from the ***React*** **point of view**, and things became clear pretty quickly.

With a ***regular*** `HTML5`, `CSS3`, and `JavaScript` **application**, I would add the `Site` **class** to the `<body></body>` **tag**:

```jsx
<body class="Site"></body>
```

Then I would add the `Site-content` **class** to a `<div></div>` I would create purely for the sake of the **Flexbox** `sticky footer`:

```jsx
<body class="Site">
    <div class="Site-content"></div>
</body>
```

The structure of a **React** application, however, can confuse matters a bit at first. This is how my **React Portfolio**‘s `index.html` looks like right now:

```jsx
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Maria D. Campbell">
        <title>Portfolio Site Built With React</title>
        <!-- CSS -->
        <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

And this is what my `App.js` looks like:

```jsx
import React, { Component } from 'react';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="App Site">
                <div className="Site-content">
                    <div className="App-header">
                        <Header />
                    </div>
                    <div className="main">
                        <Main />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
```

If I were to add the `Site` **class** to the `<body></body>` in `index.html` and then created a new `div` below it for the `Site-content` **class**, it would not work. Why? because it would mean that the `<footer></footer>` **component** would end up being included, and that doesn’t do.

So I had to determine what in React would act as the equivalent of the `<body></body>` **tag** and the proceeding `<div></div>` tag.

Forget about the `<body></body>` tag! It’s the `<div className="App"></div>` which is **React**’s `<body></body>` tag. ***Then***, I added a new `<div className="Site-content"></div>` below that. Notice how the `<Footer />` **component** has been ***isolated*** from the rest of the `App`’s structure?

Lastly, I added the necessary `CSS` in my `_sticky-footer.css` `POSTCSS` **module**:

```css
:root {
    --space: 1.5em 0;
    --space: 2em 0;
}

.Site {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.Site-content {
    flex: 1 0 auto;
    padding: var(--space) var(--space) 0;
    width: 100%;
}

.Site-content:after {
    content: '\00a0';
    display: block;
    margin-top: var(--space);
    height: 0;
    visibility: hidden;
}
```

This is based on **Philip Walton**’s `Solved By Flexbox/Sticky Footer`. Try it out for yourself and let me know what you think.

Happy coding!

### Related Resources:

+ [Solved By FlexBox Sticky Footer](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/)
