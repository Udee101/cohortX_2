import "reflect-metadata"
import { DataSource } from "typeorm"
import { Person } from "./models/Person"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test1234",
    database: "stage2_db",
    synchronize: true,
    logging: false,
    entities: [Person],
    migrations: [],
    subscribers: [],
})
