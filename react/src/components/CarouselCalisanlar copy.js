import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

export class CarouselCalisanlar extends Component {
  state = {
    index: 0,
    a: [0, 1, 2, 3],
  };
  render() {
    const handleSelect = (selectedIndex, e) => {
      this.setState({ index: selectedIndex });
      // setIndex(selectedIndex);
    };
    return (
      <div className="container">
        <div className="py-5">
          <Carousel
            activeIndex={this.state.index}
            onSelect={handleSelect}
            interval={5000}
            fade={false}
          >
            {this.state.a.map((x) => (
              <Carousel.Item>
                <div className="row">
                  <div class="card md-4 shadow-sm mx-3">
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
                      <p class="card-text">{x}.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          class="btn btn-m btn-outline-secondary"
                        >
                          View
                        </button>

                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                  <div class="card md-4 shadow-sm">
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
                      <p class="card-text">{x}.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          class="btn btn-m btn-outline-secondary"
                        >
                          View
                        </button>

                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}
