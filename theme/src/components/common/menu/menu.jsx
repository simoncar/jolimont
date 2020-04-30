import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Menu extends Component {
    render() {
        const {data} = this.props;
        const menus = Object.keys(data);
        return (
            menus.length > 0 ?
                <nav className={`menu-wrap`}>

                    <ul className="menu">
                        {menus.map((title, index) => (
                            <li className="menu-item" key={index}>
                                <Link to={data[title]}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                : ''
        )
    }
}

export default Menu