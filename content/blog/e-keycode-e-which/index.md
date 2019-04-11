---
title: "e.keyCode || e.which?"
image: guess_the_keys.jpg
description: My final code includes a minor tweak I had to make in order for the colored box (read Guess the keys for more details)to render to the page in Firefox.
date: '2018-02-05'
tags: ["keyboard-events", "e-key-code", "e-which", "cross-browser-compatibility", "javascript"]
categories: ["javascript"]
author: "Maria D. Campbell"
---

I just wrote a post here entitled [Guess the keys](/blog/guess-the-keys/) in which I articulate the code (without giving away the answer!) and describe how the game works. My final code includes a minor tweak I had to make in order for the colored box (read [Guess the keys](/blog/guess-the-keys/) for more details) to render to the page in **Firefox**. I went through hell to actually get the game to render properly across browsers. ***Specifically*** **Safari**, **Chrome beta 64**, and **Firefox Quantum**. However, I did not have the chance to check it on **IE Edge**. Today I did.

But first to get back to the fix I had to implement in order for the colored box to render to the page. It had to do with the `keyCode` **property**. `keyCode` does not necessarily work properly in all browsers. In my case, it worked in **Chrome** and **Safari**, no problem.  That’s usually where I test my projects first. But then I forgot to go into ***Firefox*** and check there. It’s important to check your projects in **Firefox**, because it tends to be the ***most*** **strict** and ***least*** **forgiving**. Being a smart ass, I proudly shared my project on my `Evening Fullstack JS Intensive` **Slack Channel** and on ***Twitter***. I even presented it in class! But then I went home and ***realized*** that I **hadn’t checked** for ***browser compatibility*** on **Firefox**, so I did. Rendering of the colored box depends on the `keypress event`, so it simply did not appear. I wracked my brain about it. I changed my conditions over and over, and then suddenly I remembered having come across a ***thread*** on **CSS Tricks** about `e.keyCode vs.e.which`! There were no examples there, simply talk about it. After a bit of finagling with my code, I came across this incredibly simple solution. That’s always the way it works, right? it is the following:

```js
// listen for keypress event anywhere on the html document
document.addEventListener('keypress', (e) => {
    const chord = e.keyCode || e.which;
    const chordStr = String.fromCharCode(chord);
    chordPad.innerHTML += ` <div>${chordStr}</div> `;
...
}
```

I didn’t add the complete code for the `keypress event listener`, just what is relevant to this post. When I only had `const chord = e.keyCode`, the colored box and its contents did not appear. When I ***added*** `e.which`, everything appeared as it should. So if you are not sure about whether or not to use one or the other, use both!

The game also works well on ***IE Edge***. Check it out there if you have access to the **IE Edge Browser**. Just remember to ***press*** the `return` **key**. And if you type the incorrect answer in any way, ***press*** the ***reset button*** to clear everything so you can **start playing** from a `clean slate` all over again. The reason for this is that there are two places in which a confirmation message must appear, so you have to clear your data input to start over properly. You also have to refresh the page to get rid of the `disabled.true` **condition** that is ***triggered*** when you type the **correct answer** in the **input field** and ***press*** the `return` key.

**Note:** The only difference in appearance between IE and the other browsers (Chrome, Safari, Firefox), is that when the input field is disabled, the background of the field turns gray. When I have a moment, I will change it to white to match the input look in the other browsers!

### Related Resources:

+ [KeyboardEvent Value(keyCodes, metaKey, etc)](https://css-tricks.com/snippets/javascript/javascript-keycodes/)

+ [keycode.info](http://keycode.info/)

+ [Guess the keys (the post)](/blog/guess-the-keys/)

+ [Guess The Keys on Github gh-pages](https://interglobalmedia.github.io/guess-the-keys/)

+ [Simplifying Firefox Release Channels and Improving Developer Edition’s Stability (Firefox Quantum Developer Edition)](https://hacks.mozilla.org/2017/04/simplifying-firefox-release-channels/)

+ [Quantum Beta vs Developer Edition (thread)](https://hacks.mozilla.org/2017/04/simplifying-firefox-release-channels/)

