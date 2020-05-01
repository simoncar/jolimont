import React, { Component } from "react";
import "../components/apartment.scss";
import Heading from "./common/heading/heading";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import LoadingBlock from "./common/loading/loading";
import ReactTooltip from "react-tooltip";

class NeighborhoodsSection extends Component {
  json = [];
  state = {
    isLoading: true,
  };

  constructor(props) {
    super(props);
    this.load();
  }

  load = () => {
    fetch(process.env.PUBLIC_URL + "/api/apartment-neighborhoods.json")
      .then((response) => response.json())
      .then((res) => {
        this.json = res;
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <div className="apartments">
        <div className="container">
          <Heading>
            <span className="text-white">Australia's "premier sports precinct" </span>
          </Heading>
          {!this.state.isLoading ? (
            <div className="apartments-content pt-4">
              <ReactTooltip place="top" type="dark" effect="solid" />
              <div className="row no-gutters">
                <div className="col-lg-4 col-sm-12 bg-white">
                  <div className="image-hotspots-accordion">
                    <div className="image-hotspots-accordion-inner">
                      <Accordion>
                        {this.json.data.map((data, index) => (
                          <AccordionItem key={index}>
                            <AccordionItemHeading>
                              <AccordionItemButton>{data.title}</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>{data.desc}</p>
                            </AccordionItemPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="image-hotspots">
                    <img src={this.json.image} alt="" />
                    {this.json.data.map((data, index) => (
                      <div className="tooltip-wrapper" key={index} style={data.position} data-tip={data.title}>
                        <i className="opal-image-hotspots-icon"></i>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <LoadingBlock />
          )}
        </div>
      </div>
    );
  }
}

export default NeighborhoodsSection;
