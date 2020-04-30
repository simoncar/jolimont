import React, {Component} from 'react';
import './apartment.scss';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import _ from 'lodash'

class ApartmentBlock extends Component {
    render() {
        const apartments = _.slice(this.props.items, 0 , 9);
        return (
            <div className={`apartment-block-wrap`}>
                <div className={`row${this.props.noGutters ? ' no-gutters' : ''}`}>
                    {apartments.map((apartment, index) =>
                        <div className="col-lg-4 col-sm-6" key={index}>
                            <div className="property">
                                <div className="property-wrap">
                                    <div className="post-thumbnail">
                                        <Link to={`apartment/${apartment.id}`}>
                                            <img className="img-apartment"
                                                 src={apartment.images.thumbnail}
                                                 alt={apartment.title}/>
                                        </Link>
                                    </div>
                                    <div className="entry-content text-center text-uppercase">
                                        <div className="property-title text-white">
                                            <Link to={`apartment/${apartment.id}`}>{apartment.title}</Link>
                                        </div>
                                        <div className="link-more">
                                            <Link to={`apartment/${apartment.id}`}>Explore</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.apartments.apartments,
    }
}

export default connect(mapStateToProps)(ApartmentBlock);
