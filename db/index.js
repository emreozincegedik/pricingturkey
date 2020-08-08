const express = require("express");
const cors = require("cors");
const sql = require("mssql");
const app = express();
require("dotenv").config();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());

var config = {
  server: "localhost",
  user: "sa",
  password: "Wdv3GrgqYDJzMLhYi0ek",
  database: "pricingTurkey",
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
      .input("input_parameter", sql.Int, 1)
      .query("select * from test where id = @input_parameter ");
  })
  .then((result) => {
    console.dir(result);
  })
  .catch((err) => {
    // ... error checks
    console.log(err);
  });
