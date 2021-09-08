module.exports = (app) => {
  const pokemonImage = require('../models/pokemonImage');
  app.post('/image', (req, res) => {
    pokemonImage.add(req.body, res);
  });
};
