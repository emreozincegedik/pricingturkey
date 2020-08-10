import React, { Component } from "react";
import { Context } from "../components";

export class Test2 extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { dil_degisken } = this.context.state;
    const { id } = this.props.match.params;
    return (
      <div style={{ marginTop: "90px" }}>
        {dil_degisken("Test sayfası özel bilgi", "Test page special info")}:{" "}
        {id}
      </div>
    );
  }
}

Test2.contextType = Context;
