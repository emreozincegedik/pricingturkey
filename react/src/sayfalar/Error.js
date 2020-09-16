import React, { Component } from "react";
import { Context } from "../components";
export class Error extends Component {
  static contextType = Context;
  componentDidMount() {
    // console.log(this);
  }
  render() {
    const { dil_degisken } = this.context.state;
    return (
      <div className="container" /* style={{ marginTop: "20vh" }} */>
        <h1>404 {dil_degisken("sayfa bulunamadı", "page not found")}</h1>
      </div>
    );
  }
}
