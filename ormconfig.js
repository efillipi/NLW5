module.exports = {
  "type": process.env.DB_CLIENT,
  "database": process.env.DB_DATABASE,
  "entities": [process.env.TYPEORM_ENTITIES],
  "migrations": [process.env.TYPEORM_MIGRATION],
  "cli": {
    "migrationsDir": process.env.TYPEORM_CLI
  }
}
