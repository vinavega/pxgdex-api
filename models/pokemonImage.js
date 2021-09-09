const connection = require('../infrastructure/dbConnection');

class PokemonImage {
  add(imageData, res) {
    const sql = 'INSERT INTO pokemon_image SET ?';
    const created = new Date();
    const updated = created;
    const object = { ...imageData, created, updated };
    connection.query(sql, object, (error, result) => {
      if (error) {
        res.status(500).json(error).sendStatus(500);
      } else {
        const id = result.insertId;
        res.status(201).json({ id });
      }
    });
  }
}
module.exports = new PokemonImage();
