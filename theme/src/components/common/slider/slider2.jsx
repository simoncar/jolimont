import React, {Component} from 'react';
import Slider from "react-slick";
import './slider.scss';


class CarouselPage2 extends Component {
    constructor(props) {
        super(props);
        this.data = [
            {
                image: `/assets/imagewebp/slider/sliderhome3_1.webp`,
                title: `Restaurant and Cafe `,
                description: 'Sleek and sophisticated, MaisonCo offers qualities always coveted, but rarely obtained in the finest New York rental residences – a unique blend of generously proportioned interiors and the enjoyment of Nassau Club over 10,000 square feet of indoor...',
                link: '#'
            },
            {
                image: `/assets/imagewebp/slider/sliderhome3_2.webp`,
                title: `Human-Centered Design Friendly Spaces`,
                description: 'Our design philosophy and continuous improvement methodology aims to enhance the experience of every user of our spaces.',
                link: '#'
            },
            {
                image: `/assets/imagewebp/slider/sliderhome3_3.webp`,
                title: `Fresh Cuisine Made Onsite`,
                description: 'By studying the science of catering to large groups of people, particularly in a business context.',
                link: '#'
            },
            {
                image: `/assets/imagewebp/slider/sliderhome3_4.webp`,
                title: `Flexible, Contemporary Spaces `,
                description: 'We design and service the next generation office building – one that feels more like a full-service, lifestyle hotel.',
                link: '#'
            }
        ]
        this.state = {
            active: this.data[0],
            slideIndex: 0
        }
    }

    slideChange = (old, index) => {
        this.setState({
            active: this.data[index],
            slideIndex: index
        })
    }

    checkActive(index) {
        let className = `bullet-item`;
        if (index === this.state.slideIndex) {
            className += ` selected`
        }
        return className;
    }

    clickDot = (index) => {
        this.slider.slickGoTo(index)
    }

    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div className={'carousel2-wrap position-relative'}>
                <div className="row flex-md-row-reverse">
                    <div className="col-lg-6 col-md-12">
                        <Slider {...settings} ref={slider => (this.slider = slider)} beforeChange={this.slideChange}>
                            {this.data.map((data, index) =>
                                <div className="slider-item" key={index}>
                                    <img src={data.image} alt="" className="img-fluid"/>
                                </div>
                            )}
                        </Slider>
                    </div>
                    <div className="col-lg-4 col-md-10  d-flex align-items-center">
                        <div className="slider-content">
                            <div className="slider-info">
                                <h3 className="text-white text-uppercase mb-4">{this.state.active.title}</h3>
                                <p className="slider-desc">{this.state.active.description}</p>
                                <a className="btn btn-link p-0">explore</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2 d-flex align-items-center ">
                        <div className="navigation">
                            <ul className="bullets-vertical">
                                {this.data.map((item, index) =>
                                    <li className={this.checkActive(index)} key={index} onClick={() => this.clickDot(index)}>
                                        <span className="bullet-inner"></span></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselPage2
