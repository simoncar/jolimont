import React, {Component} from 'react';
import Helmet from "react-helmet";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import {connect} from "react-redux";
import ContentWrap from "../../common/content-wrap";
import Slider from "react-slick";
import './apartment-single.scss';

class ApartmentSinglePage extends Component {
    configSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    render() {
        const {item} = this.props;
        return (
            <div className={`apartments-page-wrap`}>
                <Breadcrumb title={item.title} parent={[{path: 'apartments', title: 'Apartments'}]}/>
                <Helmet>
                    <title>MaisonCo | {item.title}</title>
                </Helmet>
                <ContentWrap isBoxed={true}>
                    <div className="entry-image text-center">
                        <Slider ref={slide => (this.slider = slide)} {...this.configSlider} >
                            {item.gallery.map((image, index) =>
                                <div className="slider-item" key={index}>
                                    <img src={image} alt=""/>
                                </div>
                            )}
                        </Slider>
                    </div>
                    <div className="entry-meta">
                        <span className="post-date">OnDecember 2, 2018</span>
                    </div>
                    <div className="entry-content" dangerouslySetInnerHTML={{__html: item.content}}></div>
                </ContentWrap>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let apartmentID = ownProps.match.params.id;
    return {
        item: state.apartments.apartments.find(el => el.id == apartmentID),
    }
}

export default connect(mapStateToProps)(ApartmentSinglePage)