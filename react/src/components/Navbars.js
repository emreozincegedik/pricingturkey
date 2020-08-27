import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./Genel";
import Navbutton from "../resimler/navbar.svg";
import { animateScroll, scroller } from "react-scroll";
import { Helmet } from "react-helmet"

export class Navbars extends Component {
  static contextType = Context;
  render() {
    const {
      dil_degisken,
      dil_degistir,
      secili_dil,
      scrollSetup,
    } = this.context.state;
    const scrollSetting = {
      duration: 200,
      delay: 0,
      smooth: "easeInOutQuart",
    };
    return (
      <header>
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
                <li className="nav-item active">
                  <NavLink
                    className="nav-link text-vahitcan"
                    to="/"
                    onClick={() => {
                      scrollSetup("");
                      animateScroll.scrollToTop(scrollSetting);
                    }}
                  >
                    {dil_degisken("Ana sayfa", "Home")}
                  </NavLink>
                </li>
                <li className="nav-item">
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
                    <NavLink className="dropdown-item" to="/action">
                      Action
                    </NavLink>
                    <NavLink className="dropdown-item" to="/anotheraction">
                      Another action
                    </NavLink>
                    <NavLink className="dropdown-item" to="/somethingelse">
                      Something else here
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    {dil_degisken("İletişim", "Contact")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    {dil_degisken("Ücretlendirme", "Pricing")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    {dil_degisken("Giriş", "Login")}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <div
                    className="nav-link"
                    tabIndex="-1"
                    aria-disabled="true"
                    onClick={() => {
                      // console.log(context);
                      dil_degistir(secili_dil === "tr" ? "en" : "tr");
                      // console.log(secili_dil);
                      console.log(window.location);
                    }}
                  >
                    <i className="fa fa-language fa-2x"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
Navbars.contextType = Context;
