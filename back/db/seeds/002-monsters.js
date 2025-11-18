/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('monsters').del();
  await knex('monsters').insert([
    {
      id: 1,
      name: 'スライム',
      attack: 1,
      defense: 1,
      hitpoint: 10,
      attack_move1: 1,
      attack_move2: 1,
      src: 'https://i.ibb.co/bM1LXcZr/image.png',
    },
    {
      id: 2,
      name: 'ドラキー',
      attack: 2,
      defense: 2,
      hitpoint: 10,
      attack_move1: 1,
      attack_move2: 2,
      src: 'https://i.ibb.co/cSNWgyWk/4.png',
    },
    {
      id: 3,
      name: 'イタズラもぐら',
      attack: 3,
      defense: 1,
      hitpoint: 10,
      attack_move1: 2,
      attack_move2: 3,
      src: 'https://i.ibb.co/BVZn4L7Y/1.png',
    },
    {
      id: 4,
      name: 'ゴーレム',
      attack: 5,
      defense: 5,
      hitpoint: 25,
      attack_move1: 2,
      attack_move2: 5,
      src: 'https://i.ibb.co/20ksj2pd/2.png',
    },
  ]);
};
