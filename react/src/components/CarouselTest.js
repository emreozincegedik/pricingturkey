import React, { Component } from "react";
// import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
// import Slider from "react-slick";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Context, EkipCard } from "./index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class CarouselTest extends Component {
  componentDidMount() {
    // console.log(this.context);
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <EkipCard />
          <EkipCard />
          <EkipCard />
          <EkipCard />
        </Slider>
      </div>
    );
  }
}
CarouselTest.contextType = Context;
