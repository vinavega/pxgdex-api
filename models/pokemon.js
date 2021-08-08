// const e = require("express");
// const { response } = require("express");
const connection = require("../infrastructure/dbConnection");
const moment = require("moment");

class pokemon {
  getAll(res) {
    const sql = "SELECT id,name FROM pokemon";
    connection.query(sql, (err, results) => {
      if (err) {
        res.status(500).json(err);
      }
      res.status(200).json(results);
    });
  }
  add(pokemon, res) {
    const sql = "INSERT INTO pokemon SET ?";
    const created = new Date();
    const updated = created;
    const isPokemonNotEmpty = pokemon.name === "";
    const isPokemonNotNull = pokemon.name === null || pokemon.name === "";
    const isPokemonUndefined = pokemon.name === undefined;
    const validations = [
      {
        rule: "name",
        valid: isPokemonNotEmpty,
        message: "Pokemon name cannot be empty",
      },
      {
        rule: "name",
        valid: isPokemonNotNull,
        message: "Pokemon name cannot be null",
      },
      {
        rule: "name",
        valid: isPokemonUndefined,
        message: "Pokemon name must exists",
      },
    ];
    const errors = validations.filter((field) => field.valid);
    const errorExists = errors.length;

    if (errorExists) {
      res.status(400).json(errors);
    } else {
      const object = { ...pokemon, created, updated };
      connection.query(sql, object, (error, result) => {
        if (error) {
          res.status(500).json(error).sendStatus(500);
        } else {
          const id = result.insertId;
          res.status(201).json({ ...pokemon, id });
        }
      });
    }
  }
  getById(id, res) {
    const sql = `SELECT id,name FROM pokemon WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(500).json(error);
      } else if (result.length === 0) {
        res.status(404).json(result);
      } else {
        const pokemon = result[0];
        res.status(200).json(pokemon);
      }
    });
  }
  updateOne(id, pokemon, res) {
    const updated = new Date();
    const object = { ...pokemon, updated };
    const isPokemonNotEmpty = pokemon.name === "";
    const isPokemonNotNull = pokemon.name === null || pokemon.name === "";
    const isPokemonUndefined = pokemon.name === undefined;
    const validations = [
      {
        rule: "name",
        valid: isPokemonNotEmpty,
        message: "Pokemon name cannot be empty",
      },
      {
        rule: "name",
        valid: isPokemonNotNull,
        message: "Pokemon name cannot be null",
      },
      {
        rule: "name",
        valid: isPokemonUndefined,
        message: "Pokemon name must exists",
      },
    ];
    const errors = validations.filter((field) => field.valid);
    const errorExists = errors.length;

    if (errorExists) {
      res.status(400).json(errors);
    } else {
      const sql = `UPDATE pokemon SET ? WHERE id = ?`;
      connection.query(sql, [object, id], (error, result) => {
        if (error) {
          res.status(500).json(error).sendStatus(500);
        } else if (result.affectedRows === 0) {
          res.status(404).json("Id not found");
        } else {
          res.status(200).json({...pokemon,id});
        }
      });
    }
  }
  delete(id, res) {
    const sql = "DELETE FROM pokemon WHERE id = ?";
    connection.query(sql, id, (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else if (result.affectedRows === 0) {
        res.status(404).json("Id not found");
      } else {
        res.status(200).json({ id });
      }
    });
  }
}

module.exports = new pokemon();
