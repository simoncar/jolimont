import React, {Component} from 'react';
import Slider from 'react-slick';

import './testimonial.scss'

class Testimonial1 extends Component {

    constructor (props) {
        super (props)

        this.sliderData = [
            {
                image: `${process.env.PUBLIC_URL}/assets/imagewebp/testimonial/testimonial-1.webp`,
                name: 'John Smith',
                position: 'Customer',
                content: `They are the greatest. They are thoughtful, savvy and always take good care of my clients. It is a pleasure to recommend them. I know you will be pleased.`
            },
            {
                image: `${process.env.PUBLIC_URL}/assets/imagewebp/testimonial/testimonial-2.webp`,
                name: 'William',
                position: 'Designer',
                content: `They are the greatest. They are thoughtful, savvy and always take good care of my clients. It is a pleasure to recommend them. I know you will be pleased.`
            },
        ]

        this.state = this.sliderData[0];

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render (){
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (old, next) => this.setState(this.sliderData[next])
        };

        return (
            <div className={"testimonials-wrap testimonials-light"}>
                <div className={"testimonial-inner text-center"}>
                    <div className="testimonial-icon">
                        <i className="fa fa-quote-left"></i>
                    </div>
                    <Slider {...settings} ref={c => (this.slider = c)} className="slide-testimonial">
                        {this.sliderData.map((item, index) => (
                            <div key={index}>
                                {item.content}
                            </div>
                        ))}
                    </Slider>
                    <div className="testimonial-nav">
                        <div className="testimonial-control-prev" onClick={this.previous}>
                            <i className="fa fa-angle-left"></i>
                        </div>
                        <div className="testimonial-img">
                            <img width="60" height="60" src={this.state.image} alt="" />
                        </div>
                        <div className="testimonial-control-next" onClick={this.next}>
                            <i className="fa fa-angle-right"></i>
                        </div>
                    </div>
                    <div className="info">
                        <div className="testimonial-name">
                            <span>{this.state.name}</span>, {this.state.position}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial1