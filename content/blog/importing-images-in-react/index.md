---
title: 'Importing images in React'
image: importing_images_react.jpg
description:
    Here I just want to talk about what I had to do to make images I used work
    properly in my React app both locally AND remotely.
date: '2017-10-07'
tags: ['importing-images', 'react', 'webpack', 'react-workflows']
categories:
    [
        'front-end-development',
        'react',
        'web-development',
        'web-development-workflows',
    ]
author: 'Maria D. Campbell'
---

**Update December 2, 2018:** Much has changed in the **_React_**, **_Babel_**,
**_Jest_**, and **_Webpack_** **ecosystems** since I wrote this article last
year. I just **_completed_** a **new post** **_today_** **entitled**
[Importing Images in React 2.0: Jest (and Babel 7)](https://medium.com/@letsbsocial1/importing-images-in-react-2-0-jest-and-babel-7-7b0577b51232)
in which I discuss the **_changes_** I **needed to make** to my **custom React
workflow** as a **_result of_** the **changes** **_that have taken place_** in
**_React_**, **_Babel (7)_**, **_Webpack (4+)_**, and their **_impact on_** my
**Jest configuration**. I also updated
[React workflows Without Create-React-App First Edition](https://interglobalmedia.github.io/react-workflow-presentation/#/)
with
[React workflows Without Create-React-App Second Edition](https://interglobalmedia.github.io/react-workflow-updated-2018/#/).

As some of you who are following my posts may already know, I have been working
on a `React` version of my **Front End Developer Portfolio**. As much as I love
my `Jekyll` version, I wanted to try new things. I also wanted to get going on
my own projects using `React` while continuing my deep dive into various **React
workflows**.

I’ll be getting into the various changes I made to my developer toolkit related
to the app’s workflow in other articles. Here I just want to talk about what I
had to do to make images I used work properly in my app both `locally` AND
`remotely`.

## webpack

First I want to talk about what `webpack` tools you need in order to be able to
add images to your **React** application. It’s not just about what you need to
do with `React`. If your workflow emanates from `webpack`, you have to take care
of the `webpack` requirements first.

There are two native webpack loaders that load images: the `url-loader` and the
`file-loader`. The `url-loader` is good for development. It works like the
`file-loader`, but it returns a `DataURL` if the **file** is `< 10000 bytes`.

My `url-loader` **configuration** in `webpack-dev.config.js`:

```js
{
    test: /\.(pdf|jpg|png|gif|svg|ico)$/,
    use: [
        {
            loader: 'url-loader'
        },
    ]
}
```

For example, when I inspect my `footerTwitter.png` file in **Chrome DevTools**,
it shows up in the following way:

```jsx
<li>
    <a href="https://twitter.com/letsbsocial1">
        <img class="footerTwiiter" src="data:image/png:base64, iVBOR....AZaPAJx1SWgAAAAASUVORK5CYII=" width="40" alt="twitter">
    </a>
</li>
```

That’s because `footerTwitter.png` `< 10,000 bytes`. However, my
`profileSmall.png` is `> 10,000 bytes`, and it shows up in **Devtools** like so:

```jsx
<div class="Home-content">
<div class="Home-profile">
<img src="0688089....png" class="Profile-image" alt="Profile image">
</div>
</div>
```

I don’t mind if my image shows up as an ugly, indeterminate file, but I don’t
like having it that way in production. I want to add a `[hash]` to the name, but
I also want to keep the original name of the file so I can recognize it. That’s
where the `file-loader` comes in.

The `file-loader` is good for production. This is what my `file-loader`
configuration looks like in my `webpack-prod.config.js`:

```js
{
    test: /\.(jpg|png|gif|svg|pdf|ico)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[path][name]-[hash:8].[ext]'
            },
        },
    ]
},
```

If I didn’t add an `options` object, the names of my files would be those long
ugly hashes followed by their native extension by default. But by adding the
`name` **property** along with **_customizations_**, I am able to **change** the
`behavior` of the `file-loader` and **_emit_** my own `custom filename`.

`[path]` refers to the path of the file relative to entry. The value of the
entry property in my `webpack-prod.config.js` file is:

```js
entry: {
    bundle: './src/index.js',
},
```

Since everything needed for the application is included in `index.js`, and
`index.js` is in the `src` directory, `[path]` refers to the path to a file
relative to `src`. And since I am also using `[name]`, which refers to the name
of ANY given file, and therefore includes ANY GIVEN FILE in `src`, all files in
`src` are copied into the `dist` folder relative to `src`. Since the `images`
**directory** is **_outside_** of `src`, it gets copied into `dist` as its
original `images` directory including any sub-directories, in `dist`. No `src`
directory is added before it. But there is a little glitch to this setup. There
is a little file called `favicon.ico` which **resides** at the **_top_** of
`src`. I need to add `|ico` to my `file-loader` **test property** so that
webpack knows to load it into the application. I am also using `[path][name]`
which ends up **_copying_** **all files** **_within_** `src` into `dist`. When I
run a `production` **build**, **webpack** **_creates_** a `src` **directory** in
`dist` that contains `favicon-[hash].ico`. I haven’t found a way to
**_prevent_** `src` from being created in `dist` yet, and I don’t know that
there is any. Others have encountered similar issues, and to my knowledge, a
solution has not yet been found. Perhaps it’s time for a `feature request`?

`[hash:8]` refers to the hash that is added after the filename, and the number 8
refers to the length of the hash. the default length is just way too long! As
for choosing a separator, the best practice seems to be either a `.` or a `-`. I
personally like to clearly see my separator, so I went with `-`.

`.[ext]` refers to the file extension. By using `[ext]` instead of just one
extension means that any file extension that has been defined in the
`file-loader` **test property** will be included.

## React

STRUCTURE is so important. Anyone who has created `Gulp` **workflows** for their
`HTML5`, `JS`, and `CSS3` **_apps_** knows what I am talking about. Paths to
images, which are related to the structure, are so important as well. Proper
structure in both your `React App` and in your `webpack.config.js` also ensures
that **Webpack** will **_correctly_** **move** your **_images_** into your
`dist` **folder**, and provide the **_correct_** PATHS.

In order to be able to **_import_** **images** into **_React components_**, you
have to make sure that **_locally_** the **images** **_reside_** within the
**same** **_parent directory_** as the components OR that the images are
exported from the directory they reside in so they can be imported into any of
your components. In my `Portfolio React` **application**, my **components
folder** **_looks like_** this:

```shell
components/
    About.js
    Calendar.js
    Contact.js
    Footer.js
    Header.js
    Home.js
    Skills.js
```

It **_resides_** in `src`:

```shell
src/
    -components/
        About.js
        Calendar.js
        Contact.js
        Footer.js
        Header.js
        Home.js
        Skills.js
        Work.js
```

And this is what my `images` **folder** looks like:

```shell
images/
    -icons/
        footerGithub.png
        footerGoogle.png
        footerLinkedin.png
        footerTwitter.png
        github.svg
        googleplus.svg
        linkedin.svg
        twitter.svg
    -resume/
        mdcResume8217.pdf
    index.js
    profileSmall.png
```

However, my `images` **directory** **_does not_** **reside** in the **_same
directory_** as my **components**, the **components** **_directory_**. It
**resides** in the `root` **directory**.

Why? Because this was the only way in which `webpack` would exactly replicate my
`image` **directory structure**. This is what I have in my
`webpack-prod.config.js`:

```js
module: {
    rules: [
        {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]-[hash:8].[ext]'
                    },
                },
            ]
        },
    ],
},
```

The `name` **property** refers to the `name` of an `image` **file**. `[path]`
**_refers to_** the **path** to that image file STARTING with its `root`
**directory**. I use this term loosely, as **_technically_** the `root`
**directory** of an **_application_** is its **topmost directory**. In my
example here, it would be `portfolio-react`. However, the `src` **directory**,
where `webpack` **_extracts_** the **data** it needs to bundle the files our
applications depend on to run, and then the rest of the path to a file is what
is replicated in our **_destination_** **folder** in **_production_**, i.e.
`dist`. So if the path to an image in development was `src/images/img.jpg`, it
would replicate to the `dist` directory in the same way but with `dist` as the
topmost directory: `dist/src/images/img.jpg`. That just would be too weird and
would not work!

By placing the `images` **directory** outside of `src` in **_root_**, the
**images directory** was **_replicated_** in the **following** way in `dist`:

```shell
dist/
    -images/
        profileSmall-0688089a.png
        -icons/
            footerGithub-8d086876.png
            footerGoogle-c7c39c36.png
            footerLinkedin-9a80860c.png
            footerTwitter-cf5ffa5b.png
            github-ff66eb8e.svg
            googleplus-603de14e.svg
            linkedin-bc8e55bb.svg
            twitter-93a9fd6a.svg
        -resume/
            mdcResume8217-17c81764.pdf
    -src/
        favicon-08080867.ico
```

I created a little `script` in my `package.json` to **_get rid of_** the `src`
**folder** **_after_** **running a new build**:

```js
"cleanSrc": "rimraf dist/src",
```

I already had the `rimraf` **npm package** installed and use it for my
`"clean": "rimraf dist"` **script**, so it was easy to create another one.

There is a last and crucial step that was needed in order for the loading of my
images to work properly in my `Portfolio React` **app**, since the components
and the images directory did not reside in the same directory. I created an
`index.js` file within the images directory. It consisted of exporting all files
within the `images` **directory** and any of its `sub-directories`:

```js
export profileSmall from './profileSmall.png'

export mdcResume8217 from './resume/mdcResume8217.pdf'

export linkedin from './icons/linkedin.svg'
export googleplus from './icons/googleplus.svg'
export github from './icons/github.svg'
export twitter from './icons/twitter.svg'

export footerTwitter from './icons/footerTwitter.png'
export footerGithub from './icons/footerGithub.png'
export footerGoogle from './icons/footerGoogle.png'
export footerLinkedin from './icons/footerLinkedin.png'
```

If I hadn’t done this last step, my images would not have appeared! I also would
not have been able to import them into my components in the following (and
proper) way:

```jsx
import React from 'react'
import Typist from 'react-typist'

import linkedin from '../../images/icons/linkedin.svg'
import googleplus from '../../images/icons/googleplus.svg'
import github from '../../images/icons/github.svg'
import twitter from '../../images/icons/twitter.svg'

export const Contact = () => (
    <div className="Contact-content">
        <div className="contact-social">
            <h2 className="title-social">Follow me</h2>
            <ul>
                <li>
                    <a href="https://twitter.com/letsbsocial1" target="_blank">
                        <img
                            className="twitter"
                            src={twitter}
                            width="40"
                            alt="twitter"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/interglobalmedia"
                        target="_blank"
                    >
                        <img
                            className="github"
                            src={github}
                            width="40"
                            alt="github"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://plus.google.com/u/0/110861192597778984723"
                        target="_blank"
                    >
                        <img
                            className="google-plus"
                            src={googleplus}
                            width="40"
                            alt="google plus"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/mariacampbell/"
                        target="_blank"
                    >
                        <img
                            className="linkedin"
                            src={linkedin}
                            width="40"
                            alt="linkedin"
                        />
                    </a>
                </li>
            </ul>
            <div className="follow">
                <li>
                    <a href="https://medium.com/@letsbsocial1" target="_blank">
                        Medium
                    </a>
                </li>
                <br />
                <li>
                    <a href="http://www.mariadcampbell.com/" target="_blank">
                        Dev. Blog
                    </a>
                </li>
                <li>
                    <a
                        href="http://interglobalmedianetwork.com/"
                        target="_blank"
                    >
                        co. blog
                    </a>
                </li>
            </div>
            <div className="email">
                <h2 className="title-social">Email</h2>
                <li>
                    <a href="mailto:interglobalmedia@gmail.com">
                        interglobalmedia@gmail.com
                    </a>
                </li>
            </div>
            <div className="contribute">
                <h2 className="title-social">Contributor to</h2>
                <li>
                    <a href="https://blog.hellojs.org/" trget="_blank">
                        hello.js
                    </a>
                </li>
                <br />
                <li>
                    <a href="https://dev.to/letsbsocial1" target="_blank">
                        The Practical Dev
                    </a>
                </li>
            </div>
        </div>
    </div>
)
```

And presto! You have structured your **React** **_application_** in such a way
that **React** **_correctly interprets_** your **image** **_files_**. This
**_ensures_** that you can **import** them **into** your **_components_**. AND
you have successfully configured your `webpack-dev.js` and
`webpack-prod.config.js` so that it **_loads_** all your **images** and
**image** **_types_** **correctly** into your **React application**’s
`development` AND `production` **_builds_**.

### Related Resources:

-   [Portfolio React App on Github](https://github.com/interglobalmedia/portfolio-react-first-edition)

-   [webpack url-loader](https://webpack.js.org/loaders/url-loader/)

-   [webpack file-loader](https://webpack.js.org/loaders/file-loader/)
