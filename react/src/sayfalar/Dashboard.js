import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { Redirect, NavLink } from "react-router-dom";
import "./Dashboard.css";
import { DashboardForm, Context } from "../components";
import { Error } from "./Error";
export function Dashboard() {
  const context = useContext(Context);
  const { uyegirisi, girisHandler } = context.state;
  const dinamikForm = [
    "Mesajlar",
    "Bülten",
    "Haber",
    "Duyuru",
    "Arastirma",
    "Ekip",
  ];
  const [seciliForm, setseciliForm] = useState("Mesajlar");
  const [ekipler, setEkipler] = useState([]);
  const [signedout, setSignedout] = useState(false);
  const ekipFetch = async (key, form) => {
    let path = "/ekip/select";
    // console.log(path);
    let response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({}),
      // body: JSON.stringify(user),
    });
    var body = await response.json();

    setEkipler(body);
  };
  // console.log("giriş durumu: " + uyegirisi);
  return !uyegirisi ? (
    signedout ? (
      <Redirect to="/login" />
    ) : (
      <Error />
    )
  ) : (
    <div>
      <Helmet>
        <html lang="tr" amp />
      </Helmet>
      <div className="navbar navbar-dark sticky-top bg-dashboardkoyumavi flex-md-nowrap p-0">
        <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">
          Logo
        </NavLink>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ marginLeft: "80vw" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav px-3"></ul>
      </div>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="navbar col-md-3 col-lg-2 d-md-block border border-bottom-0 border-dashboardparliment sidebar collapse"
          >
            <div className="sidebar-sticky text-center mx-auto">
              <ul className="nav flex-column">
                <li className="nav-item text-nowrap">
                  <button
                    className="btn"
                    onClick={() => {
                      girisHandler(false);
                      setSignedout(true);
                    }}
                  >
                    Çıkış
                  </button>
                </li>
                <li className="nav-item text-nowrap">
                  <br></br>
                  <br></br>
                  <br></br>
                </li>
                {dinamikForm.map((item, i) => (
                  <li
                    className="nav-item border-bottom border-top text-primary btn btn-block"
                    onClick={() => {
                      setseciliForm(item);
                      item === "Ekip" && ekipFetch();
                    }}
                    style={seciliForm === item ? { background: "#F0F0F0" } : {}}
                    key={i}
                  >
                    <div className="nav-link dashboardbtn">
                      <span data-feather="bulten"></span>
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <DashboardForm key={seciliForm} form={seciliForm} ekipler={ekipler} />
        </div>
      </div>
    </div>
  );
}
