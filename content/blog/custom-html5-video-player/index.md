---
title: 'Creating a Custom HTML5 Video Player And The Shadow DOM'
image: shadow_dom.jpg
description:
    Today I completed a Custom HTML5 Video Player, including making the video go
    full-screen.
date: '2017-01-04'
tags:
    [
        'fullscreen-api',
        'html5-video',
        'cross-browser-issues',
        'cascading-stylesheets',
        'shadow-dom',
        'user-agent-stylesheets',
        'pseudo-elements',
        'html5',
        'javascript',
    ]
categories: ['front-end-development']
author: 'Maria D. Campbell'
---

So today I completed a `Custom HTML5 Video Player` **project**, including making
the video go `full-screen`. I knew going in that there were cross-browser
issues/bugs with the element, so I was very interested in finding out what would
happen when I made the video go full-screen. Low and behold, when I first added

```js
function toggleFullScreen() {
    // toggle between full-screen and normal-screen mode
    if (video.requestFullscreen) {
        video.requestFullscreen()
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen()
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen()
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen()
    }
}
```

(minus `ms.RequestFullscreen` which was added later), I saw that the
`custom styling` was **_nowhere to be seen_**! So I googled the issue. It had to
do with something called the `Shadow DOM`. I came across this terminology in a
very helpful article on the topic of making your custom HTML5 video player
styling viewable in full-screen mode. It was entitled
[Hiding Native HTML5 Video Controls in Full-Screen Mode](https://css-tricks.com/custom-controls-in-html5-video-full-screen/).
**_BTW_**, the `JavaScript code` **_above_** is part of the `Fullscreen API`.
According to `MDN`, the
[Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)

> provides an “easy” way for web content to be presented using the user’s entire
> screen. The API lets you easily direct the browser to make an element and its
> children, if any, occupy the fullscreen, eliminating all browser user
> interface and other applications from the screen for the duration.

The myth that virtually full cross-browser compatibility exists, is still far
from being a reality, especially when it comes to **_newer_** **features** or
**elements**. They are very slow to catch up! This includes the `HTML5`
`<video>` **tag**. Although I must say, it’s **not so** **_“new”_** anymore!
According to [Wikepedia](https://en.wikipedia.org/wiki/HTML5_video), `Opera`
**_first proposed_** the `element` in `February 2007`. It **_appears_** in a
[W3C Working Draft](https://www.w3.org/TR/2011/WD-html5-20110113/video.html)
from `January 3, 2011`.

**_Including_** the `controls attribute` in the `<video>` **tag**
(unfortunately) enables the **_browser’s_** own `user interface` for
`controlling playback`. Luckily, it is not needed for `<video>`
**functionality** and from my own experience, I encourage omitting it if you
want to **_customize_** your **player**!

The `<video>` **video format browser support** **_differs_** from `browser` to
`browser` (no kidding), so a `web page` may **_provide a video_** in
`multiple formats`. For other features,
[browser-sniffing](https://en.wikipedia.org/wiki/Browser_sniffing) is often
used, via [modernizr.js](https://modernizr.com/), for example (I use it all the
time in my workflows), but even though it is a powerful tool, it doesn’t provide
all fixes or answers. According to
[Wikipedia](https://en.wikipedia.org/wiki/HTML5_video)(and it’s true),

> any web developer’s knowledge of browsers will inevitably be incomplete or not
> up-to-date.

Another issue is that the
[HTML5 specification](https://www.w3.org/TR/html/semantics-embedded-content.html#the-video-element)
does not **_specify_** which `video` and `audio` **formats** **_browsers_**
**should support**.

-   [Most important](https://en.wikipedia.org/wiki/HTML5_video),

> User agents are free to support any video formats they feel are appropriate,
> but content authors cannot assume that any video will be accessible by all
> complying user agents, since user agents have no minimal set of video and
> audio formats to support.

In addition, and as I mention earlier, browsers sneak in their own set of “user
agent stylesheets” here and there, that may override or at least significantly
affect our own custom styling.

So what are user agent stylesheets? Most designers/front end developers are
somewhat familiar with the term, and have addressed it in their CSS and to a
certain extent in their Front End JavaScript Development (as here), but few have
dug deep. A `User Agent Stylesheet` **_refers to_** the `default style` that a
**browser** **_applies_** to `web pages`. **_Most of the time_** it is
**overwritten** by the **_designer_** or **_developer’s_** `custom stylesheet`,
but **_NOT_** **always**. And that’s where the `Shadow DOM` **comes to play**
and **_wreaks havoc_**.

So what **_IS_** that `infernal` **Shadow DOM**? It’s a **_subtree_** of `DOM`
**elements** **_generated_** by the **browser**. It’s a **bunch of** `DOM`
**elements**, the ones we are already familiar with, like `<div>`, `<span>`,
`<body>`, `<video>`, etc., that are **_added_** by the **browser** as a
`document fragment`. They are **_rendered_** on the **page** **_just like_** the
**main** `DOM` **tree**. **_However_**, it is a `different document` which is
**_merged_** **with** the **main** `DOM`.

Determining **_pseudo elements_** **associated with** the `Shadow DOM` is
**_tricky_**. So how do you **_determine_** `which pseudo elements` are
**_associated with_** the `Shadow DOM` so that you can `hide` the **browser
styling** and `re-emerge` **_your own_**? Turn on the `Show Shadow DOM`
**_option_** in the `DevTools` **settings**!

To **turn on** the `Show Shadow DOM` **_option_**, go to`DevTools Settings` and
**_select_** the `General` **tab**. Then **_select_** the `Show Shadow DOM`
**option**. **_Close out_** of `DevTools` and then **_re-open_** **it**.

**_Next_**, **right-click** on the **_element_** you want to **inspect** (i.e.,
`video`), and **open it** up **_with_** the `drop-down arrow` to the **_left
of_** **it**. In the case of the `video player`, I started with the
`video element`’s `div` **container** **_holding_** the `.player` **class**.
**_No_** `Shadow DOM` **there**, so I continued to the **_next element_**, the
`<video>` **tag** **_itself_**. When I opened it up, `#shadow-root(user-agent)`
appeared.

There were a whole bunch of `pseudo elements` in there. They seemed to go on and
on! Based on what I had read in the
[Hiding Native HTML5 Video Controls in Full-Screen Mode](https://css-tricks.com/custom-controls-in-html5-video-full-screen/)
**article**, **_at first_** I thought that just taking into account the
outermost pseudo elements would be enough:

```css
/* hide the default Chrome video player styling */

video::-webkit-media-controls-overlay-enclosure {
    display: none !important;
}

video::-webkit-media-controls-enclosure {
    display: none !important;
}

video::-webkit-media-controls {
    display: none !important;
}
```

**_Well_**, **this** `CSS` **_did seem_** to **get rid of** the **_default_**
`video player styling` in `full-screen mode`, but the `custom styling` was
**_nowhere to be seen_**. That’s **_because of_** a very strange `z-index` going
on in the `-webkit-media-controls` `pseudo element`:

```css
video:-webkit-full-screen,
audio:-webkit-full-screen {
    background-color: transparent;
    position: relative;
    left: 0px;
    top: 0px;
    min-width: 0px;
    max-width: none;
    min-height: 0px;
    max-height: none;
    width: 100%;
    height: 100%;
    display: block;
    transform: none;
    margin: 0px !important;
    flex: 1 1 0% !important;
}

/* user agent stylesheet */
:-webkit-full-screen {
    background-color: white;
    z-index: 2147483647;
}
```

**_However_**, you **_can’t see_** **all this detailed information** unless you
**_first make_** the `video player` go into `full-screen mode`, **open up**
`DevTools`, select the `<video>` **tag** in the `DOM elements` **tab**, and
check out the **_corresponding_** `styles` within the `styles` **tab** of the
`Console Dock` **side**. So it is this **_crazy_** `z-index` that **_causes_**
your `custom styling` to **_disappear_** in `full-screen mode`! In order to
bring your styling to the top, you have to **_add_** a `z-index > 2147483647` (I
chose `2147483648`) to the elements you want to bring to the forefront. In my
case it was the `custom player controls` that **_disappeared_**, so I added
`z-index: 2147483648;` to the **container** which **_houses_** the
`video player controls` and has the `class` of `.player__controls`.

This move brought my `custom control styling` **_to the forefront_** in `Chrome`
alright, but the `styling` was **_all screwed up_**. I tried everything to make
it just like in the regular screen mode, but to no avail. Then I played around
with changing the **_styling_** in the `DevTools style tab` and found that the
only thing I had to do was add `left: 0` **property** to `.player__controls`
since it was set to `position: absolute;`. That did the trick!

But I **_still_** **had** `Safari` and `Firefox` to **_deal with_**. `Safari`
showed all my custom styling correctly, but it still showed the
`default video player controls` **_styling_** **as well**. I went back into the
`Shadow DOM` to see what could possibly be the `culprit(s)`. Again, I played
around with the styles checking and un-checking various properties and then
going into the `Shadow DOM` in the `DOM elements` **tab** of the `Console` to
see if there were any more `pseudo elements` I should deal with.

I **_hadn’t gone deep enough into_** the `Shadow DOM` for `Safari`! Evidently,
it **_wasn’t as_** **forgiving** or **lenient** as `Chrome`. This is what I
**had to** **_add_** to my `CSS` in order to **_get rid of_** `Safari’s`
**_default styling_** **completely**:

```css
/*  Needed to hide player controls in Safari Only */
video::-webkit-media-controls-panel {
    display: none !important;
}

video::-webkit-media-controls-play-button {
    display: none !important;
}

video::-webkit-media-controls-current-time-display {
    display: none !important;
}

video::-webkit-media-controls-time-remaining-display {
    display: none !important;
}

video::-webkit-media-controls-timeline {
    display: none !important;
}

video::-webkit-media-controls-mute-button {
    display: none !important;
}

video::-webkit-media-controls-volume-slider {
    display: none !important;
}

video::-webkit-media-controls-fullscreen-button {
    display: none !important;
}

video::-internal-media-controls-download-button {
    display: none !important;
}
```

I am **_yet to_** **create a fix** for `Firefox`. There, I **_see no_**
`default control styling`, but then I **_see no_** `video player controls`,
default or otherwise, on the screen **when in** `full-screen mode`! I know that
there must be a `fix` with `CSS` to **make them** **_re-appear_**, because I had
a **_similar issue_** with `range sliders` in `Firefox` in another project. I
will update the `Wiki` when I have figured it out!

**Firefox update:** I **_got rid of_** the `user agent styles` by **setting**
**_all_** the `Shadow DOM` **pseudo elements** to `display: none !important;`
and then I went back and tried something I had originally done with `Safari` and
`Chrome` (which did NOT work). It was the following:

```js
function toggleFullScreen() {
    // toggle between full-screen and normal-screen mode
    if (video.requestFullscreen) {
        video.requestFullscreen()
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen()
    } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen()
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen()
    }
}
```

Remember this `code snippet` I **introduced** at the **_beginning of_** the
`Wiki`? **Instead of** **_setting_** the `RequestFullScreen` **property** on
`video`, I **_set it_** on `player`, the `element` which houses the `video`
itself. Guess what? The `custom controls` **_re-appeared_**. The only thing is
that the rest of the player appeared too in some form. **_Not really_**, but a
`little skeletal transparent frame` **_encapsulates_** the `video` **now**. I
just have to find a way to tweak it! Almost completely there, but **_NOT_**
**just yet**. Check back for more!

## Firefox and Full-Screen Mode HTML5 Video:

So I **_finally_** `figured it out` with **_Firefox_**. It was both a **_similar
process_** to `Chrome` and `Safari` (`webkit`), **_but_** a **whole other
animal** at the **_same time_**. And I **_discovered_** a few little other
things along the way, **including** about my `JavaScript` **code**…

There is **_also_** a `Shadow DOM` in the `Firefox` **_browser_**. However, it
is a more recent addition to `Firefox`. Prior to 2014, there was **_no_**
`Shadow DOM` in `Firefox`. I don’t know (yet) how good or bad that was, but I
certainly had to deal with it now!

The **_process_** to **turn on** the `Shadow DOM` in `Firefox` is
**_straightforward_**, but **_vastly different from_** `Chrome`. In order to
make it **appear** **_in the console_**, you have to **type** `about:config` in
the `Firefox` **address bar**, and then then **_look for_**
`dom.webcomponents.enabled` **selection** in the `dropdown menu` and **_double
click_** the `property` to `toggle it` to `true`.

The following is the `CSS` I **_added_** to my `stylesheet` to `disable` the
`disablement` of my `custom player controls` **styling** in `Firefox`. The
`pseudo elements` in `Firefox` did quite a number on my
`customized video controls`!

```css
/* Firefox Shadow DOM Fix */
*::-moz-list-bullet,
*::-moz-list-number {
    display: none !important;
}

*::-moz-meter-bar {
    display: none !important;
}

:-moz-full-screen:not(:root)::backdrop {
    display: none !important;
}

*::backdrop {
    display: none !important;
}

:fullscreen:not(:root) {
    display: none !important;
}
```

But **_that_** **was not enough**. I wanted the `video` to **_cover_** the
**whole screen**, and **_consistently_** across `Chrome`, `Firefox`, and
`Safari`. `Chrome` and `Safari` were pretty much okay, **_but_** `Firefox`’s
`video image` **seemed** **_contained_**. **Something** in the
`Shadow DOM/user agent stylesheet` was **_preventing it_** from **covering** the
**_whole screen_**! I went back into my stylsheet to see what might be causing
the issue. It was not readily apparent to me in the Console. Upon
**_inspecting_** my `CSS`, I **_immediately realized_** that a `width` of `100%`
had been **_applied_** to the `.viewer` **class** which contained the `<video>`
**tag**, but **_no height_**! **_Of course_** that would **_at least be_** a
**partial cause** for the issue in at least one of the browsers (argh). So I did
the following:

```css
/* Because video needed a defined hieght in order for object-fit: fill to work. */

video {
    height: 100%;
    object-fit: fill;
}
```

But what is that `object-fit: fill` **property** I have going on over there, you
may ask. It is a **_property_** that I have **only seen appear** in the
`user agent stylesheet`, but it does what it sounds like. In his article
entitled
[Exploring Object Fit](https://hacks.mozilla.org/2015/02/exploring-object-fit/),
`Chris Mills`, a **_developer_** at `MDN`, states

> On web documents, a common problem concerns the display of different sized
> images (or videos) in the same place. Perhaps you are writing a dynamic
> gallery app that accepts user submissions. You can’t guarantee that everyone
> will upload images of exactly the same aspect ratio, so what do you do?

You do things like `object-fit` and `object-position`! I have only seen it in
user agent stylesheets, but because of the delightful cross-browser issues I
encountered with the `<video>` element, I found that it can be pretty handy.
Especially (of course), when dealing with FireFox! Something called the
[CSS Image Values and Replaced Content](https://drafts.csswg.org/css-images/)
`module` **_provides_** the **property** `object-fit`, which **_solves_** such
**problems**, and `object-position`, which **_sets_** the **horizontal** and
**vertical** **_position_** of the **content** **_inside_** the `element`.
_FYI_, these elements have pretty decent support across modern browsers, with
the exception of `IE`.

Initially I thought that `object-fit: cover` would do the trick of overriding
`object-fit: contain` `user agent style` which managed not to be disabled in
Firefox, but it did not. I tried using `-moz` **prefixes** on the `video`
**element** and then **_setting_** the o`bject-fit: cover` **property** on it as
a hack, but it didn’t work. Then I came across Chris’ article, and he explains

> Overriding a `video’s` `aspect ratio` with `object-fit: fill` - it is also
> possible to take a video and force it to change aspect ratio. Maybe some of
> your content editor’s videos have a broken aspect ratio, and you want to fix
> them all on the fly, in one easy fell swoop? … A broken aspect ratio … would
> look terrible: the video would appear letter-boxed, since the element always
> tries to maintain the source file’s intrinsic aspect ratio. We could fix this
> by applying `object-fit: fill`. This overrides the video’s intrinsic
> `aspect ratio`, forcing it to completely fill the element so it displays
> correctly.

So that’s what I did. It’s just that I had to apply it directly to the `<video>`
**element**. **_No prefixing_** **there**! Now I got my `custom video player`
**styling** **_consistent_** **across** the `Chrome`, `Safari`, and `Firefox`
**_browsers_**. The **_only little nagging thing_** **taking place** in
`Firefox` and **not in** `Chrome` or `Safari`, is the appearance of a very thin
transparent frame around the edge of the full screen. Honestly, it looks nice
and centered and barely visible, but there is always the chance that a client or
employer might want exact consistency. I still have to figure that one out if
not just for the sake of self edification.

There is one last issue I’d like to address. The `timeupdate` vs
`progress video event`. They **_do basically do the same thing_**, but their
**behavior** and **interaction** with the **_browser_** is definitely _NOT_ the
**same**! I used `timeupdate` in my **_code_**. However, I found that
`timeupdate` **_occasionally_** (or not so occasionally) **throws** an
**_error_** in the `Chrome JS Console`:

```js
https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/3967/7/194837908/652333414.mp4?token=586c92ea_0x3db2247f5b1ab2e32075287b04bff0fa84e1a183 Failed to load resource: net::ERR_CONTENT_LENGTH_MISMATCH
```

I was **_initially_** **somewhat bothered** by it, and decided to `switch` to
`using` the `progress event` in my `event listener` for the `video player’s`
**progress bar**. But it **_did a funny thing_** in Firefox … the `progress bar`
**_stopped_** `progressing`! So I **_switched back_** to `timeupdate`, and
everything went **_back to normal_** in `Firefox`. The more
`Front End Development` you do, the more you will find what a **pain in butt**
Firefox can be! Below is the code for the event listener in question:

```js
// can also use progress event as well.
video.addEventListener('timeupdate', handleProgress)
```

To view the `complete source code` for the **_project_**, you can visit my
[Custom HTML5 Video Player repository](https://github.com/interglobalmedia/custom-html5-video-player/).
To learn more about the **_quirkiness_** of the `timeupdate event`, read the
article
[Syncing Content With HTML5 Video](https://www.smashingmagazine.com/2011/03/syncing-content-with-html5-video/).
I have to go back and study it more carefully myself.

If you want to **_learn more about_** the `Shadow DOM`(and a lot of other good
stuff), I would advise signing up for WesBos’ (free)
[JavaScript30](https://javascript30.com/) course. You will learn a lot whether
you are a **_newbie_** to **development** or **_NOT_**!

### Helpful links:

-   [Pseudo elements, promise inspection, raw headers, and much more – Firefox Developer Edition 36](https://hacks.mozilla.org/2015/02/exploring-object-fit/)

-   [CSS object-fit is background-size:cover; for video!](http://www.mariadcampbell.com/2017/01/04/custom-html5-video-player/)

-   [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

-   [Hiding Native HTML5 Video Controls In Full-Screen Mode](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

-   [HTML5 Video](https://en.wikipedia.org/wiki/HTML5_video)

-   [W3C HTML5.1 Specification](https://www.w3.org/TR/html/)

-   [Using HTML5 Audio And Video](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

-   [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)

-   [Element.requestFullscreen()](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen)

-   [Javascript request fullscreen is unreliable](https://stackoverflow.com/questions/9454125/javascript-request-fullscreen-is-unreliable)

-   [Fullscreen API](https://davidwalsh.name/fullscreen)

-   [Fullscreen API Living Standard — Last Updated 16 December 2016](https://fullscreen.spec.whatwg.org/)

-   [Syncing Content With HTML5 Video](https://www.smashingmagazine.com/2011/03/syncing-content-with-html5-video/)

To view my `HTML5 Custom Video Player`, please visit the
[HTML5 Custom Video Player repository](https://github.com/interglobalmedia/custom-html5-video-player/).
