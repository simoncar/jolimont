import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from 'react-helmet';
import {connect} from "react-redux";
import ContentWrap from "../../common/content-wrap";
import {Link} from 'react-router-dom'
import './blog.scss';

class BlogPage extends Component {

    constructor(props) {
        super(props)
        this.number = 5;
        let currentPage = this.getPageId();
        let start = currentPage * this.number;
        this.state = {
            items: this.props.items.slice(start, start + this.number),
            pages: Math.ceil(this.props.items.length / this.number),
            currentPage: currentPage,
        }
    }

    getPageId = () => {
        let hash = window.location.hash;
        let regex = /^#page-(\d+)/g
        if (regex.test(hash)) {
            return parseInt(hash.replace(regex, '$1')) - 1;
        }
        return 0;
    }

    updatePage(page) {
        let start = page * this.number;
        window.location.hash = `page-${page + 1}`
        this.setState({items: this.props.items.slice(start, start + this.number), currentPage: page})
    }

    render() {

        return (
            <div className={`blog-page-wrap`}>
                <Helmet>
                    <title>MaisonCo | Blog Page</title>
                </Helmet>
                <Breadcrumb title={'Blog'}/>
                <ContentWrap sidebar={`blog`} isBoxed={true} position={`right`}>
                    <div className={`blog-list-wrap`}>
                        {this.state.items.map((item, index) =>
                            <article className={`blog-item`} key={index}>
                                {item.images.thumbnail && (
                                    <div className="thumbnail">
                                        <Link to={`${process.env.PUBLIC_URL}/news/${item.id}`}>
                                            <img src={item.images.thumbnail} className="img-fluid" alt=""/>
                                        </Link>
                                        <span className="posted-on">
                                        {item.date}
                                    </span>
                                    </div>
                                )}
                                <div className="content">
                                    <h4 className="title text-uppercase">
                                        <Link to={`${process.env.PUBLIC_URL}/news/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </h4>
                                    <div className="entry-content" dangerouslySetInnerHTML={{__html: item.excerpt}}></div>
                                    <div className="entry-meta">
                                        <div className="entry-meta-inner">
                                            <span className="entry-category">in <a href="#" rel="category tag">Healthy</a></span>
                                            <span className="author">Posted by <a href="#">Admin</a></span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )}

                        <ul className="pagination justify-content-center">
                            {new Array(this.state.pages).fill().map((item, index) =>
                                <li className={this.state.currentPage === index ? 'page-item active' : 'page-item'} key={index} onClick={() => this.updatePage(index)}>
                                    <span className="page-link">
                                        {index + 1}
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                </ContentWrap>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.news.blog,
    }
}

export default connect(mapStateToProps)(BlogPage);

