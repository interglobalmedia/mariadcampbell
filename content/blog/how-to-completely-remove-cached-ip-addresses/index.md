---
title: "How to completely remove cached IP addresses"
image: how-to-hide-your-ip-address.jpg
description: Recently I migrated interglobalmedianetwork.com from WordPress to Hugo and hosting it on Github gh-pages, but I had quite a time with getting the site to display on my computer!
date: '2017-06-02'
tags: ["dns", "dns-propagation", "computer-caches", "hosts-file", "mac-osx","mac-os-sierra", "local-cache-removal", "cached-ip-addresses"]
author: "Maria D. Campbell"
---

Recently I decided to migrate interglobalmedianetwork.com from WordPress to Hugo and hosting it on Github gh-pages. Best decision I ever made. But I had quite a time with getting the site to display on my computer! At first I thought that no one else could see it and that it wasn’t correctly pointing to Github’s IP address(es). I checked to see whether or not that was the case with a service called [whatsmydns.net](https://www.whatsmydns.net/), a global DNS propagation checker, but the IP address associated with the web address was correct.Then I thought it might be a browser cache issue. I cleared out the cache for Chrome, FireFox, and Safari. Still no luck.

Then I came across suggestions to flush out the DNS via Terminal. I won’t even mention it here (you can look it up if you like) because it too doesn’t work. I kept on fine-tuning my Google Search until I came up with what I vaguely remembered to be the correct and final solution: editing the Hosts file with Terminal. I found the answer in an article entitled [How to Edit the Hosts File in Mac OS X With Terminal](http://osxdaily.com/2012/08/07/edit-hosts-file-mac-os-x/) in OSX Daily. I swear by that blog. It has saved me time and time again. This particular article is from 2012, so I didn’t remember to search for it there, but the solution still applies. Once I started reading, I also remembered that I had indeed done this at least a couple of times a while back. That made me realize how important it is to record challenges I face in development OR IT so as to save time and frustration in the long run. It’s just the efficient thing to do.

You can find the hosts file on your Mac OS X stored at `/private/etc/hosts` or it can also be accessed at the more traditional location of `/etc/hosts`. The article, however, opts for the `/private/etc/` location.

Open up your **Terminal** window and type in the following `command`:

```shell
sudo nano /private/etc/hosts
```

Next you will be asked to type in your administrator password.

Then the hosts file will be loaded with the nano text editor. Use the arrow keys of your computer keyboard to navigate towards the bottom of the `hosts` file to make the necessary IP modifications.

When you are done, **hit** `Control+O` followed by ENTER/RETURN to ***save*** the **changes made** to the `hosts` **file**, and then **hit** `Control+X` to ***exit*** `nano`.

Lastly, ***quit*** out of **Terminal**.

Check to see that your modification was successful. Mine definitely was.

This article also has a link to their article on [DNS flushes](http://osxdaily.com/2008/03/21/how-to-flush-your-dns-cache-in-mac-os-x/) (which I mentioned earlier), but I would go this route first. If this proves not to be enough (it probably will be), then do the flush following their instructions.

The article comes with a video showing how to make changes in your hosts file, in case if you would like to see a demonstration before doing it yourself.

I will also be writing a brief article on the steps I took to switch my website content from WordPress to Hugo. It will focus on what I had to do on the WordPress end to make the IP transfer successful.

**Note 4.7.19:** I am in the middle of ***migrating*** my developer notebook powered by WordPress, mariadcampbell.com, to **Gatsbyjs** and **Netlify CMS**. I will be doing the same for interglobalmedianetwork.com. The site never really went anywhere with `Hugo`, and `WordPress` was also not a fit before that. Can't wait to bring it over to `Gatsbyjs` with a complete overhaul!

### Related Post:

+ [How to Edit your Mac’s Hosts file, and why you would want to](https://www.imore.com/how-edit-your-macs-hosts-file-and-why-you-would-want)