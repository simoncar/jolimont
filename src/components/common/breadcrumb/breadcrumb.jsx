import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-parallax';
import './breadcrumb.scss';

class Breadcrumb extends Component {

    renderParent(items) {
        return (
            items.map((item, index) =>
                <li className="breadcrumb-item" key={index}>
                    <Link to={`${process.env.PUBLIC_URL}/${item.path}`}>{item.title}</Link>
                </li>
            )
        )
    }

    render() {
        const {title, parent, bgImage} = this.props;
        let defaultBg = `${process.env.PUBLIC_URL}/assets/imagewebp/breadcrumb/breadcrumb-1.webp`;
        if (bgImage) {
            defaultBg = bgImage;
        }

        return (
            <Parallax className="breadcrumb-section"
                      bgImage={defaultBg}
                      bgImageAlt="the cat"
                      strength={500}
            >
                <div className="container">
                    <div className="page-title">
                        <h2>{title}</h2>
                    </div>
                    <nav className="theme-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={`${process.env.PUBLIC_URL}`}>Home</Link>
                            </li>
                            {parent ?
                                this.renderParent(parent)
                                : ''
                            }
                            <li className="breadcrumb-item active">
                                {title}
                            </li>
                        </ol>
                    </nav>
                </div>
            </Parallax>

        )
    }
}

export default Breadcrumb;