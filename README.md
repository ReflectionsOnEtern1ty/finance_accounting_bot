Simple template for typescript telegram bot (using [`Grammy`](https://github.com/grammyjs/grammY)) with PostgreSQL database (using [`TypeORM`](https://github.com/typeorm/typeorm)) and Docker.

### Bot preparations 

- Get telegram bot key from [`@BotFather`](https://core.telegram.org/bots#6-botfather) in telegram.
- Create ".env.dev" and ".env.prod" files at root (you can copy ".env.example" file).
- Add the "BOT_TOKEN" key to the generated files with the value received from @BotFather.

### DB preparations 

- Set your DB credentials at ".env.dev" and ".env.prod".
You need to set "DB_HOST" (container name, will be used to connect to DB), "DB_NAME", "DB_USER" and "DB_PASSWORD".

### Run image

```sh
docker-compose --env-file ./.env.dev up
```

To check your database, you can use Adminer, that will be running by default at localhost:8080
To enter DB, use credentials from DB preparations step.

### Run prod image

```sh
docker-compose -f docker-compose.yml -f docker-compose.prod.yml --env-file ./.env.prod up -d
```
