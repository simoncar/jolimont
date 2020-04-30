import React, {Component} from 'react';

class LoadingBlock extends Component {
    render() {
        return (
            <div className={`loading-block-wrap text-center`}>
                <svg width="81px" height="81px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-rolling">
                    <circle cx="50" cy="50" fill="none" stroke="#cabe9f" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(73.6286 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                    </circle>
                </svg>
            </div>
        )
    }
}

export default LoadingBlock