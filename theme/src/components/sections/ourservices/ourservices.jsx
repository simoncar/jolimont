import React, {Component} from 'react';
import './ourservices.scss';
import Heading from "../../common/heading/heading";

class OurServicesSection extends Component {
    render (){
        return (
            <div className="ourservices">
                <div className="container">
                    <Heading>our Services - Style 01</Heading>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-map"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Flexible, Contemporary Spaces</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">We design and service
                                            the next generation office building – one that feels more like a
                                            full-service, lifestyle hotel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-user"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Flexible, Contemporary Spaces</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">We are a team of 300 people who specialize in hospitality, technology, design, and production</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-coffee"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Flexible, Contemporary Spaces</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">By studying the science of catering to large groups of people, particularly in a business context</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-badge"></i></div>
                                        <h3 className="featured-box-title text-uppercase">We’re Here To Make You Successful</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">For each space we design, each technology item we carry, every meal we prepare, and every line item in the production schedule</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2 ">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-like"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Human-Centered Design Friendly Spaces</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">Our design philosophy and continuous improvement methodology aims to enhance the experience of every user of our spaces.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-config"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Cutting-Edge Technology</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">Our meeting and conference technology is completely integrated within all of our conference centers and meeting spaces. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurServicesSection