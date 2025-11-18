/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('monsters', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('attack').notNullable();
    table.integer('defense').notNullable();
    table.integer('hitpoint').notNullable();
    table.integer('attack_move1').notNullable();
    table.integer('attack_move2').notNullable();
    table.string('src').notNullable();
    table.foreign('attack_move1').references('attack_move.attack_id');
    table.foreign('attack_move2').references('attack_move.attack_id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('attack_move');
  return knex.schema.dropTable('monsters');
};
