module.exports = (app) => {
  const pokemon = require("../models/pokemon");

  app.get("/pokemon", function (req,res) {
    pokemon.getAll(res)
  });

  app.get("/pokemon/:id", function (req,res) {
    const id = parseInt(req.params.id)
    pokemon.getById(id,res)
  });

  app.post("/pokemon", (req, res) => {
    pokemon.add(req.body, res)
  });

  app.patch("/pokemon/:id", (req, res) => {
    const id = parseInt(req.params.id)
    pokemon.updateOne(id,req.body, res)
  });

  app.delete("/pokemon/:id", (req, res) => {
    const id = parseInt(req.params.id)
    pokemon.delete(id, res)
  });

};
