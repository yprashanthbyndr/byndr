import React from 'react';
// import '../styles/Header.style.css'
import byndr_Logo from '../../assets/images/byndr-Logo.png';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';
import { CSSTransition } from 'react-transition-group';


import { connect } from 'react-redux';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean
}

class MiniHeader extends React.Component<props, any> {

    componentDidMount(): any {
        console.log("in header component: ", this.context);
    }
    render(): any {
        return (
            // <CSSTransition
            //     in={this.props.HideHeader}
            //     timeout={1000}
            //     transition
            //     classNames="moveminiHeader-enter"
            //     unmountOnExit
            // >
                <div className="role_based_header">
                    <div className="role_based_header_main">
                        <div className="role_title"><span>Byndr</span> for Teachers</div>
                        <div className="role_menu">
                            <ul className="menu">
                                <li className="current-page">Overview</li>
                                <li>Features</li>
                                <li>Testimonials</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="try_byndr_btn"><a href="#">Try Byndr</a></div>
                    </div>
                </div>
            //  </CSSTransition>
        );
    }
}

// MiniHeader.contextType = AppContext;

const map = (state: any) => {
    return {
        ...state.MainReducer
    };
};

export default connect(
    map,
    null,
)(MiniHeader);
