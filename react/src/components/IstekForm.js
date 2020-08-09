import React, { useContext, useState } from "react";
import { Context } from "./index";

export function IstekForm() {
  const { dil_degisken } = useContext(Context).state;
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [servis, setServis] = useState("");
  const [mesaj, setMesaj] = useState("");

  const formGonderildi = (e) => {
    e.preventDefault();
    console.log(ad, soyad, email, servis, mesaj);
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
      <div class="py-5">
        <div class="container">
          <div class="jumbotron bg-vahitcan rounded-lg">
            <div class="display-4 mb-3">
              {dil_degisken("Bize mesaj gönderin...", "Send Us a Message...")}
            </div>
            <form onSubmit={formGonderildi}>
              <div class="row">
                <div class="col">
                  <div class="form-label-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      id="inputName"
                      onChange={(e) => setAd(e.target.value)}
                    />
                    <label for="inputName">
                      {dil_degisken("İlk adınız", "First name")}
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-label-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      id="inputLast"
                      onChange={(e) => setSoyad(e.target.value)}
                    />
                    <label for="inputLast">
                      {dil_degisken("Soyadınız", "Last name")}
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-label-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="E-mail"
                      id="inputMail"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="inputMail">
                      {dil_degisken("E-mail adresiniz", "E-mail adress")}
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-label-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Desired Services"
                      id="inputServices"
                      onChange={(e) => setServis(e.target.value)}
                    />
                    <label for="inputServices">
                      {dil_degisken("İstenen servis", "Desired service")}
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group py-3">
                    <textarea
                      class="form-control"
                      id="TextArea"
                      rows="10"
                      placeholder={dil_degisken(
                        "Detaylı mesajınız",
                        "Detailed message"
                      )}
                      onChange={(e) => setMesaj(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <button class="btn btn-outline-emre btn-block mt-3">
                  {dil_degisken("Gönder", "Send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
