import React, { useContext, useState } from "react";
import { Context, Alert } from "./index";

export function IstekForm() {
  const { dil_degisken } = useContext(Context).state;
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [servis, setServis] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const errorClass = "border-danger";

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const formGonderildi = async (e) => {
    e.preventDefault();
    console.log(ad, soyad, email, servis, mesaj);
    if (
      ad.trim() === "" ||
      soyad.trim() === "" ||
      email.trim() === "" ||
      servis.trim() === ""
    ) {
      setIsWrong(true);
      return;
    }
    // console.log(ad === "");
    setShow(true);
    const sendBody = JSON.stringify({
      isim: ad,
      soyisim: soyad,
      email: email,
      servis: servis,
      mesaj: mesaj,
    });
    const response = await fetch("/mesaj/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: sendBody,
    });
    await response.json();
    setAd("");
    setSoyad("");
    setEmail("");
    setServis("");
    setMesaj("");
    setIsWrong(false);

    // if (email === "" || password === "") {
    //   this.setState({ genelMesaj: false });
    //   this.emailCheck();
    //   this.passwordCheck();
    //   return;
    // }
    //şifre cryptolama
    //backend ile iletişim
  };
  // const [ad, setAd] = useState("initialState");
  // state = { ad: "", soyad: "", email: "", servis: "" };
  return (
    <section>
      <div className="py-5">
        <div className="container">
          <div className="jumbotron bg-vahitcan rounded-lg">
            <div className="display-4 mb-3">
              {dil_degisken("Bize mesaj gönderin...", "Send Us a Message...")}
            </div>
            <form onSubmit={formGonderildi}>
              <div className="row">
                <div className="col">
                  <div className="form-label-group">
                    <input
                      type="text"
                      className={`form-control ${
                        isWrong && ad.length === 0 && errorClass
                      }`}
                      placeholder={dil_degisken("İlk adınız", "First name")}
                      id="inputName"
                      onChange={(e) => {
                        e.target.value.length <= 50 && setAd(e.target.value);
                      }}
                      value={ad}
                    />
                    <label htmlFor="inputName">
                      {dil_degisken("İlk adınız", "First name")}
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-label-group">
                    <input
                      type="text"
                      className={`form-control ${
                        isWrong && soyad.length === 0 && errorClass
                      }`}
                      placeholder={dil_degisken("Soyadınız", "Last name")}
                      id="inputLast"
                      onChange={(e) => {
                        e.target.value.length <= 50 && setSoyad(e.target.value);
                      }}
                      value={soyad}
                    />
                    <label htmlFor="inputLast">
                      {dil_degisken("Soyadınız", "Last name")}
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-label-group">
                    <input
                      type="text"
                      className={`form-control ${
                        isWrong && email.length === 0 && errorClass
                      }`}
                      placeholder={dil_degisken(
                        "E-mail adresiniz",
                        "E-mail adress"
                      )}
                      id="inputMail"
                      onChange={(e) => {
                        e.target.value.length <= 200 &&
                          setEmail(e.target.value);
                      }}
                      value={email}
                    />
                    <label htmlFor="inputMail">
                      {dil_degisken("E-mail adresiniz", "E-mail adress")}
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-label-group">
                    <input
                      type="text"
                      className={`form-control ${
                        isWrong && servis.length === 0 && errorClass
                      }`}
                      placeholder={dil_degisken(
                        "İstenen servis",
                        "Desired service"
                      )}
                      id="inputServices"
                      onChange={(e) => {
                        e.target.value.length <= 200 &&
                          setServis(e.target.value);
                      }}
                      value={servis}
                    />
                    <label htmlFor="inputServices">
                      {dil_degisken("İstenen servis", "Desired service")}
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group py-3">
                    <textarea
                      className="form-control"
                      id="TextArea"
                      rows="10"
                      placeholder={dil_degisken(
                        "Detaylı mesajınız",
                        "Detailed message"
                      )}
                      onChange={(e) => {
                        e.target.value.length <= 500 &&
                          setMesaj(e.target.value);
                      }}
                      value={mesaj}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <button className="btn btn-outline-emre btn-block mt-3">
                  {dil_degisken("Gönder", "Send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Alert
        show={show}
        handleClose={handleClose}
        title={dil_degisken("Teşekkürler", "Thank you")}
        body={dil_degisken(
          "Mesajınız alınmıştır, en kısa sürede dönüş yapılacaktır.",
          "Your message has been received, we will contact you as soon as possible."
        )}
      />
    </section>
  );
}

/*
<section>
      <div className="py-5">
        <div className="container">
          <div className="jumbotron bg-vahitcan rounded-lg">
            <div className="display-4 mb-3">
              {dil_degisken("Bize mesaj gönderin...", "Send Us a Message...")}
            </div>
            <form>
              <div className="row">
                <div className="col">
                  <input
                    id="formName"
                    type="text"
                    className="form-control"
                    placeholder={dil_degisken("İlk adınız", "First name")}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={dil_degisken("Soyadınız", "Last name")}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group py-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="10"
                      placeholder={dil_degisken(
                        "Hangi hizmeti almak istersiniz?",
                        "Which service would you like us to provide?"
                      )}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <button className="btn btn-outline-emre btn-block mt-3">
                  {dil_degisken("Gönder", "Send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section> */
