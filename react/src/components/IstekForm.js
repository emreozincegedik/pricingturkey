import React, { useContext } from "react";
import { Context } from "./index";

export function IstekForm() {
  const { dil_degisken } = useContext(Context).state;
  return (
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
    </section>
  );
}
