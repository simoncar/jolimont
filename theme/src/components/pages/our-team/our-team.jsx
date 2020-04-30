import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from "react-helmet";
import { Parallax } from 'react-parallax';
import './our-team.scss';
import Heading from "../../common/heading/heading";
import OurTeamBlock from "../../common/our-team/our-team";
class OurTeamPage extends Component {
    render (){

        return (
            <div className={`our-team-wrap`}>
                <Helmet>
                    <title>MaisonCo | Our Team Page</title>
                </Helmet>
                <Breadcrumb title={'Our Team'} />
                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-left">
                                <Heading>INTERIOR DESIGNER</Heading>
                                <p>
                                    We recognise that the ongoing support of an engaged community is integral to the future of B2B media, meaning that we’re focused on delivering an audience inspired approach to knowledge generation and intelligence provision. Through the Building family of products and services, our community reach now extends across digital, print and live
                                </p>
                                <div className="mt-5 pb-3"><img className="img-fluid" src="/assets/imagewebp/ourteam/img_text.webp" alt=""/></div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebp/ourteam/img_1.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <Parallax
                        className={`section-parallax`}
                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/ourteam/img_bg.webp`}
                        bgImageAlt="the cat"
                        strength={500}
                    >
                        <div className="background-overlay"></div>
                            <div className="about-parallax  position-relative">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <div className="featured-box">
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
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <div className="featured-box">
                                            <div className="featured-box-wrap">
                                                <div className="featured-box-top">
                                                    <div className="featured-box-icon"><i className="opal-icon-user"></i></div>
                                                    <h3 className="featured-box-title text-uppercase">Dedicated Production And Planning Teams</h3>
                                                </div>
                                                <div className="featured-box-bottom">
                                                    <p className="featured-box-description">We are a team of 300 people who specialize in hospitality, technology, design, and production</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <div className="featured-box">
                                            <div className="featured-box-wrap">
                                                <div className="featured-box-top">
                                                    <div className="featured-box-icon"><i className="opal-icon-coffee"></i></div>
                                                    <h3 className="featured-box-title text-uppercase">Premium, Fresh Cuisine Made Onsite</h3>
                                                </div>
                                                <div className="featured-box-bottom">
                                                    <p className="featured-box-description">By studying the science of catering to large groups of people, particularly in a business context</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                </div>
                <div className="section-wrapper">
                    <div className="ourteam">
                        <div className="container">
                            <Heading>OUR TEAM</Heading>
                            <div className="row no-gutters">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <OurTeamBlock img="/assets/imagewebp/about/team_1.webp" name={`Connor Flores`} job={`JV PROPERTY MANAGEMENT`} position={`top`}>
                                        You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of
                                    </OurTeamBlock>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <OurTeamBlock img="/assets/imagewebp/about/team_2.webp" name={`CAROLINE VAUGHN`} job={`PROJECT MANAGER`} position={`bottom`}>
                                        You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of
                                    </OurTeamBlock>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <OurTeamBlock img="/assets/imagewebp/about/team_3.webp" name={`WILLIE TODD`} job={`SENIOR ARCHITECT`} position={`top`}>
                                        You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of
                                    </OurTeamBlock>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <OurTeamBlock img="/assets/imagewebp/about/team_4.webp" name={`JOSIE MAXWELL`} job={`PROJECT COORDINATOR`} position={`bottom`}>
                                        You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of
                                    </OurTeamBlock>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="call-to-action text-center">
                        <div className="container">
                            <h2 className="text-uppercase text-white">Available for</h2>
                            <h2 className="text-uppercase text-white mb-4">Immediate Occupancy!</h2>
                            <div className="btn-call-to-action">
                                <a href="#" className="btn btn-dark" role="button">View availability</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center pb-5">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebp/ourteam/img_1.webp" alt=""/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                                <Heading>STYLISH LIVING</Heading>
                                <p>
                                    We recognise that the ongoing support of an engaged community is integral to the future of B2B media, meaning that we’re focused on delivering an audience inspired approach to knowledge generation and intelligence provision. Through the Building family of products and services, our community reach now extends across digital, print and live platforms, and as a result we’re more than just a media provider; we’re an influential hub for world-class thought leadership and innovation.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurTeamPage