import React, {Component} from 'react';
import './property.scss';

class Property1 extends Component {
    render (){
        return (
            <div className="row">
                <div className="col-lg-4 col-sm-12 px-0">
                    <div className="property">
                        <div className="property-wrap">
                            <div className="post-thumbnail">
                                <a href="#">
                                    <img className="img-fluid"
                                         src="/assets/imagewebp/theme/property-1.webp"
                                         alt=""/>
                                </a>
                            </div>
                            <div className="entry-content text-center text-uppercase">
                                <div className="property-title text-white">
                                    <a href="#">Senior Apartments</a>
                                </div>
                                <div className="link-more">
                                    <a href="#">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 px-0">
                    <div className="property">
                        <div className="property-wrap">
                            <div className="post-thumbnail">
                                <a href="#">
                                    <img className="img-fluid"
                                         src="/assets/imagewebp/theme/property-2.webp"
                                         alt=""/>
                                </a>
                            </div>
                            <div className="entry-content text-center text-uppercase">
                                <div className="property-title text-white">
                                    <a href="#">Studio Apartments</a>
                                </div>
                                <div className="link-more">
                                    <a href="#">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 px-0">
                    <div className="property">
                        <div className="property-wrap">
                            <div className="post-thumbnail">
                                <a href="#">
                                    <img className="img-fluid" height="390"
                                         src="/assets/imagewebp/theme/property-3.webp"
                                         alt=""/>
                                </a>
                            </div>
                            <div className="entry-content text-center text-uppercase">
                                <div className="property-title text-white">
                                    <a href="#">Luxury Apartments</a>
                                </div>
                                <div className="link-more">
                                    <a href="#">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Property1