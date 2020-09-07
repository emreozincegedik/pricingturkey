import React, { Component } from "react";
import { Context } from "../Genel";
import { NavLink } from "react-router-dom";

import { animateScroll } from "react-scroll";
const scrollSetting = {
  duration: 200,
  delay: 0,
  smooth: "easeInOutQuart",
};

export class BultenCard extends Component {
  static contextType = Context;

  render() {
    const { dil_degisken, scrollSetup } = this.context.state;
    return (
      <div /* className={"order-5"} */ style={{ width: "350px" }}>
        <div className="card mb-4 bg-white border-vahitcan" style={{}}>
          <img
            className="card-img-top"
            src={this.props.img || "https://via.placeholder.com/350x225"}
            aria-label={this.props.ariaLabel || "Bülten resmi"}
            alt={
              dil_degisken(this.props.baslikTR, this.props.baslikEN) || "Başlık"
            }
          />
          {/* <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
          > */}
          <title>{this.props.title || "Placeholder"}</title>
          <div width="100%" height="100%" fill="#55595c" />
          <span x="50%" y="50%" fill="#eceeef" dy=".3em">
            <h1>
              {dil_degisken(this.props.baslikTR, this.props.baslikEN) ||
                "Başlık askglna degankşebgnaşk.dbnaş.fnba a eşlkngae"}
            </h1>
          </span>
          {/* </svg> */}
          <div className="card-body">
            <p
              className="card-text"
              dangerouslySetInnerHTML={{
                __html:
                  (dil_degisken(this.props.yaziTR, this.props.yaziEN).substring(
                    0,
                    200
                  ) ||
                    `This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.`) + "...",
              }}
            ></p>
            <div className="d-flex justify-content-between align-items-center">
              <NavLink
                className="btn btn-m btn-outline-vahitcan"
                to={"/bulten/" + this.props.id}
                onClick={() => {
                  scrollSetup("");
                  animateScroll.scrollToTop(scrollSetting);
                }}
              >
                {this.props.btnText || dil_degisken("Görüntüle", "View")}
              </NavLink>

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
