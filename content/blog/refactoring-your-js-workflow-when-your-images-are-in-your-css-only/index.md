---
title: "Refactoring your JS workflow when your images are in your CSS only"
image: big_code_refactoring_with_agility.jpg
description: I have been doing quite a bit of enhancing and refactoring of apps I have built lately.
date: '2019-01-08'
tags: ["distributed-version-control", "git", "web-development", "front-end-development", "javascript-automated-workflows", "webpack", "npm", "refactoring-code"]
author: "Maria D. Campbell"
---

I have been doing quite a bit of enhancing and refactoring of apps I have built lately. I have also been tossing one or two here and there because the APIs they relied on were retired. A good excuse to re-build them differently! I refactored one app I love yesterday, and it proved to be a bit of a challenge. Something a bit different for me in a purely Webpack workflow.

My images for my ***CSS slider*** were only embedded in my CSS, not in my HTML. When I had created this 2 years ago, I really like the effect and feel, and decided to take that route instead of JS. It also involved animation, which I really like working with as well.

The workflow which was attached to the app is now obsolete, so I decided to adapt my latest React workflow using Webpack 4, Babel 7, ESLint, Prettier, etc., to this application. I thought it should be a seamless transition, as I had already adapted the workflow to another JS app I had completed recently, and it works beautifully.

I refactored the workflow and ran the app locally, and everything worked as expected. then I ran my first build. Webpack could not find my images! Surprise surprise. This was also a bit of a challenge when I used my Gulp/Webpack workflow on the app 2 years ago. It all had to do with the path to the images relative to where the CSS file resided.

When your images are embedded in your HTML or your JS/JSX, there is no problem. Webpack figures out where your image is whether it is in your static folder or in an images folder in your src. In the case of React, at least for me, in the root of the app. But this time, neither was the case. This is how my app was structured when I ran my first build:

```markdown
-config
  - webpack.base.config.js
  - webpack.prod.config.js
- src
  - audio
  - images
  - modules
    - catStoryText.js
    - textToSpeech.js
    - styles
      - base
      - modules
      - styles.css
      - styles.css.map
      - styles.scss
  - favicon.ico
  - index.html
  - index.js
  - sw.js
- .eslintrc.json
- .gitignore
- .prettierrc.json
- README.md
- babel.config.js
- package-lock.json
- package.json
- postcss.config.js
```

When the build was created, the styles.css resided within a folder called styles in dist, and the images resided in an images folder at the same level as the styles folder. But the styles.css was inside the styles folder, and the images path being rendered in styles.css was the following:

```css
#blinds:after {
  background: transparent url(images/pattern.png) repeat top left; 
}
```

for example. I sometimes had a similar issue when developing workflows for my React projects in which I was using both CSS Modules and SCSS. Not that I was necessarily embedding images only in CSS instead of inside my React components. I was not. But I had to make the path to styles.scss work in the React application alongside the CSS Modules. So I moved styles.scss outside of the styles folder into the root of src.

In this case, even though I was not entirely happy about removing a styles folder in dist, moving styles.css into the root of src allowed me to keep the original functionality of the application. One should not have to refactor the way one displays one’s image slider just for the sake of a styles folder in dist! As it is, there is only one styles bundle, and more important, I am able then to maintain my many images in an image folder and my scripts in a scripts folder as well!

My audio file on the other hand, did not pose an issue. It was being called into my JS, and the path relative to the JS did not change. However, its functionality did rely on the presence of images, so it did not work until the images were ‘found’ by Webpack.

***Takeaway?*** The workflow with pure Webpack is much terser and therefore drier in my opinion than a Gulp/Webpack workflow. Gulp just adds too many layers and files to the mix. In addition, many of the tools I used with it are not being well maintained now, especially related to image compression!

Once you wrap your head around Webpack, it really is a great bundler and appropriate for so many different use cases!

If you are interested in seeing the difference between the old version of the workflow and the new version, just go back to earlier commits in the repo code!

## Related Links:

+ [The Cat Whisperer Source Code on Github](https://github.com/interglobalmedia/the-cat-whisperer)


