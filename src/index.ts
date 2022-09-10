import "./config";
import "reflect-metadata"
import { AppDataSource } from "./api/data-source";
import { startBot } from "./bot";

AppDataSource.initialize()
    .then(() => {
        startBot();
    })
    .catch((error) => console.log(error))
