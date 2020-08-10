import React, { useContext, useState } from "react";
import { Context } from "../components";
import "./Login.css";

// import React from 'react'

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMesaj, setEmailMesaj] = useState(true);
  const [passwordMesaj, setPasswordMesaj] = useState(true);
  const [genelMesaj, setGenelMesaj] = useState(true);
  const context = useContext(Context);
  const { dil_degisken } = context.state;
  const emailDegisti = (e) => {
    setEmail(e.target.value);
    // this.setState({ email: e.target.value });
  };
  const passwordDegisti = (e) => {
    setPassword(e.target.value);
    // this.setState({ password: e.target.value });
  };
  const formGonderildi = (e) => {
    // const { email, password } = this.state;
    e.preventDefault();
    console.log(email, password);
    if (email === "" || password === "") {
      setGenelMesaj(false);
      // this.setState({ genelMesaj: false });
      this.emailCheck();
      this.passwordCheck();
      return;
    }
    //şifre cryptolama
    //backend ile iletişim
  };
  const emailCheck = () => {
    if (email === "") {
      setEmailMesaj(false);
      // this.setState({ emailMesaj: false });
    }
  };
  const passwordCheck = () => {
    if (password === "") {
      setPasswordMesaj(false);
      // this.setState({ passwordMesaj: false });
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
            className="form-control"
            placeholder={dil_degisken("Email adresi", "Email address")}
            autoFocus
            value={email}
            onChange={emailDegisti}
            onBlur={emailCheck}
            onFocus={() => {
              setEmailMesaj(true);
              setGenelMesaj(true);
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
            className="form-control"
            placeholder={dil_degisken("Şifre", "Password")}
            value={password}
            onChange={passwordDegisti}
            onBlur={passwordCheck}
            onFocus={() => {
              setPasswordMesaj(true);
              setGenelMesaj(true);
            }}
          />
          <label for="inputPassword">{dil_degisken("Şifre", "Password")}</label>
          <p hidden={passwordMesaj} style={{ color: "red" }}>
            {dil_degisken("Şifreyi yazınız", "Please enter password")}
          </p>
        </div>
        <p hidden={genelMesaj} style={{ background: "red", color: "white" }}>
          {dil_degisken(
            "Zorunlu alanları doldurunuz",
            "Please fill required fields"
          )}
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
