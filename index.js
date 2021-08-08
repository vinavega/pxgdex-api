const customExpress = require("./config/customExpress.js");
const app = customExpress();
const connection = require("./infrastructure/dbConnection")
const tables = require("./infrastructure/tables")


connection.connect(error => {
    if(error){
        console.log(error)
    }else{
        console.log("Successfully connected")

        tables.init(connection)
        const app = customExpress()
        app.listen(3000, () => console.log("starting server at door 3000"));
    }
})