const express = require('express')
const router = require('./routes')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(
  express.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 50000,
  })
)
app.use(router)

module.exports = app
