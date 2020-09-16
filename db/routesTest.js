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
