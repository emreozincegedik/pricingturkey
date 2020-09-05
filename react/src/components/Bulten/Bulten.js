import React, { Component } from "react";
import { BultenSon4, BultenTarih } from "./index";

export class Bulten extends Component {
  render() {
    return (
      <div className="container py-5" style={{ marginTop: "90px" }}>
        <div className="row">
          {this.props.ordered ? (
            <>
              <BultenTarih />
              <BultenSon4 lastX={this.props.lastX || 4} />
            </>
          ) : (
            <>
              <BultenSon4 lastX={this.props.lastX || 4} />
              <BultenTarih />
            </>
          )}
        </div>
      </div>
    );
  }
}
