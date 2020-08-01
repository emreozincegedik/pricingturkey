import React, { Component } from "react";

export class BultenCard extends Component {
  render() {
    return (
      <div class={"order-" + this.props.class} style={{ width: "350px" }}>
        <div class="card mb-4 bg-white" style={{ border: "hidden" }}>
          <svg
            class="bd-placeholder-img card-img-top"
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
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <button type="button" class="btn btn-m btn-outline-vahitcan">
                View
              </button>

              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
