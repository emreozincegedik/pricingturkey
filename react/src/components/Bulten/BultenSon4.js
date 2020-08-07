import React, { Component } from "react";
import { BultenCard } from "./index";

export class BultenSon4 extends Component {
  render() {
    const cards = [1, 2, 3, 4];
    const testCards = {
      img: "",
      ariaLabel: "",
      title: "",
      text: "",
      btnText: "",
      date: "",
    };
    return (
      <div className="col-md-9 d-flex flex-row flex-wrap justify-content-around">
        {cards.map((item, i) => (
          <BultenCard key={i} />
        ))}
      </div>
    );
  }
}
