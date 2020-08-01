import React, { Component } from "react";
import logo from "../resimler/logo_turkish.png";

export class Footer extends Component {
  render() {
    return (
      <footer class="footer mt-auto container-fluid bg-vahitcan">
        <div class="row">
          <div class="col-12 col-md mt-5">
            <img
              src={logo}
              alt="logo2"
              width="251px"
              height="109px"
              class="d-inline-block align-top"
            />
            <small class="d-inline-block mb-3 text-muted">
              &copy; Penetra - 2020
            </small>
          </div>
          <div class="col-6 col-md mt-3">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md mt-3">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md mt-3">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Business
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Education
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Government
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Gaming
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md mt-3">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
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
