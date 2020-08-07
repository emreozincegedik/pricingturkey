const express = require("express");
const cors = require("cors");
const sql = require("mssql");
const app = express();
require("dotenv").config();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());

var config = {
  server: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionTimeout: 150000,
};
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
sql.on("error", (err) => {
  // ... error handler
});

sql
  .connect(config)
  .then((pool) => {
    // Query

    return pool
      .request()
      .input("input_parameter", sql.Int, 1)
      .query("select * from adminLogin where id = @input_parameter");
  })
  .then((result) => {
    console.dir(result);
  })
  .catch((err) => {
    // ... error checks
    console.log(err);
  });
