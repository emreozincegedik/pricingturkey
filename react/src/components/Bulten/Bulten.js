import React, { Component } from "react";
import { BultenSon4, BultenTarih } from "./index";
import { Context } from "../index";

export class Bulten extends Component {
  static contextType = Context;
  render() {
    const { dil_degisken } = this.context.state;
    return (
      <>
        <div className="container py-5" style={{ marginTop: "90px" }}>
          <div className="row">
            {this.props.ordered ? (
              <>
                <BultenTarih />
                <BultenSon4
                  lastX={this.props.lastX || 4}
                  bilgiCesit={this.props.bilgiCesit}
                  page={this.props.page}
                />
              </>
            ) : (
              <>
                <BultenSon4
                  lastX={this.props.lastX || 4}
                  bilgiCesit={this.props.bilgiCesit}
                  page={this.props.page}
                />
                <BultenTarih />
              </>
            )}
          </div>
        </div>
        <div className="container">
          <div aria-label="Page navigation example">
            <ul class="nav-justified pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  {dil_degisken("Önceki sayfa", "Previous page")}
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  {dil_degisken("Sonraki sayfa", "Next page")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
