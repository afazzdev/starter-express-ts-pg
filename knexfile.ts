// Update with your config settings.
require('dotenv').config();
import parseUrl from 'ts-parse-database-url';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

module.exports = {
  development: {
    client: 'postgresql',
    connection: parseUrl(connectionString),
    migrations: {
      directory: './src/knex/migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: parseUrl(process.env.DATABASE_URL || ''),
    migrations: {
      directory: './src/knex/migrations',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
