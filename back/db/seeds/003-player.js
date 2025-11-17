/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('player').del();
  await knex('player').insert([
    {
      id: 1,
      name: '見習い戦士',
      attack: 3,
      defense: 3,
      hitpoint: 30,
      attack_move1: 2,
      attack_move2: 3,
    },
    {
      id: 2,
      name: '戦士',
      attack: 6,
      defense: 5,
      hitpoint: 50,
      attack_move1: 2,
      attack_move2: 3,
    },
  ]);
};
