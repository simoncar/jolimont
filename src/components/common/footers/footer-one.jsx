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
            <ContactForm />
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslate(FooterOne);
