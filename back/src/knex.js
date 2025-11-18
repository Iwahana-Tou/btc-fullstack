// const config = require("../knexfile");
// const knex = require("knex")(config);

// module.exports = knex;

const knex = require('knex');
const knexConfig = require('../knexfile');

let env = knexConfig.development;

if (process.env.NODE_ENV === 'production') {
  env = knexConfig.production;
}

console.log(process.env.NODE_ENV);

module.exports = knex(env);
