import React, { Component } from "react";
import { Context } from "../components";
import "./Login.css";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    emailMesaj: true,
    passwordMesaj: true,
    genelMesaj: true,
  };
  static contextType = Context;
  // componentDidMount() {
  //   console.log(this.props.match);
  // }
  emailDegisti = (e) => {
    this.setState({ email: e.target.value });
  };
  passwordDegisti = (e) => {
    this.setState({ password: e.target.value });
  };
  formGonderildi = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    console.log(email, password);
    if (email === "" || password === "") {
      this.setState({ genelMesaj: false });
      this.emailCheck();
      this.passwordCheck();
      return;
    }
    //şifre cryptolama
    //backend ile iletişim
  };
  emailCheck = () => {
    if (this.state.email === "") {
      this.setState({ emailMesaj: false });
    }
  };
  passwordCheck = () => {
    if (this.state.password === "") {
      this.setState({ passwordMesaj: false });
    }
  };
  render() {
    const { dil_degisken } = this.context.state;
    const {
      email,
      password,
      emailMesaj,
      passwordMesaj,
      genelMesaj,
    } = this.state;
    return (
      <div style={{ marginTop: "20vh" }}>
        <form className="form-signin" onSubmit={this.formGonderildi}>
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
              onChange={this.emailDegisti}
              onBlur={this.emailCheck}
              onFocus={() =>
                this.setState({ emailMesaj: true, genelMesaj: true })
              }
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
              onChange={this.passwordDegisti}
              onBlur={this.passwordCheck}
              onFocus={() =>
                this.setState({ passwordMesaj: true, genelMesaj: true })
              }
            />
            <label for="inputPassword">
              {dil_degisken("Şifre", "Password")}
            </label>
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
          <button
            className="btn btn-outline-emre btn-lg btn-block"
            type="submit"
          >
            {dil_degisken("Giriş yap", "Sign in")}
          </button>

          <p className="mt-5 mb-3 text-muted text-center">
            &copy;2017-{new Date().getFullYear()}
          </p>
        </form>
      </div>
    );
  }
}
