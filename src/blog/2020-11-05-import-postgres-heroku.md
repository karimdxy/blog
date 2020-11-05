---
title: How to import a local (postgres) database into heroku
---

This particular issue has been such a PITA that I'm dedicating a full blog post to it. When you type in a search query like "Import local database into heroku" most of the results point to either:

1. Heroku's own documentation which recommends using an AWS S3 pre-signed url,
2. How to import your _heroku_ db into your local db.

## SHOW ME THE CODE

![Show me what you got, Rick & Morty](https://media.giphy.com/media/26DOs997h6fgsCthu/giphy.gif)

1. Export your local DB <br />

   ```bash
   pg_dump -x -O -U [DB_USERNAME] [DB_NAME] > [DUMP_NAME].sql
   ```

2. Get the heroku DB name <br />

   ```bash
     heroku pg:info -a [APP_NAME]
   ```

3. Import it <br />

   ```bash
   heroku pg:psql -a [APP_NAME] [HEROKU_DB_NAME] < [DUMP_NAME].sql
   ```

that's it. It's that simple.

A question you might have would be: Why wouldn't I use `heroku pg:push`? The problem is the op doesn't guarantee the integrity of your data, which has many unintended consequences (e.g. migrations may no longer work since the local db is not the identical to the remote db)
