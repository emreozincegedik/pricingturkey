const express = require("express");
const cors = require("cors");
const sql = require("mssql");
const app = express();
require("dotenv").config();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());
console.log(process.env);
var config = {
  server: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  options: {
    enableArithAbort: true,
  },
  connectionTimeout: 150000,
};

// const run = async () => {
//   let pool;
//   try {
//     console.log("Bağlantı açılıyor");
//     pool = await sql.connect(config);
//     const { res } = await sql.query`select * from users;`;
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     await pool.close();
//     console.log("Bağlantı kapandı");
//   }
// };
// run();
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
      .input("input_parameter", sql.NVarChar, "admin")
      .query("select * from bulten"); // where username = @input_parameter
  })
  .then((result) => {
    console.dir(result);
  })
  .catch((err) => {
    // ... error checks
    console.log(err);
  });
