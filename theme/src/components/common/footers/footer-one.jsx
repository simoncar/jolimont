import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual'
import './footer.scss';
import Copyright from "../copyright/copyright";
import ContactForm from "../contact-form/contact-form";


class FooterOne extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {translate} = this.props;
        return (
            <footer className="site-footer">
                {/*<ShapeSVG position={`top`}/>*/}
                {/*Section #1*/}
                <div className="section-1 text-center">
                    <div className="container">
                        <h3 className="text-uppercase">ARE YOU INTERESTED</h3>
                        <h2 className="text-uppercase">IT'S TIME TO DISCOVER</h2>
                        <h3 className="text-uppercase">THE BUILDING</h3>
                    </div>

                </div>

                {/*Section 2*/}
                <div className="section-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <h6 className="heading-title">BUILDING LOCATION</h6>
                                <p>Motivation can take you far, but it can take you even further if you first find your vision. Your vision will motivate and guide you on</p>
                                <div className="icon-list footer-address">
                                    <ul>
                                        <li>
                                            <span className="icon-list-icon">
                                                ADDRESS:
                                            </span>
                                            <span className="icon-list-text">Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184</span>
                                        </li>
                                        <li>
                                            <span className="icon-list-icon">
                                                PHONE:
                                            </span>
                                            <span className="icon-list-text">012-345-6789</span>
                                        </li>
                                        <li>
                                            <span className="icon-list-icon">
                                                E-MAIL:
                                            </span>
                                            <span className="icon-list-text">email.support@maisonco.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <h6 className="heading-title">CONTACT AGENT</h6>
                                <div className="image-box-wrap">
                                    <div className="image-box-img"><img src="/assets/imagewebp/theme/avatar_footer.webp" alt="" className={`img-fluid`}/></div>
                                    <div className="image-box-content">
                                        <h3 className="image-box-title">William Jacobs</h3>
                                        <span className="image-box-description">CERTIFIED AGENT</span>
                                    </div>
                                </div>
                                <div className="icon-list">
                                    <ul>
                                        <li>
                                            <span className="icon-list-icon">
                                                <i className="fa fa-phone"></i>
                                            </span>
                                            <span className="icon-list-text">012-888-2222</span>
                                        </li>
                                        <li>
                                            <span className="icon-list-icon">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                            <span className="icon-list-text">agent.name@example.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-12"></div>
                            <div className="col-lg-4 col-md-12">
                                <h6 className="heading-title">ENQUIRE</h6>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Section #2*/}
                {/*Section 3*/}
                <div className="section-3">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-sm-12">
                                <Copyright title="MaisonCo"/>
                            </div>
                            <div className="col-sm-12">
                                <div className="social">
                                    <a href="#">
                                        <span className="screen-reader-text">Facebook</span>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <span className="screen-reader-text">Twitter</span>
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <span className="screen-reader-text">Youtube</span>
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                    <a href="#">
                                        <span className="screen-reader-text">Google +</span>
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a href="#">
                                        <span className="screen-reader-text">Pinterest</span>
                                        <i className="fa fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default withTranslate(FooterOne);
