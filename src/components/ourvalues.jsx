import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./ourvalues.scss";
import Heading from "./common/heading/heading";

import Modal from "react-responsive-modal";
import ContactForm from "./common/contact-form/contact-form";

class ApartmentsPlansSection extends Component {
  state = {
    open: false,
    isLoading: true,
  };
  data = [];

  constructor(props) {
    super(props);
    this.load();
  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

  load = () => {
    fetch(process.env.PUBLIC_URL + "/api/our-values.json")
      .then((response) => response.json())
      .then((res) => {
        this.data = res;
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <div className="container">
        <Heading>JOLIMONT PLANS</Heading>
        <div className={`tabs-wrap`}>
          {!this.state.isLoading && (
            <Tabs>
              <TabList>
                {this.data.map((data, index) => (
                  <Tab key={index}>{data.title}</Tab>
                ))}
              </TabList>
              {this.data.map((data, index) => (
                <TabPanel key={index}>
                  <div className="row">
                    <div className="col-md-6">
                      <p>{data.description}</p>
                      <ul className="apartment-items">
                        {data.attributes.map((attr, i) => (
                          <li className="apartment-list-item" key={i}>
                            <span className="title-list text-uppercase">{attr.name}</span>
                            <span className="value-list">{attr.option}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="apartment_button">
                        <button onClick={() => this.setState({ open: true })} className="btn btn-outline-primary w-100">
                          Schedule a visit
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="apartment-img">
                        <img className="img-fluid" src={data.image} alt={data.title} />
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          )}
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content quick-view-modal">
              <div className="modal-body">
                <h6 className="heading-title">Schedule a visit</h6>
                <ContactForm />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ApartmentsPlansSection;
