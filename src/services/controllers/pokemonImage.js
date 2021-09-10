const pokemonImage = require('../models/pokemonImage')

const pokemonImageController = {
  upload(req, res) {
    pokemonImage.add(req.body, res)
  },
}

module.exports = pokemonImageController
