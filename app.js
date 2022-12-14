require("dotenv").config()
const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo') // hacer uso del modulo
const app = express();

app.use(cors())
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`);
})

dbConnect()