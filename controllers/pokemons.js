module.exports = (app) => {
  const pokemon = ["bulbasaur", 2, 3, 4, 5, 6];

  app.get("/pokemon", (req, res) => {
    res.send(pokemon);
  });

  app.post("/pokemon", (req, res) => {
    pokemon.push(req.body);
    res.send("Successfully added");
  });
};
