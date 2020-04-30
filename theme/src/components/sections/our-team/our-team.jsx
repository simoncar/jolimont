import React, {Component} from 'react';
import Heading from "../../common/heading/heading";
import OurTeamBlock from "../../common/our-team/our-team";

class OurTeamSection extends Component {
    render (){
        return (
            <div className="ourteam">
                <div className="container">
                    <Heading>OUR TEAM</Heading>
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebp/about/team_1.webp" name={`Connor Flores`} job={`JV PROPERTY MANAGEMENT`} position={`top`}>
                                You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of
                            </OurTeamBlock>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebp/about/team_2.webp" name={`CAROLINE VAUGHN`} job={`PROJECT MANAGER`} position={`bottom`}>
                                You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of
                            </OurTeamBlock>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebp/about/team_3.webp" name={`WILLIE TODD`} job={`SENIOR ARCHITECT`} position={`top`}>
                                You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of
                            </OurTeamBlock>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebp/about/team_4.webp" name={`JOSIE MAXWELL`} job={`PROJECT COORDINATOR`} position={`bottom`}>
                                You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of
                            </OurTeamBlock>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurTeamSection