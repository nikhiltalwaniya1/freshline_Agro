const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./freshAgro_swagger.json");
const dotEnv = require("dotenv")
dotEnv.config()
const router = require("./api/route")
const cors = require("cors");
const { checkForms, checkRole } = require("./utills/checkForms")
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Swagger api configure
app.use("/freshAgro", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
//Define router here
app.use("/api/v1", router)
//create forms name
checkForms()
checkRole()
app.listen(process.env.PORT, () => {
  console.log('server started....', process.env.PORT)
})