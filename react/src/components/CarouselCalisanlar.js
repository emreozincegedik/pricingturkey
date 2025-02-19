// import React, { Component } from "react";
import React, { useContext, useState } from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { /* CalisanCard, */ EkipCard, Context } from "./index";
import "react-multi-carousel/lib/styles.css";
import { Element } from "react-scroll";

import { useQuery } from "react-query";

const fetchEkip = async () => {
  const response = await fetch("/ekip/select", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    // body: JSON.stringify({ username: email, pwd: pwdHash }),
    // body: JSON.stringify(user),
  });
  return response.json();
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <div></div>
    // <button
    //   aria-label="Go to previous slide??"
    //   className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
    //   style={{ margin: "-48px" }}
    //   onClick={() => onClick()}
    // />
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <div></div>
    // <button
    //   aria-label="Go to next slide"
    //   className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
    //   style={{ margin: "-50px" }}
    //   onClick={() => onClick()}
    // />
  );
};

export function CarouselCalisanlar(props) {
  const { data, status } = useQuery("ekip", fetchEkip);
  // console.log(data, status);

  const handleSelect = (selectedIndex, e) => {
    setindex(selectedIndex);
    // setIndex(selectedIndex);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const { dil_degisken } = useContext(Context).state;
  const [index, setindex] = useState(0);
  const [a, setA] = useState([0, 1, 2, 3]);
  return (
    <Element
      className="py-5"
      style={{ marginTop: "80px" }}
      id="carouselCalisanlarEmreOzincegedik"
    >
      <div className="container-fluid bg-vahitcan py-5">
        <div
          className="display-3 d-flex justify-content-center mb-5"
          style={{ width: "%50", margin: "0 auto" }}
        >
          {dil_degisken("Ekibimiz", "Our team")}
        </div>
        {/* <div class="container"> */}
        {/* <div class="row"> */}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {status === "success" &&
            data.map((item) => (
              <EkipCard
                key={item.id}
                img={item.resim}
                title={item.isim + " " + item.soyisim}
                detail={dil_degisken(item.aciklamaTR, item.aciklamaEN)}
              />
            ))}
          {status === "error" && a.map((item) => <EkipCard key={item} />)}
        </Carousel>
        {/* </div> */}
        {/* </div> */}
      </div>
    </Element>
  );
}

// export class CarouselCalisanlar extends Component {
//   static contextType = Context;
//   state = {
//     index: 0,
//     a: [0, 1, 2, 3],
//   };
//   render() {
//     const { dil_degisken } = this.context.state;
//     const handleSelect = (selectedIndex, e) => {
//       this.setState({ index: selectedIndex });
//       // setIndex(selectedIndex);
//     };
//     const responsive = {
//       superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 5,
//       },
//       desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3,
//       },
//       tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2,
//       },
//       mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//       },
//     };
//     return (
//       /////////////////
//       <Element
//         className="py-5"
//         style={{ marginTop: "80px" }}
//         id="carouselCalisanlarEmreOzincegedik"
//       >
//         <div className="container-fluid bg-vahitcan py-5">
//           <div
//             className="display-3 d-flex justify-content-center mb-5"
//             style={{ width: "%50", margin: "0 auto" }}
//           >
//             {dil_degisken("Ekibimiz", "Our team")}
//           </div>
//           {/* <div class="container"> */}
//           {/* <div class="row"> */}
//           <Carousel
//             swipeable={true}
//             draggable={true}
//             showDots={false}
//             responsive={responsive}
//             ssr={true} // means to render carousel on server-side.
//             infinite={true}
//             autoPlay={true}
//             autoPlaySpeed={5000}
//             keyBoardControl={true}
//             customTransition="transform 300ms ease-in-out"
//             transitionDuration={500}
//             containerClass="container"
//             removeArrowOnDeviceType={["tablet", "mobile"]}
//             deviceType={this.props.deviceType}
//             dotListClass="custom-dot-list-style"
//             itemClass="carousel-item-padding-40-px"
//             customRightArrow={<CustomRightArrow />}
//             customLeftArrow={<CustomLeftArrow />}
//           >
//             {this.state.a.map((item) => (
//               <EkipCard key={item} />
//             ))}
//           </Carousel>
//           {/* </div> */}
//           {/* </div> */}
//         </div>
//       </Element>
//     );
//   }
// }
