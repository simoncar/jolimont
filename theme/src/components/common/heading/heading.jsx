import React, {Component} from 'react';

import './heading.scss';

class Heading extends Component {
    render() {
        const {subTitle, showLine} = this.props;
        return (
            <div className={`${this.props.className ? this.props.className + ' ' : ''}heading-title`}>
                {showLine !== 'hide' ?
                    <div className="heading-decor">
                        <i className="icon_before opal-icon-decor "></i>
                    </div>
                    : ""
                }
                <h3 className="text-uppercase">{this.props.children}</h3>
                {subTitle ?
                    <h4 className={`sub-title`}>{subTitle}</h4>
                    : ""
                }

            </div>
        )
    }
}

export default Heading