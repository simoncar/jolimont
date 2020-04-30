import React, {Component} from 'react';
import SidebarLayout from "./sidebar/sidebar";

class ContentWrap extends Component {
    constructor(props){
        super(props)
    }

    changeFilter = (e) => {
        this.props.getFilter(e);
    }

    render() {
        const {sidebar, position, isBoxed, isContentBox} = this.props;
        return (
            <div className={`site-content`}>
                <div className={isBoxed ? 'container' : 'container-fluid'}>
                    <div className={isContentBox ? `box-wrap` : ''}>
                        <div className={`row ${position}`}>
                            {sidebar ? <SidebarLayout getFilter={this.changeFilter} sidebar={sidebar} position={position}/> : ''}
                            <div className={`content-area`}>
                                {this.props.children}
                            </div>
                            {sidebar ? <div className={`overlay-filter`} onClick={() => {
                                document.querySelector(".sidebar").classList.toggle("active")
                            }}></div> : ''}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentWrap;