import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./Genel";
import resim from "../resimler/231.jpg";
import {
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

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
  // componentDidMount() {
  //   console.log(this);
  // }
  render() {
    const { dil_degisken, dil_degistir, secili_dil } = this.context.state;
    const a = true; //false eskisi, true test
    return (
      <header>
        {a ? (
         <nav class="navbar navbar-expand-md navbar-light fixed-top bg-white">
         <div class="container">
         <a class="navbar-brand" href="#">
           <img src="" class="d-inline-block align-top" alt="logo" loading="lazy" style={{width: "40px", maxWidth: "100%"}}/>
           </a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbartransferpricing" aria-controls="navbartransferpricing" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbartransferpricing">
           <ul class="navbar-nav ml-auto justify-content-between">
             <li class="nav-item active">
               <a class="nav-link text-vahitcan" href="#">Home <span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item">
             <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Our Team</a>
           </li>
               
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Services
               </a>
               <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                 <a class="dropdown-item" href="#">Action</a>
                 <a class="dropdown-item" href="#">Another action</a>
                 <a class="dropdown-item" href="#">Something else here</a>
               </div>
             </li>
             <li class="nav-item active">
               <a class="nav-link" href="index.html">Contact<span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item">
               <a class="nav-link active" href="#">Pricing</a>
             </li>
           
           <li class="nav-item">
             <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="fa fa-language fa-2x"></i></a>
           </li></ul>
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
                <NavLink to="/" exact className="nav-link" activeStyle={{backgroundColor:"red"}}>
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
