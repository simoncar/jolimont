import React, { Component } from "react";
// Custom Components
import HeaderOne from "./components/common/headers/header-one";
import FooterOne from "./components/common/footers/footer-one";
import PushMenu from "react-push-menu";
import LinkComponent from "./lib/menuPush/LinkComponent";

import "./lib/menuPush/component.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };

    this.load();
  }

  load = () => {
    fetch("/api/menu.json")
      .then((response) => response.json())
      .then((res) => {
        this.menu = res;
        this.setState({ isLoading: false });
        document.querySelector(".loader-wrapper").style = "display: none";
      });
  };

  render() {
    return (
      !this.state.isLoading && (
        <div className="opal-wrapper">
          <PushMenu
            backIcon={<i className="fa fa fa-arrow-left"></i>}
            expanderComponent={() => {
              return <i className="fa fa-chevron-right"></i>;
            }}
            autoHide={true}
            nodes={{ children: this.menu }}
            type={"cover"}
            linkComponent={LinkComponent}
            propMap={{ url: "link" }}>
            <div id="page" className="site">
              <HeaderOne logoName={"logo2.png"} menu={this.menu} />
              {this.props.children}
              <FooterOne logoName={"logo2.png"} />
            </div>
          </PushMenu>
        </div>
      )
    );
  }
}

export default App;
