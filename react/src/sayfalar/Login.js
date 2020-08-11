import React, { useContext, useState } from "react";
import { Context } from "../components";
import { Redirect } from "react-router-dom";
import "./Login.css";
import crypto from "crypto";

// import React from 'react'

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMesaj, setEmailMesaj] = useState(true);
  const [passwordMesaj, setPasswordMesaj] = useState(true);
  const [genelMesajStatus, setGenelMesajStatus] = useState(true);
  const [loginCheck, setLoginCheck] = useState(false);
  const { dil_degisken } = useContext(Context).state;

  const [genelMesaj, setGenelMesaj] = useState(
    dil_degisken("Zorunlu alanları doldurunuz", "Please fill required fields")
  );
  const emailDegisti = (e) => {
    setEmail(e.target.value);
  };
  const passwordDegisti = (e) => {
    setPassword(e.target.value);
  };
  const formGonderildi = async (e) => {
    e.preventDefault();
    setLoginCheck(false);
    // console.log(email, password);
    if (email === "" || password === "") {
      setGenelMesajStatus(false);
      emailCheck();
      passwordCheck();
      return;
    }
    var sha256 = crypto.createHash("sha256");
    sha256.update(password, "utf8"); //utf8 here
    var pwdHash = sha256.digest("hex");
    let response = await fetch("/login/select", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ username: email, pwd: pwdHash }),
      // body: JSON.stringify(user),
    });
    // var response = await response.status;
    if (response.status === 200) {
      setLoginCheck(true);
      // let json = await response.json();
      // console.log(json, response.status);
    } else {
      setGenelMesaj(
        dil_degisken(
          "Kullanıcı adı veya şifre hatalı",
          "Wrong username or password"
        )
      );
      setGenelMesajStatus(false);
    }
    //şifre cryptolama
    //backend ile iletişim
  };
  const emailCheck = () => {
    if (email === "") {
      setEmailMesaj(false);
    }
  };
  const passwordCheck = () => {
    if (password === "") {
      setPasswordMesaj(false);
    }
  };
  return (
    <div style={{ marginTop: "20vh" }}>
      <form className="form-signin" onSubmit={formGonderildi}>
        <div className="text-center mb-4">
          <img
            className="mb-4"
            src="logo/logo_turkish.png"
            alt=""
            width="%100"
            height="%100"
          />
        </div>

        <div className="form-label-group">
          <input
            // type="email"
            id="inputEmail"
            className={"form-control " + (emailMesaj ? "" : "border-danger")}
            placeholder={dil_degisken("Email adresi", "Email address")}
            autoFocus
            value={email}
            onChange={emailDegisti}
            onBlur={emailCheck}
            onFocus={() => {
              setEmailMesaj(true);
              setGenelMesajStatus(true);
            }}
          />
          <label for="inputEmail">
            {dil_degisken("Email adresi", "Email address")}
          </label>
          <p hidden={emailMesaj} style={{ color: "red" }}>
            {dil_degisken("Giriş ismini yazınız", "Please enter username")}
          </p>
        </div>

        <div className="form-label-group">
          <input
            type="password"
            id="inputPassword"
            className={"form-control " + (passwordMesaj ? "" : "border-danger")}
            placeholder={dil_degisken("Şifre", "Password")}
            value={password}
            onChange={passwordDegisti}
            onBlur={passwordCheck}
            onFocus={() => {
              setPasswordMesaj(true);
              setGenelMesajStatus(true);
            }}
          />
          <label for="inputPassword">{dil_degisken("Şifre", "Password")}</label>
          <p hidden={passwordMesaj} style={{ color: "red" }}>
            {dil_degisken("Şifreyi doldurunuz", "Please fill out password")}
          </p>
        </div>
        <p
          className="alert alert-danger"
          hidden={genelMesajStatus}
          style={{ background: "red", color: "white" }}
        >
          {genelMesaj}
          {loginCheck && <Redirect to="/test" />}
        </p>
        <div className="checkbox mb-3 text-center">
          <label>
            <input type="checkbox" value="remember-me" />{" "}
            {dil_degisken("Beni hatırla", "Remember me")}
          </label>
        </div>
        <button className="btn btn-outline-emre btn-lg btn-block" type="submit">
          {dil_degisken("Giriş yap", "Sign in")}
        </button>

        <p className="mt-5 mb-3 text-muted text-center">
          &copy;2017-{new Date().getFullYear()}
        </p>
      </form>
    </div>
  );
}
