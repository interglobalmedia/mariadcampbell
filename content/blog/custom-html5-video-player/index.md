---
title: "Creating a Custom HTML5 Video Player And The Shadow DOM"
image: shadow_dom.jpg
description: Today I completed a Custom HTML5 Video Player, including making the video go full-screen.
date: '2017-01-04'
tags: ["fullscreen-api", "html5-video", "cross-browser-issues", "cascading-stylesheets", "shadow-dom", "user-agent-stylesheets", "pseudo-elements", "html5", "javascript"]
author: "Maria D. Campbell"
---

So today I completed a `Custom HTML5 Video Player` **project**, including  making the video go `full-screen`. I knew going in that there were cross-browser issues/bugs with the element, so I was very interested in finding out what would happen when I made the video go full-screen. Low and behold, when I first added

```js
function toggleFullScreen() {

// toggle between full-screen and normal-screen mode
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    } 
}
```

(minus `ms.RequestFullscreen` which was added later), I saw that the `custom styling` was ***nowhere to be seen***! So I googled the issue. It had to do with something called the `Shadow DOM`. I came across this terminology in a very helpful article on the topic of making your custom HTML5 video player styling viewable in full-screen mode. It was entitled [Hiding Native HTML5 Video Controls in Full-Screen Mode](https://css-tricks.com/custom-controls-in-html5-video-full-screen/). ***BTW***, the `JavaScript code` ***above*** is part of the `Fullscreen API`. According to `MDN`, the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)

> provides an “easy” way for web content to be presented using the user’s entire screen. The API lets you easily direct the browser to make an element and its children, if any, occupy the fullscreen, eliminating all browser user interface and other applications from the screen for the duration.

The myth that virtually full cross-browser compatibility exists, is still far from being a reality, especially when it comes to ***newer*** **features** or **elements**. They are very slow to catch up! This includes the `HTML5` `<video>` **tag**. Although I must say, it’s **not so** ***“new”*** anymore! According to [Wikepedia](https://en.wikipedia.org/wiki/HTML5_video), `Opera` ***first proposed*** the `element` in `February 2007`. It ***appears*** in a [W3C Working Draft](https://www.w3.org/TR/2011/WD-html5-20110113/video.html) from `January 3, 2011`.

***Including*** the `controls attribute` in the `<video>` **tag** (unfortunately) enables the ***browser’s*** own `user interface` for `controlling playback`. Luckily, it is not needed for `<video>` **functionality** and from my own experience, I encourage omitting it if you want to ***customize*** your **player**!

The `<video>` **video format browser support** ***differs*** from `browser` to `browser` (no kidding), so a `web page` may ***provide a video*** in `multiple formats`. For other features, [browser-sniffing](https://en.wikipedia.org/wiki/Browser_sniffing) is often used, via [modernizr.js](https://modernizr.com/), for example (I use it all the time in my workflows), but even though it is a powerful tool, it doesn’t provide all fixes or answers. According to [Wikipedia](https://en.wikipedia.org/wiki/HTML5_video)(and it’s true),

> any web developer’s knowledge of browsers will inevitably be incomplete or not up-to-date.

Another issue is that the [HTML5 specification](https://www.w3.org/TR/html/semantics-embedded-content.html#the-video-element) does not ***specify*** which `video` and `audio` **formats** ***browsers*** **should support**.

+ [Most important](https://en.wikipedia.org/wiki/HTML5_video),

> User agents are free to support any video formats they feel are appropriate, but content authors cannot assume that any video will be accessible by all complying user agents, since user agents have no minimal set of video and audio formats to support.

In addition, and as I mention earlier, browsers sneak in their own set of “user agent stylesheets” here and there, that may override or at least significantly affect our own custom styling.

So what are user agent stylesheets? Most designers/front end developers are somewhat familiar with the term, and have addressed it in their CSS and to a certain extent in their Front End JavaScript Development (as here), but few have dug deep. A `User Agent Stylesheet` ***refers to*** the `default style` that a **browser** ***applies*** to `web pages`. ***Most of the time*** it is **overwritten** by the ***designer*** or ***developer’s*** `custom stylesheet`, but ***NOT*** **always**. And that’s where the `Shadow DOM` **comes to play** and ***wreaks havoc***.

So what ***IS*** that `infernal` **Shadow DOM**? It’s a ***subtree*** of `DOM` **elements** ***generated*** by the **browser**. It’s a **bunch of** `DOM` **elements**, the ones we are already familiar with, like `<div>`, `<span>`, `<body>`, `<video>`, etc., that are ***added*** by the **browser** as a `document fragment`. They are ***rendered*** on the **page** ***just like*** the **main** `DOM` **tree**. ***However***, it is a `different document` which is ***merged*** **with** the **main** `DOM`.

Determining ***pseudo elements*** **associated with** the `Shadow DOM` is ***tricky***. So how do you ***determine*** `which pseudo elements` are ***associated with*** the `Shadow DOM` so that you can `hide` the **browser styling** and `re-emerge` ***your own***? Turn on the `Show Shadow DOM` ***option*** in the `DevTools` **settings**!

To **turn on** the `Show Shadow DOM` ***option***, go to` DevTools Settings` and ***select*** the `General` **tab**. Then ***select*** the `Show Shadow DOM` **option**. ***Close out*** of `DevTools` and then ***re-open*** **it**.

***Next***, **right-click** on the ***element*** you want to **inspect** (i.e., `video`), and **open it** up ***with*** the `drop-down arrow` to the ***left of*** **it**. In the case of the `video player`, I started with the `video element`’s `div` **container** ***holding*** the `.player` **class**. ***No*** `Shadow DOM` **there**, so I continued to the ***next element***, the `<video>` **tag** ***itself***. When I opened it up, `#shadow-root(user-agent)` appeared.

There were a whole bunch of `pseudo elements` in there. They seemed to go on and on! Based on what I had read in the [Hiding Native HTML5 Video Controls in Full-Screen Mode](https://css-tricks.com/custom-controls-in-html5-video-full-screen/) **article**, ***at first*** I thought that just taking into account the outermost pseudo elements would be enough:

```css
/* hide the default Chrome video player styling */

video::-webkit-media-controls-overlay-enclosure {
    display:none !important;
}

video::-webkit-media-controls-enclosure {
    display:none !important;
}

video::-webkit-media-controls {
    display:none !important;
}
```

***Well***, **this** `CSS` ***did seem*** to **get rid of** the ***default*** `video player styling` in `full-screen mode`, but the `custom styling` was ***nowhere to be seen***. That’s ***because of*** a very strange `z-index` going on in the `-webkit-media-controls` `pseudo element`:

```css
video:-webkit-full-screen, audio:-webkit-full-screen {
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

***However***, you ***can’t see*** **all this detailed information** unless you ***first make*** the `video player` go into `full-screen mode`, **open up** `DevTools`, select the `<video>` **tag** in the `DOM elements` **tab**, and check out the ***corresponding*** `styles` within the `styles` **tab** of the `Console Dock` **side**. So it is this ***crazy*** `z-index` that ***causes*** your `custom styling` to ***disappear*** in `full-screen mode`! In order to bring your styling to the top, you have to ***add*** a `z-index > 2147483647` (I chose `2147483648`) to the elements you want to bring to the forefront. In my case it was the `custom player controls` that ***disappeared***, so I added `z-index: 2147483648;` to the **container** which ***houses*** the `video player controls` and has the `class` of `.player__controls`.

This move brought my `custom control styling` ***to the forefront*** in `Chrome` alright, but the `styling` was ***all screwed up***. I tried everything to make it just like in the regular screen mode, but to no avail. Then I played around with changing the ***styling*** in the `DevTools style tab` and found that the only thing I had to do was add `left: 0` **property** to `.player__controls` since it was set to `position: absolute;`. That did the trick!

But I ***still*** **had** `Safari` and `Firefox` to ***deal with***. `Safari` showed all my custom styling correctly, but it still showed the `default video player controls` ***styling*** **as well**. I went back into the `Shadow DOM` to see what could possibly be the `culprit(s)`. Again, I played around with the styles checking and un-checking various properties and then going into the `Shadow DOM` in the `DOM elements` **tab** of the `Console` to see if there were any more `pseudo elements` I should deal with.

I ***hadn’t gone deep enough into*** the `Shadow DOM` for `Safari`! Evidently, it ***wasn’t as*** **forgiving** or **lenient** as `Chrome`. This is what I **had to** ***add*** to my `CSS` in order to ***get rid of*** `Safari’s` ***default styling*** **completely**:

```css
/*  Needed to hide player controls in Safari Only */
video::-webkit-media-controls-panel {
    display:none !important;
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

I am ***yet to*** **create a fix** for `Firefox`. There, I ***see no*** `default control styling`, but then I ***see no*** `video player controls`, default or otherwise, on the screen **when in** `full-screen mode`! I know that there must be a `fix` with `CSS` to **make them** ***re-appear***, because I had a ***similar issue*** with `range sliders` in `Firefox` in another project. I will update the `Wiki` when I have figured it out!

**Firefox update:** I ***got rid of*** the `user agent styles` by **setting** ***all*** the `Shadow DOM` **pseudo elements** to `display: none !important;` and then I went back and tried something I had originally done with `Safari` and `Chrome` (which did NOT work). It was the following:

```js
function toggleFullScreen() {

// toggle between full-screen and normal-screen mode
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}
```

Remember this `code snippet` I **introduced** at the ***beginning of*** the `Wiki`? **Instead of** ***setting*** the `RequestFullScreen` **property** on `video`, I ***set it*** on `player`, the `element` which houses the `video` itself. Guess what? The `custom controls` ***re-appeared***. The only thing is that the rest of the player appeared too in some form. ***Not really***, but a `little skeletal transparent frame` ***encapsulates*** the `video` **now**. I just have to find a way to tweak it! Almost completely there, but ***NOT*** **just yet**. Check back for more!

## Firefox and Full-Screen Mode HTML5 Video:

So I ***finally*** `figured it out` with ***Firefox***. It was both a ***similar process*** to `Chrome` and `Safari` (`webkit`), ***but*** a **whole other animal** at the ***same time***. And I ***discovered*** a few little other things along the way, **including** about my `JavaScript` **code**…

There is ***also*** a `Shadow DOM` in the `Firefox` ***browser***. However, it is a more recent addition to `Firefox`. Prior to 2014, there was ***no*** `Shadow DOM` in `Firefox`. I don’t know (yet) how good or bad that was, but I certainly had to deal with it now!

The ***process*** to **turn on** the `Shadow DOM` in `Firefox` is ***straightforward***, but ***vastly different from*** `Chrome`. In order to make it **appear** ***in the console***, you have to **type** `about:config` in the `Firefox` **address bar**, and then then ***look for*** `dom.webcomponents.enabled` **selection** in the `dropdown menu` and ***double click*** the `property` to `toggle it` to `true`.

The following is the `CSS` I ***added*** to my `stylesheet` to `disable` the `disablement` of my `custom player controls` **styling** in `Firefox`. The `pseudo elements` in `Firefox` did quite a number on my `customized video controls`!

```css
/* Firefox Shadow DOM Fix */
*::-moz-list-bullet, *::-moz-list-number {
    display:none !important;
}

*::-moz-meter-bar {
    display:none !important;
}

:-moz-full-screen:not(:root)::backdrop {
    display:none !important;
}

*::backdrop {
    display:none !important;
}

:fullscreen:not(:root) {
    display:none !important;
}
```

But ***that*** **was not enough**. I wanted the `video` to ***cover*** the **whole screen**, and ***consistently*** across `Chrome`, `Firefox`, and `Safari`. `Chrome` and `Safari` were pretty much okay, ***but*** `Firefox`’s `video image` **seemed** ***contained***. **Something** in the `Shadow DOM/user agent stylesheet` was ***preventing it*** from **covering** the ***whole screen***! I went back into my stylsheet to see what might be causing the issue. It was not readily apparent to me in the Console. Upon ***inspecting*** my `CSS`, I ***immediately realized*** that a `width` of `100%` had been ***applied*** to the `.viewer` **class** which contained the `<video>` **tag**, but ***no height***! ***Of course*** that would ***at least be*** a **partial cause** for the issue in at least one of the browsers (argh). So I did the following:

```css
/* Because video needed a defined hieght in order for object-fit: fill to work. */

video {
    height: 100%;
    object-fit: fill;
}
```

But what is that `object-fit: fill` **property** I have going on over there, you may ask. It is a ***property*** that I have **only seen appear** in the `user agent stylesheet`, but it does what it sounds like. In his article entitled [Exploring Object Fit](https://hacks.mozilla.org/2015/02/exploring-object-fit/), `Chris Mills`, a ***developer*** at `MDN`, states

> On web documents, a common problem concerns the display of different sized images (or videos) in the same place. Perhaps you are writing a dynamic gallery app that accepts user submissions. You can’t guarantee that everyone will upload images of exactly the same aspect ratio, so what do you do?

You do things like `object-fit` and `object-position`! I have only seen it in user agent stylesheets, but because of the delightful cross-browser issues I encountered with the `<video>` element, I found that it can be pretty handy. Especially (of course), when dealing with FireFox! Something called the [CSS Image Values and Replaced Content](https://drafts.csswg.org/css-images/) `module` ***provides*** the **property** `object-fit`, which ***solves*** such **problems**, and `object-position`, which ***sets*** the **horizontal** and **vertical** ***position*** of the **content** ***inside*** the `element`. *FYI*, these elements have pretty decent support across modern browsers, with the exception of `IE`.

Initially I thought that `object-fit: cover` would do the trick of overriding `object-fit: contain` `user agent style` which managed not to be disabled in Firefox, but it did not. I tried using `-moz` **prefixes** on the `video` **element** and then ***setting*** the o`bject-fit: cover` **property** on it as a hack, but it didn’t work. Then I came across Chris’ article, and he explains

> Overriding a `video’s` `aspect ratio` with ` object-fit: fill` - it is also possible to take a video and force it to change aspect ratio. Maybe some of your content editor’s videos have a broken aspect ratio, and you want to fix them all on the fly, in one easy fell swoop? … A broken aspect ratio … would look terrible: the video would appear letter-boxed, since the element always tries to maintain the source file’s intrinsic aspect ratio. We could fix this by applying `object-fit: fill`. This overrides the video’s intrinsic `aspect ratio`, forcing it to completely fill the element so it displays correctly.

So that’s what I did. It’s just that I had to apply it directly to the `<video>` **element**. ***No prefixing*** **there**! Now I got my `custom video player` **styling** ***consistent*** **across** the `Chrome`, `Safari`, and `Firefox` ***browsers***. The ***only little nagging thing*** **taking place** in `Firefox` and **not in** `Chrome` or `Safari`, is the appearance of a very thin transparent frame around the edge of the full screen. Honestly, it looks nice and centered and barely visible, but there is always the chance that a client or employer might want exact consistency. I still have to figure that one out if not just for the sake of self edification.

There is one last issue I’d like to address. The `timeupdate` vs `progress video event`. They ***do basically do the same thing***, but their **behavior** and **interaction** with the ***browser*** is definitely *NOT* the **same**! I used `timeupdate` in my ***code***. However, I found that `timeupdate` ***occasionally*** (or not so occasionally) **throws** an ***error*** in the `Chrome JS Console`:

```js
https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/3967/7/194837908/652333414.mp4?token=586c92ea_0x3db2247f5b1ab2e32075287b04bff0fa84e1a183 Failed to load resource: net::ERR_CONTENT_LENGTH_MISMATCH
```

I was ***initially*** **somewhat bothered** by it, and decided to `switch` to `using` the `progress event` in my `event listener` for the `video player’s` **progress bar**. But it ***did a funny thing*** in Firefox … the `progress bar` ***stopped*** `progressing`! So I ***switched back*** to `timeupdate`, and everything went ***back to normal*** in `Firefox`. The more `Front End Development` you do, the more you will find what a **pain in butt** Firefox can be! Below is the code for the event listener in question:

```js
// can also use progress event as well.
video.addEventListener('timeupdate', handleProgress);
```

To view the `complete source code` for the ***project***, you can visit my [Custom HTML5 Video Player repository](https://github.com/interglobalmedia/custom-html5-video-player/). To learn more about the ***quirkiness*** of the `timeupdate event`, read the article [Syncing Content With HTML5 Video](https://www.smashingmagazine.com/2011/03/syncing-content-with-html5-video/). I have to go back and study it more carefully myself.

If you want to ***learn more about*** the `Shadow DOM `(and a lot of other good stuff), I would advise signing up for WesBos’ (free) [JavaScript30](https://javascript30.com/) course. You will learn a lot whether you are a ***newbie*** to **development** or ***NOT***!

### Helpful links:

+ [Pseudo elements, promise inspection, raw headers, and much more – Firefox Developer Edition 36](https://hacks.mozilla.org/2015/02/exploring-object-fit/)

+ [CSS object-fit is background-size:cover; for video!](http://www.mariadcampbell.com/2017/01/04/custom-html5-video-player/)

+ [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

+ [Hiding Native HTML5 Video Controls In Full-Screen Mode](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

+ [HTML5 Video](https://en.wikipedia.org/wiki/HTML5_video)

+ [W3C HTML5.1 Specification](https://www.w3.org/TR/html/)

+ [Using HTML5 Audio And Video](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

+ [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)

+ [Element.requestFullscreen()](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen)

+ [Javascript request fullscreen is unreliable](https://stackoverflow.com/questions/9454125/javascript-request-fullscreen-is-unreliable)

+ [Fullscreen API](https://davidwalsh.name/fullscreen)

+ [Fullscreen API Living Standard — Last Updated 16 December 2016](https://fullscreen.spec.whatwg.org/)

+ [Syncing Content With HTML5 Video](https://www.smashingmagazine.com/2011/03/syncing-content-with-html5-video/)

To view my `HTML5 Custom Video Player`, please visit the [HTML5 Custom Video Player repository](https://github.com/interglobalmedia/custom-html5-video-player/).









