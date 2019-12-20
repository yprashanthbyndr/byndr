import React from 'react';
import {
    FaqBlock, MiniHeader, FooterCTA, Header, Footer, InnerPageTitleBlock,
    ProductForRolesBlock, HomeTestimonial, FooterDoubleCTA, Seo
} from '../theme/components';

import { connect } from 'react-redux';
import { SaveScroll_Height, MiniHeaderScrollLogic, StickyMiniHeader_In_Lms } from '../services';
import { teamwork, medical_history, earth_globe, blackboard, light_bulb, open_book, Cloud_based_LMS, Interactive_UI, Join_Courses, peer_to_peer_learning, Access_Material_Anytime, Self_Assessment, Instant_Messaging, Mobile_Learning } from '../assets';

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

        let diff = st - lastScrollTop;
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



        // if (st > 650 && !this.props.StickMiniHeader) {
        //     let HideMainHeader = true;
        //     let StickyMiniHeader = true;
        //     StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, st);

        // } else if (650 > st && this.props.StickMiniHeader) {
        //     let HideMainHeader = false;
        //     let StickyMiniHeader = false;
        //     StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, st);
        // } else if (diff < -10 && !this.props.StickyHeader_in_LMS) {
        //     let HideMainHeader = true;
        //     let StickyMiniHeader = this.props.StickMiniHeader ;
        //     StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, st);
        // } else if (diff > 10) {
        //     let HideMainHeader = this.props.HideHeader;
        //     let StickyMiniHeader = this.props.StickMiniHeader;
        //      StickyMiniHeader_In_Lms(HideMainHeader, StickyMiniHeader, st);
        // }

    }

    render(): any {

        const gridList = [{
            image:Cloud_based_LMS,
            title:"Cloud-based LMS"
        },
        {
            image:Interactive_UI,
            title:"Interactive UI"
        },
        {
            image:Join_Courses,
            title:"Join Courses"
        },
        {
            image:peer_to_peer_learning,
            title:"Self-Learning / Peer-to-Peer Learning"
        },
        {
            image:Access_Material_Anytime,
            title:"Access Material Anytime"
        },
        {
            image:Self_Assessment,
            title:"Self-Assessment"
        },
        {
            image:Instant_Messaging,
            title:"Private Message to Faculty"
        },
        {
            image:Mobile_Learning,
            title:"Personalized, Social and Mobile Learning"
        }]

        const faqList = [{
            title: "Why should I prefer Byndr?",
            content: [
                {
                    singleFaqTitle: "",
                    singleFaqContent: "<ul><li>Byndr helps round the clock connectivity with teachers and the peer group. Easy accessibility if the course materials shared by the faculty and peer group. Helps to overcome reluctance by clearing doubts and provide hands on information on assessment grades and attendance reports. It is user friendly, responsive UI compatible on latest browsers, Android and iOS applications. Above all it is free of cost.</li></ul>"
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
                    <InnerPageTitleBlock role="students" fromPage="<span>Learning Made</span><br/> Interactive, Simple & Effective" pageSubtitle="Experience Byndr Today!" videoDisplay="false" tryBtnDisplay="true" />
                    <MiniHeader Title="Student" tryLink="https://test.byndr.com/freesignup/student/" />
                    <ProductForRolesBlock Title="students" content="Byndr, with student centric & social LMS platform, enabling consistency in learning and allowing students to connect with their teachers, fellow students (Peers) and has access to their materials, from anywhere and at any time." gridList={gridList} />
                    <HomeTestimonial />
                    <FaqBlock faqList={faqList} />
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