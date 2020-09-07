import { NavLink, useLocation } from "react-router-dom";
import logo from "../resimler/logo_turkish.png";

import React, { useContext } from "react";
import { Context } from "./Genel";

export function Footer() {
  const context = useContext(Context);
  let location = useLocation();
  return location.pathname === "/dashboard" && context.state.uyegirisi ? (
    ""
  ) : (
    <footer className="footer mt-auto container-fluid bg-vahitcan">
      {/* {console.log(location.pathname)} */}
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
            &copy; Penetra - {new Date().getFullYear()}
          </small>
        </div>
        <div className="col-6 col-md mt-3">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <NavLink className="text-muted" to="/">
                Cool stuff
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Random feature
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Team feature
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Stuff for developers
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Another one
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Last time
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md mt-3">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <NavLink className="text-muted" to="/">
                Resource
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Resource name
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Another resource
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Final resource
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md mt-3">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <NavLink className="text-muted" to="/">
                Business
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Government
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Gaming
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md mt-3">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <NavLink className="text-muted" to="/">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Privacy
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="/">
                Terms
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
