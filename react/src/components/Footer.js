import React, { Component } from "react";
import logo from "../resimler/logo_turkish.png";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto container-fluid bg-vahitcan">
        <div className="row">
          <div className="col-12 col-md mt-5">
            <img
              src={logo}
              alt="logo2"
              width="251px"
              height="109px"
              className="d-inline-block align-top"
            />
            <small className="d-inline-block mb-3 text-muted">
              &copy; Penetra - 2020
            </small>
          </div>
          <div className="col-6 col-md mt-3">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md mt-3">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md mt-3">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Business
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Education
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Government
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Gaming
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md mt-3">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
