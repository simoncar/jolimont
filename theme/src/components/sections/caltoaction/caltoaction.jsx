import React, {Component} from 'react';
import './caltoaction.scss';

class CallToActionSection extends Component {
    render (){
        return (
            <div className="call-to-action text-center">
                <div className="container">
                    <h2 className="text-uppercase text-white">AVAILABLE FOR</h2>
                    <h1 className="text-uppercase text-white mb-4">IMMEDIATE OCCUPANCY !</h1>
                    <div className="btn-call-to-action">
                        <a href="#" className="btn btn-dark" role="button">View availability</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CallToActionSection