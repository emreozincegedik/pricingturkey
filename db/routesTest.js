//----------------------duyuru--------------------------
const duyuruColumns = ["baslikTR", "baslikEN", "yaziTR", "yaziEN", "resim"];
router.post("/duyuru/select", (req, res) => {
  // console.log(req.body);
  console.log({ incomingBody: req.body });
  var sql_request = new sql.Request();
  sql_request
    .input("input", sql.Int, req.body.id)
    .input("lastX", sql.Int, req.body.lastX)
    .input("date", sql.NVarChar, req.body.date)
    .query(
      req.body.id
        ? "select * from duyuru where id=@input"
        : req.body.lastX
        ? "SELECT TOP(@lastX) * FROM duyuru  ORDER BY id DESC"
        : req.body.date
        ? " select * from duyuru where eklenmeTarihi between CAST(@date AS DATETIME2) and CAST(@date AS DATETIME2)"
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
    .input("resim", sql.NVarChar, req.body[bultenColumns[4]])
    .query(
      "insert into duyuru (baslikTR,baslikEN,yaziTR,yaziEN,resim) values (@baslikTR,@baslikEN,@yaziTR,@yaziEN,@resim)"
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
