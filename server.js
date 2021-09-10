const app = require('./app')
// const connection = require('./infrastructure/dbConnection');
// const tables = require('./infrastructure/tables');

// connection.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Successfully connected');
//     tables.init(connection);
//   }
// });
const port = process.env.APP_PORT || 3000

if (require.main === module) {
  app.listen(port, () => console.log('starting server at door 3000'))
}
