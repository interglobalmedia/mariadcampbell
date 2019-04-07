---
title: "Installing pgAdmin Only after installing PostgreSQL with Homebrew Part 2"
image: postgresql.jpg
description: Getting to know your developer tools is just as important as learning to program, which takes me back to my battle with PostgreSQL on my machine.
date: '2018-06-17'
tags: ["homebrew", "postgresql", "pgadmin", "postgres-user", "postgres-password", "creating-postgres-user", "osx", "command-line", "terminal"]
author: "Maria D. Campbell"
---

This post assumes that you have already backed up your existing databases somewhere (if you cared about them!). I will not be going over those steps.

Getting to know the tools you use as a developer is just as important as learning to program. If you don’t know how to use them properly, your programming will suffer!

Which takes me back to my battle with **PostgreSQL** on my machine in a way that suited my needs.

As I had mentioned in my previous post, I wanted the ability to play around with **PostgreSQL** and view it in a **Graphical User Interface** (GUI), but also have all the features of a **Homebrew** install. Unfortunately, I had initially stumbled clumsily and imperfectly through the process, making a few errors along the way. Part of it actually had to do with the (relatively new) **Migration Assistant** on **Mac OSX**. It had screwed up my **PostgreSQL** ***install*** when it was migrated to my current machine, and getting rid of all traces of my download(s) from [postgresql.org](https://www.postgresql.org/) was a bit of a challenge. It involved getting ***rid*** of the **standard account** which had been **created** ***by*** the **Migration Assistant** during the **restoration** of my **data** and **subsequent migration** to my ***new computer***, getting **rid** of the **install** I had made yesterday, **re-installing PostgreSQL** with **Homebrew**, and making sure that I added a `postgres user` afterwards that contained a password (it does not by default).

## Uninstalling the [postgresql.org](https://www.postgresql.org/) install

To uninstall the [postgresql.org](https://www.postgresql.org/) ***install***, click on your `Macintosh HD` icon on your desktop, go into ***Library*** **folder**, and then into your **PostgreSQL** ***folder*** which **resides** ***inside*** the **Library folder**. Inside, you will see something called the **PostgreSQL uninstaller**.  Click on that to ***uninstall*** **PostgreSQL** from your machine. At the end, it will tell you that the **uninstall** is ***complete***, but that your **data** was ***not*** **removed**. You have to ***move*** the **PostgreSQL folder** and the ***remaining*** **contents** into the ***trash***. When doing so, you will be ***prompted*** to **input** your ***administrator*** **password**. When you do that, the folder will be moved to the trash.

## Installing PostgreSQL with Homebrew

***Installing*** **PostgreSQL** with **Homebrew** is very easy. First make sure, of course, that you do ***have*** **Homebrew** ***installed***! To check whether you indeed have **Homebrew** ***installed***, type the following `command` in **Terminal**:

```shell
brew update
```

If this command returns results, that means **Homebrew** has been installed on your machine. If no results are returned, you do not. To install **Homebrew**, please visit the **Homebrew** site:

[Homebrew Site](https://brew.sh/)

Once you have **Homebrew** ***installed***, do the following:

```shell
brew update
```

This just makes sure that **Homebrew** is up to date. it is just best practice to run this command before installing a program with **Homebrew**. Next, run the following `command` to ***install*** **PostgreSQL**:

```shell
brew install postgresql
```

After the install has been completed, run the following command to get **PostgreSQL** up and ***running***:

```shell
brew services start postgresql
```

This command will ***start*** your `postgres server`. No fuss no muss! To ***stop*** the **postgres server**, run the following command:

```shell
brew services stop postgresql
```

***But don’t do that just yet!***

Run the following command:

```shell
createdb `whoami`
```

This will create your **default user database** with your **computer shortname**. `whoami` ***refers to*** your **computer shortname**.

Then run the command

```shell
psql
```

to log into **PostgreSQL**. The beautiful thing about a **Homebrew** install is that you can simply use your ***native*** **Terminal** window you use for controlling your machine instead of the `Sql` **shell** that comes with the [postgresql.org](https://www.postgresql.org/) install. That is just an extra painful step that takes up more time to execute.

I love using my **shortname** for **local development**. But I can’t use it to log into **pgAdmin**! By default, **Homebrew** only sets up the account you create with the

```shell
createdb `whoami`
```

command.

## Creating the default postgres user needed for pgAdmin

You have to create a ***second user*** called **postgres** in order to be able to connect with and log in to **pgAdmin**. To create the `postgres user`, type the following `command` in **Terminal** while ***still logged in*** to `postgres`:

```js
createuser -s postgres
```

This will create a `postgres superuser`. Then type the following command to make sure that this user has indeed been created:

```js
\du
```

This command returns the list of users you have available to you in your **PostgreSQL** install.

There is still one last step to the process in order to make connection with **pgAdmin** possible. You have to **create a password** for the `postgres user` you just created. ***By default***, the `user` is **created** ***without*** a **password** with the `command` I ***provided*** **here**. To ***create*** a **password** for the `postgres user`, run the following `command` while still logged in to PostgreSQL:

```js
ALTER USER  postgres  WITH PASSWORD ‘password’;
```

Just replace `password` with whatever `password` you want to assign.

***THEN***, you will want to install **pgAdmin** on your machine. Go to the **pgAdmin** website to download the **GUI**:

+ [pgAdmin website](https://www.pgadmin.org/)

After the download has been completed, click on the `dmg` (disk image file) in your downloads folder to open up the application and install it. A window will pop up with the **PostgreSQL** icon. ***Drag*** the **icon** into your **applications folder**. This will **install** it in your **applications folder**.

Next, you want to make sure that you are logged in to `postgres` with your `postgres user` in order to be able to ***log in*** and **connect** with **pgAdmin**. You are not **logged in** ***by default*** into `user postgres` when you install `postgres` with **Homebrew**. This is what confused me at first. It made me think that I couldn’t connect with **pgAdmin** with a **Homebrew** ***install***. All you have to do is use a different command to log in to another user:

```js
psql -U postgres
```

`psql` ***defaults*** to your `user account name`. In this case, it is the **user account** ***shortname*** on your machine. The command here says to ***log in*** with the `-U` (user) `postgres`.

## Logging into pgAdmin

Once you are ***logged in*** to `postgres` with `user postgres`, go into your **Applications folder** and click on the **pgAdmin icon**. It will open up in a new tab in your favorite browser.

When it has completed loading, ***click*** on the **Servers** ***tab*** to the left in the browser window under **Browser**. A new tab called **PostgreSQL 10** (or whatever version you have on your machine) will appear. Click on that.

Now a connect to server modal will appear, in which you are prompted to enter your password for your `user postgres` so as to connect to the server:

```js
Please enter the password for the user 'postgres' to connect the server - "PostgreSQL 10"
Password
```

***Now you understand the importance of having a user called postgres with a dedicated password!***

Once you ***provide*** your `postgres password` and click on the `OK button`, you will be ***logged in*** to **pgAdmin**, and are good to go! You will even see all your `user databases` and any others you might have created along the way!

***Happy databasing*** with **PostgreSQL**!

+ [Completely Uninstall and Reinstall PSQL on OSX](https://medium.com/@bitadj/completely-uninstall-and-reinstall-psql-on-osx-551390904b86)

+ [pgAdmin.org](https://www.pgadmin.org/)

+ [psql: FATAL: role “postgres” does not exist](https://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist)

+ [Uninstall Postgres 10 on macOS – EnterpriseDB installer](https://dba.stackexchange.com/questions/185476/uninstall-postgres-10-on-macos-enterprisedb-installer)