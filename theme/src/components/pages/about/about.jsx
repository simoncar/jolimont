import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from 'react-helmet';
import {Parallax} from 'react-parallax';
import Heading from "../../common/heading/heading";
import './about.scss';
import OurTeamBlock from "../../common/our-team/our-team";
import CallToActionSection from "../../sections/caltoaction/caltoaction";
import OurTeamSection from "../../sections/our-team/our-team";

class AboutPage extends Component {
    render() {
        return (
            <div className="about-page-wrap">
                <Helmet>
                    <title>MaisonCo | About Page</title>
                </Helmet>
                <Breadcrumb title={'About Us'}/>

                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-left">
                                <Heading>ABOUT MAISONCO</Heading>
                                <p className="text-black">
                                    Introducing MaisonCo, the stunning new addition to the downtown Manhattan skyline. A
                                    perfect blend of breathtaking architecture designed, with awe-inspiring interiors
                                    envisioned
                                </p>
                                <p>
                                    We recognise that the ongoing support of an engaged community is integral to the
                                    future of B2B media, meaning that we’re focused on delivering an audience inspired
                                    approach to knowledge generation and intelligence provision. Through the Building
                                    family of products and services, our community reach now extends across digital,
                                    print and live platforms, and as a result we’re more than just a media provider;
                                    we’re an influential hub for world-class thought leadership and innovation.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebp/about/banner_ab1.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">

                    <Parallax
                        className={`section-parallax`}
                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/about/bg_ab1.webp`}
                        bgImageAlt="the cat"
                        strength={500}
                    >
                        <div className="about-parallax  position-relative">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <div className="counter-nummer">1 MILLION +</div>
                                                <div className="counter-text">WEB PAGES CREATED BY USERS</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <div className="counter-nummer">400 +</div>
                                                <div className="counter-text">IN-HOUSE DESIGNED TEMPLATES</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <div className="counter-nummer">500k +</div>
                                                <div className="counter-text">CUSTOMERS SERVED AROUND THE WORLD</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Parallax>

                </div>
                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebp/about/banner_ab2.webp" alt=""/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                                <Heading>OUR STORY</Heading>
                                <p>
                                    We recognise that the ongoing support of an engaged community is integral to the
                                    future of B2B media, meaning that we’re focused on delivering an audience inspired
                                    approach to knowledge generation and intelligence provision. Through the Building
                                    family of products and services, our community reach now extends across digital,
                                    print and live platforms, and as a result we’re more than just a media provider;
                                    we’re an influential hub for world-class thought leadership and innovation.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-left">
                                <Heading>OUR VALUES</Heading>
                                <p className="text-black">In-House Made</p>
                                <p>
                                    From the vibrant ground level plaza to the terraces, private gardens, balconies and
                                    lush rooftop work spaces, Maisonco
                                </p>
                                <p className="text-black">Our Customers Mean the World</p>
                                <p>
                                    From the vibrant ground level plaza to the terraces, private gardens, balconies and
                                    lush rooftop work spaces, Costix offers an array of amenities …
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebp/about/banner_ab3.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebp/about/banner_ab4.webp" alt=""/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                                <Heading>STRATEGY, MISSION, VISION</Heading>
                                <p>
                                    Do you want to be even more successful? Learn to love learning and growth. The more
                                    effort you put into improving your skills, the bigger the payoff you will get.
                                    Realize that things will be hard at first, but the rewards will be worth it. Many of
                                    us have to be reminded that almost everything worthwhile in our lives is hard at
                                    first.
                                </p>
                                <p>
                                    Learning to walk was hard at first, but gradually we learned and now it is
                                    effortless. The same holds true for our more advanced
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <CallToActionSection/>
                </div>
                <div className="section-wrapper">
                    <OurTeamSection />
                </div>
            </div>
        )
    }
}

export default AboutPage