/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    { id: 1, name: 'master1', player_id: 1, password: 'master1' },
    { id: 2, name: 'master2', player_id: 2, password: 'master2' },
  ]);
};
