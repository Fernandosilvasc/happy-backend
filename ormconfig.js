module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [`${process.env.ENTITIES_PATH}`],
  migrations: [`${process.env.MIGRATIONS_PATH}`],
  synchronize: false,
  logging: true,
  ssl: {
    rejectUnauthorized: false
  },
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
// {
//     "type": "sqlite",
//     "database": "./src/database/database.sqlite",
//     "migrations": [
//         "./src/database/migrations/*.ts"
//     ],
//     "entities": [
//         "./src/models/*.ts"
//     ],
//     "cli": {
//         "migrationsDir": "./src/database/migrations"
//     }
// }

