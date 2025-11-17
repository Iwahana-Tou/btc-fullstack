/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('total_kills', function (table) {
    table.integer('player_id').notNullable();
    table.integer('monsters_id').notNullable();
    table.date('time_stamp').notNullable();
    table.foreign('player_id').references('player.id');
    table.foreign('monsters_id').references('monsters.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('total_kills');
};
