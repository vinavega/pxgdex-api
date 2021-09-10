const app = require('./app')
const connection = require('../services/infrastructure/dbConnection')
const tables = require('../services/infrastructure/tables')

connection.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Successfully connected')
    tables.init(connection)
    app.listen(port, () => console.log('starting server at door ' + port))
  }
})
const port = process.env.APP_PORT || 3000
