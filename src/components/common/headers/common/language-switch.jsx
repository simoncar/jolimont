import React, {Component} from 'react';
import './language-switch.scss';
import {connect} from "react-redux";
import store from "../../../../store";
import { IntlActions, withTranslate } from 'react-redux-multilingual'

class LanguageSwitchBlock extends Component {
    constructor(props){
        super(props);

        this.data = {
            en: 'united-states.png',
            vi: 'vietnam.png',
            fr: 'france.png',
        }

        this.state = {
            image: this.data[this.props.locale],
            locale: this.props.locale
        }
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
    }

    render (){
        const {translate} = this.props;
        return (
            <div className={`language-switch-wrap`}>
                <div className="header-language dropdown-parent">
                        <span><img src={`${process.env.PUBLIC_URL}/assets/images/language/${this.state.image}`} alt=""/></span>
                    <div className="group-dropdown">

                        <div className="language-content">
                            <ul className="language_inner">
                                <li><a href="#" onClick={(e) => {e.preventDefault(); this.changeLanguage('en')}}><img src={`${process.env.PUBLIC_URL}/assets/imagewebp/language/united-states.webp`} alt=""/>{translate('eng')}</a></li>
                                <li><a href="#" onClick={(e) => {e.preventDefault(); this.changeLanguage('vi')}}><img src={`${process.env.PUBLIC_URL}/assets/imagewebp/language/vietnam.webp`} alt=""/>{translate('vi')}</a></li>
                                <li><a href="#" onClick={(e) => {e.preventDefault(); this.changeLanguage('fr')}}><img src={`${process.env.PUBLIC_URL}/assets/imagewebp/language/france.webp`} alt=""/>{translate('fr')}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locale: state.Intl.locale
    }
}

export default connect(mapStateToProps)(withTranslate(LanguageSwitchBlock));

