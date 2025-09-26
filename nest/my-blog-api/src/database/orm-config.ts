// migraciones

import { DataSource } from "typeorm"

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "BlogBD",
    entities: ['./src/**/*.entity.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    synchronize:false
    //migrationsTableName: "custom_migration_table",
})