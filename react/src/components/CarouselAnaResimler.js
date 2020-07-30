import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export class CarouselAnaResimler extends Component {
  render() {
    return (
      <Carousel slide={true} face="true" touch={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1850x640"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1851x640"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1852x640"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    );
  }
}
