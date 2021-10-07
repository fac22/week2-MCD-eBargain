# NOTES

All of the things we have learnt, discovered or problems we have solved.

## SETUP

- Setup `prettier` & `eslint`
- Install `express`
- Install `nodemon`
- Install `pg`
- Create an `.env` file containing the `DATABASE_URL`
- Create a `create_db` & `populate_db` scripts
- Create `init.sql` to run with `populate_db`

## USEFUL COMMANDS

`sudo /etc/init.d/postgresql restart` restarts`postgres` if encountering error like :

```
psql: could not connect to server: No such file or directory
    Is the server running locally and accepting
    connections on Unix domain socket "/var/run/postgresql/.s.PGSQL.5432"?
```
