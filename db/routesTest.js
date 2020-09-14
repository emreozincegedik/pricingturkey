//----------------------mesaj--------------------------
const mesajColumns = [
  "isim",
  "soyisim",
  "email",
  "servis",
  "mesaj",
  "eklenmeTarihi",
];
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
    .input(mesajColumns[5], sql.NVarChar, req.body[mesajColumns[5]])
    .query(
      `insert into mesaj (${mesajColumns[0]},${mesajColumns[1]},${mesajColumns[2]},${mesajColumns[3]},${mesajColumns[4]},${mesajColumns[5]}) 
      values (@${mesajColumns[0]},@${mesajColumns[1]},@${mesajColumns[2]},@${mesajColumns[3]},@${mesajColumns[4]},@${mesajColumns[5]})`
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
