import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from "react-helmet";
import './the-building.scss';
import CounterBlockStyle from "../../common/countup/countup-style";
import GallerrySection from "../../sections/gallerry/gallerry";
class TheBuildingPage extends Component {
    render (){

        return (
            <div className={`the-building-wrap`}>
                <Helmet>
                    <title>MaisonCo | The Building Page</title>
                </Helmet>
                <Breadcrumb title={'The Building'}/>
                <div className="section-wrapper">
                    <div className="container">
                        <div className="text-description text-center pt-5">
                            <h3 className="text-primary">ARE YOU INTERESTED</h3>
                            <h2>IT'S TIME TO DISCOVER</h2>
                            <h3>THE BUILDING</h3>
                            <p className="text-black-50 mt-5"><strong>One of my favourite things I like to watch is the bloopers and outtakes that are shown of mistakes made during the making of a movie. Most DVD’s have a section of outtakes to be viewed, and often they will set me off laughing, especially when you know what was supposed to happen.</strong></p>
                            <p className="mt-4">It is very easy to start smoking but it is an uphill task to quit it. Ask any chain smoker or even a person who smokes just a few cigarettes everyday. Usually a person can stop smoking for a couple of days, then the urge to smoke is so strong that one makes all kinds of excuses to start it again. So you are back to square one. All kinds of methods have been advocated for quitting smoking, but the one that has made a big impact is Hypnosis. Hypnosis quit smoking methods has divided the medical fraternity into two. While some argue that Hypnosis quit smoking methods are not effective in the long run, there are others</p>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper text-center">
                    <CounterBlockStyle/>
                </div>
                <div className="section-wrapper">
                    <div className="container">
                        <div className="text-description text-center">
                            <h3>A BETTER WAY TO OFFER BUILDING AMENITIES TO OFFICE TENANTS …</h3>
                            <h3>LANDLORDS ARE APPROACHING THIS WORKPLACE TREND IS BY</h3>
                            <h3>PROVIDING PREMIUM AMENITIES AND SERVICES.</h3>
                            <div className="row mt-5 pt-5">
                                <div className="col-lg-6 col-md-12">
                                    <h3 className="text-primary mb-4">AMENITIES.</h3>
                                    <p>Conference facilities</p>
                                    <p>Reliable, fast Wi-Fi</p>
                                    <p>Easy access to parking and transportation</p>
                                    <p>Dining options</p>
                                    <p>Fully equipped fitness centers</p>
                                    <p>Outdoor space</p>
                                    <p>Eco-friendly options</p>
                                    <p>Charging outlets with USB ports</p>
                                    <p>Smart Controls for Heating/Cooling</p>
                                    <p>Retail Amenities</p>
                                    <p>Community events and classes</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h3 className="text-primary mb-4">SERVICES .</h3>
                                    <p>Daylight and artificial lighting</p>
                                    <p>Escalators and lifts</p>
                                    <p>Ventilation and refrigeration</p>
                                    <p>Security and alarm systems</p>
                                    <p>Fire detection and protection</p>
                                    <p>Energy supply and use</p>
                                    <p>Facade engineering</p>
                                    <p>Air conditioning and refrigeration</p>
                                    <p>Smart Controls for Heating/Cooling</p>
                                    <p>Heating and ventilating</p>
                                    <p>Water, drainage and plumbing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="gallerry-wrap">
                        <GallerrySection flexRow={true}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TheBuildingPage