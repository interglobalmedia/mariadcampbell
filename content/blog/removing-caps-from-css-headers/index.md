---
title: 'Removing caps from css headers'
image: jeremy-bishop-50060-unsplash.jpg
description:
    I had never thought about changing the styling of css headers before.
date: '2019-01-08'
tags: ['css', 'headers', 'styles', 'nocaps']
categories: ['web-design']
author: 'Maria D. Campbell'
---

I was wrapping up my **React Workflows without Create React App** presentation
using [reveal.js](https://revealjs.com/#/) for the **ReactNYC meetup** this
`Thursday, September 28, 2017`, and was not pleased with the way some of my
slide titles came out. Many of them were made up of code, and they looked
awfully funny all in caps! I had never thought about changing the **_styling_**
of `css headers` before. I just passively accepted that headers were in caps.
But working on this presentation got me thinking, “There just has to be a better
way!”. So after a bit of googling, I came across the
[first part](https://css-tricks.com/almanac/properties/t/text-transform/) of my
answer:

```markdown
lowercase makes all of the letters in the selected text lowercase.

uppercase makes all of the letters in the selected text uppercase.

capitalize capitalizes the first letter of each word in the selected text.

none leaves the text's case and capitalization exactly as it was entered.

inherit gives the text the case and capitalization of its parent.
```

However, **_just adding_** `text-transform: none` to your `css headers` is not
enough. Nothing changed. So I looked a bit further, and
[this](https://kriesi.at/support/topic/remove-caps-in-headings-enfold-theme/) is
what I came up with:

```css
h1,
h2,
h3 {
    text-transform: none !important;
}
```

And it worked!

Funny how you can un-earth the most precious gems from the most unlikely places!
So this is what I **_added_** to my [reveal.js](https://revealjs.com/#/)
`custom.css`:

```css
h1,
h2,
h3,
h4,
h5,
h6 {
    text-transform: none !important;
}
```

Now my code related headers look like what they are!

And **_btw_**, if you are giving a presentation any time soon, you should
strongly consider using [reveal.js](https://revealjs.com/#/). It’s so awesome!

**_Happy coding!_**
