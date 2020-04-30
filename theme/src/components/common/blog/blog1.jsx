import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './blog.scss'
import {getBlogList} from "../../../services";
import Heading from "../heading/heading";

class BlogBlockGridStyle2 extends Component {

    render() {

        const {items} = this.props;
        return (
            <div className="blog-wrapper pt-5 pb-5 blog-style-2 container">
                <Heading>LATEST POSTS</Heading>
                <div className="row">
                    {items.map((item, index) =>
                        <div className="blog-item col-md-4" key={index}>

                            <div className="content">
                                 <div className="entry-posted">
                                     <span className="posted-on">
                                        {item.date}
                                    </span>
                                 </div>
                                <h6 className="title text-uppercase">
                                    <Link to={`${process.env.PUBLIC_URL}/news/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </h6>
                                <div className="entry-content" dangerouslySetInnerHTML={{__html: item.excerpt}}></div>
                                <div className="entry-meta">
                                    <div className="entry-meta-inner">
                                        <span className="entry-category">
                                            in <a href="#" rel="category tag">Healthy</a>
                                        </span>
                                        <span className="author">
                                            Posted by <a href="#">Admin</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    items: getBlogList(state.news.blog, ownProps.number),
})

export default connect(mapStateToProps)(BlogBlockGridStyle2);
