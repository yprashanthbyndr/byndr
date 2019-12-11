import React from 'react';
// import '../styles/Header.style.css'
// import byndr_Logo from '../../assets/images/byndr-Logo.png';
// import { NavLink } from 'react-router-dom';
// import { AppContext } from '../../contextApi/AppContext';
// import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';
import { store, actionMiniHeaderOptions } from '../../Redux';

interface props {
    onLeftMenu?(): void;
    // MainReducer: any,
    HideHeader: boolean,
    MiniHeaderOptions: string,
    Title: string,
    tryLink?:string
}

class MiniHeader extends React.Component<props, any> {

    constructor(props: any) {
        super(props);
        this.ScroolEvent = this.ScroolEvent.bind(this)
    }

    componentDidMount(): any {
        window.addEventListener('scroll', this.ScroolEvent);
    }

    ScroolEvent(event) {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        // console.log("this.props.MiniHeaderOptions", this.props.MiniHeaderOptions);
        // console.log(". / . / .  / winScroll in min header : ", winScroll);
        if (winScroll > 0 && winScroll < 700 && this.props.MiniHeaderOptions !== "overview") {
            store.dispatch(actionMiniHeaderOptions("overview"))
        } else if (winScroll > 700 && winScroll < 1500 && this.props.MiniHeaderOptions !== "features") {
            store.dispatch(actionMiniHeaderOptions("features"))
        } else if (winScroll > 1500 && winScroll < 2200 && this.props.MiniHeaderOptions !== "Testimonials") {
            store.dispatch(actionMiniHeaderOptions("Testimonials"))
        } else if (winScroll > 2200 && this.props.MiniHeaderOptions !== "FAQ") {
            store.dispatch(actionMiniHeaderOptions("FAQ"))
        }
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
                    <div className="role_title"><span>Byndr</span> For {this.props.Title} </div>
                    <div className="role_menu">
                        <ul className="menu">
                            <li className={this.props.MiniHeaderOptions === "overview" ? "current-page" : ""}
                                onClick={() => {
                                    store.dispatch(actionMiniHeaderOptions("overview"))
                                    document.body.scrollTop = 0;
                                    document.documentElement.scrollTop = 0;
                                }}
                            >Overview</li>
                            <li className={this.props.MiniHeaderOptions === "features" ? "current-page" : ""}

                                onClick={() => {
                                    document.body.scrollTop = 700;
                                    document.documentElement.scrollTop = 700;
                                    store.dispatch(actionMiniHeaderOptions("features"))
                                }}>Features</li>
                            <li className={this.props.MiniHeaderOptions === "Testimonials" ? "current-page" : ""}
                                onClick={() => {
                                    document.body.scrollTop = 1500;
                                    document.documentElement.scrollTop = 1500;
                                    store.dispatch(actionMiniHeaderOptions("Testimonials"))
                                }}
                            >Testimonials</li>
                            <li className={this.props.MiniHeaderOptions === "FAQ" ? "current-page" : ""}

                                onClick={() => {
                                    document.body.scrollTop = 2200;
                                    document.documentElement.scrollTop = 2200;
                                    store.dispatch(actionMiniHeaderOptions("FAQ"))

                                }}
                            >FAQ</li>
                        </ul>
                    </div>
                    <div className="try_byndr_btn"><a href={this.props.tryLink}>Try Byndr</a></div>
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
