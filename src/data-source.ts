import "reflect-metadata"
import { DataSource } from "typeorm"
import { Person } from "./models/Person/PersonEntity"
import * as dotenv from "dotenv"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [Person],
    migrations: [],
    subscribers: [],
})
