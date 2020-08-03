import React, { Component } from "react";
import { Context } from "../components";
import "./Login.css";

export class Login extends Component {
  state = {
    email: "",
    password: "",
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
    e.preventDefault();
    console.log(this.state.email, this.state.password);
    //backend ile iletişim
  };
  render() {
    const { dil_degisken } = this.context.state;
    const { email, password } = this.state;
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
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder={dil_degisken("Email adresi", "Email address")}
              required
              autoFocus
              value={email}
              onChange={this.emailDegisti}
            />
            <label for="inputEmail">
              {dil_degisken("Email adresi", "Email address")}
            </label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder={dil_degisken("Şifre", "Password")}
              required
              value={password}
              onChange={this.passwordDegisti}
            />
            <label for="inputPassword">
              {dil_degisken("Şifre", "Password")}
            </label>
          </div>

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
