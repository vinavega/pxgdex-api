const express = require('express');
const consign = require('consign');

module.exports = () => {
  const app = express();
  app.use(express.json({ limit: '50mb' }));
  app.use(
    express.urlencoded({
      extended: true,
      limit: '50mb',
      parameterLimit: 50000,
    })
  );
  consign().include('controllers').into(app);
  return app;
  s;
};
