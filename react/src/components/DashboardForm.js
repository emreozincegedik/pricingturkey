import React, { useState } from "react";
import { DashboardIstek, Alert } from "./index";

export function DashboardForm(props) {
  const tuslar = ["Ekle", "Sil", "Güncelle"];
  const methods = {
    Ekle: "insert",
    Çıkar: "delete",
    Sil: "delete",
    Güncelle: "update",
  };
  const [postMethod, setpostMethod] = useState("Ekle");
  // const [date, setDate] = useState(null);
  const [basliklar, setBasliklar] = useState([]);
  const [baslikSecildi, setBaslikSecildi] = useState(false);
  const [baslikTR, setbaslikTR] = useState("");
  const [baslikEN, setbaslikEN] = useState("");
  const [yaziTR, setyaziTR] = useState("");
  const [yaziEN, setyaziEN] = useState("");
  const [id, setId] = useState(0);
  const [resim, setResim] = useState("");
  const [resimname, setResimname] = useState("");
  const [alertMesaj, setAlertMesaj] = useState("");
  const [onlyMesaj, setOnlyMesaj] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  // console.log(props);
  const resimChange = async (e) => {
    const file = e.target.files[0];
    setResimname(file.name);
    const base64 = await toBase64(file);
    // console.log(base64);
    setResim(base64);
  };
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const dateChange = async (e) => {
    const newDate = e.target.value;
    let path =
      "/" + props.form.toLocaleLowerCase("en-US").replace("ü", "u") + "/select";

    // setDate(newDate);
    try {
      let response = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ date: newDate }),
        // body: JSON.stringify(user),
      });
      let body = await response.json();
      // console.log(body);
      setBasliklar(body);
    } catch (error) {
      setBasliklar([]);
    }
    setBaslikSecildi(true);
  };
  const formBasildi = (e) => {
    e.preventDefault();
    setAlertMesaj(`${props.form} ${postMethod}mek istediğinize emin misiniz?`);
    setOnlyMesaj(false);
    setShow(true);
    ////alert hallet ve bitir
  };
  const handleOk = () => {
    formGonderildi();
    setShow(false);
    setbaslikTR("");
    setbaslikEN("");
    setyaziTR("");
    setyaziEN("");
    setResim("");
  };
  const formGonderildi = async () => {
    let path =
      "/" +
      props.form.toLocaleLowerCase("en-US").replace("ü", "u") +
      "/" +
      methods[postMethod];
    // console.log(path);
    try {
      await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          id: id,
          baslikTR: baslikTR,
          baslikEN: baslikEN,
          yaziTR: yaziTR,
          yaziEN: yaziEN,
          resim: resim,
        }),
        // body: JSON.stringify(user),
      });
      setAlertMesaj(`${postMethod}me işlemi başarılı`);
    } catch (error) {
      setAlertMesaj(error);
    }
    setShow(true);
    setOnlyMesaj(true);
    // let body = await response.json();
    // console.log(body);
    // setBasliklar(body);
  };
  // const [dashboardBaslik, setdashboardBaslik] = useState("Ekle")
  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      {props.form === "Mesajlar" ? (
        <DashboardIstek />
      ) : (
        <>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{props.form || "Dashboard"}</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-auto">
                {tuslar.map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    style={postMethod === item ? { background: "#F0F0F0" } : {}}
                    onClick={() => {
                      setpostMethod(item);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {postMethod !== "Ekle" && (
                <>
                  <div className="btn-group dropleft mx-3">
                    <button
                      className="btn btn-vahitcan dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {props.form === "Ekip"
                        ? `Çalışan seçin ${
                            props.ekipler.length !== 0
                              ? `(${props.ekipler.length})`
                              : ""
                          }`
                        : baslikSecildi && basliklar.length === 0
                        ? `Seçili günde ${props.form} yok`
                        : (basliklar.length === 0 ? "Gün" : props.form) +
                          ` seçin ${
                            basliklar.length > 0
                              ? "(" + basliklar.length + ")"
                              : ""
                          }`}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {props.form !== "Ekip" /* true */
                        ? basliklar.map((item, i) => (
                            <div
                              className="dropdown-item"
                              onClick={() => {
                                setbaslikTR(item.baslikTR);
                                setbaslikEN(item.baslikEN);
                                setyaziTR(item.yaziTR);
                                setyaziEN(item.yaziEN);
                                setId(item.id);
                                setResim(item.resim);
                              }}
                              key={item.id}
                            >
                              {item.baslikTR.substring(0, 20)}
                            </div>
                          ))
                        : props.ekipler.map((item, i) => (
                            <div
                              className="dropdown-item"
                              onClick={() => {
                                setbaslikTR(item.isim);
                                setbaslikEN(item.soyisim);
                                setyaziTR(item.aciklamaTR);
                                setyaziEN(item.aciklamaEN);
                                setId(item.id);
                                setResim(item.resim);
                              }}
                              key={item.id}
                            >
                              {item.isim + " " + item.soyisim}
                            </div>
                          ))}
                    </div>
                  </div>
                  {props.form !== "Ekip" && (
                    <input
                      type="date"
                      className="btn btn-sm border-secondary dropdown-toggle"
                      onChange={dateChange}
                    />
                  )}
                </>
              )}
            </div>
          </div>

          <div className="container">
            <form onSubmit={formBasildi}>
              <div className="row">
                <div className="col">
                  <div className="form-label-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={
                        props.form !== "Ekip"
                          ? props.form + " Türkçe başlık"
                          : "İsim"
                      }
                      id="baslikTR"
                      value={baslikTR}
                      onChange={(e) => setbaslikTR(e.target.value)}
                    />
                    <label htmlFor="baslikTR">
                      {props.form !== "Ekip"
                        ? props.form + " Türkçe başlık"
                        : "İsim"}
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="form-label-group
                            "
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder={
                        props.form !== "Ekip"
                          ? props.form + " İngilizce başlık"
                          : "Soyisim"
                      }
                      id="baslikEN"
                      value={baslikEN}
                      onChange={(e) => setbaslikEN(e.target.value)}
                    />
                    <label htmlFor="baslikEN">
                      {props.form !== "Ekip"
                        ? props.form + " İngilizce başlık"
                        : "Soyisim"}
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group py-3">
                    <textarea
                      className="form-control"
                      id="yaziTR"
                      rows="10"
                      placeholder={
                        props.form !== "Ekip"
                          ? props.form + " Türkçe metni girin"
                          : "Çalışanın özelliklerini anlatın"
                      }
                      value={yaziTR}
                      onChange={(e) => setyaziTR(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group py-3">
                    <textarea
                      className="form-control"
                      id="yaziEN"
                      rows="10"
                      placeholder={
                        props.form !== "Ekip"
                          ? props.form + " İngilizce metni girin"
                          : "Çalışanın özelliklerini ingilizce anlatın"
                      }
                      value={yaziEN}
                      onChange={(e) => setyaziEN(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="resim"
                    aria-describedby="inputresim"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => resimChange(e)}
                  />
                  <label className="custom-file-label" htmlFor="resim">
                    {resimname === ""
                      ? "Resim dosyasını yükleyin. (.jpg, .jpeg, .png)"
                      : resimname}
                  </label>
                </div>
              </div>
              <img
                className="card-img-top"
                src={resim}
                aria-label={props.ariaLabel || "Bülten resmi"}
                style={{ width: "20vh" }}
                alt={resimname}
              />

              <div className="row">
                <button className="btn btn-outline-emre btn-block mt-3">
                  {props.form + " " + postMethod}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      {onlyMesaj ? (
        <Alert show={show} handleClose={handleClose} title={alertMesaj} />
      ) : (
        <Alert
          show={show}
          handleClose={handleClose}
          handleOk={handleOk}
          title={alertMesaj}
        />
      )}
    </main>
  );
}
