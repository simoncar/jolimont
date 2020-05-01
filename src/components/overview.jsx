import React, { Component } from "react";
import Heading from "./common/heading/heading";

class OverviewSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-left">
            <Heading>THE BUILDING OVERVIEW</Heading>
            <p className="text-black">
              Introducing 106 Jolimont, the stunning 5 level home. A perfect blend of breathtaking architecture and location
            </p>

            <p>
              This outstanding New York inspired freestanding residence designed by renowned, award winning architect Matt Gibson exudes
              meticulous attention to detail, both colossal in its exterior design and sculptural in its landscape. This landmark home sits
              on the doorstep of the CBD, Melbourne’s famous Sporting Precinct and within walking distance to Fitzroy and Treasury Gardens.
            </p>
            <p>
              With commercial grade reinforced concrete and striking steel screening, double glazed throughout and a state of art custom
              designed Italian elevator, this home exuberates natural light, privacy and sophistication on every level.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img className="img-fluid" src="/assets/imagewebp/theme/img-05.webp" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewSection;
