import React, {Component} from 'react';
import './availability.scss';
import Heading from "../../common/heading/heading";
import _ from 'lodash'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import LoadingBlock from "../../common/loading/loading";

class AvailabilitySection extends Component {
    data = []
    keys = [];
    state = {
        photoIndex: 0,
        isOpen: false,
        isLoading: true
    }

    constructor(props) {
        super(props)
        this.load()
    }

    load = () => {
        fetch('/api/availability.json')
            .then((response) => response.json())
            .then((res) => {
                this.data = res;
                this.setState({isLoading: false})
            })
    }

    getHeading = () => {
        this.keys = _.keys(this.data[0])
        return this.keys
    }

    render() {
        const {photoIndex, isOpen} = this.state;
        return (
            <div className="container">
                <Heading>SELECT AVAILABILITY</Heading>

                {!this.state.isLoading ? (
                    <>
                        <div className="block-table table-responsive">
                            <table className="table">
                                <thead>
                                <tr className="property-variation-item text-uppercase">
                                    {this.getHeading().map((heading, index) =>
                                        <th key={index}>{heading}</th>
                                    )}
                                </tr>
                                </thead>
                                <tbody>
                                {this.data.map((item, index) =>
                                    <tr className="property-variation-item" key={index}>
                                        {this.keys.map((key, i) =>
                                            key === 'floor plan' ?
                                                <td key={i}>
                                                    <a href={null} onClick={() => this.setState({isOpen: true})} className={`button-primary`}>View
                                                        Now</a>
                                                </td>
                                                :
                                                <td key={i}>{item[key]}</td>
                                        )}
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        {isOpen && (
                            <Lightbox
                                mainSrc={this.data[photoIndex]['floor plan']}
                                onCloseRequest={() => this.setState({isOpen: false})}
                            />
                        )}
                    </>
                ): <LoadingBlock />}
            </div>
        )
    }
}

export default AvailabilitySection