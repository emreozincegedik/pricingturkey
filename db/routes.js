var express = require("express");
var router = express.Router();
var sql = require("mssql");
router.get("/", (req, res) => {
  console.log(req.body);
  var sql_request = new sql.Request();
  sql_request
    .input("input", sql.Int, req.body.id)
    .query(
      req.body.id
        ? "select * from bulten where id=@input"
        : "select * from bulten"
    )
    .then((dbres) => {
      console.log(dbres);
      res.status(200);
      res.send(dbres.recordset);
    });
});

module.exports = router;
