const app = require('./app');
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

if (require.main === module) {
  app.listen(3000, () => console.log('starting server at door 3000'));
}
