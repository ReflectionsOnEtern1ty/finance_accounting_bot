import { DataSource } from "typeorm";
import { example_text } from "./entity/example_text";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env['DB_HOST'],
    port: 5432,
    username: process.env['DB_USER'],
    password: process.env['DB_PASSWORD'],
    database: process.env['DB_NAME'],
    entities: [example_text], 
    synchronize: false,
    logging: false,
})