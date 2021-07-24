module.exports = (app) => {
  app.get("/pokemon", (req, res) => {
    const pokemon = ["bulbasauro", 2, 3, 4, 5, 6];
    res.send(pokemon);
  });
};
