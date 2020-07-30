import React, { Component } from "react";
import {
  Context,
  CarouselAnaResimler,
  CarouselCalisanlar,
  CarouselTest,
} from "../components";

import "./Anasayfa.css";

export class Anasayfa extends Component {
  render() {
    const { dil_degisken } = this.context.state;
    return (
      <div>
        <CarouselAnaResimler />
        {/* <CarouselTest /> */}
        <CarouselCalisanlar />
      </div>
    );
  }
}

Anasayfa.contextType = Context;
