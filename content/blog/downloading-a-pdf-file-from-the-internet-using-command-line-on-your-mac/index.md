---
title: 'Downloading a pdf file from the internet using Command Line on your Mac'
image: iTerm2.jpg
description:
    Today I'm talking about how to download a pdf file from the internet using
    the Command Line on your Mac.
date: '2018-01-30'
tags:
    ['command-line', 'terminal', 'osx', 'unix', 'file-downloading', 'internet']
categories: ['command-line', 'osx', 'terminal']
author: 'Maria D. Campbell'
---

Since I have already written a
[post](https://www.mariadcampbell.com/blog/compressing-and-uncompressing-directories-from-the-command-line/)
about **_zipping_** and **_unzipping_** **directories** on a **Mac** using the
**Command Line**, I thought I would take that track a step further by talking
about how to **download** a **pdf** file from the **_internet_** using the
`Command Line` on your **Mac**. I will also discuss where it ends up relative to
where you are.

I will use a simple example that I actually learned from to demonstrate this. If
there is a specific pdf file you want to download, please feel free to replace
my web address and filename with yours.

The following command in **Terminal** (`iTerm2`) will **_download_** the
`pdf file` called `sample.pdf` from the `website` http://www.blazemonger.com/:

```shell
curl -O http://www.blazemonger.com/sample.pdf
```

the `-O` **option** consists of an `alphabetical capital O` and **_not_** a
`zero`.

This `command` will **_download_** the **file** into the **_directory_** you are
**currently** **_in_**. So if you are on your `desktop` via `Command Line`, it
will **_download_** the **file** **_there_**. If you are in one of your
**project** `root directories`, it will **download** it **_there_**. If you are
in a**_subdirectory_** of one of your **project directories**, it will
**download** it **_there_**. So be aware of where you currently are on your
computer! You can check this by **typing** the `pwd` **command** in your
**Terminal** **_before_** you **execute** the `curl -O` **command**. This
**_ensures_** that you are **already** in the **_directory_** where you want to
**include** the **_pdf_**!

**_Happy pdf downloading!_**

### Related Resources:

-   [Compressing and uncompressing directories from the Command Line](https://www.mariadcampbell.com/blog/compressing-and-uncompressing-directories-from-the-command-line)
