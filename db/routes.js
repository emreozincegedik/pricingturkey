var express = require("express");
var router = express.Router();
var sql = require("mssql");
const columns = ["baslikTR", "baslikEN", "yaziTR", "yaziEN"];
errCols = [];
const bultenColumnChecker = (body) => {
  let a = true;
  columns.forEach((col) => {
    if (!(col in body)) {
      errCols.push(col);
      a = false;
    }
  });
  console.log(errCols);
  return a;
};
router.post("/bulten/select", (req, res) => {
  // console.log(req.body);
  console.log({ incomingBody: req.body });
  var sql_request = new sql.Request();
  sql_request
    .input("input", sql.Int, req.body.id)
    .query(
      req.body.id
        ? "select * from bulten where id=@input"
        : "select * from bulten"
    )
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.send(dbres.recordset);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send("Internal server error");
    });
});
router.post("/bulten/delete", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.send("id is needed to update");
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .query("delete from bulten where id=@id")
    .then((dbres) => {
      console.log(dbres);
      res.status(200);
      res.send(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send(err);
    });
});

router.post("/bulten/insert", (req, res) => {
  // console.log(req.body);
  if (!bultenColumnChecker(req.body)) {
    res.status(400);
    res.send("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("baslikTR", sql.NVarChar, req.body[columns[0]])
    .input("baslikEN", sql.NVarChar, req.body[columns[1]])
    .input("yaziTR", sql.NVarChar, req.body[columns[2]])
    .input("yaziEN", sql.NVarChar, req.body[columns[3]])
    .query(
      "insert into bulten (baslikTR,baslikEN,yaziTR,yaziEN) values (@baslikTR,@baslikEN,@yaziTR,@yaziEN)"
    )
    .then((dbres) => {
      console.log(dbres);
      res.status(200);
      res.send(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send("Internal server error");
    });
});
router.post("/bulten/update", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.send("id is needed to update");
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .input("baslikTR", sql.NVarChar, req.body[columns[0]])
    .input("baslikEN", sql.NVarChar, req.body[columns[1]])
    .input("yaziTR", sql.NVarChar, req.body[columns[2]])
    .input("yaziEN", sql.NVarChar, req.body[columns[3]])
    .query(
      `
    update bulten
    set
      baslikTR=@baslikTR,
      baslikEN=@baslikEN,
      yaziTR=@yaziTR,
      yaziEN=@yaziEN,
      degistirilmeTarihi=getdate()
    where
      id=@id
      `
    )
    .then((dbres) => {
      console.log(dbres);
      res.status(200);
      res.send(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send(err);
    });
});

router.post("/login/select", (req, res) => {
  if (!(req.body.username && req.body.pwd)) {
    // console.log(req.body.username, req.body.pwd);
    console.log(
      "Bad request: " + req.body.username || null + " " + req.body.pwd || null
    );
    res.status(400);
    res.json({
      username: req.body.username || null,
      pwd: req.body.pwd || null,
    });
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("username", sql.NVarChar, req.body.username)
    .input("pwd", sql.NVarChar, req.body.pwd)
    .query("select * from login where username=@username and pwd=@pwd")
    .then((dbres) => {
      console.log(dbres.recordset);
      if (dbres.recordset.length < 1) {
        res.status(403);
        res.json({ message: "username or password is false" });
      } else {
        res.status(200);
        res.json(dbres.recordset);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send(err);
    });
});
router.post("/login/update", (req, res) => {
  console.log(req.body);
  if (!(req.body.username && req.body.pwd)) {
    // console.log(req.body.username, req.body.pwd);
    res.status(400);
    res.json({
      username: req.body.username || null,
      pwd: req.body.pwd || null,
    });
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("username", sql.NVarChar, req.body.username)
    .input("pwd", sql.NVarChar, req.body.pwd)
    .query(
      "update login set username=@username, pwd=@pwd where username=@username"
    )
    .then((dbres) => {
      console.log(dbres.recordset);
      res.status(200);
      res.send(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send(err);
    });
});
module.exports = router;
