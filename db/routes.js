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
const bultenColumns = ["baslikTR", "baslikEN", "yaziTR", "yaziEN", "resim"];
router.post("/bulten/select", (req, res) => {
  console.log({ incomingBody: req.body });
  // console.log("??: " + req.body.page !== undefined);
  if (
    ((req.body.page - 1) * 6 < 0 || isNaN(parseInt(req.body.page))) &&
    req.body.page !== undefined
  ) {
    res.status(403);
    res.json([]);
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("input", sql.Int, req.body.id)
    .input("lastX", sql.Int, req.body.lastX)
    .input("page", sql.Int, (req.body.page - 1) * 6)
    .input("date", sql.NVarChar, req.body.date)
    .input("random", sql.Int, req.body.random)
    .input("lastid", sql.Int, req.body.lastid)
    .input("ownid", sql.Int, req.body.ownid)
    .input("year", sql.Int, req.body.year)
    .input("pages", sql.Int, (req.body.pages - 1) * 6)
    .query(
      req.body.id
        ? "select * from bulten where id=@input"
        : req.body.lastX
        ? "SELECT TOP(@lastX) * FROM bulten  ORDER BY id DESC"
        : req.body.year
        ? "select * from bulten where year(eklenmeTarihi)=@year ORDER BY id DESC OFFSET @pages ROWS FETCH NEXT 6 ROWS ONLY"
        : req.body.page
        ? "SELECT * FROM bulten ORDER BY id DESC OFFSET @page ROWS FETCH NEXT 6 ROWS ONLY"
        : req.body.random
        ? "SELECT TOP(@random) * FROM bulten where id != @ownid and id!=@lastid ORDER BY NEWID()"
        : req.body.date
        ? " select * from bulten where eklenmeTarihi between CAST(@date AS DATETIME2) and CAST(@date AS DATETIME2)"
        : req.body.years
        ? "select distinct year(eklenmeTarihi) as eklenmeTarihi from bulten"
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
    res.json({ message: "id is needed to delete" });
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .query("delete from bulten where id=@id")
    .then((dbres) => {
      // console.log(dbres);
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
    .input("resim", sql.NVarChar, req.body[bultenColumns[4]])
    .query(
      "insert into bulten (baslikTR,baslikEN,yaziTR,yaziEN,resim) values (@baslikTR,@baslikEN,@yaziTR,@yaziEN,@resim)"
    )
    .then((dbres) => {
      // console.log(dbres);
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
    .input("resim", sql.NVarChar, req.body[bultenColumns[4]])
    .query(
      `
    update bulten
    set
      baslikTR=@baslikTR,
      baslikEN=@baslikEN,
      yaziTR=@yaziTR,
      yaziEN=@yaziEN,
      resim=@resim,
      degistirilmeTarihi=getdate()
    where
      id=@id
      `
    )
    .then((dbres) => {
      // console.log(dbres);
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
      // console.log(dbres.recordset);
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
      // console.log(dbres.recordset);
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
      // console.log(dbres);
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
      // console.log(dbres);
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
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

//----------------------haber--------------------------
const haberColumns = ["baslikTR", "baslikEN", "yaziTR", "yaziEN", "resim"];
router.post("/haber/select", (req, res) => {
  // console.log(req.body);
  console.log({ incomingBody: req.body });
  if (
    ((req.body.page - 1) * 6 < 0 || isNaN(parseInt(req.body.page))) &&
    req.body.page !== undefined
  ) {
    res.status(403);
    res.json([]);
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("input", sql.Int, req.body.id)
    .input("lastX", sql.Int, req.body.lastX)
    .input("page", sql.Int, (req.body.page - 1) * 6)
    .input("date", sql.NVarChar, req.body.date)
    .input("year", sql.Int, req.body.year)
    .input("pages", sql.Int, (req.body.pages - 1) * 6)
    .query(
      req.body.id
        ? "select * from haber where id=@input"
        : req.body.lastX
        ? "SELECT TOP(@lastX) * FROM haber  ORDER BY id DESC"
        : req.body.page
        ? "SELECT * FROM haber ORDER BY id DESC OFFSET @page ROWS FETCH NEXT 6 ROWS ONLY"
        : req.body.date
        ? " select * from haber where eklenmeTarihi between CAST(@date AS DATETIME2) and CAST(@date AS DATETIME2)"
        : req.body.years
        ? "select distinct year(eklenmeTarihi) as eklenmeTarihi from haber"
        : req.body.year
        ? "select * from haber where year(eklenmeTarihi)=@year ORDER BY id DESC OFFSET @pages ROWS FETCH NEXT 6 ROWS ONLY"
        : "select * from haber"
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
router.post("/haber/delete", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to delete" });
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .query("delete from haber where id=@id")
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

router.post("/haber/insert", (req, res) => {
  // console.log(req.body);

  if (!columnChecker(req.body, haberColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("baslikTR", sql.NVarChar, req.body[haberColumns[0]])
    .input("baslikEN", sql.NVarChar, req.body[haberColumns[1]])
    .input("yaziTR", sql.NVarChar, req.body[haberColumns[2]])
    .input("yaziEN", sql.NVarChar, req.body[haberColumns[3]])
    .input("resim", sql.NVarChar, req.body[haberColumns[4]])
    .query(
      "insert into haber (baslikTR,baslikEN,yaziTR,yaziEN,resim) values (@baslikTR,@baslikEN,@yaziTR,@yaziEN,@resim)"
    )
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json("Internal server error");
    });
});
router.post("/haber/update", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to update" });
    return;
  }
  if (!columnChecker(req.body, haberColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .input("baslikTR", sql.NVarChar, req.body[haberColumns[0]])
    .input("baslikEN", sql.NVarChar, req.body[haberColumns[1]])
    .input("yaziTR", sql.NVarChar, req.body[haberColumns[2]])
    .input("yaziEN", sql.NVarChar, req.body[haberColumns[3]])
    .input("resim", sql.NVarChar, req.body[haberColumns[4]])
    .query(
      `
    update haber
    set
      baslikTR=@baslikTR,
      baslikEN=@baslikEN,
      yaziTR=@yaziTR,
      yaziEN=@yaziEN,
      resim=@resim,
      degistirilmeTarihi=getdate()
    where
      id=@id
      `
    )
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

//----------------------duyuru--------------------------
const duyuruColumns = ["baslikTR", "baslikEN", "yaziTR", "yaziEN", "resim"];
router.post("/duyuru/select", (req, res) => {
  // console.log(req.body);
  console.log({ incomingBody: req.body });
  if (
    ((req.body.page - 1) * 6 < 0 || isNaN(parseInt(req.body.page))) &&
    req.body.page !== undefined
  ) {
    res.status(403);
    res.json([]);
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("input", sql.Int, req.body.id)
    .input("lastX", sql.Int, req.body.lastX)
    .input("page", sql.Int, (req.body.page - 1) * 6)
    .input("date", sql.NVarChar, req.body.date)
    .input("year", sql.Int, req.body.year)
    .input("pages", sql.Int, (req.body.pages - 1) * 6)
    .query(
      req.body.id
        ? "select * from duyuru where id=@input"
        : req.body.lastX
        ? "SELECT TOP(@lastX) * FROM duyuru  ORDER BY id DESC"
        : req.body.page
        ? "SELECT * FROM duyuru ORDER BY id DESC OFFSET @page ROWS FETCH NEXT 6 ROWS ONLY"
        : req.body.date
        ? " select * from duyuru where eklenmeTarihi between CAST(@date AS DATETIME2) and CAST(@date AS DATETIME2)"
        : req.body.years
        ? "select distinct year(eklenmeTarihi) as eklenmeTarihi from duyuru"
        : req.body.year
        ? "select * from duyuru where year(eklenmeTarihi)=@year ORDER BY id DESC OFFSET @pages ROWS FETCH NEXT 6 ROWS ONLY"
        : "select * from duyuru"
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
router.post("/duyuru/delete", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to delete" });
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .query("delete from duyuru where id=@id")
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

router.post("/duyuru/insert", (req, res) => {
  // console.log(req.body);

  if (!columnChecker(req.body, duyuruColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("baslikTR", sql.NVarChar, req.body[duyuruColumns[0]])
    .input("baslikEN", sql.NVarChar, req.body[duyuruColumns[1]])
    .input("yaziTR", sql.NVarChar, req.body[duyuruColumns[2]])
    .input("yaziEN", sql.NVarChar, req.body[duyuruColumns[3]])
    .input("resim", sql.NVarChar, req.body[duyuruColumns[4]])
    .query(
      "insert into duyuru (baslikTR,baslikEN,yaziTR,yaziEN,resim) values (@baslikTR,@baslikEN,@yaziTR,@yaziEN,@resim)"
    )
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json("Internal server error");
    });
});
router.post("/duyuru/update", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to update" });
    return;
  }
  if (!columnChecker(req.body, duyuruColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .input("baslikTR", sql.NVarChar, req.body[duyuruColumns[0]])
    .input("baslikEN", sql.NVarChar, req.body[duyuruColumns[1]])
    .input("yaziTR", sql.NVarChar, req.body[duyuruColumns[2]])
    .input("yaziEN", sql.NVarChar, req.body[duyuruColumns[3]])
    .input("resim", sql.NVarChar, req.body[duyuruColumns[4]])
    .query(
      `
    update duyuru
    set
      baslikTR=@baslikTR,
      baslikEN=@baslikEN,
      yaziTR=@yaziTR,
      yaziEN=@yaziEN,
      resim=@resim,
      degistirilmeTarihi=getdate()
    where
      id=@id
      `
    )
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

//----------------------mesaj--------------------------
const mesajColumns = ["isim", "soyisim", "email", "servis", "mesaj"];
router.post("/mesaj/select", (req, res) => {
  // console.log(req.body);
  console.log({ incomingBody: req.body });
  var sql_request = new sql.Request();
  sql_request
    .input("input", sql.Int, req.body.id)
    .input("lastX", sql.Int, req.body.lastX)
    .input("date", sql.NVarChar, req.body.date)
    .query(
      req.body.id
        ? "select * from mesaj where id=@input"
        : req.body.lastX
        ? "SELECT TOP(@lastX) * FROM mesaj  ORDER BY id DESC"
        : req.body.date
        ? "select * from mesaj where eklenmeTarihi between CAST(@date AS DATETIME2) and CAST(@date AS DATETIME2)"
        : "select * from mesaj"
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
router.post("/mesaj/delete", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to delete" });
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .query("delete from mesaj where id=@id")
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

router.post("/mesaj/insert", (req, res) => {
  // console.log(req.body);

  if (!columnChecker(req.body, mesajColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input(mesajColumns[0], sql.NVarChar, req.body[mesajColumns[0]])
    .input(mesajColumns[1], sql.NVarChar, req.body[mesajColumns[1]])
    .input(mesajColumns[2], sql.NVarChar, req.body[mesajColumns[2]])
    .input(mesajColumns[3], sql.NVarChar, req.body[mesajColumns[3]])
    .input(mesajColumns[4], sql.NVarChar, req.body[mesajColumns[4]])
    .query(
      `insert into mesaj (${mesajColumns[0]},${mesajColumns[1]},${mesajColumns[2]},${mesajColumns[3]},${mesajColumns[4]}) 
      values (@${mesajColumns[0]},@${mesajColumns[1]},@${mesajColumns[2]},@${mesajColumns[3]},@${mesajColumns[4]})`
    )
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json("Internal server error");
    });
});

//----------------------arastirma--------------------------
const arastirmaColumns = ["baslikTR", "baslikEN", "yaziTR", "yaziEN", "resim"];
router.post("/arastirma/select", (req, res) => {
  // console.log(req.body);
  console.log({ incomingBody: req.body });
  if (
    ((req.body.page - 1) * 6 < 0 || isNaN(parseInt(req.body.page))) &&
    req.body.page !== undefined
  ) {
    res.status(403);
    res.json([]);
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("input", sql.Int, req.body.id)
    .input("lastX", sql.Int, req.body.lastX)
    .input("page", sql.Int, (req.body.page - 1) * 6)
    .input("date", sql.NVarChar, req.body.date)
    .input("year", sql.Int, req.body.year)
    .input("pages", sql.Int, (req.body.pages - 1) * 6)
    .query(
      req.body.id
        ? "select * from arastirma where id=@input"
        : req.body.lastX
        ? "SELECT TOP(@lastX) * FROM arastirma  ORDER BY id DESC"
        : req.body.page
        ? "SELECT * FROM arastirma ORDER BY id DESC OFFSET @page ROWS FETCH NEXT 6 ROWS ONLY"
        : req.body.date
        ? " select * from arastirma where eklenmeTarihi between CAST(@date AS DATETIME2) and CAST(@date AS DATETIME2)"
        : req.body.years
        ? "select distinct year(eklenmeTarihi) as eklenmeTarihi from arastirma"
        : req.body.year
        ? "select * from arastirma where year(eklenmeTarihi)=@year ORDER BY id DESC OFFSET @pages ROWS FETCH NEXT 6 ROWS ONLY"
        : "select * from arastirma"
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
router.post("/arastirma/delete", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to delete" });
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .query("delete from arastirma where id=@id")
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

router.post("/arastirma/insert", (req, res) => {
  // console.log(req.body);

  if (!columnChecker(req.body, arastirmaColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("baslikTR", sql.NVarChar, req.body[arastirmaColumns[0]])
    .input("baslikEN", sql.NVarChar, req.body[arastirmaColumns[1]])
    .input("yaziTR", sql.NVarChar, req.body[arastirmaColumns[2]])
    .input("yaziEN", sql.NVarChar, req.body[arastirmaColumns[3]])
    .input("resim", sql.NVarChar, req.body[arastirmaColumns[4]])
    .query(
      "insert into arastirma (baslikTR,baslikEN,yaziTR,yaziEN,resim) values (@baslikTR,@baslikEN,@yaziTR,@yaziEN,@resim)"
    )
    .then((dbres) => {
      // console.log(dbres);
      res.status(200);
      res.json(dbres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json("Internal server error");
    });
});
router.post("/arastirma/update", (req, res) => {
  if (!req.body.id) {
    res.status(400);
    res.json({ message: "id is needed to update" });
    return;
  }
  if (!columnChecker(req.body, arastirmaColumns)) {
    res.status(400);
    res.json("invalid column(s): " + errCols);
    errCols = [];
    return;
  }
  var sql_request = new sql.Request();
  sql_request
    .input("id", sql.Int, req.body.id)
    .input("baslikTR", sql.NVarChar, req.body[arastirmaColumns[0]])
    .input("baslikEN", sql.NVarChar, req.body[arastirmaColumns[1]])
    .input("yaziTR", sql.NVarChar, req.body[arastirmaColumns[2]])
    .input("yaziEN", sql.NVarChar, req.body[arastirmaColumns[3]])
    .input("resim", sql.NVarChar, req.body[arastirmaColumns[4]])
    .query(
      `
    update arastirma
    set
      baslikTR=@baslikTR,
      baslikEN=@baslikEN,
      yaziTR=@yaziTR,
      yaziEN=@yaziEN,
      resim=@resim,
      degistirilmeTarihi=getdate()
    where
      id=@id
      `
    )
    .then((dbres) => {
      // console.log(dbres);
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
