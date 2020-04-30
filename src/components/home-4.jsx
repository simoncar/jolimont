import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
// Import custom components
import SliderHome from "./common/slider/slider";
import OurValuesSection from "./sections/ourvalues/ourvalues";
import Heading from "./common/heading/heading";
import CounterBlockBg from "./common/countup/countup-bg";
import CallToActionSection from "./sections/caltoaction/caltoaction";
import NeighborhoodsSection from "./sections/neighborhoods/neighborhoods";
import AvailabilitySection from "./sections/availability/availability";
import CarouselPage2 from "./common/slider/slider2";
import OurTeamBlock from "./common/our-team/our-team";
import ApartmentBlock from "./common/apartment/apartment";
import OurTeamSection from "./sections/our-team/our-team";
class Home4 extends Component {
    render() {
        return (
            <div className={`home-page-wrap`}>
                <Helmet>
                    <title>MaisonCo | Single Property</title>
                </Helmet>
                <div className="section-wrapper pt-0 pb-0">
                    <SliderHome/>
                </div>
                <div className="section-wrapper pt-0">
                    <div className="building-counter text-center">
                        <div className="text-description pt-4 pb-5">
                            <h3 className="text-primary">ARE YOU INTERESTED</h3>
                            <h2>IT'S TIME TO DISCOVER</h2>
                            <h3>THE BUILDING</h3>
                        </div>
                        <CounterBlockBg/>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="container">
                        <Heading>PROPERTY AND ROOMS</Heading>
                        <ApartmentBlock number={3} columns={3} noGutters={false}/>
                    </div>
                </div>
                <div className="section-wrapper">
                    <CallToActionSection/>
                </div>
                <div className="section-wrapper">
                   <OurValuesSection/>
                </div>
                <div className="section-wrapper">
                    <NeighborhoodsSection/>
                </div>
                <div className="section-wrapper">
                    <AvailabilitySection/>
                </div>
                <div className="section-wrapper">
                    <CarouselPage2/>
                </div>
                <div className="section-wrapper">
                    <OurTeamSection/>
                </div>

            </div>
        )


    }
}

export default Home4;