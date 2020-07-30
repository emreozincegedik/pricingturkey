import React, { Component } from "react";
import { Context } from "../components";
export class Error extends Component {
  static contextType = Context;
  render() {
    const { dil_degisken } = this.context.state;
    return (
      <div>
        <h1>404 {dil_degisken("sayfa bulunamadı", "page not found")}</h1>
      </div>
    );
  }
}
