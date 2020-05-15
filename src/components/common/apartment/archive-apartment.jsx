import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

const getPageId = () => {
  let hash = window.location.hash;
  let regex = /^#page-(\d+)/g;
  if (regex.test(hash)) {
    return parseInt(hash.replace(regex, "$1")) - 1;
  }
  return 0;
};

class ApartmentArchiveBlock extends Component {
  constructor(props) {
    super(props);
    let currentPage = getPageId();
    let start = currentPage * this.props.number;
    this.state = {
      items: this.props.items.slice(start, start + this.props.number),
      pages: Math.ceil(this.props.items.length / this.props.number),
      currentPage: currentPage,
      feature: [],
    };
  }

  updatePage(page) {
    let start = page * this.props.number;
    window.location.hash = `page-${page + 1}`;
    this.setState({
      items: this.props.items.slice(start, start + this.props.number),
      currentPage: page,
    });
  }

  render() {
    return (
      <div className={`apartment-block-wrap`}>
        <div className={`row${this.props.noGutters ? " no-gutters" : ""}`}>
          {this.state.items.map((apartment, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="property">
                <div className="property-wrap">
                  <div className="post-thumbnail">
                    <Link to={`apartment/${apartment.id}`}>
                      <img
                        style={{ height: "200px" }}
                        className="img-apartment"
                        src={apartment.images.thumbnail}
                        alt={apartment.title}
                      />
                    </Link>
                  </div>
                  <div className="entry-content text-center text-uppercase">
                    <div className="property-title text-white">
                      <Link to={`apartment/${apartment.id}`}>
                        {apartment.title}
                      </Link>
                    </div>
                    <div className="link-more">
                      <Link to={`apartment/${apartment.id}`}>Explore</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ul className="pagination">
          {new Array(this.state.pages).fill().map((item, index) => (
            <li
              className={
                this.state.currentPage === index
                  ? "page-item active"
                  : "page-item"
              }
              key={index}
              onClick={() => this.updatePage(index)}
            >
              <span className="page-link">{index + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.apartments.apartments,
  };
};

export default connect(mapStateToProps)(ApartmentArchiveBlock);
