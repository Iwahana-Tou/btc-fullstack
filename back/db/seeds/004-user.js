/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1,
      name: 'master1',
      player_id: 1,
      password:
        '817de9601fd668b0c23c347be52151b4e23d0e115549b0bea66c8ae0e529d980',
      salt: '5ff09d17f0a6bd0d99d2bc6277f90a56',
    },
    {
      id: 2,
      name: 'master2',
      player_id: 2,
      password:
        'f00bef55ebb882cff843c53a16c8aa4b10a61b044789e67be5602f43999ffc8b',
      salt: '8e3822e0b6a1e2811236e421bea494ed',
    },
  ]);
};
