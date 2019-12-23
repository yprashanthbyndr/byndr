import React from 'react';
import {
    FaqBlock, MiniHeader, FooterCTA, Header, Footer, InnerPageTitleBlock,
    ProductForRolesBlock, HomeTestimonial, FooterDoubleCTA, Seo
} from '../theme/components';

import { connect } from 'react-redux';
import { SaveScroll_Height, MiniHeaderScrollLogic, StickyMiniHeader_In_Lms } from '../services';
import { teamwork, medical_history, earth_globe, blackboard, light_bulb, open_book, Cloud_based_LMS, Attendance_Student_Performance, Create_Courses, Create_Library, QuizAssignments, Weightage_Based_Grading, Mobile_Learning } from '../assets';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean,
    WindowScroolheight: number,
    fromPage: any,
    StickMiniHeader: boolean,
    StickyHeader_in_LMS: boolean,
    routeProps:any
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

        // var st = window.pageYOffset || document.documentElement.scrollTop;

        // MiniHeaderScrollLogic(st, lastScrollTop, this.props.HideHeader);
        let diff = scroll_position - lastScrollTop;

        // if (scroll_position > 560 && !this.props.StickMiniHeader) {
        //     let HideMainHeader = true;
        //     let StickyMiniHeader = true;
        //     StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, scroll_position);

        // } else if (560 > scroll_position && this.props.StickMiniHeader) {

        //     let HideMainHeader = false;
        //     let StickyMiniHeader = false;
        //     StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, scroll_position);
        // } else if (diff < -10 && this.props.HideHeader) {

        //     let HideMainHeader = false;
        //     let StickyMiniHeader = this.props.StickMiniHeader;
        //     StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, scroll_position);
        // } else if (diff > 10 && !this.props.HideHeader && this.props.StickMiniHeader) {
        //     let HideMainHeader = true;
        //     let StickyMiniHeader = this.props.StickMiniHeader;
        //     StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, scroll_position);
        // } else if (diff > 10) {
        //     let HideMainHeader = this.props.HideHeader;
        //     let StickyMiniHeader = this.props.StickMiniHeader;
        //     StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, scroll_position);
        // }
    }

    render(): any {

        const gridList = [{
            image: Cloud_based_LMS,
            title: "Cloud-based LMS"
        },
        {
            image: Attendance_Student_Performance,
            title: "Interactive UI"
        },
        {
            image: Create_Courses,
            title: "Create Courses"
        },
        {
            image: Create_Library,
            title: "Create Your Own Library"
        },
        {
            image: QuizAssignments,
            title: "Quiz, Assignments, Polls and Assessments"
        },
        {
            image: Attendance_Student_Performance,
            title: "Attendance Reports"
        },
        {
            image: Weightage_Based_Grading,
            title: "Weightage-Based Grading"
        },
        {
            image: Mobile_Learning,
            title: "Personalized, Social and Mobile Learning"
        }]
        const faqList = [{
            title: "Why should I prefer Byndr?",
            content: [
                {
                    singleFaqTitle: "",
                    singleFaqContent: "<ul><li>Byndr helps round the clock connectivity with students. Easy to post, share, store and retrieve the course materials without any infringing upon the proprietary issue. It is user friendly, responsive UI compatible on latest browsers, Android and iOS applications. Above all it is free of cost.</li></ul>"
                }
                
            ]
        }, {
            title: "Is there any support for creating my course?",
            content: [
                {
                    singleFaqTitle: "",
                    singleFaqContent: "<ul><li>Presently it is a self-driven social learning platform providing connectivity between the members of the group. However, we can provide professional support on specific request. You can email us at <a href='mailto:info@byndr.com'>info@byndr.com</a></li></ul>"
                }
            ]
        }]
        return (
            <div>
                <Seo seoData={this.props.routeProps} />
                <div className="header_main_container">
                    <Header Hide={this.props.HideHeader} />

                </div>
                <div className="bodySection">
                    <InnerPageTitleBlock role="teachers" fromPage="<span>Teaching Made </span><br/>Engaging, Productive & Valuable" pageSubtitle="" videoDisplay="false" tryBtnDisplay="true" btnText="Experience Byndr Today!" />
                    <MiniHeader Sticky={this.props.StickyHeader_in_LMS} Title="Teachers" tryLink="https://test.byndr.com/freesignup/teacher/" />
                    <ProductForRolesBlock Title="Teachers" content="Byndr gives teachers a platform to extend their help to students beyond classroom. Teachers can provide study materials, guidelines and instructions to create inspiring learning environment. Also, our LMS tool helps faculty to schedule assignments, evaluate the performance and guide students individually for better outcomes." gridList={gridList} />
                    <HomeTestimonial />
                    <FaqBlock faqList={faqList} />
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
