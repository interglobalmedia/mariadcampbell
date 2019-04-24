---
title: 'Changing your (Homebrew) PostgreSQL configuration from trust to md5'
image: md5.png
description:
    I had one last step I had to take to ensure that my PostgreSQL upgrade
    configuration mirrored that of the previous version.
date: '2019-01-11'
tags:
    [
        'user-authentication',
        'database-configuration',
        'trust',
        'md5',
        'root-user',
        'homebrew',
        'terminal',
        'command-line',
        'osx',
        'back-end-development',
    ]
categories:
    [
        'full-stack-javascript',
        'postgresql',
        'osx',
        'command-line',
        'terminal',
        'homebrew',
    ]
author: 'Maria D. Campbell'
---

As I had mentioned in my previous post
[Upgrading PostgreSQL from version 10.4 to 11.1 via Homebrew (OSX)](/blog/upgrading-postgresql-via-homebrew/),
I had one last step I had to take to ensure that my **PostgreSQL** upgrade
**_configuration_** **mirrored** that of the **_previous version_**. I had to
**_change_** the following **configuration** that was implemented on version
upgrade:

```shell
WARNING: enabling "trust" authentication for local connections
You can change this by editing pg_hba.conf or using the option -A, or
--auth-local and --auth-host, the next time you run initdb.
```

This means that **_any_** `postgres` **user**, root or otherwise, can login to
**PostgreSQL** in the **Command Line** whether it be the **_system_**
**Terminal** or **_integrated_** **Terminal** in a **code editor**,
**_without_** providing a **password**. That is the **default behavior** when
**_installing_** with **Homebrew**. I had changed it in the previous version so
that all users had to login with their password.

Once you **_KNOW_** what you have to do, it really is not that complicated.

The following are the steps I had to take to change my **PostgreSQL**
**_configuration_** from **trust** to **md5**:

First I had to go login to `postgres` via the **Command Line**:

```shell
psql
```

Then I typed the following command inside my `postgres` root user (`whoami`):

```shell
SHOW hba_file;
```

This command returned the following:

```shell
hba_file
-------------------------------------
 /usr/local/var/postgres/pg_hba.conf
(1 row)
```

This is the path to the `pg_hba.conf` file. This is the **PostgreSQL**
**_configuration_** file.

Next I scrolled down toward the bottom of the file until I came across a
**table** that **_contains a column_** called **Method**. It **contains** the
**_trust_** **configuration**. I changed all instances of **trust** with
**md5**.

```shell
CAUTION: Configuring the system for local "trust" authentication
# allows any local user to connect as any PostgreSQL user, including
# the database superuser.  If you do not trust all your local users,
# use another authentication method.
```

`md5` ensures that **users** have to provide their user **_passwords_** at
`psql login` in **_any_** **Terminal** **_instance_**. This adds another layer
of security to your `postgres databases`, and mirrors login to the **pgAdmin
GUI**.

Next I **_closed_** the `pg_hba.conf` file, **_quit_** all instances of
**Terminal**, and then reloaded it.

Then I typed `psql` to login to `postgres` and was **prompted** to **enter** my
**password**. I did, but it **_failed_**! of course it failed, because when I
created my root user, I **_never_** **entered** my **password**. I only created
the database naming it with my username, so as far as **PostgreSQL** wass
concerned, since it **did not know** of **any password** for this **user**,
**authentication** **_failed_**.

But I had **_already_** **removed** `superuser` **powers** from my `postgres`
**user**, so the `postgres` **user** **_did not have_** the **authorization** to
**alter** the **root user** in any way.

I **_had to go back_** **into** my `pg_hba.conf` file **_again_** and
**temporarily replace** `md5` with `trust` so that I could re-login to
**PostgreSQL** as root without a password, **_alter_** the `postgres` **user**
to `superuser`, **_logout_** as root, and then **_login_** as `postgres` and
**_alter_** the **root user** by **_adding_** a **password**:

```js
ALTER USER username PASSWORD 'password';
```

Then I logged out of `postgres` and even stopped it from running with the
command

```shell
brew services stop postgresql
```

because **brew services** is my preferred way of **starting** and **stopping**
the **PostgreSQL** **_server_**. This is necessary in order for any changes made
to be recognized at the next login. The same goes for **making changes** to the
`pg_hba.conf` file. You have to make sure that `postgresql` is not running in
order for the configuration changes to be recognized at the next `psql`
**_login_**.

Next I **_quit_** **Terminal** and then **_reloaded_** as before.

Then I tried to login again as the **root user** (`whoami`). This time I was
prompted to provide my password, and everything worked as expected.

This taught me that maybe it would be good to have a `backup superuser` for
cases like this, so I kept the `superuser` **_configuration_** for the
`postgres` **user** for the time being. Its superuser powers, however, are NOT
as extensive as the root user.

## Related Links:

-   [Upgrading PostgreSQL from version 10.4 to 11.1 via Homebrew (OSX)](/blog/upgrading-postgresql-via-homebrew/)
