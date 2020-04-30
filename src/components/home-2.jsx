import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
// Import custom components
import SliderHome from "./common/slider/slider";
import CarouselPage2 from "./common/slider/slider2";
import ApartmentBlock from "./common/apartment/apartment";
import CallToActionSection from "./sections/caltoaction/caltoaction";
import NeighborhoodsSection from "./sections/neighborhoods/neighborhoods";
import IconBoxSection from "./sections/icon-box/icon-box";
import OurTeamSection from "./sections/our-team/our-team";
import GallerrySection from "./sections/gallerry/gallerry";
import OverviewFluidSection from "./sections/overview-fluid/overview-fluid";
import ApartmentsPlansSection from "./sections/ourvalues/ourvalues";


class Home2 extends Component {
    render() {
        return (
            <div className={`home-page-wrap`}>
                <Helmet>
                    <title>MaisonCo | Single Property</title>
                    <meta name="description" content="MaisonCo – Single property React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Striz Bootstrap 4 Template will help you run multiple businesses."/>
                </Helmet>
                <div className="section-wrapper pt-0">
                    <SliderHome/>
                </div>
                <div className="section-wrapper">
                    <OverviewFluidSection/>
                </div>
                <div className="section-wrapper">
                    <ApartmentBlock number={3} columns={3} noGutters={true}/>
                </div>
                <div className="section-wrapper">
                    <ApartmentsPlansSection/>
                </div>
                <div className="section-wrapper">
                    <CarouselPage2/>
                </div>
                <div className="section-wrapper">
                    <IconBoxSection/>
                </div>
                <div className="section-wrapper">
                    <NeighborhoodsSection/>
                </div>
                <div className="section-wrapper">
                    <OurTeamSection/>
                </div>
                <div className="section-wrapper">
                    <CallToActionSection/>
                </div>
                <div className="section-wrapper">
                    <div className="container">
                        <GallerrySection flexRow={false}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home2;