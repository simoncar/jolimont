import React, {Component} from 'react';
import '../explore-amenities/explore-amenities.scss';

class ModernFurnitureSection extends Component {
    render (){
        return (
            <div className="amenities-general">
                <div className="row amenities">
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                        <img className="img-fluid" src="/assets/imagewebp/home-3/modern-furniture.webp" alt=""/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center pb-maxmd">
                        <div className="w-lg-75 mx-auto">
                            <h3 className="text-uppercase text-primary">Modern Furniture</h3>
                            <h2 className="text-uppercase mb-4">Interior Design room</h2>
                            <p className="pb-4">We believe your home is the ultimate way to express who you are. But your style isn’t merely measured by the colour of the walls or new carpet. It’s an expression of what’s important to you. We’ll save you time, money and stress with our beautiful World of Style collection. Explore our interior design styles and get home decorating ideas right here and let us help you colour your</p>
                            <a href="#" className="btn btn-outline-primary" role="button">Check availability</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModernFurnitureSection