import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './blog.scss'
import {getBlogList} from "../../../services";
import Heading from "../heading/heading";

class BlogBlockGridStyle1 extends Component {

    render() {

        const {items} = this.props;
        return (
            <div className="blog-wrapper container">
                <Heading>LATEST POSTS</Heading>
                <div className="row">
                    {items.map((item, index) =>
                        <div className="blog-item col-md-4" key={index}>
                            {item.images.thumbnail ?
                                <div className="thumbnail">
                                    <Link to={`/news/${item.id}`}>
                                        <img src={`${process.env.PUBLIC_URL}${item.images.thumbnail}`}
                                             className="img-fluid" alt=""/>
                                    </Link>
                                    <span className="posted-on">
                                    {item.date}
                                </span>
                                </div>
                                :
                                ''
                            }

                            <div className="content">
                                <h6 className="title text-uppercase">
                                    <Link to={`${process.env.PUBLIC_URL}/news/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </h6>
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

export default connect(mapStateToProps)(BlogBlockGridStyle1);
