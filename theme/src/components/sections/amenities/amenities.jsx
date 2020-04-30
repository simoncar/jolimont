import React, {Component} from 'react';
import './amenities.scss';
import Heading from "../../common/heading/heading";
import CarouselPage1 from "../../common/slider/slider1";

class AmenitiesSection extends Component {
    render (){
        return (
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <CarouselPage1/>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 content-right">
                    <Heading>BUILDING AMENITIES</Heading>
                    <p className="mb-5">
                        From the vibrant ground level plaza to the terraces, private
                        gardens, balconies and lush rooftop work spaces, Costix offers
                        an array of amenities …
                    </p>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="icon-list">
                                <div className="icon-list-wrap">
                                    <ul>
                                        <li className="icon-list-items">
                                                <span className="icon-list-icon">
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                            <span className="icon-list-text">Business Services</span>
                                        </li>
                                        <li className="icon-list-items">
                                                <span className="icon-list-icon">
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                            <span className="icon-list-text">Courtesy Newspaper</span>
                                        </li>
                                        <li className="icon-list-items">
                                                <span className="icon-list-icon">
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                            <span className="icon-list-text">Fitness Facility</span>
                                        </li>
                                        <li className="icon-list-items">
                                                <span className="icon-list-icon">
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                            <span className="icon-list-text">Meeting & Event</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="icon-list">
                                <div className="icon-list-wrap">
                                    <ul>
                                        <li className="icon-list-items">
                                                <span className="icon-list-icon">
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                            <span className="icon-list-text">Swimming Pool</span>
                                        </li>
                                        <li className="icon-list-items">
                                                <span className="icon-list-icon">
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                            <span className="icon-list-text">Restaurant</span>
                                        </li>
                                        <li className="icon-list-items">
                                                <span className="icon-list-icon">
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                            <span className="icon-list-text">Community Center</span>
                                        </li>
                                        <li className="icon-list-items">
                                                <span className="icon-list-icon">
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                            <span className="icon-list-text">Spa Facility</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AmenitiesSection