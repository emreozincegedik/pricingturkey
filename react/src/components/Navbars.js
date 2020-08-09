import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./Genel";
import Navbutton from "../resimler/navbar.svg";
import { animateScroll, scroller } from "react-scroll";

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
<<<<<<< HEAD
        {a ? (
          <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <img
                  src=""
                  className="d-inline-block align-top"
                  alt="logo"
                  loading="lazy"
                  style={{ width: "40px", maxWidth: "100%" }}
                />
              </NavLink>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#navbartransferpricing"
                aria-controls="navbartransferpricing"
                aria-expanded={this.state.isCollapsed ? "false" : "true"}
                aria-label="Toggle navigation"
                className={
                  "navbar-toggler " +
                  (this.state.isCollapsed ? "collapsed" : "")
                }
                onClick={() => {
                  this.setState({
                    isCollapsed: !this.state.isCollapsed,
                  });
                  // console.log(this.state.isCollapsed);
                }}
              >
                <span style={{ border: "none" }}>
                  <img src={Navbutton} alt="" srcSet="" />
                </span>
              </button>
              <div
                className={
                  "navbar-collapse collapse " +
                  (this.state.isCollapsed ? "" : "show")
                }
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
                      {dil_degisken("Ana Sayfa", "Home Page")}{" "}
                      {/* <span className="sr-only">(current)</span> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      to="/"
                      tabIndex="-1"
                      // aria-disabled="true"
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

                  <li
                    className={
                      "nav-item dropdown " + (isDropdownOpen ? "show" : "")
                    }
                  >
                    <div
                      className="nav-link dropdown-toggle text-dark"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                      ref={(node) => (this.node = node)}
                      onClick={() => this.handleDropdown()}
                    >
                      Services
                    </div>
                    <div
                      className={
                        "dropdown-menu " + (isDropdownOpen ? "show" : "")
                      }
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                    {/* <NavDropdown
                      title="Dropdown"
                      id="basic-nav-dropdown"
                      ref={(node) => (this.node = node)}
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavLink to="/test/test_test3" className="dropdown-item">
                        test action
                      </NavLink>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </li>
                  <li className="nav-item active">
                    <NavLink
                      className="nav-link"
                      to="/login"
                      onClick={() => animateScroll.scrollToTop(scrollSetting)}
                    >
                      {dil_degisken("Giriş", "Login")}
                      {/* <span className="sr-only">(current)</span> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="#">
                      {dil_degisken("Ücretlendirme", "Pricing")}
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <div
                      className="nav-link"
                      aria-disabled="true"
                      onClick={() => {
                        // console.log(context);
                        dil_degistir(secili_dil === "tr" ? "en" : "tr");
                        // console.log(secili_dil);
                      }}
                    >
                      {/* {secili_dil === "tr" ? "en" : "tr"} */}
                      <i className="fa fa-language"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink
              to="/"
              // exact
              // activeStyle={{ background: "red" }}
              className="navbar-brand"
            >
              React-Bootstrap
=======
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
>>>>>>> fe5def7f8d3a6bd1aa2eccb169eaf54b9288bbca
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
