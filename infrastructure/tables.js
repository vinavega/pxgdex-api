const connection = require("./dbConnection");

class Tables {
  init() {
    this.connection = connection;
    this.createTables();
  }

  createTables() {
    const sql =
      'CREATE TABLE IF NOT EXISTS pokemon(id int NOT NULL AUTO_INCREMENT,name varchar(50) NOT NULL, created datetime NOT NULL, updated datetime NOT NULL,PRIMARY KEY(id))'
    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else console.log("tables created");
    });
  }
}

module.exports = new Tables();
