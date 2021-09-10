const pokemon = require('../models/pokemon')

const pokemonController = {
  all(req, res) {
    pokemon.getAll(res)
  },

  byId(req, res) {
    const id = parseInt(req.params.id)
    pokemon.getById(id, res)
  },

  create(req, res) {
    pokemon.add(req.body, res)
  },

  update(req, res) {
    const id = parseInt(req.params.id)
    pokemon.updateOne(id, req.body, res)
  },

  delete(req, res) {
    const id = parseInt(req.params.id)
    pokemon.delete(id, res)
  },
}

module.exports = pokemonController
