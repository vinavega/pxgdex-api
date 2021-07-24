const customExpress = require("./config/customExpress.js");
const app = customExpress();

app.listen(3000, () => console.log("starting server at door 3000"));
