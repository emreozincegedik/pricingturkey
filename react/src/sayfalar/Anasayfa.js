import React, { Component } from "react";
import {
  Context,
  CarouselAnaResimler,
  CarouselCalisanlar,
  CarouselTest,
  LandingPage,
  Bulten,
} from "../components";
import { scroller } from "react-scroll";

import "./Anasayfa.css";

export class Anasayfa extends Component {
  componentDidMount() {
    scroller.scrollTo(this.context.state.scroll, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    console.log(this.context.state.scroll);
    this.context.state.scrollSetup("");
  }
  render() {
    return (
      <div>
        {/* <CarouselAnaResimler /> */}
        <LandingPage />
        {/* <CarouselTest /> */}
        <CarouselCalisanlar />
        <Bulten />
      </div>
    );
  }
}

Anasayfa.contextType = Context;
