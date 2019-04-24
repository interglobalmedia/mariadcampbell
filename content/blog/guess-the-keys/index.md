---
title: 'Guess the keys'
image: guess_the_keys.jpg
description:
    Last week I created a little game with vanilla Javascript revolving around
    the keypress event that might end up being reused one day in a bigger
    project.
date: '2018-02-05'
tags: ['keypress-event', 'javascript', 'event-listeners', 'disabled-property']
categories: ['javascript']
author: 'Maria D. Campbell'
---

Last week I created a little game with vanilla Javascript revolving around the
`keypress` event that might end up being reused one day in a bigger project.
There was a lot more going on under the hood than meets the eye, and I learned a
new thing or two in the process. So I thought it was time to write another post!

I was inspired to create this game by a `keypress` workshop we did in my
**Evening Fullstack JavaScript Intensive Course** I just began 4 weeks ago (yes,
it’s already 4 weeks!). I wanted to take it to the next level. I firmly believe,
and I am not at all unique, that it is important to push oneself to create, and
more important, create new things applying what one has learned. It’s the only
way to truly understand the subject matter, AND to make it stick. **Practice
makes a better programmer** definitely applies. Sometimes I can’t think of what
I should create next, so using our workshops as base inspirations definitely
helps!

The `Javascript` **file** consists of 146 lines of code, a few of which are
empty to break the code up, and much of which is CSS in JS. Then there is the
`JavaScript` **_related to_** the `keypress` and `input` **validation**. There
are **_two parts_** to the **game**.

The **_first part_** is to guess the keys you should press in order that a
phrase from a song appears in a colored box with a dashed border above the text
`Answer`. This can be achieved two ways. You can either press keys over the
document (browser window) to make the colored box with phrases from songs
appear, or you can type directly into the input field.

The **_second part_** consists of **_rendering_** `Your input is correct!` above
the **text** `Answer`, and **replacing** `Answer` with
`You guessed correctly. It is ...!` There are **_only_** a **certain number** of
`song phrases`, and each corresponds to a **_certain_** `keypress`. Those
`keypresses` are **_equivalent to_** a **string** that makes up a **name** or
**word**. If you correctly type that sequence into the input field and press
return, you will receive a message letting you know that you guessed correctly
followed by the answer. In addition, **_after_** you **press** `return`, the
`input field` is **_disabled_**, and you can no longer type into it. You can
keep on typing into the input with incorrect characters after inputting the
correct string, but nothing happens. When you think you have the right answer,
make sure to press the `return` **key**.

If you **type** the **_correct_** `keypress`es or **_sequence_** of `keypress`es
to the **_document_**, you will **render** the `song phrases` to the page.
**_However_**, when you **press** the `return` **key**, you will **receive** the
**_error message_** `Wrong input. Try again!` in the **_colored_** **box**, and
`Answer` will be **_replaced_** **with** the **error message**
`You guessed incorrectly. Try again!`.

How I achieved this game via `JavaScript code` can be broken down into
**_five_** **important highlights**.

-   Adding an `input.value` condition **_not equal_** to the **answer**.

-   Adding an `else statement/condition` **_not equal_** to the **answer**.

-   Adding an `input.value condition` **_not equal_** to the **answer** to the
    `input change` **event**.

-   Adding `input.disabled` **_equal to_** `true` to the `else statement` for
    `input.value condition` **_equal to_** **answer** in `input change`
    **event**.

-   Adding `page refresh code` to `click event` for **button**.

At first I **_didn’t add_** an `input value condition` to the
`keypress listener`. So I had **_all these conditions_** for the k`eypress`es
and then an `else statement` which **simply returned** the **error message**
`Wrong input. Try again!`, but **_no condition against_** the **correct answer**
which is **supposed to be typed into** the `input`. So I **_added_** **another**
`else if condition` **_after_** the **first** `if` and subsequent
`else if condition`s for the **_individual_** `keypress`es **_associated with_**
the **songs** that **_checked against_** an `incorrect input value` which would
**_result in_** the **error message** `Wrong input. Try again!` **_rendered
to_** the **colored box**, and the **error message**
`You guessed incorrectly. Try again!` that **_replaces_** the text `Answer`.
This `else if statement` is then **_followed by_** the **final**
`else statement` which **_returns_** the **confirmation messages**
`Your input is correct!` and `You guessed correctly. It is ...!` I **_added_** a
`disabled.true` **property** to the `input` **_if_** the **answer** is
**correct** **_and_** the **user** `presses return` **_after_** `inputting` it.
This is so that **_no_** `incorrect characters` can be **_rendered_** to the
`colored box` **_after_** the **correct answer** has been `inputted` and the
`return` **key** has been **_pressed_**. Lastly, I had to **_add_** a way to
**refresh** the **_page_** so that `disabled.true` is **erased** and the
**user** can **_type_** in the `input field` **_again_**.

I didn’t share code here on purpose because that would spoil the game for you!
Please do check it out on Github, and give it a whirl! And let me know what you
think!

## Related Resources:

-   [Guess The Keys on Github gh-pages](https://interglobalmedia.github.io/guess-the-keys/)

-   [My Github Profile](https://github.com/interglobalmedia)
