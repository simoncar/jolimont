import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withTranslate} from 'react-redux-multilingual'

class MainMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            active: 'Home'
        };
    }


    _handleClick(menuItem) {
        this.setState({active: menuItem});
    }

    menuRender = (menu, key) => {
        let hasSub = menu.children.length ? true : false
        return (
            <li className={`menu-item`} key={key}>
                <Link
                    to={`${process.env.PUBLIC_URL}${menu.link}`}
                    className={this.state.active === menu.name ? 'selected' : ''}
                    onClick={this._handleClick.bind(this, menu.name)}
                >
                    {menu.name}
                    {hasSub ? <i className="fa fa-angle-down"></i> : ''}
                </Link>
                {hasSub ?
                    <ul className="sub-menu">
                        {menu.children.map((_menu, _key) => this.menuRender(_menu, _menu.name, _key))}
                    </ul>
                    : ""
                }
            </li>
        )
    }

    render() {
        const {menu} = this.props;
        return (
            <div className="navigation-top">
                <nav className="main-navigation" aria-label="Top Menu">
                    <div className="mainmenu-container">
                        <ul className="top-menu menu">
                            {menu.map((item, key) => this.menuRender(item, key))}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}


export default withTranslate(MainMenu);