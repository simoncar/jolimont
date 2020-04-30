import React, {Component} from 'react';
import StickyBox from "react-sticky-box";
import WigetBlogRecent from "./common/blog-recent";
import './sidebar.scss';

class SidebarLayout extends Component {

    constructor(props) {
        super(props)
    }

    render = () => {
        const {position} = this.props;
        return (
            <div className={(position == "right") ? 'sidebar order-2' : 'sidebar'}>
                <StickyBox offsetTop={20} offsetBottom={20}>
                    <div className={`sidebar-inner`}>
                        <aside className={`sidebar-wrap`}>
                            <div className={`inner`}>
                                <section className="widget widget_categories">
                                    <h4 className="widget-title text-uppercase">Categories Blog</h4>
                                    <ul>
                                        <li className="cat-item">
                                            <a href="#">Fashion</a><span className="count">(20)</span>
                                        </li>
                                        <li className="cat-item">
                                            <a href="#">Healthy</a><span className="count">(4)</span>
                                        </li>
                                        <li className="cat-item">
                                            <a href="#">Other</a><span className="count">(5)</span>
                                        </li>
                                        <li className="cat-item">
                                            <a href="#">Photography</a><span className="count">(8)</span></li>
                                        <li className="cat-item">
                                            <a href="#">Travel</a><span className="count">(7)</span>
                                        </li>
                                    </ul>
                                </section>
                                <WigetBlogRecent/>
                            </div>
                        </aside>
                    </div>
                </StickyBox>
            </div>
        )
    }
}

export default SidebarLayout
