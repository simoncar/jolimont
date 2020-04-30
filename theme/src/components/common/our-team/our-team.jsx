import React, {Component} from 'react';

class OurTeamBlock extends Component {
    render (){
        const {img, name, job, children, position} = this.props;
        return (
            <div className={`our-team-block-wrap`}>
                <div className={`box-ourteam ` + (position === 'bottom' ? 'd-flex flex-sm-column-reverse flex-column' : '')}>
                    <div className="avarta-team"><img className="img-fluid" src={img} alt=""/></div>
                    <div className="content-team">
                        <h3 className="name">{name}</h3>
                        <span className="job">{job}</span>
                        <p>{children}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurTeamBlock