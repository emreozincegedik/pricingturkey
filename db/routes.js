var express = require("express");
var router = express.Router();
var sql = require("mssql");
errCols = [];
const columnChecker = (body, columns) => {
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

//----------------------bulten--------------------------
const bultenColumns = ["baslikTR", "baslikEN", "yaziTR", "yaziEN"];
router.post("/bulten/select", (req, res) => {
  // console.log(req.body);
  console.log({ incomingBody: req.body });
  var sql_request = new sql.Request();
  sql_request
    .input("input", sql.Int, req.body.id)
    .input("lastX", sql.Int, req.body.lastX)
    .query(
      req.body.id
        ? "select * from bulten where id=@input"
        : req.body.lastX
        ? "SELECT TOP(@lastX) * FROM bulten  ORDER BY id DESC"
        : "select * from bulten"
    )
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres.recordset);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});
router.post("/bulten/delete", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to update" });
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .query("delete from bulten where id=@id")
    .then((dbres) => {
      console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

router.post("/bulten/insert", (req, res) => {
  // console.log(req.body);

  if (!columnChecker(req.body, bultenColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("baslikTR", sql.NVarChar, req.body[bultenColumns[0]])
    .input("baslikEN", sql.NVarChar, req.body[bultenColumns[1]])
    .input("yaziTR", sql.NVarChar, req.body[bultenColumns[2]])
    .input("yaziEN", sql.NVarChar, req.body[bultenColumns[3]])
    .query(
      "insert into bulten (baslikTR,baslikEN,yaziTR,yaziEN) values (@baslikTR,@baslikEN,@yaziTR,@yaziEN)"
    )
    .then((dbres) => {
      console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json("Internal server error");
    });
});
router.post("/bulten/update", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to update" });
    return;
  }
  if (!columnChecker(req.body, bultenColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .input("baslikTR", sql.NVarChar, req.body[bultenColumns[0]])
    .input("baslikEN", sql.NVarChar, req.body[bultenColumns[1]])
    .input("yaziTR", sql.NVarChar, req.body[bultenColumns[2]])
    .input("yaziEN", sql.NVarChar, req.body[bultenColumns[3]])
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
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

//--------------------login-------------------------
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
      res.json(err);
    });
});
router.post("/login/update", (req, res) => {
  // console.log(req.body);
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
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

//--------------------ekip-------------------

const ekipColumns = ["isim", "soyisim", "aciklamaTR", "aciklamaEN", "resim"];
router.post("/ekip/select", (req, res) => {
  // console.log(req.body);
  console.log({ incomingBody: req.body });
  var sql_request = new sql.Request();
  sql_request
    .input("input", sql.Int, req.body.id)
    .query(
      req.body.id ? "select * from ekip where id=@input" : "select * from ekip"
    )
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres.recordset);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json("Internal server error");
    });
});

router.post("/ekip/insert", (req, res) => {
  // console.log(req.body);
  if (!columnChecker(req.body, ekipColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("isim", sql.NVarChar, req.body[ekipColumns[0]])
    .input("soyisim", sql.NVarChar, req.body[ekipColumns[1]])
    .input("aciklamaTR", sql.NVarChar, req.body[ekipColumns[2]])
    .input("aciklamaEN", sql.NVarChar, req.body[ekipColumns[3]])
    .input("resim", sql.NVarChar, req.body[ekipColumns[4]])
    .query(
      "insert into ekip (isim,soyisim,aciklamaTR,aciklamaEN,resim) values (@isim,@soyisim,@aciklamaTR,@aciklamaEN,@resim)"
    )
    .then((dbres) => {
      console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});
router.post("/ekip/update", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to update" });
    return;
  }
  if (!columnChecker(req.body, ekipColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .input("isim", sql.NVarChar, req.body[ekipColumns[0]])
    .input("soyisim", sql.NVarChar, req.body[ekipColumns[1]])
    .input("aciklamaTR", sql.NVarChar, req.body[ekipColumns[2]])
    .input("aciklamaEN", sql.NVarChar, req.body[ekipColumns[3]])
    .input("resim", sql.NVarChar, req.body[ekipColumns[4]])
    .query(
      `
    update ekip
    set
      isim=@isim,
      soyisim=@soyisim,
      aciklamaTR=@aciklamaTR,
      aciklamaEN=@aciklamaEN,
      resim=@resim,
      degistirilmeTarihi=getdate()
    where
      id=@id
      `
    )
    .then((dbres) => {
      console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

router.post("/ekip/delete", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to update" });
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .query("delete from ekip where id=@id")
    .then((dbres) => {
      console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

module.exports = router;
