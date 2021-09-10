const Router = require('express')
const pokemonController = require('../services/controllers/pokemon')
const pokemonImageController = require('../services/controllers/pokemonImage')

const router = Router()
router.get('/', (req, res) => {
  res.json({ message: 'Hello world!' })
})

router.get('/pokemon', pokemonController.all)
router.get('/pokemon/:id', pokemonController.byId)
router.post('/pokemon', pokemonController.create)
router.patch('/pokemon/:id', pokemonController.update)
router.delete('/pokemon/:id', pokemonController.delete)

router.post('/pokemon/image', pokemonImageController.upload)

module.exports = router
