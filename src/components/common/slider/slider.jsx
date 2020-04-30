import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.scss";
class SliderHome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={"slider-wrap position-relative"}>
        <Slider {...settings}>
          <div className="slider-item position-relative">
            <div className="slider-image" style={{ backgroundImage: "url(/assets/imagewebp/theme/slide1.webp)" }}></div>
            <div className="container">
              <div className="slider-content">
                <div className="text-center w-100">
                  <h2 className="text-white">
                    A Beautiful Space
                    <br />
                    In The Best Place{" "}
                  </h2>
                  <h5 className="text-white mt-5">
                    Melbourne Sports and Entertainment Precinct
                    <br />
                    Your Own 5 Level House.
                  </h5>
                </div>
                <div className="slider-footer text-left">
                  <h6 className="text-white">Contact Us</h6>
                  <p className="text-white">Private Accommodation Bookings Only </p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item position-relative">
            <div className="slider-image" style={{ backgroundImage: "url(/assets/imagewebp/theme/slide2.webp)" }}></div>
            <div className="container">
              <div className="slider-content">
                <div className="text-center w-100">
                  <h2 className="text-white">
                    Smart Living with <br /> 5-star services{" "}
                  </h2>
                  <h5 className="text-white mt-5">
                    Convenient Location – Best Price <br />– 2 or 3 Bedroom Apartment.
                  </h5>
                </div>
                <div className="slider-footer text-left">
                  <h6 className="text-white">Contact Us</h6>
                  <p className="text-white">Private Accommodation Bookings Only</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item position-relative">
            <div className="slider-image" style={{ backgroundImage: "url(/assets/imagewebp/theme/slide3.webp)" }}></div>
            <div className="container">
              <div className="slider-content">
                <div className="text-center w-100">
                  <h2 className="text-white">
                    entertainment <br /> in privacy{" "}
                  </h2>
                  <h5 className="text-white mt-5">
                    <br />
                  </h5>
                </div>
                <div className="slider-footer text-left">
                  <h6 className="text-white">Contact Us</h6>
                  <p className="text-white">Private Accommodation Bookings Only</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderHome;
