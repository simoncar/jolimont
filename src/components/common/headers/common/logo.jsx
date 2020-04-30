import React from 'react';
import {Link} from 'react-router-dom'

function LogoImage(props) {

    return <Link to={`${process.env.PUBLIC_URL}/`} className="custom-logo-link">
                <span className="screen-reader-text">MaisonCo Single Property</span>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${props.logo}`} alt="" className="img-fluid" />
            </Link>;
}
export default LogoImage;