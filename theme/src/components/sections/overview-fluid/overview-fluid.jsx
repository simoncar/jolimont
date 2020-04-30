import React, {Component} from 'react';
import Heading from "../../common/heading/heading";

class OverviewFluidSection extends Component {
    render (){
        return (
            <div className="container-fluid px-md-4">
                <div className="row mx-lg-4">
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
                        <div className="w-lg-75 mx-auto">
                            <Heading>THE BUILDING OVERVIEW</Heading>
                            <p className="text-black mt-5">Introducing MaisonCo, the stunning new addition to the downtown Manhattan skyline. A perfect blend of breathtaking architecture designed, with awe-inspiring interiors envisioned</p>
                            <p className="mt-4">Sleek and sophisticated, Costix offers qualities always coveted, but rarely obtained in the finest New York rental residences – a unique blend of generously proportioned interiors and the enjoyment of Nassau Club over 10,000 square feet of indoor and outdoor amenities creatively conceived to enhance your exceptional FiDi lifestyle.</p>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                        <img className="img-fluid" src="/assets/imagewebp/home-2/h2_banner-1.webp" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverviewFluidSection