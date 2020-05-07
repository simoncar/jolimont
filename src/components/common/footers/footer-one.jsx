import React, { Component } from "react";
import { withTranslate } from "react-redux-multilingual";
import "./footer.scss";
import ContactForm from "../contact-form/contact-form";

class FooterOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { translate } = this.props;
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
                <h6 className="heading-title">BOOKINGS</h6>
                <p>Only a select few bookings are taken each year.</p>
                <div className="icon-list footer-address">
                  <ul>
                    <li>
                      <span className="icon-list-icon">PHONE:</span>
                      <span className="icon-list-text">123--1234-1234</span>
                    </li>
                    <li>
                      <span className="icon-list-icon">E-MAIL:</span>
                      <span className="icon-list-text">________@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-1 col-md-12"></div>
              <div className="col-lg-4 col-md-12">
                <h6 className="heading-title">ENQUIRE</h6>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        {/*Section #2*/}
        {/*Section 3*/}
        <div className="section-3">
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-12"></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslate(FooterOne);
