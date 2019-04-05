---
title: "The Jest Side Effect"
image: meds_side_effect_ocduk.jpg
description: There was a side effect to my modification.
date: '2018-12-03'
tags: ["jest", "babel-7", "react", "webpack", "custom-react-workflows", "test-driven-development"]
author: "Maria D. Campbell"
---

**Update December 3, 2018:** I found the solution to this issue and wrote an article about it last night which I published this morning entitled [The New Babel Config](https://www.mariadcampbell.com/blog/the-new-babel-7-config/). I have brought all resources together in the repository for the second edition of my **custom React Workflow** on **Github**. Please visit [issues](https://github.com/interglobalmedia/react-workflow-updated-2018/issues/1) to learn more.

In my last post, I discussed the changes I had to make in my Jest configuration so that Jest could mock out image imports in my React components. Then my Jest tests would pass. I made the necessary adjustments following the suggestions made in the Jest documentation (several approaches were provided), and my tests did pass.

But there was a side effect to this modification. I no longer could use the (proposed) class properties in my components even though I had taken them into account in my Babel 7 configuration!

Indeed there was a bit of conflict amongst the playmates. I will be looking into this matter further so I can make class properties work again. It’s nice to reduce the number of lines of code in a component, even if by 2 or three lines. Without class properties:

```js
class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listening: false
        }
    }
```

With class properties:

```js
class Text extends Component {
    state = {
            listening: false
        }
```

It just would be nice to get back what I had before just because!

***The Jest side effect …***.


### Related Resources:

+ [Importing Images in React 2.0: Jest (and Babel 7)](https://www.mariadcampbell.com/blog/importing-images-in-react-2-0-jest-and-babel-7)
