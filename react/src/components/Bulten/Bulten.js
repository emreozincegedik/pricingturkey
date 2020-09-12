import React, { Component } from "react";
import { BultenSon4, BultenTarih } from "./index";
import { Context } from "../index";
import { NavLink } from "react-router-dom";

export class Bulten extends Component {
  static contextType = Context;
  render() {
    const { dil_degisken } = this.context.state;
    console.log(this.props);
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
        {this.props.bilgiCesit !== undefined && this.props.bilgiCesit !== null && (
          <div className="container">
            <div aria-label="Page navigation example">
              <ul class="nav-justified pagination">
                {this.props.page > 1 && (
                  <li class="page-item">
                    <NavLink
                      class="page-link disabled"
                      to={`/bilgi/${this.props.bilgiCesit}/sayfa/${
                        this.props.page - 1
                      }`}
                    >
                      {dil_degisken("Önceki sayfa", "Previous page")}
                    </NavLink>
                  </li>
                )}
                <li class="page-item">
                  <NavLink
                    class="page-link"
                    to={`/bilgi/${this.props.bilgiCesit}/sayfa/${
                      parseInt(this.props.page) + 1
                    }`}
                  >
                    {dil_degisken("Sonraki sayfa", "Next page")}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
}
