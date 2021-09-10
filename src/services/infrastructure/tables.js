const connection = require('./dbConnection')

class Tables {
  init() {
    this.connection = connection
    this.createPokemons()
    this.createPokemonsImages()
  }

  createPokemons() {
    const sql = `CREATE TABLE IF NOT EXISTS pokemon(
        id int NOT NULL AUTO_INCREMENT,
        name varchar(50) NOT NULL, 
        created datetime NOT NULL, 
        updated datetime NOT NULL,
        PRIMARY KEY(id)
        )`
    this.connection.query(sql, (error, response) => {
      if (error) {
        console.log(error)
      } else if (response.warningCount === 0) {
        console.log('table pokemon created')
      }
    })
  }
  createPokemonsImages() {
    const sql = `CREATE TABLE IF NOT EXISTS pokemon_image(
        id int NOT NULL AUTO_INCREMENT, 
        image LONGTEXT, 
        created datetime NOT NULL, 
        updated datetime NOT NULL,
        pokemon_id int NOT NULL, 
        PRIMARY KEY(id), 
        FOREIGN KEY (pokemon_id) REFERENCES pokemon(id)
        );`
    this.connection.query(sql, (error, response) => {
      if (error) {
        console.log(error)
      } else if (response.warningCount === 0) {
        console.log('table pokemon_image created')
      }
    })
  }
}

module.exports = new Tables()
