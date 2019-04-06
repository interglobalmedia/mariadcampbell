---
title: "Compressing and uncompressing directories from the Command Line"
image: terminal.png
description: Since I started my Evening JS Intensive boot camp, I have found the need to compress assignment directories for upload to Canvas.
date: '2018-01-24'
tags: ["compressing-directories", "command-line", "osx", "unix"]
author: "Maria D. Campbell"
---

Since I started my **Evening JS Intensive** ***bootcamp***, I have found the need to ***compress*** **assignment directories** for ***upload*** to **Canvas**, an open-source learning management system (LMS) we use for managing our course syllabus, content, assignments submissions, grading, etc. It became a real pain to have to leave **Terminal** to get the `gzipping` done. So I decided to learn how to do it **directly** from the `Command Line`. The problem with some of my projects is that I have directories I do not want to include, such as the `node_modules` **directory**. So this is what I did to exclude the `node_modules` **directory**:

```shell
zip -r stripe-dropdown.zip stripe-dropdown/* -x "stripe-dropdown/node_modules/*"
```

This `command` ***means*** that we are **zipping** ***recursively*** **everything** in the `stripe-dropdown` **directory**, ***including*** **subdirectories** and **files**, but ***excluding*** the `node_modules` **directory** and ***everything*** **inside** of it. We have to **add** the ***full path*** to the `node_modules` **directory** in order to ***successfully*** **ignore** it. `-r` stands for **recursively**, and the `*` stands for **wildcard**, **meaning** ***everything***. The `-x` **flag** means `exclude`, followed by the `path` to the **directory** to ***exclude***. I was in the parent directory of stripe-dropdown when I executed this command, so the path to node_modules in stripe-dropdown relative to its parent directory, development, was `"stripe-dropddown/node_modules/*"`. On **OSX**, you have to ***encapsulate*** the **path** to the **directory** to ***ignore*** with **quotes**.

This is what was printed to the **Terminal** `console` as ***directories*** and ***files*** were being **compressed**:

```shell
zip -r stripe-dropdown.zip stripe-dropdown/* -x "stripe-dropdown/node_modules/*"
adding: stripe-dropdown/README.md (deflated 55%)
  adding: stripe-dropdown/brand-favicons/ (stored 0%)
  adding: stripe-dropdown/brand-favicons/favicon-16x16.png (deflated 14%)
  adding: stripe-dropdown/brand-favicons/apple-icon.png (deflated 2%)
  adding: stripe-dropdown/brand-favicons/apple-icon-144x144.png (deflated 2%)
  adding: stripe-dropdown/brand-favicons/android-icon-192x192.png (stored 0%)
  adding: stripe-dropdown/brand-favicons/apple-icon-precomposed.png (deflated 2%)
  adding: stripe-dropdown/brand-favicons/apple-icon-114x114.png (deflated 3%)
  adding: stripe-dropdown/brand-favicons/ms-icon-310x310.png (deflated 6%)
  adding: stripe-dropdown/brand-favicons/ms-icon-144x144.png (deflated 2%)
  adding: stripe-dropdown/brand-favicons/apple-icon-57x57.png (deflated 5%)
  adding: stripe-dropdown/brand-favicons/apple-icon-152x152.png (deflated 4%)
  adding: stripe-dropdown/brand-favicons/ms-icon-150x150.png (deflated 4%)
  adding: stripe-dropdown/brand-favicons/android-icon-72x72.png (deflated 5%)
  adding: stripe-dropdown/brand-favicons/android-icon-96x96.png (deflated 4%)
  adding: stripe-dropdown/brand-favicons/android-icon-36x36.png (deflated 8%)
  adding: stripe-dropdown/brand-favicons/apple-icon-180x180.png (deflated 4%)
  adding: stripe-dropdown/brand-favicons/favicon-96x96.png (deflated 4%)
  adding: stripe-dropdown/brand-favicons/manifest.json (deflated 75%)
  adding: stripe-dropdown/brand-favicons/android-icon-48x48.png (deflated 6%)
  adding: stripe-dropdown/brand-favicons/apple-icon-76x76.png (deflated 4%)
  adding: stripe-dropdown/brand-favicons/apple-icon-60x60.png (deflated 5%)
  adding: stripe-dropdown/brand-favicons/browserconfig.xml (deflated 43%)
  adding: stripe-dropdown/brand-favicons/android-icon-144x144.png (deflated 2%)
  adding: stripe-dropdown/brand-favicons/apple-icon-72x72.png (deflated 5%)
  adding: stripe-dropdown/brand-favicons/apple-icon-120x120.png (deflated 3%)
  adding: stripe-dropdown/brand-favicons/favicon-32x32.png (deflated 8%)
  adding: stripe-dropdown/brand-favicons/ms-icon-70x70.png (deflated 4%)
  adding: stripe-dropdown/favicon.ico (deflated 62%)
  adding: stripe-dropdown/images/ (stored 0%)
  adding: stripe-dropdown/images/profile-small.png (deflated 0%)
  adding: stripe-dropdown/index.html (deflated 82%)
  adding: stripe-dropdown/package.json (deflated 35%)
  adding: stripe-dropdown/scripts/ (stored 0%)
  adding: stripe-dropdown/scripts/scripts.js (deflated 60%)
  adding: stripe-dropdown/styles/ (stored 0%)
  adding: stripe-dropdown/styles/styles.css (deflated 72%)
  ```

Then, to ***unzip*** this **same directory** from `Command Line`, do the following:

```shell
unzip stripe-dropdown
```

And this is what was ***printed*** to the **Terminal** `console` as **directories** and **files** were ***extracted*** from the `.zip` and **inflated/decompressed**:

```shell
unzip stripe-dropdown
Archive:  stripe-dropdown.zip
  inflating: stripe-dropdown/README.md
   creating: stripe-dropdown/brand-favicons/
  inflating: stripe-dropdown/brand-favicons/favicon-16x16.png
  inflating: stripe-dropdown/brand-favicons/apple-icon.png
  inflating: stripe-dropdown/brand-favicons/apple-icon-144x144.png
 extracting: stripe-dropdown/brand-favicons/android-icon-192x192.png
  inflating: stripe-dropdown/brand-favicons/apple-icon-precomposed.png
  inflating: stripe-dropdown/brand-favicons/apple-icon-114x114.png
  inflating: stripe-dropdown/brand-favicons/ms-icon-310x310.png
  inflating: stripe-dropdown/brand-favicons/ms-icon-144x144.png
  inflating: stripe-dropdown/brand-favicons/apple-icon-57x57.png
  inflating: stripe-dropdown/brand-favicons/apple-icon-152x152.png
  inflating: stripe-dropdown/brand-favicons/ms-icon-150x150.png
  inflating: stripe-dropdown/brand-favicons/android-icon-72x72.png
  inflating: stripe-dropdown/brand-favicons/android-icon-96x96.png
  inflating: stripe-dropdown/brand-favicons/android-icon-36x36.png
  inflating: stripe-dropdown/brand-favicons/apple-icon-180x180.png
  inflating: stripe-dropdown/brand-favicons/favicon-96x96.png
  inflating: stripe-dropdown/brand-favicons/manifest.json
  inflating: stripe-dropdown/brand-favicons/android-icon-48x48.png
  inflating: stripe-dropdown/brand-favicons/apple-icon-76x76.png
  inflating: stripe-dropdown/brand-favicons/apple-icon-60x60.png
  inflating: stripe-dropdown/brand-favicons/browserconfig.xml
  inflating: stripe-dropdown/brand-favicons/android-icon-144x144.png
  inflating: stripe-dropdown/brand-favicons/apple-icon-72x72.png
  inflating: stripe-dropdown/brand-favicons/apple-icon-120x120.png
  inflating: stripe-dropdown/brand-favicons/favicon-32x32.png
  inflating: stripe-dropdown/brand-favicons/ms-icon-70x70.png
  inflating: stripe-dropdown/favicon.ico
   creating: stripe-dropdown/images/
  inflating: stripe-dropdown/images/profile-small.png
  inflating: stripe-dropdown/index.html
  inflating: stripe-dropdown/package.json
   creating: stripe-dropdown/scripts/
  inflating: stripe-dropdown/scripts/scripts.js
   creating: stripe-dropdown/styles/
  inflating: stripe-dropdown/styles/styles.css
```

Be sure to be in the same parent directory as the `.zip`. For example, I moved mine onto the desktop so as no to confuse it with my original and complete directory in `~/development`, then made sure that I changed into the desktop directory, `cd ~/desktop`, and then executed the `unzip` command followed by the name of the directory (`stripe-dropdown`) that had been zipped. No need for adding the `.zip` extension. And that’s it! No more need to leave the `Command Line` and go to your **Mac**’s **menu bar**, ***searching*** for `compress stripe-dropdown` (or whatever the name of the directory you want to compress is) ***under*** the `file tab`, and ***no more need*** to **leave** `Command Line` to **double click** on a `.zip` to ***expand it*** into a **directory**. It is a great time saver!

Happy `zipping` and `unzipping`!

### Related Resources:

+ [Unix/Linux Command Reference](https://files.fosswire.com/2007/08/fwunixref.pdf)





