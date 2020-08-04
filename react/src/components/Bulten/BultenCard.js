import React, { Component } from "react";

export class BultenCard extends Component {
  render() {
    return (
      <div className={"order-" + this.props.class} style={{ width: "350px" }}>
        <div className="card mb-4 bg-white" style={{ border: "hidden" }}>
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
            <title>{this.props.title || "Placeholder"}</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              {this.props.thumbnail || "Thumbnail"}
            </text>
          </svg>
          <div className="card-body">
            <p className="card-text">
              {this.props.text ||
                `This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.`}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-m btn-outline-vahitcan">
                {this.props.btnText || "View"}
              </button>

              <small className="text-muted">
                {this.props.date || "9 mins"}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
