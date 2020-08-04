import React, { Component } from "react";
import { BultenSon4, BultenTarih } from "./index";

export class Bulten extends Component {
  render() {
    return (
      <div className="container py-5" style={{ marginTop: "90px" }}>
        <div className="row">
          <BultenSon4 />
          <BultenTarih />
        </div>
      </div>
    );
  }
}
