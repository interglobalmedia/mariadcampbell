---
title: "The new npm audit with npm > 6"
image: npm_audit.jpg
description: First Github started letting us know about npm package vulnerabilities in our Github repos, and now Nodejs does the same in our local repos via command line.
date: '2018-06-05'
tags: ["code-security", "nodejs-security", "npm", "github", "software-development", "full-stack-javascript", "front-end-development", "web-development"]
author: "Maria D. Campbell"
---

First **Github** started letting us know about `npm package vulnerabilities` in our **Github** ***repos***. Now **Nodejs** has followed suit and does the same in our **local repos** via `command line`.

It took me a little while to figure out how to fix these vulnerabilities. It was a matter of ***not so hot*** `npm documentation`. It seems that it has since improved! **Node Security** is ***very new***, after all! **Links** to ***better documentation*** is now included in our **vulnerability warnings** in **Terminal** (`Mac OSX`).

Currently I am ***working on*** an **app** using `express`, `nodejs`, `sequelize`, `express-session`, `bcrypt`, ***among others***. I wanted to include the `sequelize-cli`, and did so with the command

```shell
npm i sequelize-cli --save
```

***However***, **once installed**, I got the following ***warning*** in **Terminal**:

```shell
sequelize-cli@4.0.0
added 53 packages from 34 contributors and audited 2069 packages in 10.745s
found 1 low severity vulnerability
run `npm audit fix` to fix them, or `npm audit` for details
```

First I followed the instructions to ***fix*** the **vulnerability** with

```shell
npm audit fix
```

That did not work. I got the warning

```shell
up to date in 2.155s
fixed 0 of 1 vulnerability in 2069 scanned packages
1 vulnerability required manual review and could not be updated
```

Then I ran

```shell
npm audit
```

to get ***more information*** **about** the **vulnerability(s)**. The information included a link to **Node Security** with next steps to take:

```shell
=== npm audit security report ===

┌──────────────────────────────────────────────────────────────────────────────┐
│                                Manual Review                                 │
│            Some vulnerabilities require your attention to resolve            │
│                                                                              │
│         Visit https://go.npm.me/audit-guide for additional guidance          │
└──────────────────────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ deep-extend                                                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in    │ >=0.5.1                                                      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ bcrypt                                                       │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ bcrypt > node-pre-gyp > rc > deep-extend                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://nodesecurity.io/advisories/612                       │
└───────────────┴──────────────────────────────────────────────────────────────┘
```

It involved the **package** `deep-extend`, which is a **dependency** of `sequelize-cli` and `bcrypt`, both which I have **included** in my ***root dependencies***. I got the following information on deep-extend in the **Node Security** ***link***:

```shell
Overview

Versions of deep-extend before 0.5.1 are vulnerable to prototype pollution.

Remediation

Update to version 0.5.1 or later.
```

When I ran `npm audit` in **Terminal**, it told me to go into the `package` located in `node_modules` and check that a `package-lock.json` actually existed. If not, I should create one:

```shell
npm audit                                                                                      ✖ ✹ ✭
npm ERR! code EAUDITNOLOCK
npm ERR! audit Neither npm-shrinkwrap.json nor package-lock.json found: Cannot audit a project without a lockfile
npm ERR! audit Try creating one first with: npm i --package-lock-only

npm ERR! A complete log of this run can be found in:
npm ERR! /Users/mariacam/.npm/_logs/2018-06-05T10_22_24_882Z-debug.log
```

But first I ***got rid of*** my **top level** `package-lock.json` so that I could ***actually*** **upgrade** `deep-extend`. If I had kept it, `deep-extend` would just be ***re-installed*** with the **same version**. To learn more, please visit [package-lock.json](https://docs.npmjs.com/files/package-lock.json) on [npmjs.com](https://docs.npmjs.com/).

After I ***deleted*** the **top-level** `package-lock.json`, I went into `sequelize-cli` in `node_modules`, which ***contained*** the `deep-extend` **dependency**, and saw that there was ***no*** `package-lock.json`. I ran the following `command` to ***create one*** for `sequelize-cli`:

```shell
npm i --package-lock-only
```

After running it, I ***got back*** the following **warning** in **Terminal**:

```shell
created a lockfile as package-lock.json. You should commit this file.
added 839 packages from 79 contributors and audited 4797 packages in 17.936s
found 18 vulnerabilities (3 low, 9 moderate, 5 high, 1 critical)
run `npm audit fix` to fix them, or `npm audit` for details
```

I went back up to the `root directory` and **ran** the following `command`:

```shell
npm i deep-extend@0.5.1
```

Again, I ***got*** the following **warning** in **Terminal**:

```shell
deep-extend@0.5.1
added 1 package from 5 contributors, updated 1 package and audited 2070 packages in 3.454s
found 1 low severity vulnerability
run `npm audit fix` to fix them, or `npm audit` for details
```

This ***installed*** the **version needed** to get ***rid of*** the **vulnerability**, as mentioned earlier.

Now I was ready to run the command

```shell
npm audit fix
```

and afterwards received

```shell
removed 2 packages and updated 2 packages in 3.131s
fixed 1 of 1 vulnerability in 2070 scanned packages
```

Then I had to ***re-install*** **all** my **npm packages**, because I had gotten rid of the `package-lock.json` in **root**. Then I received

```shell
audited 2070 packages in 3.049s
found 0 vulnerabilities
```

I had also received a warning for the **npm package** `sharp`, and had uninstalled it, Now, if I really wanted to, I could ***re-install*** and ***fix*** the **vulnerability**. This also goes for **any vulnerabilities** you may have to ***fix*** on your **remote repos** on **Github**! I know I have a few to address!

Happy ***npm security***!

### Related Resources:

+ [About security audits](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities)