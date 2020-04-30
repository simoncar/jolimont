import React, {Component} from 'react';
import '../explore-amenities/explore-amenities.scss';
import PopupVideo from "../../common/popup-video/popup-video";

class OfficeSpaceSection extends Component {
    render (){
        return (
            <div className="amenities-general amenities-bg">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center pb-maxmd">
                        <div className="w-lg-75 mx-auto">
                            <h3 className="text-uppercase text-primary">providing high quality</h3>
                            <h2 className="text-uppercase mb-4">office space</h2>
                            <p>Sleek and sophisticated, MaisonCo offers qualities always coveted, but rarely obtained in the finest New York rental residences – a unique blend of generously proportioned interiors and the enjoyment of Nassau Club over 10,000 square feet of indoor and outdoor amenities creatively conceived to enhance your exceptional FiDi lifestyle.</p>
                            <PopupVideo
                                title="Watch Video"
                            >
                            </PopupVideo>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                        <img className="img-fluid" src="/assets/imagewebp/home-3/office-space.webp" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OfficeSpaceSection