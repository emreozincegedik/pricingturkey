import React, { Component } from "react";
import { Context } from "../components";

export class Test extends Component {
  render() {
    const { dil_degisken } = this.context.state;
    return (
      <div style={{ marginTop: "90px" }}>
        {dil_degisken("Test yapılıyor", "Doing Test")}
      </div>
    );
  }
}
Test.contextType = Context;
