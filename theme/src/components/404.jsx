import React, {Component} from 'react';
import Breadcrumb from "./common/breadcrumb/breadcrumb";

class PageNotFound extends Component {
    render (){

        return (
            <div>
                <Breadcrumb title={'404 Page'}/>
                <section className="p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="error-section">
                                        <div className="error-bkg">
                                            <img style={{marginTop: "10px"}} src={`${process.env.PUBLIC_URL}/assets/imagewebp/theme/404.webp`} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="error-404-title">
                                            <h1 className="p-0 m-0">404</h1>
                                            <div className="error-404-subtitle">
                                                <h2 className="sub-h2-1 p-0 m-0">OOPS...</h2>
                                                <h2 className="sub-h2-2 p-0 m-0">Page not found</h2>
                                            </div>
                                        </div>
                                        <div className="error-text">
                                            Oops! The page you are looking for does not exist.  <br/>
                                            It might have been moved or deleted. </div>
                                        <div className="back-home">
                                            <a href="" className="btn btn-primary return-homepage">back to home</a>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default PageNotFound