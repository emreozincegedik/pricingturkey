global.basedir = __dirname;

const express = require("express");
const http = require("http");
const cors = require("cors");
const sql = require("mssql");

const routes = require("./routes");
const app = express();

require("dotenv").config();

const port = process.env.backendPort || 5000;

app.use(cors());
app.use(express.json());

app.use("/", routes);
// console.log(process.env);
var config = {
  server: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: parseInt(process.env.dbPort),
  options: {
    enableArithAbort: true,
  },
  connectionTimeout: 150000,
};
// console.log(config);

sql.on("error", (err) => {
  // ... error handler
});

sql
  .connect(config)
  .then((pool) => {
    // Query
    if (pool.connecting) {
      console.log("Connecting to db...");
    }
    if (pool.connected) {
      app.listen(port, () => {
        console.log("Server listening on port " + port);
      });
    }
    return pool;
    // .request()
    // .input("input_parameter", sql.NVarChar, "admin")
    // .query("select * from bulten"); // where username = @input_parameter
  })
  // .then((result) => {
  //   console.dir(result);
  // })
  .catch((err) => {
    // ... error checks
    console.log(err);
  });

// app.post("/login", (req, res) => {

// })
