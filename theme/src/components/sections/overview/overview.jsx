import React, {Component} from 'react';
import Heading from "../../common/heading/heading";

class OverviewSection extends Component {
    render (){
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-left">
                        <Heading>THE BUILDING OVERVIEW</Heading>
                        <p className="text-black">
                            Introducing MaisonCo, the stunning new addition to the downtown Manhattan skyline. A perfect blend of breathtaking architecture designed, with awe-inspiring interiors envisioned
                        </p>
                        <p>
                            Sleek and sophisticated, Costix offers qualities always coveted, but rarely obtained in the finest New York rental residences – a unique blend of generously proportioned interiors and the enjoyment of Nassau Club over 10,000 square feet of indoor and outdoor amenities creatively conceived to enhance your exceptional FiDi lifestyle.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="/assets/imagewebp/theme/img-05.webp" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverviewSection