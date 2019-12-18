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

        console.log(" in Lams_Teachers Render : ", this.props);
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
            title: "How to login?",
            content: [
                {
                    singleFaqTitle: "Enterprise version:",
                    singleFaqContent: "<ul><li>Download Byndr App from play store or go to <a href='https://app.byndr.com'>https://app.byndr.com</a> to log in through your Credentials sent to your Registered Mobile or Email once your college is activated on Byndr.</li><li>If still, you face any problem contact your college Byndr Coordinator or mail to <a href='mailto:info@byndr.in'>info@byndr.in</a></li></ul>"
                },
                {
                    singleFaqTitle: "Free Version:",
                    singleFaqContent: "<ul><li>Whereas, byndr isn't in college? Create your own space to get connect with your class / connect with your friends for group learning/discussions <a href=''>Get started</a> by a click on <a href=''>I'm a student.</a></li></ul>"
                }
            ]
        }, {
            title: "How to Create Account?",
            content: [
                {
                    singleFaqTitle: "Free Version:",
                    singleFaqContent: "<ul><li>When you click on I'm a student account it redirects to the 'Create Account' page. Fill your details Course code, Name, Mobile Number, Email, and password.</li><li>Note: The teacher needs to invite students by adding them to the course then invitation mail is sent to students. The student accepts the invitation or copies the Course code to join a course.</li></ul>"
                }
            ]
        }, {
            title: "How to Set up?",
            content: [
                {
                    singleFaqTitle: "Enterprise Version:",
                    singleFaqContent: "<ul><li>Once you are login with user id and password, Account is set up with courses and respective faculties, displaying your materials and performance.</li></ul>"
                },
                {
                    singleFaqTitle: "Free Version:",
                    singleFaqContent: "<ul><li>Set up your account by describing the Name of your institution with website URL and Education level. Each option has a scroll down bar to make it easy.</li></ul>"
                }
            ]
        }, {
            title: "How to Create a Self-Learning Group?",
            content: [
                {
                    singleFaqTitle: "Enterprise Version",
                    singleFaqContent: "<ul><li>Do Not Have an Option for Peer to Peer learning.</li></ul>"
                },
                {
                    singleFaqTitle: "Free Version:",
                    singleFaqContent: "<ul><li>If No course-code, you can create your self-learning group by adding your friends for a group studies and discussions.</li></ul>"
                }
            ]
        }, {
            title: "How to Add Friends?",
            content: [
                {
                    singleFaqTitle: "Free Version:",
                    singleFaqContent: "<ul><li>Save option redirects to 'Add Friends' Page, you can add them in easy ways.</li><li>Option to upload a spreadsheet or add them manually.</li><li>Download the byndr data template for a quick set up.</li><li>Do not have to upload everything at once, you can always add later or anytime.</li><li>Select a Group where to be added manually, and click on 'Edit'</li><li>Enter mail_ ids by giving 'Space' Or pressing 'Enter'</li></ul>"
                }
            ]
        }, {
            title: "How to Submit Assignments?",
            content: [
                {
                    singleFaqTitle: "Enterprise Version/Free Version",
                    singleFaqContent: "<ul><li>If Teacher posted Assignment for online submission, Login to account, click on Specific Course for which you want to Upload Assignment, You will be redirected to Course Feed Page, click on Coursework Tab, Select the Assignments which are shown in left, find an upload button below the assignment, Click on Upload and Select document Save.</li><li>Can also Upload Multiple documents before Due Date, the latest version will be shown to your Teacher</li></ul>"
                }
            ]
        }, {
            title: "How to message my Professor privately?",
            content: [
                {
                    singleFaqTitle: "Enterprise Version/Free Version",
                    singleFaqContent: "<ul><li>Login to account, click on Specific Courses for which you want to Ask Question, And will be redirected to Course Feed Page, There you will find Message Professor Privately on the top of the Feed Page, Enter your Questions, Doubt or Suggestion and click on Send Private Message, now your Teacher and you can have a private conversation on that post you just created.</li></ul>"
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
                    <InnerPageTitleBlock role="teachers" fromPage="Teaching Made Engaging, Productive & Valuable" pageSubtitle="Experience Byndr Today!" videoDisplay="false" tryBtnDisplay="true" btnText="Experience Byndr Today!" />
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
