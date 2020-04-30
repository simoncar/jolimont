import React, {Component} from 'react';
import Breadcrumb         from "../../common/breadcrumb/breadcrumb";
import Helmet             from 'react-helmet';
import {connect}          from "react-redux";
import ContentWrap from "../../common/content-wrap";

class SingleBlogPage extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className={`single-blog-wrap`}>
                <Helmet>
                    <title>MaisonCo | {item.title}</title>
                </Helmet>
                <Breadcrumb title={item.title} parent={[{path: 'blog', title: 'Blog'}]}/>
                <ContentWrap isBoxed={true}>
                    <div className="entry-image text-center">
                        <img src={item.images.full} alt="" className={`img-fluid`}/>
                    </div>
                    <div className="entry-meta">
                        <span className="post-date">OnDecember 2, 2018</span>
                        <div className="entry-meta-inner">
                            <span className="entry-category"> in <a href="#">Uncategorized</a> </span>
                            <span className="author vcard"> Posted by <a className="url" href="#">admin</a> </span>
                        </div>
                        <div className="social-share">
                            <span className="social-share-header">SHARE :</span>
                            <a className="bo-social-facebook" href="http://www.facebook.com">
                                <i className="fa fa-facebook"></i>
                            </a>

                            <a className="bo-social-twitter" >
                                <i className="fa fa-twitter"></i>
                            </a>

                            <a className="bo-social-linkedin" href="http://linkedin.com-ones">
                                <i className="fa fa-linkedin"></i>
                            </a>

                            <a className="bo-social-tumblr" href="http://www.tumblr.com ">
                                <i className="fa fa-tumblr"></i>
                            </a>

                            <a className="bo-social-google" href="https://plus.google.coms">
                                <i className="fa fa-google-plus"></i>
                            </a>

                            <a className="bo-social-pinterest" href="http://pinterest.com">
                                <i className="fa fa-pinterest"></i>
                            </a>

                        </div>
                    </div>

                    <div className="entry-content" dangerouslySetInnerHTML={{__html: item.content}}></div>

                    <div className="entry-footer">
                        <div className="cat-tags-links">
                            <span className="tags-title">Tags: </span>
                            <span className="tags-links">
                                <a href="#" rel="tag">Blog</a>,
                                <a href="#">post</a>
                            </span></div>
                        <div className="navigation d-flex">
                            <div className="previous-nav">
                                    <a className="nav-link" >
                                        <i className="opal-icon-arrow-left"></i>
                                    </a>
                            </div>

                            <div className="next-nav">
                                    <a className="nav-link">
                                        <i className="opal-icon-arrow-right"></i>
                                    </a>
                            </div>
                        </div>
                    </div>
                </ContentWrap>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    let blogId = ownProps.match.params.id;
    return {
        item: state.news.blog.find(el => el.id == blogId),
    }
}

export default connect(mapStateToProps)(SingleBlogPage);