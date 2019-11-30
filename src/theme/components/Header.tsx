import React from 'react';
import byndr_Logo from '../../assets/images/byndr-Logo.png';
import byndr_Logo_White from '../../assets/images/byndr-logo-white.png';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';
import { connect } from 'react-redux';


interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean,
}

class Header extends React.Component<props, any> {


    constructor(props: any) {
        super(props);
        // this.headerRef = {};

        this.handleScroll = this.handleScroll.bind(this);
    }


    componentDidMount(): any {
        console.log("in header component: ", this.context);
        window.addEventListener('scroll', this.handleScroll);
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


    render(): any {
        return (
            <header className={this.props.HideHeader ? "slideup" : "slidedown"}>
                <div ref="Sticky_context_header" className="header_main">
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
                                    <div className="menuIcon">
                                        <i className="material-icons">
                                            menu
                                                    </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
