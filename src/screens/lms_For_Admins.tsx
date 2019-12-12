import React from 'react';
import {
    FaqBlock, MiniHeader, FooterCTA, Header, Footer, InnerPageTitleBlock,
    ProductForRolesBlock, HomeTestimonial, FooterDoubleCTA, CTAForCollege
} from '../theme/components';

import { connect } from 'react-redux';
import { SaveScroll_Height, MiniHeaderScrollLogic, StickyMiniHeader_In_Lms } from '../services';
import { teamwork, medical_history, earth_globe, blackboard, light_bulb, open_book, Cloud_based_LMS, Interactive_UI, Activity_Reports, Grade_Summary, Multi_Institute_Architecture, Instant_Messaging, Quick_Search } from '../assets';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean,
    WindowScroolheight: number,
    fromPage: any ,
    StickMiniHeader: boolean,
    StickyHeader_in_LMS: boolean
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


        if (scroll_position > 650 && !this.props.StickMiniHeader) {

            StickyMiniHeader_In_Lms(true);

        } else if (650 > scroll_position && this.props.StickMiniHeader) {
            StickyMiniHeader_In_Lms(false);
        }

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
            title:"How to login?",
            content:[
                {
                    singleFaqTitle:"Enterprise version:",
                    singleFaqContent:"<ul><li>If college is signed up with byndr, Teachers can log in with welcome emails sent from byndr or go to <a href='https://app.byndr.com'>https://app.byndr.com</a> to login.</li></ul>"
                },
                {
                    singleFaqTitle:"Free Version:",
                    singleFaqContent:"<ul><li>Whereas, byndr isn't in college? Create your own space to get connect with your class and deliver job/help teachers to deliver job and connect with your class.<a href=''>Get started</a> by a click on <a href=''>I'm a Teacher</a></li></ul>"
                }
            ]
        },{
            title:"How to Create Account?",
            content:[
                {
                    singleFaqTitle:"Free Version:",
                    singleFaqContent:"<ul><li>I'm a Teacher redirects to create account page. Fill your details Name, Mobile Number, Email, and Password. Once it’s done, you’ll receive a confirmation mail to your e-mail.</li></ul>"
                }
            ]
        },{
            title:"How to Set up?",
            content:[
                {
                    singleFaqTitle:"Enterprise Version:",
                    singleFaqContent:"<ul><li>Once you are login with user id and password, Account is set up with courses and students of your classes</li></ul>"
                },
                {
                    singleFaqTitle:"Free Version:",
                    singleFaqContent:"<ul><li>Set up your account by describing the Name of your institution with website URL and teaching level. Each option has a scroll down bar to make it easy. Customize your class with course and students, and Save.</li></ul>"
                }
            ]
        },{
            title:"What is Course/Groups? And the difference between it?",
            content:[
                {
                    singleFaqTitle:"",
                    singleFaqContent:"<ul><li>Login to your account, on the Home or Feed page</li><li>Left you have Latest, Courses &amp; Groups.</li><li>Courses are Subjects that are assignment you in the current Semester</li><li>Groups allow teachers to interact or initiate one-one discussions with Students of the Group, this is ideal for Mentoring for Events, Sports, Innovation or anything that you would to drive learning curricular or extra-curricular</li><li>Groups Also allow you to check the Overall Performance of the Students through the Performance Tab.</li></ul>"
                }
            ]
        },{
            title:"What is Poll? And How to create it?",
            content:[
                {
                    singleFaqTitle:"",
                    singleFaqContent:"<ul><li>The poll option is to record the opinion or vote on a topic to students.</li><li>Login to your account, From Post to your Students dropdown pick the Course/Subject for which you would like to create Poll, then click on Add Poll/Material, Select the Poll Option you can now add Questions (Text/Image) and Answers (Text/Image), once completed click on Post button, Poll will be live now you can anytime change the Poll by click on the Edit Poll from the Feed and also check the live response from the Feed.</li></ul>"
                }
            ]
        },{
            title:"How to Create Assignment / Exam?",
            content:[
                {
                    singleFaqTitle:"",
                    singleFaqContent:"<ul><li>Login to your account, click on Courses from the Top, Click on the Course for which you want to Create Assignment, You will be redirected to Course Feed Page, click on Coursework Tab, you can click on New Assignment/New Exam, You can Create/Edit/Make it Private or Publish the Assignment/Exam from Coursework Tab. </li><li>You can also Create Assignment from Home / Feed Page, by click on Add an Assignment, Select the Subject option!</li><li>While Creating Assignment / Exam, you select the Grade Group, Max Marks / Points, Due Date, Attach Materials and if you want to accept Online Submission, then select the Online Submission as Yes (Online Submission is only for Assignments)</li></ul>"
                }
            ]
        },{
            title:"How to Add/upload Note or Materials?",
            content:[
                {
                    singleFaqTitle:"",
                    singleFaqContent:"<ul><li>Login to your account, click on Specific Course for which you want Add Materials, You will be redirected to Course Feed Page, then click on Add/Upload Material, you can add Materials from Google Drive, Upload from your Computer, Create in Byndr, Upload links and Copy from your other Courses.</li><li>While uploading Notes / Materials you can select or Publish to Student or Keep it Private.</li></ul>"
                }
            ]
        },{
            title:"How Do I Add the students?",
            content:[
                {
                    singleFaqTitle:"Free Version:",
                    singleFaqContent:"<ul><li>Login Save option for add course redirects to the 'Add Student' page. Where you have easy ways to add students.</li><li>Option to upload a spreadsheet of students list or add student data manually.</li><li>Download the byndr data template for a quick set up.</li><li>Do not have to upload everything at once, you can always add more students later or anytime.</li><li>Select a course where students are to be added manually, and click on 'Edit'</li><li>Enter student e-mails by giving 'Space' Or pressing 'Enter'</li><li>Successfully An account is created with a Course and related Students in it.</li></ul>"
                }
            ]
        }]

        return (
            <div>
                <div className="header_main_container">
                    <Header Hide={this.props.HideHeader} />
                </div>
                <div className="bodySection">
                    <InnerPageTitleBlock role="admins" fromPage="Monitoring Made Easy, Organized & Efficient" pageSubtitle="Experience Byndr Today!" videoDisplay="false" tryBtnDisplay="true"  />
                    <MiniHeader Title="Admins" tryLink="" />
                    <ProductForRolesBlock Title="college" content="Byndr has been designed and developed with attention on connectivity and the mobile user experience. Easy and intuitive, Byndr offers a maintenance-free platform and unlimited support. Our platform is lightweight and accessed on any mobile or desktop browser (responsive web app), enabling teachers and students to access the content quickly. Teachers can collaborate, upload files, grade assignments, and take attendance right from their phones." gridList={gridList} />
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