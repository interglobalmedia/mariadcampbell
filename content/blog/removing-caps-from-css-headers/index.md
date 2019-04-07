---
title: "Refactoring your JS workflow when your images are in your CSS only"
image: jeremy-bishop-50060-unsplash.jpg
description: I have been doing quite a bit of enhancing and refactoring of apps I have built lately.
date: '2019-01-08'
tags: ["distributed-version-control", "git", "web-development", "front-end-development", "javascript-automated-workflows", "webpack", "npm", "refactoring-code"]
author: "Maria D. Campbell"
---

I was wrapping up my **React Workflows without Create React App** presentation using [reveal.js](https://revealjs.com/#/) for the **ReactNYC meetup** this `Thursday, September 28, 2017`, and was not pleased with the way some of my slide titles came out. Many of them were made up of code, and they looked awfully funny all in caps! I had never thought about changing the ***styling*** of `css headers` before. I just passively accepted that headers were in caps. But working on this presentation got me thinking, “There just has to be a better way!”. So after a bit of googling, I came across the [first part](https://css-tricks.com/almanac/properties/t/text-transform/) of my answer:

```markdown
lowercase makes all of the letters in the selected text lowercase.

uppercase makes all of the letters in the selected text uppercase.

capitalize capitalizes the first letter of each word in the selected text.

none leaves the text's case and capitalization exactly as it was entered.

inherit gives the text the case and capitalization of its parent.
```

However, ***just adding*** `text-transform: none` to your `css headers` is not enough. Nothing changed. So I looked a bit further, and [this](https://kriesi.at/support/topic/remove-caps-in-headings-enfold-theme/) is what I came up with:

```css
h1, h2, h3 {
    text-transform: none !important;
}
```

And it worked!

Funny how you can un-earth the most precious gems from the most unlikely places! So this is what I ***added*** to my [reveal.js](https://revealjs.com/#/) `custom.css`:

```css
h1, h2, h3, h4, h5, h6 {
    text-transform: none !important;
}
```

Now my code related headers look like what they are!

And ***btw***, if you are giving a presentation any time soon, you should strongly consider using [reveal.js](https://revealjs.com/#/). It’s so awesome!

***Happy coding!***
