---
title: "When an object property key is a string in JavaScript"
image: davide-ragusa-225093-unsplash.jpg
description: Notice the last property key in the cat object? It consists of two separate words and is encapsulated in quotes.
date: '2018-01-24'
tags: ["javascript-objects", "bracket-notation"]
author: "Maria D. Campbell"
---

***Last night*** I learned the niftiest thing in my `Evening JavaScript Intensive` boot camp class about `objects`. Something I had never come across before, and that is also difficult to find in any official documentation. But it is a thing, and does exist!

***Consider*** the **following**:

```js
const cat = {
    name:'Jack',
    age:7,
    legs:4,
    color:'white',
    'favorite sports': ['football', 'soccer', 'baseball']
};
```

Notice the ***last*** `property key` in the `cat object`? It consists of two separate words and is encapsulated in quotes. So how would we access that property key and its associated value? Only with `bracket notation`! If we wanted to access the favorite sport `‘baseball’`, we would do the following:

```js
console.log(cat['favorite sports'][2]);
```

This would return `baseball`. Isn’t this is a much more descriptive way of naming object property keys? I think so. I went wild over this. The only place so far where I found any reference to this `property key syntax` was on **StackOverflow**:

+ [How can I access a JavaScript object which has spaces in the object's key?](https://stackoverflow.com/questions/8317982/how-can-i-access-a-javascript-object-which-has-spaces-in-the-objects-key)

And then a link to `MDN` within the `StackOverflow` **thread**:

+ [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

Happy ***creative object property key naming***!

