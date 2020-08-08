import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./Genel";
import Navbutton from "../resimler/navbar.svg";
import { Navbar, NavDropdown } from "react-bootstrap";
import { animateScroll, scroller } from "react-scroll";

export class Navbars extends Component {
  state = { isDropdownOpen: false, isCollapsed: true };
  handleDropdown = () => {
    // console.log("pressed");
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  };
  handleClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.setState({ isDropdownOpen: false });
      // console.log("test");
    }
  };
  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }
  static contextType = Context;
  // handleOpen = () => {
  //   this.setState({ isDropdownOpen: true });
  //   console.log("yes");
  // };

  // handleClose = () => {
  //   this.setState({ isDropdownOpen: false });
  //   console.log("no");
  // };
  // componentDidMount() {
  //   console.log(this);
  // }
  render() {
    const {
      dil_degisken,
      dil_degistir,
      secili_dil,
      scrollSetup,
    } = this.context.state;
    const { isDropdownOpen } = this.state;
    const a = true; //false eskisi, true test
    const scrollSetting = {
      duration: 200,
      delay: 0,
      smooth: "easeInOutQuart",
    };
    return (
      <header>
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
                  <li>
                    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
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
            </NavLink>
            <button
              aria-controls="basic-navbar-nav"
              type="button"
              aria-label="Toggle navigation"
              className={
                "navbar-toggler " + (this.state.isCollapsed ? "collapsed" : "")
              }
              onClick={() => {
                this.setState({ isCollapsed: !this.state.isCollapsed });
                console.log(this.state.isCollapsed);
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={
                "navbar-collapse collapse " +
                (this.state.isCollapsed ? "" : "show")
              }
              id="basic-navbar-nav"
            >
              <div className="ml-auto navbar-nav">
                <NavLink
                  to="/"
                  exact
                  className="nav-link"
                  activeStyle={{ backgroundColor: "red" }}
                >
                  {dil_degisken("Ana Sayfa", "Home Page")}
                </NavLink>
                <NavLink to="/test" className="nav-link">
                  {dil_degisken("Test", "Test")}
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  {dil_degisken("Giriş", "Login")}
                </NavLink>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
                </NavDropdown>
                <div className="nav-item">
                  <div
                    className="nav-link"
                    // tabIndex="-1"
                    aria-disabled="true"
                    onClick={() => {
                      // console.log(context);
                      dil_degistir(secili_dil === "tr" ? "en" : "tr");
                      console.log(secili_dil);
                    }}
                  >
                    {secili_dil === "tr" ? "en" : "tr"}
                    <i className="fa fa-language fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </header>
    );
  }
}
Navbar.contextType = Context;
