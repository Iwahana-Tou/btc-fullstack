const express = require('express');
const knex = require('./knex');
const cors = require('cors');
const path = require('path');

function buildApp() {
  const app = express();

  app.use(express.static(path.join(__dirname, './public')));
  app.use(
    cors({
      origin: 'http://localhost:5173/',
    })
  );

  app.use(express.json());

  // app.use('/api', (req, res) => {
  //   res.send('Hello Word');
  // });

  //player
  app.get('/api/get/player', async (req, res) => {
    const playerData = await knex.select('*').from('player');
    res.json(playerData[0]);
  });

  app.get('/api/get/player/:id', async (req, res) => {
    const id = req.params.id;
    const playerData = await knex
      .where('player.id', id)
      .select('*')
      .from('player');
    res.json(playerData[0]);
  });

  //monsters
  app.get('/api/get/monsters', async (req, res) => {
    const monstersData = await knex.select('*').from('monsters');
    res.json(monstersData[0]);
  });

  app.get('/api/get/monsters/:id', async (req, res) => {
    const id = req.params.id;
    const monstersData = await knex
      .where('monsters.id', id)
      .select('*')
      .from('monsters');
    res.json(monstersData[0]);
  });

  //attack_move
  app.get('/api/get/attack_move', async (req, res) => {
    const attackMoveData = await knex.select('*').from('attack_move');
    res.send(attackMoveData);
  });

  app.get('/api/get/attack_move/:id', async (req, res) => {
    const id = req.params.id;
    const attackData = await knex
      .where('attack_move.attack_id', id)
      .select('*')
      .from('attack_move');
    res.json(attackData[0]);
  });

  //total_kills
  app.get('/api/get/total_kills', async (req, res) => {
    const totalKillsData = await knex.select('*').from('total_kills');
    res.send(totalKillsData);
  });

  app.get('/api/get/total_kills/:id', async (req, res) => {
    const id = req.params.id;
    const totalKillsData = await knex
      .where('total_kills.player_id', id)
      .join('monsters', 'total_kills.monsters_id', 'monsters.id')
      .select('*')
      .from('total_kills');
    res.send(totalKillsData);
  });

  app.post('/api/post/total_kills', async (req, res) => {
    const postData = req.body;
    await knex('total_kills').insert(postData);
  });

  return app;
}

module.exports = { buildApp };
