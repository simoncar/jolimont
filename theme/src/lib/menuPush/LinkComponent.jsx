import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class LinkComponent extends Component {
    render(){
        const {propMap, node} = this.props.data;
        const nodeTitle = node[propMap.displayName];
        return (
            <Link className={`rpm-node-link rpm-inline-block `} to={node[propMap.url] || "/"} onClick={() => this.props.data.menu.tools.reset()}>
                {nodeTitle}
            </Link>
        );
    }
}