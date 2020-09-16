import React, { Component } from "react";
import { Context } from "../components";
import err from "../resimler/404.svg";
export class Error extends Component {
  static contextType = Context;
  componentDidMount() {
    // console.log(this);
  }
  render() {
    const { dil_degisken } = this.context.state;
    return (
      <div className="container-fluid" /* style={{ marginTop: "20vh" }} */>
        <img src={err} alt="" srcset="" />
        <div class="container">
          <h1 className="display-2">
            {dil_degisken("sayfa bulunamadı", "page not found")}
          </h1>
        </div>
      </div>
    );
  }
}
