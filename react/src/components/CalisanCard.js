import React, { Component } from "react";

export class CalisanCard extends Component {
  render() {
    return (
      <div className="card sm-1 shadow-sm mx-3">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Thumbnail"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            Thumbnail
          </text>
        </svg>
        <div className="card-body">
          <p className="card-text">{this.props.Text || "asd"}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-m btn-outline-secondary">
              View
            </button>

            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    );
  }
}
