import React from 'react';
import {
    FaqBlock, MiniHeader, FooterCTA, Header, Footer, InnerPageTitleBlock,
    ProductForRolesBlock, HomeTestimonial
} from '../theme/components';

import { connect } from 'react-redux';
import { SaveScroll_Height, MiniHeaderScrollLogic } from '../services';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean,
    WindowScroolheight: number,
    fromPage: any
}

class lms_For_Admins extends React.Component<props, any> {
    constructor(props: any) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    /**
 *  Add Event to listen On window page Scrolling .
 */
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        // window.scrollByLines(lines)
    }

    /**
     * Remove Event wile we remove this component from DOM.
     */

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scroll_position = 0;
        scroll_position = window.scrollY;
        var lastScrollTop = this.props.WindowScroolheight;
        let HideHeder;

        var st = window.pageYOffset || document.documentElement.scrollTop;
        MiniHeaderScrollLogic(st, lastScrollTop, this.props.HideHeader);
        // let diff = st - lastScrollTop;
        // if (st > lastScrollTop && !this.props.HideHeader) {
        //     HideHeder = true;
        //     SaveScroll_Height(HideHeder, st)
        // } else if (this.props.HideHeader && diff < -5) {
        //     HideHeder = false;
        //     SaveScroll_Height(HideHeder, st)
        // } else if (diff > 10 || diff < -10) {
        //     HideHeder = undefined;
        //     SaveScroll_Height(HideHeder, st)
        // }
    }

    render(): any {
        return (
            <div>
                <div className="header_main_container">
                    <Header Hide={this.props.HideHeader} />
                    <MiniHeader Title="for Admins" />
                </div>
                <div className="bodySection">
                    <InnerPageTitleBlock fromPage="Product Roles" pageSubtitle="" videoDisplay="true" tryBtnDisplay="true"  />
                    <ProductForRolesBlock />
                    <HomeTestimonial />
                    <FaqBlock />
                    <FooterCTA />
                </div>
                <Footer />
            </div>
        )
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
)(lms_For_Admins);