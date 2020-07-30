import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Context } from "./Genel";
import Navbutton from "../resimler/navbar.svg";
import {
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";
import { Link, animateScroll, scroller } from "react-scroll";

export class Navbars extends Component {
  state = { isOpen: false, isCollapsed: true };
  handleDropdown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  static contextType = Context;
  // handleOpen = () => {
  //   this.setState({ isOpen: true });
  //   console.log("yes");
  // };

  // handleClose = () => {
  //   this.setState({ isOpen: false });
  //   console.log("no");
  // };
  componentDidMount() {
    console.log(this);
  }
  render() {
    const {
      dil_degisken,
      dil_degistir,
      secili_dil,
      scrollSetup,
    } = this.context.state;
    const a = true; //false eskisi, true test
    return (
      <header>
        {a ? (
          <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white">
            <div className="container">
              <NavLink className="navbar-brand" to="#">
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
                  this.setState({ isCollapsed: !this.state.isCollapsed });
                  console.log(this.state.isCollapsed);
                }}
              >
                <span style={{ border: "none" }}>
                  <img src={Navbutton} alt="" srcset="" />
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
                      onClick={() =>
                        animateScroll.scrollToTop({
                          duration: 500,
                          delay: 0,
                          smooth: "easeInOutQuart",
                        })
                      }
                    >
                      {dil_degisken("Ana Sayfa", "Home Page")}{" "}
                      {/* <span className="sr-only">(current)</span> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      to="/"
                      tabindex="-1"
                      // aria-disabled="true"
                      onClick={() => {
                        scrollSetup("landingMain");
                        scroller.scrollTo("landingMain", {
                          duration: 500,
                          delay: 0,
                          smooth: "easeInOutQuart",
                        });
                      }}
                    >
                      {dil_degisken("Ekibimiz", "Our Team")}
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                    </NavDropdown>
                  </li>
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="index.html">
                      Contact<span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="#">
                      Pricing
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link disabled"
                      to="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      <i className="fa fa-language fa-2x"></i>
                    </NavLink>
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
