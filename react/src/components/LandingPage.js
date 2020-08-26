import React, { Component } from "react";
import Landing from "../resimler/Landing.svg";
import { Element } from "react-scroll";
import { NavLink } from "react-router-dom";

export class LandingPage extends Component {
  render() {
    return (
      <Element
        className="container"
        /* style={{ marginTop: "90px" }} */
        id="landingMain"
        name="landingMain"
      >
        <div className="row custom-section d-flex align-items-center">
          <div className="col-12 col-lg-4">
            <h2>Team Work</h2>
            <h3>Process</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quidem!
            </p>
            <NavLink to="/" className="btn btn-outline-vahitcan">
              Learn more
            </NavLink>
          </div>
          <div className="col-12 col-lg-8">
            <img src={Landing} alt="Team process banner" />
          </div>
        </div>
      </Element>
    );
  }
}
