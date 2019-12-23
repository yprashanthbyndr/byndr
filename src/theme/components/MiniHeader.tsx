import React, { useState } from 'react';
// import '../styles/Header.style.css'
// import byndr_Logo from '../../assets/images/byndr-Logo.png';
// import { NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { store, actionMiniHeaderOptions } from '../../Redux';
import { StickyMiniHeader_In_Lms } from '../../services';
import { byndr_Logo } from '../../assets';
import { NavLink } from 'react-router-dom';


interface props {
    onLeftMenu?(): void;
    // MainReducer: any,
    HideHeader: boolean,
    MiniHeaderOptions: string,
    Title: string,
    tryLink?: string,
    Sticky: boolean,
    WindowScroolheight: number,
    StickMiniHeader: boolean
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
        // if (winScroll > 0 && winScroll < 700 && this.props.MiniHeaderOptions !== "overview") {
        //     store.dispatch(actionMiniHeaderOptions("overview"))
        // } else if (winScroll > 700 && winScroll < 1500 && this.props.MiniHeaderOptions !== "features") {
        //     store.dispatch(actionMiniHeaderOptions("features"))
        // } else if (winScroll > 1500 && winScroll < 2200 && this.props.MiniHeaderOptions !== "Testimonials") {
        //     store.dispatch(actionMiniHeaderOptions("Testimonials"))
        // } else if (winScroll > 2200 && this.props.MiniHeaderOptions !== "FAQ") {
        //     store.dispatch(actionMiniHeaderOptions("FAQ"))
        // }


        var lastScrollTop = this.props.WindowScroolheight;
        let HideHeder;

        // MiniHeaderScrollLogic(st, lastScrollTop, this.props.HideHeader);
        let diff = winScroll - lastScrollTop;

        if (winScroll > 580 && !this.props.StickMiniHeader) {
            let HideMainHeader = true;
            let StickyMiniHeader = true;
            StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, winScroll);

        } else if (580 > winScroll && this.props.StickMiniHeader) {

            let HideMainHeader = false;
            let StickyMiniHeader = false;
            StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, winScroll);
        } else if (diff < -10 && this.props.HideHeader) {

            let HideMainHeader = false;
            let StickyMiniHeader = this.props.StickMiniHeader;
            StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, winScroll);
        } else if (diff > 10 && !this.props.HideHeader && this.props.StickMiniHeader) {
            let HideMainHeader = true;
            let StickyMiniHeader = this.props.StickMiniHeader;
            StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, winScroll);
        } else if (diff > 10) {
            let HideMainHeader = this.props.HideHeader;
            let StickyMiniHeader = this.props.StickMiniHeader;
            StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, winScroll);
        }
    }
    ScroolToTp(): any {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



    render(): any {

        return (
            < div
                className={this.props.StickMiniHeader ? "role_based_header_sticky" : "role_based_header"} style={{ top: this.props.StickMiniHeader && !this.props.HideHeader ? 66 : 0 }}>
                <div className="role_based_header_main"
                >
                    <div className="role_title">
                        {/* <TransitionGroup component={null}> */}
                        {this.props.StickMiniHeader ?
                            // <CSSTransition
                            //     in={this.props.StickMiniHeader}
                            //     appear={true}
                            //     timeout={500}
                            //     classNames="fade"
                            // >
                            <span className={"byndrLogoForMini"}>
                                <NavLink exact to="/" activeClassName="activeMenu" onClick={() => {
                                    this.ScroolToTp()
                                }}><img src={byndr_Logo} /></NavLink></span>
                            // </CSSTransition>
                            :
                            <React.Fragment><span>Byndr</span> For</React.Fragment>
                            // </CSSTransition>
                        } {this.props.Title}
                    </div>

                    <div className="role_menu">
                        <ul className="menu">
                            <li className={this.props.MiniHeaderOptions === "overview" ? "current-page" : ""}
                                onClick={() => {
                                    store.dispatch(actionMiniHeaderOptions("overview"))
                                    document.body.scrollTop = 560;
                                    document.documentElement.scrollTop = 560;
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
        );
    }
}

const map = (state: any) => {
    return {
        ...state.MainReducer
    };
};

export default connect(
    map,
    null,
)(MiniHeader);
