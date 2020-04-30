import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Heading from "../../common/heading/heading";

class GallerrySection extends Component {
    state = {
        isOpen: false
    }

    open(e, image) {
        e.preventDefault()
        this.image = image
        this.setState({isOpen: true})
    }

    render() {
        const {flexRow} = this.props;
        return (
            <>
                <Heading>Gallery</Heading>
                <div className="gallerry-wrap p-0">
                    <div className={`row${this.props.flexRow ? ' flex-row-reverse' : ''}`}>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebp/building/gallerry_the1.webp')}>
                                    <img className="img-fluid" src="/assets/imagewebp/building/gallerry_the1.webp" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebp/building/gallerry_the2.webp')}>
                                    <img className="img-fluid" src="/assets/imagewebp/building/gallerry_the2.webp" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebp/building/gallerry_the4.webp')}>
                                    <img className="img-fluid" src="/assets/imagewebp/building/gallerry_the4.webp" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebp/building/gallerry-the5.webp')}>
                                    <img className="img-fluid" src="/assets/imagewebp/building/gallerry-the5.webp" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebp/building/gallerry-the3.webp')}>
                                    <img className="img-fluid" src="/assets/imagewebp/building/gallerry-the3.webp" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebp/building/gallerry_the6.webp')}>
                                    <img className="img-fluid" src="/assets/imagewebp/building/gallerry_the6.webp" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebp/building/gallerry_the7.webp')}>
                                    <img className="img-fluid" src="/assets/imagewebp/building/gallerry_the7.webp" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                {
                    this.state.isOpen &&
                    <Lightbox onCloseRequest={() => this.setState({isOpen: false})} mainSrc={this.image}/>
                }
            </>
        )
    }
}

export default GallerrySection