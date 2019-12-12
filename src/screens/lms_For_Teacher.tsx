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

class lms_For_Teacher extends React.Component<props, any> {
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

    }

    render(): any {

        const gridList = [{
            image:teamwork,
            title:"Cloud-based LMS"
        },
        {
            image:medical_history,
            title:"Attendance & Student Performance"
        },
        {
            image:earth_globe,
            title:"Create Courses"
        },
        {
            image:blackboard,
            title:"Create Your Own Library"
        },
        {
            image:light_bulb,
            title:"Quiz, Assignments, Polls and Assessments"
        },
        {
            image:medical_history,
            title:"Weightage-Based Grading"
        },
        {
            image:earth_globe,
            title:"Personalized, Social and Mobile Learning"
        },
        {
            image:open_book,
            title:"Lorem dolor"
        }]

        return (
            <div>
                <div className="header_main_container">
                    <Header Hide={this.props.HideHeader} />
                    <MiniHeader Title="Teachers" tryLink="https://test.byndr.com/freesignup/teacher/" />
                </div>
                <div className="bodySection" style={{marginTop:175}}>
                    <InnerPageTitleBlock fromPage="Teaching Made Engaging, Productive & Valuable" pageSubtitle="Experience Byndr Today!" videoDisplay="true" tryBtnDisplay="true"  />
                    <ProductForRolesBlock Title="Teachers" content="Byndr gives teachers a platform to extend their help to students beyond classroom. Teachers can provide study materials, guidelines and instructions to create inspiring learning environment. Also, our LMS tool helps faculty to schedule assignments, evaluate the performance and guide students individually for better outcomes." gridList={gridList} />
                    <HomeTestimonial />
                    <FaqBlock />
                    <FooterDoubleCTA />
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
)(lms_For_Teacher);
