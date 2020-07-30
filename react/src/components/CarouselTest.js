import React, { Component } from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Context } from "./Genel";

export class CarouselTest extends Component {
  componentDidMount() {
    // console.log(this.context);
  }
  render() {
    return (
      <Carousel
        plugins={[
          "clickToChange",
          "centered",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
      >
        <img src="https://via.placeholder.com/640x640" />
        <img src="https://via.placeholder.com/450x641" />
        <img src="https://via.placeholder.com/450x642" />
      </Carousel>
    );
  }
}
CarouselTest.contextType = Context;
