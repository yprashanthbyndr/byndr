import React from 'react';
import {
    FaqBlock, MiniHeader, FooterCTA, Header, Footer, InnerPageTitleBlock,
    ProductForRolesBlock, HomeTestimonial, FooterDoubleCTA, CTAForCollege, Seo
} from '../theme/components';

import { connect } from 'react-redux';
import { SaveScroll_Height, MiniHeaderScrollLogic, StickyMiniHeader_In_Lms } from '../services';
import { teamwork, medical_history, earth_globe, blackboard, light_bulb, open_book, Cloud_based_LMS, Interactive_UI, Activity_Reports, Grade_Summary, Multi_Institute_Architecture, Instant_Messaging, Quick_Search } from '../assets';
import { USPs } from './USPs';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean,
    WindowScroolheight: number,
    fromPage: any ,
    StickMiniHeader: boolean,
    StickyHeader_in_LMS: boolean,
    routeProps:any
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
            title:"Cloud-based & Maintenance-free Platform"
        },
        {
            image:Interactive_UI,
            title:"Interactive UI & Dashboard"
        },
        {
            image:Activity_Reports,
            title:"Activity Reports"
        },
        {
            image:Grade_Summary,
            title:"Grade Summary"
        },
        {
            image:Multi_Institute_Architecture,
            title:"Multi-Institute Architecture"
        },
        {
            image:Instant_Messaging,
            title:"Instant Messaging"
        },
        {
            image:Quick_Search,
            title:"Simple & Quick Search Enabled"
        }]

        const faqList = [{
            title:"Why should I prefer Byndr?",
            content:[
                {
                    singleFaqTitle:"",
                    singleFaqContent:"<ul><li>A Secure cloud-based learning platform that enables easy integration, Secure storage for documents and materials, monitor the engagement level, no set-up costs and no servers to maintain. It helps in simple social learning, collaboration with real-time push notifications, keeping users engaged and connected.</li></ul>"
                }
            ]
        },{
            title:"What is the advantage to the administrators?",
            content:[
                {
                    singleFaqTitle:"",
                    singleFaqContent:"<ul><li>Administrators will have a customised ready to use platform for easy monitoring of the students, better coordination with the faculty and thereby efficient functioning of the institution for best outcomes. Click here for a free demo.</li></ul>"
                }
            ]
        },{
            title:"Can I use Byndr for free for entire college?",
            content:[
                {
                    singleFaqTitle:"",
                    singleFaqContent:"<ul><li>Byndr is free for teachers and students. It is a self-driven social learning platform. The administrator can be an influencer by motivating the faculty and student to utilize this platform. Contact us for a better solution to utilize Byndr free application in your institution.</li></ul>"
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
                    <InnerPageTitleBlock role="admins" fromPage="<span>Monitoring Made </span><br/>Easy, Organized & Efficient" pageSubtitle="Experience Byndr Today!" videoDisplay="false" tryBtnDisplay="true"  />
                    <MiniHeader Title="Colleges" tryLink="" />
                    <ProductForRolesBlock Title="college" content="Byndr has been designed and developed with attention on connectivity and the mobile user experience. Easy and intuitive, Byndr offers a maintenance-free platform and unlimited support. Our platform is lightweight and accessed on any mobile or desktop browser (responsive web app), enabling teachers and students to access the content quickly. Teachers can collaborate, upload files, grade assignments, and take attendance right from their phones." gridList={gridList} />
                    <USPs routeProps={this.props.routeProps} />
                    <HomeTestimonial />
                    <FaqBlock faqList={faqList} />
                    <CTAForCollege />
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