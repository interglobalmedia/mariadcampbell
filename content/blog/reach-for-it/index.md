---
title: "Reach for it"
image: reach_for_it.jpg
description: I was working on a little project for my Evening JS Intensive class, & I found an inspirational and wonderful photo on Unsplash (above) taken by Bryan Minear.
date: '2018-02-06'
tags: ["inspirational-images", "javascript", "arrays", "strings", "index-randomization", "responsive design"]
categories: ["javascript"]
author: "Maria D. Campbell"
---

This past Sunday, I was working on a little project for my **Evening JS Intensive** class, and I found an inspirational and wonderful photo on [Unsplash](https://unsplash.com/) (above) taken by ***Bryan Minear***. I really wanted to create a chat bubble over the hand and place random quotes within it, but I just couldn’t get it to work for me visually. I think what really bothered me was that it covered part of the photo. In the end, I trashed the idea of the chat bubble and went simple. Sometimes a photograph just really speaks to you and you just have to build something around it…and keep it simple to emphasize the power of the image and the message you are trying to convey with it.

The app is very simple as well. When you are trying to convey something powerful in a visual way, it’s best to keep it as clean and simple as possible. I created a button with the text `Click me!`. When the user clicks on it, a random quote appears. With each click, a new random quote appears. For the sake of brevity, I did not include that many quotes (10 to be exact), but this little app is providing me with fodder for something bigger in the near future.

I use `document.createElement()` to **create** all the `element tags` I need to ***build*** the **application**.

I use `document.querySelector()` when I want to ***retrieve*** an `existing element`, in my case `body`, so that I could ***apply styling*** to it AND `.appendChild()` to `append children` to it in order to ***render*** them to the `document`. If you want to get even more technical, to the `DOM` (`Document Object Model`). Of course all of these little projects are leading to our delving into `React` down the road. I use the `.classList.add()` method when I want to add a class to an element I have just created so that I can use it in my `hover.scss`. Certain styling could not be done in `JS` such as my ***pseudo classes*** `::before` and `::after`, and some styling of the `<p></p>` **tag**. I need to change the size of the font in certain screen widths, and I could not use `media queries` in **JS**, for example.

The following few lines of code make up the crux of the app:

```js
// randomize the index retrieval of the quotes array so that each time the user clicks on the text rendered to the page, a random quote appears.
para.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    para.textContent = quotes[randomIndex];
})
```

I add a `click` **event listener** to the ***paragraph*** containing the **random quotes**. When the click event is triggered by the click of the button, the paragraph text, `Click me` is replaced by a **random quote** retrieved from an ***array*** I create called `quotes` which stores **quotes** in the form of ***strings***. Their retrieval is **randomized** by multiplying the number of quotes represented by `quotes.length` with `Math.random()`, and then `Math.floor()` is applied to it in order to round down the `random array index` to a `whole number`. The **randomized quote** is then stored as the value of the **text content** of the **paragraph**, thereby initially replacing the text `Click me!`, and subsequent clicks replace the **current text** with a ***new*** **randomized quote**.

The original project we were supposed to create should have implemented either the `mouseenter` or `mouseleave` **event**, but I didn’t think that it was the best `UI/UX` to apply in this instance. I went with the `click` **event**. The original text for the project was not an array of quotes in the form of strings either. I just took it to the next level because I was so inspired by this image and by the **Random Quote Machine** (no longer available) project I had created ***a while back*** for [FreeCodeCamp](https://www.freecodecamp.org/).

**This project is 100% responsive and cross browser compatible.**

### Related Resources:

+ [Reach For It on Github gh-pages](https://interglobalmedia.github.io/reach-for-it/s)

+ [Reach For It Source Code](https://github.com/interglobalmedia/reach-for-it)
