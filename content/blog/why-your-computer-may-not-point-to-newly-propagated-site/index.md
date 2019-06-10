---
title:
    'Why Your Local Machine (Computer) May Not be Pointing to Your Newly
    Propagated Site'
image: mael-balland-1157034-unsplash.jpg
description:
    'I recently changed my hosting for my business site to Netlify from
    gh-pages, but my Macbook Pro, which I use for development, does not point to
    the newly propagated site.'
date: '2019-05-15'
tags: ['dns', 'local-hosts-file', 'ip-address', 'site-propagation']
categories: ['web-hosting', 'changing-web-hosts']
author: 'Maria D. Campbell'
---

**Note:** `DIG`, aka `Domain Information Groper`, which I used to find out the
**_new_** `IP address` for my newly propagated web site, is built into my Mac.
According to
<a href="https://ns1.com/blog/decoding-dig-output" target="_new" rel="noopener noreferrer" title="visit link to NS1 website dedicated to everything DNS (Domain Name System)">ns1.com</a>,

> (DIG) is the best tool for quickly diagnosing and understanding DNS
> responses. - Carl Levine, July 13, 2016

And

> DIG provides a wealth of information about how a zone is configured, whether
> or not it’s working properly and can even be queued up with multiple queries
> at once. - Carl Levine, July 13, 2016

I have added the link to this great and highly informative article at the end of
this post.

The other day I moved my business site, `interglobalmedianetwork.com` from
**Github** `gh-pages` to **Netlify**, where this site resides as well.
`mariadcampbell.com` immediately propagated, and immediately showed up correctly
on my computer, as well as everywhere else. **_However_**, this was not the case
with `interglobalmedianetwork.com`. For a while I couldn't figure out why it
kept on pointing to my former `gh-pages` **hosting**. I decided to **_check_**
what `IP address` my computer was **_pointing to_** and **_compare it to_** the
**new Netlify IP address**.

First I typed the following command in **Terminal** to find out what
`IP address` my computer was being directed to:

```shell
host interglobalmedianetwork.com
```

The `host` **command** returned the `IP address` my computer was redirected to
to reach `interglobalmedianetwork.com`. Then I used **DIG** to find out what the
NEW and ACTUAL IP address for interglobalmedianetwork was. I used the following
command:

```shell
dig interglobalmedianetwork.com @dns1.p01.nsone.net
```

I am using a **_dummy_** **domain nameserver** (@dns1.p01.nsone.net) thanks to
[nsl.com](https://ns1.com/blog/decoding-dig-output)'s great article on the
**DIG** command. Replace it with that of the hosting service you are using.

The following (example) results are returned to **Terminal**:

```shell
; <<>> DiG 9.8.3-P1 <<>> example.com @dns1.p01.nsone.net a
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60796
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0
;; WARNING: recursion requested but not available
;; QUESTION SECTION:
;example.com.            IN    A
;; ANSWER SECTION:
example.com.        3600    IN    A    104.20.48.182
;; Query time: 8 msec
;; SERVER: 198.51.44.1#53(198.51.44.1)
;; WHEN: Fri Jul  8 10:55:40 2016
;; MSG SIZE  rcvd: 45
```

Using my actual **dnsnameserver** for **Netlify** (not dummy content here), I
achieved success, and saw that the `IP address` was **_different_** from the one
returned from the `host` command. The **_internet_**, my **_Google Pixel 2
smartphone_**, and my **HP laptop** were all seeing the newly propagated (and
completely newly built) site, but **_not_** my **Macbook Pro**, where I do all
my **developing**.

I thought a bit about this, and realized that **_PROBABLY_** I had **added** an
`IP address` for `interglobalmedianetwork` in my **_local machine's_** `hosts`
file which **_still_** points to the previous `IP address` associated with my
**_previous_** **nameserver**.

I remember **_adding_** `IP addresses` often back in the early days of
**WordPress development** when `site propagation` seemed to take forever, and I
wanted to be able to **see changes** to my site **in development** **_before_**
**propagation** was **_complete_**. I **_added_** the appropriate
`IP address(es)` to whichever `site(s)` I was working on at any given time. The
file which is **responsible** for this **_functionality_** is the `hosts` file
on our **local machine** (computer). Just remember that if you are having
problems viewing your site after **_successful_** **propagation**, that the
**_old_** `IP address` might **still be residing** in your `hosts` file.

In order to **_edit_** the `hosts` file, you first had to **run** the following
**command** in **Terminal**:

```shell
sudo nano /private/etc/hosts
```

If you have a **_more recent_** **Mac** than me (late 2015 Macbook Pro), you
might have to run the following command instead:

```shell
sudo nano /etc/hosts
```

Because we are using `sudo` here, you will be prompted to enter your
`system password`. Be sure to have it available!

The **command** will **_take you into_** the `hosts` file via your **Nano
(Command Line Text) Editor**. For example, there I saw a whole bunch of my
sites' `IP addresses`, including those for various variations of
`interglobalmedianetwork.com`. Since I didn't need any of them anymore, I simply
removed them. The `hosts` file has instructions as to what you can edit and
should not. Read them carefully.

Next I had to save my changes and **_exit_** **Nano**, so I first typed the
following on my keyboard:

```shell
control-o + enter (return)
```

This **_saved my changes_** in the `hosts` file. Then to exit Nano, I typed the
following on my keyboard:

```shell
control-x
```

This **command** took me back to the **Terminal** `window`.

Then I **_typed_** `https://www.interglobalmedianetwork.com` in the **Chrome**
`address bar` and my site appeared! Of course this step can be reproduced in the
browser of your choosing.

Happy **_site propagation_**!

## Related Resources:

-   <a href="https://www.inmotionhosting.com/support/website/how-to/how-to-edit-your-hosts-file-on-a-mac" target="_new" rel="noopener noreferrer" title="visit link to post on the inmotion hosting website entitled 'How to Edit your hosts File on a Mac' to learn more about editing your hosts file on a Mac">How
    to Edit your hosts File on a Mac</a>

-   <a href="https://ns1.com/blog/decoding-dig-output" target="_new" rel="noopener noreferrer" title="visit link to post on the NS1 website entitled 'Decoding DIG Output' to learn more about Domain Information Groper aka DIG">Decoding
    DIG Output</a>
