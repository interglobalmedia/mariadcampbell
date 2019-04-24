---
title: 'Upgrading PostgreSQL from version 10.4 to 11.1 via Homebrew (OSX)'
image: postgresql.jpg
description: Upgrading to the latest version of PostgreSQL via Homebrew.
date: '2019-01-11'
tags:
    [
        'upgrading-postgresql',
        'homebrew-postgres-install',
        'homebrew-postgres-upgrade',
        'osx',
        'mojave',
        'command-line',
        'terminal',
        'postgresql-version-10',
        'postgresql-version-11',
    ]
categories:
    ['full-stack-javascript', 'postgresql', 'homebrew', 'osx', 'command-line']
author: 'Maria D. Campbell'
---

Yesterday, it was that time again. Time to finally upgrade to the latest version
of **PostgreSQL**. Circumstances differed from the last time, which was good.
For one, I didn't have a Migration Assistant data migration from my old computer
to my new one to deal with. Second of all, due to changes in **PostgreSQL**
itself (and subsequently **Homebrew** as it relates to **PostgreSQL** upgrades
starting with version 10+), once you wrap your head around it, the upgrade is
fairly painless.

An important thing to mention about using **Homebrew** to **_upgrade_**
**PostgreSQL** (assuming that you installed it with **Homebrew** to begin with),
is that it **_won't_** **overwrite** your old data. In fact, if you try to
**_upgrade_** your **PostgreSQL** **_install_** with **Homebrew** without taking
the necessary steps for a successful install, it will **_fail_**! That's one of
the reasons I love my **Homebrew** install so much.

So I wanted top upgrade my **PostgreSQL** install to the latest stable version
(currently 11.1), because I wanted to take advantage of its latest features and
because it is always advisable and more secure to upgrade to the latest version
of software anyway.

I also new that there were 'breaking' changes to **PostgreSQL** especially
regarding how to upgrade, so I googled for information on the topic.

I had also upgraded to **Mojave** the other day, and decided to **_upgrade_**
**Homebrew** afterwards as well. That's when I started running into trouble!

Among other things, my **PostgreSQL** install was upgraded to **11.1**. However,
my data had been created with **10.4**, and was therefore incompatible with
**11.1**. In addition, the upgrade would have to be by default installed in the
same path as the old version's data path, so when **Homebrew** attempted to
upgrade to **PostgreSQL 11**, the upgrade failed. That's because **Homebrew**
prevents such an occurrence to take place. It exits out of the process if it
detects that the path

```markdown
/usr/local/var/postgres/
```

contains the data from the previous install. I got the following response in
Terminal when I ran the command `brew info postgresql`, to find out why my
upgrade failed:

```markdown
postgresql: stable 11.1 (bottled), HEAD Object-relational database system
https://www.postgresql.org/ Conflicts with: postgres-xc (because postgresql and
postgres-xc install the same binaries.) /usr/local/Cellar/postgresql/10.4 (3,389
files, 39.2MB) \* Poured from bottle on 2018-06-17 at 01:56:31 From:
https://github.com/Homebrew/homebrew-core/blob/master/Formula/postgresql.rb ==>
Dependencies Build: pkg-config ✔ Required: icu4c ✔, openssl ✔, readline ✔
Optional: python ✔ ==> Options --with-python Enable PL/Python3 --HEAD Install
HEAD version ==> Caveats To migrate existing data from a previous major version
of PostgreSQL run: brew postgresql-upgrade-database

To have launched start postgresql now and restart at login: brew services start
postgresql Or, if you don't want/need a background service you can just run:
pg_ctl -D /usr/local/var/postgres start ==> Analytics install: 58,441 (30 days),
186,921 (90 days), 709,053 (365 days) install_on_request: 51,357 (30 days),
164,191 (90 days), 602,299 (365 days) build_error: 0 (30 days)
```

What that basically means, and I finally understood after a few attempts and
coming across **_Olivier Lacan_**'s article entitled
[Migrating Homebrew Postgres to a New Version](https://olivierlacan.com/posts/migrating-homebrew-postgres-to-a-new-version/),
is that you have to **_change the name_** of the **path** to your **_old data_**
to **something other than the default** so that **Homebrew** can place the new
version data path into its default path, and therefore not overwrite the old
data.

So in the end, these are the steps I took that resulted in a **_successful_**
**PostgreSQL 11.1** install on my machine:

According to **_Olivier_**'s **post** (and I did encounter these issues at one
point during one of my many attempts), some of the **_errors_** (or similar
ones) we might encounter when an accidental upgrade of **PostgreSQL** takes
place via a **Homebrew** upgrade are the following:

```markdown
FATAL: database files are incompatible with server DETAIL: The data directory
was initialized by PostgreSQL version 10.4, which is not compatible with this
version 11.1.
```

According to **Olivier** (and he is right), _"No need to panic. Your data should
be fine. While you’ve upgraded the Postgres library, your existing databases
have not been removed. They simply need to be upgraded to run with the new
library."_

```markdown
mv /usr/local/var/postgres/ /usr/local/var/postgres.10.4.backup/
```

That way, when I executed the **PostgreSQL** database upgrade, version **11.1**
could move into `/usr/local/var/postgres/` with no conflicts.

Once I did that, I was able to execute the following command which resulted in a
completely **_successful_** **installation** and **upgrade** of **PostgreSQL**
from **version 10.4** to **11.1**:

```markdown
brew postgresql-upgrade-database
```

And the following was returned in the **Terminal** **_console_**:

```markdown
brew postgresql-upgrade-database ==> Upgrading postgresql data from 10 to 11...
Stopping `postgresql`... (might take a while) ==> Successfully stopped
`postgresql` (label: homebrew.mxcl.postgresql) ==> Moving postgresql data from
/usr/local/var/postgres to /usr/local/var/postgr The files belonging to this
database system will be owned by user "mariacam". This user must also own the
server process.

The database cluster will be initialized with locale "en_US.UTF-8". The default
database encoding has accordingly been set to "UTF8". The default text search
configuration will be set to "english".

Data page checksums are disabled.

fixing permissions on existing directory /usr/local/var/postgres ... ok creating
subdirectories ... ok selecting default max_connections ... 100 selecting
default shared_buffers ... 128MB selecting dynamic shared memory implementation
... posix creating configuration files ... ok running bootstrap script ... ok
performing post-bootstrap initialization ... ok syncing data to disk ... ok

WARNING: enabling "trust" authentication for local connections You can change
this by editing pg_hba.conf or using the option -A, or --auth-local and
--auth-host, the next time you run initdb.

Success. You can now start the database server using:

/usr/local/opt/postgresql/bin/pg_ctl -D /usr/local/var/postgres -l logfile start

## Performing Consistency Checks

Checking cluster versions ok Checking database user is the install user ok
Checking database connection settings ok Checking for prepared transactions ok
Checking for reg\* data types in user tables ok Checking for contrib/isn with
bigint-passing mismatch ok Creating dump of global objects ok Creating dump of
database schemas ok Checking for presence of required libraries ok Checking
database user is the install user ok Checking for prepared transactions ok

If pg_upgrade fails after this point, you must re-initdb the new cluster before
continuing.

## Performing Upgrade

Analyzing all rows in the new cluster ok Freezing all rows in the new cluster ok
Deleting files from new pg_xact ok Copying old pg_xact to new server ok Setting
next transaction ID and epoch for new cluster ok Deleting files from new
pg_multixact/offsets ok Copying old pg_multixact/offsets to new server ok
Deleting files from new pg_multixact/members ok Copying old pg_multixact/members
to new server ok Setting next multixact ID and offset for new cluster ok
Resetting WAL archives ok Setting frozenxid and minmxid counters in new cluster
ok Restoring global objects in the new cluster ok Restoring database schemas in
the new cluster ok Copying user relation files ok Setting next OID for new
cluster ok Sync data directory to disk ok Creating script to analyze new cluster
ok Creating script to delete old cluster ok

## Upgrade Complete

Optimizer statistics are not transferred by pg_upgrade so, once you start the
new server, consider running: ./analyze_new_cluster.sh

Running this script will delete the old cluster's data files:
./delete_old_cluster.sh ==> Upgraded postgresql data from 10 to 11! ==> Your
postgresql 10 data remains at /usr/local/var/postgres.old ==> Successfully
started `postgresql` (label: homebrew.mxcl.postgresql)
```

As you can see, I still have my old data! And my upgrade was also a success.

The only thing to note, however, is that the default superuser which is set up
with your first (or previous) **Homebrew** install of **PostgreSQL** (your
computer username), has to be recreated. Not a problem!

```markdown
psql: FATAL: database "mariacam" does not exist
```

To fix this issue, I did the following:

```markdown
createdb mariacam
```

Then I tried the following (again):

```markdown
psql
```

And this time **Terminal** returned the following:

```markdown
psql (11.1) Type "help" for help.

mariacam=#
```

Success! But next I had to check whether or not I had the default `postgres`
user, so I typed the following `postgres query` in the **PostgreSQL**
**_language_**:

```markdown
SELECT \* FROM pg_user;
```

This returned all the users that were associated with **PostgresQL**. In my
case, only the root user appeared, which is my computer username. If you are not
sure what your **_computer username_** is, type the following command before
creating your `postgres` root user:

```markdown
whoami
```

This tells you what your computer username is that is associated with the
computer profile you are currently in, and it should be your root administrator
profile. Since you are upgrading and therefore not installing for the first
time, you can simply use the `createdb whoami` command, and that will suffice.

To create the **_default_** `postgres` user, I did the following (replace
'password' with a password of your choosing):

```markdown
CREATE USER postgres WITH SUPERUSER PASSWORD 'password';
```

And I do this inside my root user. In other words, I login with the command
`psql` and then **Terminal** returns the following:

```markdown
psql (11.1) Type "help" for help.
```

Then, when I re-execute the **PostgreSQL** query

```markdown
SELECT \* FROM pg_user;
```

the **_newly created_** `postgres` user appears in the list of users associated
with **PostgreSQL**:

```markdown
usename | usesysid | usecreatedb | usesuper | userepl | usebypassrls | passwd |
valuntil | useconfig
----------+----------+-------------+----------+---------+--------------+----------+----------+-----------
mariacam | xx | t | t | t | t | **\*\*\*\*** | | postgres | xxxxx | f | t | f |
f | **\*\*\*\*** | | (2 rows)
```

As you can see, `postgres` is a **superuser**, but **_cannot_** create databases
yet. This is easily fixed. Next I execute the following executable to permit the
`postgres` user to **_create databases_**:

```markdown
ALTER USER postgres CREATEDB;
```

Then if I run

```markdown
SELECT \* FROM pg_user;
```

**Terminal** returns the following:

```markdown
usename | usesysid | usecreatedb | usesuper | userepl | usebypassrls | passwd |
valuntil | useconfig
----------+----------+-------------+----------+---------+--------------+----------+----------+-----------
mariacam | xx | t | t | t | t | **\*\*\*\*** | | postgres | xxxxx | t | t | f |
f | **\*\*\*\*** | | (2 rows)
```

Note that the `postgres` user's `usecreatedb` column is now set to `true (t)`.

But what if we don't want the `postgres` user to have `superuser` privileges? I
know I don't. I leave that to my root user which I try and avoid using anyway.
In order to **_set_** `superuser` for the `postgres` user to **_false_**, I do
the following:

```markdown
ALTER USER postgres NOSUPERUSER;
```

And then when I run

```markdown
SELECT \* FROM pg_user;
```

again, I get the following for the `postgres` user:

```markdown
usename | usesysid | usecreatedb | usesuper | userepl | usebypassrls | passwd |
valuntil | useconfig
----------+----------+-------------+----------+---------+--------------+----------+----------+-----------
mariacam | xx | t | t | t | t | **\*\*\*\*** | | postgres | xxxxx | t | f | f |
f | **\*\*\*\*** | | (2 rows)
```

And now the `postgres` user's `usesuper` is set to `false (f)`.

There were **_two other things_** I had to do to make my **PostgreSQL**
**_upgrade_** **mirror** my **_previous_** **PostgreSQL** **_configuration_**. I
had to **add** a **new server** to my **pgAdmin4.4 GUI**. At this point the
server was pointing to **PostgresQL 10.4** instead of **PostgreSQL 11.1**.

I opened up **pgAdmin4.4** to check the status of my server there. I could not
connect, and the name of the server (as I had named it) was **PostgreSQL 10.4**.
I took no chances. I uninstalled **pgAdmin4.4** and re-installed it.
Interestingly enough, the server was still there. Probably the uninstall was not
clean. But that did not matter anyway. All I had to do was create a new server
connection and delete the old one. Then I simply created a new server
connection:

First I clicked on **'Servers'** in the **pgAdmin4.4** **_client_**.

Then I right clicked on **'Servers'** and selected **'Create Server'**. There, I
first went into the **connection tab** and in **Host name/address** **_field_**
I typed **'localhost'**. I made sure that in the **Port** field the number
**'5432'** populated it, that the **_name_** of the **maintenance database** was
**'postgres'**, and that the **_username_** was **'postgres'**.

Then in the **General tab**, in the **_name field_**, I typed the name I wanted
to give my new server.

Last, I **_clicked_** the **'save'** button.

My **databases** **_appeared_** in the **sidebar** to the **_left_** in the
**pgAdmin client**. Success!

I had one last step I had to take to ensure that my **PostgreSQL** upgrade
**_configuration_** **mirrored** that of the **_previous version_**. I had to
**_change_** the following **configuration** that was implemented on version
upgrade:

```markdown
WARNING: enabling "trust" authentication for local connections You can change
this by editing pg_hba.conf or using the option -A, or --auth-local and
--auth-host, the next time you run initdb.
```

This means that **_any_** `postgres` **user**, root or otherwise, can login to
**PostgreSQL** in the **Command Line** whether it be the **_system_**
**Terminal** or **_integrated_** **Terminal** in a **code editor**,
**_without_** providing a **password**. That is the **default behavior** when
**_installing_** with **Homebrew**. I had changed it in the previous install so
that all users had to login with their password. I will discuss this in my next
post and link to it here.

**_Happy PostgreSQL v 10.4 to 11.1 upgrading!_**

## Related Links:

-   [Migrating Homebrew Postgres to a New Version](https://olivierlacan.com/posts/migrating-homebrew-postgres-to-a-new-version/)

-   [Changing your (Homebrew) PostgreSQL configuration from trust to md5](/blog/changing-your-homebrew-postgresql-configuration-from-trust-to-md5/)
