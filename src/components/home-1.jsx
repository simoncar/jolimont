import React, { Component } from "react";
import { Helmet } from "react-helmet";
// Import custom components
import SliderHome from "./common/slider/slider";
import OverviewSection from "./overview";
import CounterBlock from "./common/countup/countup";
import ApartmentsPlansSection from "./ourvalues";
import NeighborhoodsSection from "./neighborhoods";

import ContentWrap from "./common/content-wrap";
import ApartmentArchiveBlock from "./common/apartment/archive-apartment";

class Home1 extends Component {
  //   <div className={`apartments-page-wrap`}>
  //   <ContentWrap isBoxed={true}>
  //     <ApartmentArchiveBlock number={9} />
  //   </ContentWrap>
  // </div>

  render() {
    return (
      <div className={`home-page-wrap`}>
        <Helmet>
          <title>106 Jolimont</title>
        </Helmet>

        <div className="section-wrapper pt-0 pb-0">
          <SliderHome />
        </div>
        <div className="section-wrapper">
          <OverviewSection />
        </div>
        <div className="section-wrapper">
          <CounterBlock />
        </div>
        <div className="section-wrapper">
          <ApartmentsPlansSection />
        </div>
        <div className="section-wrapper">
          <NeighborhoodsSection />
        </div>
      </div>
    );
  }
}

export default Home1;
