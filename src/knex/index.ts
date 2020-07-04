import Knex from 'knex';

const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];

const knex = Knex(config);

knex
  .raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
  .then(() => console.log(`EXTENSION CREATED`))
  .catch(() => console.log('FAILED TO CREATE EXTENSION'));

export const UserModel = knex('users');

export default knex;
