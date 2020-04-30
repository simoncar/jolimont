import React, {Component} from 'react';
import ModalVideo from 'react-modal-video'

import './popup-video.scss';

class PopupVideo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    render() {
        return (
            <div className={`video-popup`}>
                <ModalVideo channel={this.props.channel ? this.props.channel : 'youtube'} isOpen={this.state.isOpen} videoId={this.props.videoId} onClose={() => this.setState({isOpen: false})}/>
                <a href="#" onClick={(e) => {e.preventDefault(); this.setState({isOpen: true})}}>
                    <span className="icon video-icon"><i className="fa fa-play"></i></span>
                    <span className="title">{this.props.title}</span>
                </a>
            </div>
        )
    }
}

export default PopupVideo