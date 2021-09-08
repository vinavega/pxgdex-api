const connection = require("../infrastructure/dbConnection");
const moment = require("moment");

class pokemonImage {
    add(imageData,res){
        const sql = "INSERT INTO pokemon_image SET ?";
        const created = new Date();
        const updated = created;
        // const isPokemonNotEmpty = pokemon.name === "";
        // const isPokemonNotNull = pokemon.name === null;
        // const isPokemonUndefined = pokemon.name === undefined;
        // const validations = [
        //   {
        //     rule: "name",
        //     valid: isPokemonNotEmpty,
        //     message: "Pokemon name cannot be empty",
        //   },
        //   {
        //     rule: "name",
        //     valid: isPokemonNotNull,
        //     message: "Pokemon name cannot be null",
        //   },
        //   {
        //     rule: "name",
        //     valid: isPokemonUndefined,
        //     message: "Pokemon name must exists",
        //   },
        // ];
        // const errors = validations.filter((field) => field.valid);
        // const errorExists = errors.length;
    
        // if (errorExists) {
        //   res.status(400).json(errors);
        // } else {
          const object = { ...imageData, created, updated };
          connection.query(sql, object, (error, result) => {
            if (error) {
              res.status(500).json(error).sendStatus(500);
            } else {
              const id = result.insertId;
              res.status(201).json({id});
            }
          });
        // }
      }
}
module.exports = new pokemonImage();