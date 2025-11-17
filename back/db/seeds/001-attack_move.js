/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('monsters').del();
  await knex('player').del();
  await knex('attack_move').del();
  await knex('attack_move').insert([
    { attack_id: 1, attack_name: 'ぶつかる', attack: 1 },
    { attack_id: 2, attack_name: '叩く', attack: 2 },
    { attack_id: 3, attack_name: '斬る', attack: 3 },
    { attack_id: 4, attack_name: '難問', attack: 4 },
    { attack_id: 5, attack_name: '叩き潰す', attack: 5 },
  ]);
};
