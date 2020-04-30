import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBlogList} from "../../../../services";
import {Link} from 'react-router-dom';

class WigetBlogRecent extends Component {
    render (){
        const {items} = this.props;
        return (
            <section className="widget widget_post">
                <h4 className="widget-title text-uppercase">Recent Post</h4>
                <ul>
                    {items.map((item, index) =>
                        <li className="listitem-post" key={index}>
                            {item.images.thumbnail ?
                                <div className="thumbnail-post">
                                    <Link to={`/news/${item.id}`}>
                                        <img src={`${process.env.PUBLIC_URL}${item.images.thumbnail}`}
                                             className="post-img" alt=""/>
                                    </Link>
                                </div>
                                :
                                ''
                            }
                            <div className="post-title">
                                <span className="post-date">{item.date}</span>
                                <Link to={`/news/${item.id}`}>
                                    {item.title}
                                </Link>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}


function mapStateToProps(state) {
    return {
        items: getBlogList(state.news.blog, 3),
    }
}

export default connect(mapStateToProps)(WigetBlogRecent);
