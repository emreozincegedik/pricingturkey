import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Context } from "./Genel";
import { scroller } from "react-scroll";
import { Helmet } from "react-helmet";

import Navbutton from "../resimler/navbar.svg";
import tr from "../resimler/turkey.svg";
import en from "../resimler/united-states-of-america.svg";

export function Navbars() {
  const context = useContext(Context);
  const {
    dil_degisken,
    dil_degistir,
    secili_dil,
    scrollSetup,
    uyegirisi,
  } = context.state;
  const scrollSetting = {
    duration: 200,
    delay: 0,
    smooth: "easeInOutQuart",
  };
  let location = useLocation();
  return location.pathname === "/dashboard" && uyegirisi ? (
    ""
  ) : (
    <>
      <header style={{ marginBottom: "90px" }}>
        <Helmet>
          <html lang={secili_dil} amp />
        </Helmet>
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img
                src="vtxbox.png"
                className="d-inline-block align-top"
                alt="logo"
                loading="lazy"
                style={{ width: "40px", maxWidth: "100%" }}
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbartransferpricing"
              aria-controls="navbartransferpricing"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span style={{ border: "none" }}>
                <img src={Navbutton} alt="" srcSet="" />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbartransferpricing"
            >
              <ul className="navbar-nav ml-auto justify-content-between">
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle text-dark"
                    to="/hizmetlerimiz"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {dil_degisken("Ana Sayfa", "Main Page")}
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLink
                      className="dropdown-item"
                      to="/bilgi/bulten/sayfa/1"
                    >
                      {dil_degisken("Bulten", "Bulletin")}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/bilgi/duyuru/sayfa/1"
                    >
                      {dil_degisken("Duyuru", "Announcement")}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/bilgi/haber/sayfa/1"
                    >
                      {dil_degisken("Haberler", "News")}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/bilgi/arastirma/sayfa/1"
                    >
                      {dil_degisken("Araştırmalar", "Investigations")}
                    </NavLink>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle text-dark"
                    to="/hizmetlerimiz"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {dil_degisken("Hizmetlerimiz", "Our Services")}
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLink
                      className="dropdown-item"
                      to="/hizmetlerimiz/transferfiyatlandirmasi"
                    >
                      {dil_degisken(
                        "Transfer fiyatlandırması",
                        "Transfer pricing"
                      )}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/hizmetlerimiz/tfraporlamasi"
                    >
                      {dil_degisken("TF raporlaması", "TF reporting")}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/hizmetlerimiz/masterdosyahazirlama"
                    >
                      {dil_degisken(
                        "Master dosya hazırlama",
                        "Master file preparing"
                      )}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/hizmetlerimiz/onfiyatlandirma"
                    >
                      {dil_degisken(
                        "Ön fiyatlandırma anlaşmasına başvuru",
                        "Application to a pre-pricing agreement"
                      )}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/hizmetlerimiz/danismanlik"
                    >
                      {dil_degisken("Danışmanlık", "Consultancy")}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/hizmetlerimiz/veritabaniemsal"
                    >
                      {dil_degisken(
                        "Veri tabanında emsal araştırma hizmeti",
                        "Peer research service in the database"
                      )}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/istekform">
                      {dil_degisken("Teklif iste", "Request an offer")}
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle text-dark"
                    to="/hizmetlerimiz"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {dil_degisken("Hakkımızda", "About Us")}
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLink
                      className="dropdown-item"
                      to="/hakkimizda/sirketimiz"
                    >
                      {dil_degisken("Şirketimiz", "Company")}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/hakkimizda/ekibimiz"
                    >
                      {dil_degisken("Ekibimiz", "Team")}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/hakkimizda/referanslarimiz"
                    >
                      {dil_degisken("Referanslarımız", "References")}
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle text-dark"
                    to="/hizmetlerimiz"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {dil_degisken("İşlem Rehberi", "Operation Guide")}
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLink
                      className="dropdown-item"
                      to="/islem/verikorumapolitika"
                    >
                      {dil_degisken(
                        "Kişisel verileri koruma politikamız",
                        "Personal data protection policy"
                      )}
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/islem/6563sayilikanun"
                    >
                      {dil_degisken(
                        "6563 sayılı Kanun ile ilgili Sorumluluklarımız",
                        "Our Responsibilities Regarding Law No. 6563"
                      )}
                    </NavLink>
                    <NavLink className="dropdown-item" to="/islem/basvuru">
                      {dil_degisken("Kariyer başvurusu", "Career application")}
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/iletisim">
                    {dil_degisken("İletişim", "Contact")}
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    {dil_degisken("Ücretlendirme", "Pricing")}
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    {dil_degisken("Giriş", "Login")}
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    tabIndex="-1"
                    aria-disabled="true"
                    onClick={() => {
                      scrollSetup("carouselCalisanlarEmreOzincegedik");
                      scroller.scrollTo(
                        "carouselCalisanlarEmreOzincegedik",
                        scrollSetting
                      );
                    }}
                  >
                    {dil_degisken("Ekibimiz", "Our Team")}
                  </NavLink>
                </li> */}

                <li className="nav-item">
                  <div
                    className="nav-link"
                    tabIndex="-1"
                    aria-disabled="true"
                    onClick={() => {
                      // console.log(context);
                      dil_degistir(secili_dil === "tr" ? "en" : "tr");
                      // console.log(secili_dil);
                      // console.log(window.location);
                    }}
                  >
                    <img
                      src={secili_dil === "tr" ? en : tr}
                      alt={dil_degisken("Dil degistir", "Change language")}
                      width="24 rem"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

// export class Navbars extends Component {
//   static contextType = Context;
//   render() {

//     return (

//     );
//   }
// }
// Navbars.contextType = Context;
