import React from 'react';
import byndr_Logo from '../../assets/images/byndr-Logo.png';
import byndr_Logo_White from '../../assets/images/byndr-logo-white.png';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';
import { connect } from 'react-redux';
import { Open_Or_Close_MenuBar } from '../../services';
import { YMInitializer } from 'react-yandex-metrika';
import ReactGA from 'react-ga';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    Hide?: boolean
}

class Header extends React.Component<props, any> {

    constructor(props: any) {
        super(props);
        // this.headerRef = {};

        this.handleScroll = this.handleScroll.bind(this);
        this.initializeReactGA = this.initializeReactGA.bind(this);
    }


    componentDidMount(): any {
        console.log("in header component: ", this.context);
        window.addEventListener('scroll', this.handleScroll);
        //window.addEventListener('load', this.initializeReactGA);
    }


    /**
     * Remove Event wile we remove this component from DOM.
     */

    componentWillUnmount(): any {
        window.removeEventListener('scroll', this.handleScroll);
    }


    handleScroll() {

        let element = this.refs.Sticky_context_header;
        // var domRect = element.getBoundingClientRect();
    }
    initializeReactGA() {
        ReactGA.initialize('UA-59718524-2');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    render(): any {
        console.log("Hide  Hide Hide : ", this.props);
        return (
            <header
                className={this.props.Hide ? "slideup" : "slidedown"}
            >
                <div ref="Sticky_context_header" className={this.props.Hide ? "header_main" : "header_main_sticky"}>
                    <div className="header_main_inr">
                        <div className="logo">
                            <NavLink exact to="/"><img src={byndr_Logo} className="default_logo" /></NavLink>
                            <NavLink exact to="/"><img src={byndr_Logo_White} className="transparent_logo" /></NavLink>
                        </div>
                        <div className="header_nav">
                            <div className="header_nav_inr">
                                <div className="signIn">
                                    <NavLink exact to="/">Sign In</NavLink>
                                </div>
                                <div className="signUpFree">
                                    <NavLink exact to="/">SignUp - Free</NavLink>
                                </div>
                                <div className="navMenu">
                                    <div className="menuIcon" onClick={() => Open_Or_Close_MenuBar()}>
                                        <i className="material-icons">
                                            menu
                                                    </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <YMInitializer accounts={[56589457]} options={{webvisor: true}} />
                {this.initializeReactGA}
            </header>
        );
    }
}

// Header.contextType = AppContext;

const map = (state: any) => {
    return {
        ...state.MainReducer
    };
};

export default connect(
    map,
    null,
)(Header);
