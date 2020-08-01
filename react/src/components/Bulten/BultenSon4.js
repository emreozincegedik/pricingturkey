import React, { Component } from "react";
import { BultenCard } from "./index";

export class BultenSon4 extends Component {
  render() {
    const cards = [1, 2, 3, 4];
    return (
      <div class="col-md-9 d-flex flex-row flex-wrap">
        {cards.map((item, i) => (
          <BultenCard
            class={i + 1 + " " + ((i + 1) % 2 === 0 ? "mx-auto" : "")}
          />
        ))}
      </div>
    );
  }
}
