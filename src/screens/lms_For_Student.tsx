import React from 'react';
import {
    FaqBlock, MiniHeader, FooterCTA, Header, Footer, InnerPageTitleBlock,
    ProductForRolesBlock, HomeTestimonial, FooterDoubleCTA
} from '../theme/components';

import { connect } from 'react-redux';
import { SaveScroll_Height, MiniHeaderScrollLogic } from '../services';
import { teamwork, medical_history, earth_globe, blackboard, light_bulb, open_book } from '../assets';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean,
    WindowScroolheight: number,
    fromPage: any
}

class lms_For_Student extends React.Component<props, any> {
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

        const gridList = [{
            image:teamwork,
            title:"Cloud-based LMS"
        },
        {
            image:medical_history,
            title:"Interactive UI"
        },
        {
            image:earth_globe,
            title:"Join Courses"
        },
        {
            image:blackboard,
            title:"Self-Learning / Peer-to-Peer Learning"
        },
        {
            image:light_bulb,
            title:"Access Material Anytime"
        },
        {
            image:medical_history,
            title:"Self-Assessment"
        },
        {
            image:earth_globe,
            title:"Private Message to Faculty"
        },
        {
            image:open_book,
            title:"Personalized, Social and Mobile Learning"
        }]

        return (
            <div>
                <div className="header_main_container">
                    <Header Hide={this.props.HideHeader} />
                    <MiniHeader Title="Student" tryLink="https://test.byndr.com/freesignup/student/" />
                </div>
                <div className="bodySection" style={{marginTop:175}}>
                    <InnerPageTitleBlock fromPage="Learning Made Interactive, Simple & Effective" pageSubtitle="Experience Byndr Today!" videoDisplay="true" tryBtnDisplay="true"  />
                    <ProductForRolesBlock Title="students" content="Byndr, with student centric & social LMS platform, enabling consistency in learning and allowing students to connect with their teachers, fellow students (Peers) and has access to their materials, from anywhere and at any time." gridList={gridList} />
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
)(lms_For_Student);