import React from 'react';
import { Seo } from '../theme/components';
import { connect } from 'react-redux';
import { SaveScroll_Height } from '../services';
import { byndr_Logo_White, krishnaMurthi, Icon_Testimonial_pink, learn_innovate_together, PlanProgress, collaboration_communication, assess_support, peer_to_peer_learning, secure_technology } from '../assets';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean,
    WindowScroolheight: number,
    routeProps: any
}

class RequestDemo extends React.Component<props, any> {
    constructor(props: any) {
        super(props);
        // this.headerRef = {};

        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            phoneNumber: '',
            nameOfInstitute: '',
            designation: '',
            sizeOfInstitue: '',
            message: '',
        }
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
        var lastScrollTop = this.props.WindowScroolheight;
        let HideHeder;

        var st = window.pageYOffset || document.documentElement.scrollTop;

        let diff = st - lastScrollTop;
        if (st > lastScrollTop && !this.props.HideHeader) {
            HideHeder = true;
            SaveScroll_Height(HideHeder, st)
        } else if (this.props.HideHeader && diff < -5) {
            HideHeder = false;
            SaveScroll_Height(HideHeder, st)
        } else if (diff > 10 || diff < -10) {
            HideHeder = undefined;
            SaveScroll_Height(HideHeder, st)
        }
    }



    StoreIPValues(key: string, value: any) {
        this.setState({ [key]: value })
    }

    render(): any {

        console.log("in render  : ", this.state)

        return (
            <div>
                <Seo seoData={this.props.routeProps} />
                <div className="requestDemoMain">
                    <div className="requestDemo">
                        <div className="requestDemoinr">
                            <div className="requestDemoLeft">
                                <div className="requestDemoContentMain">
                                    <div className="requestDemoCenter">
                                        <div className="requestdemoLogo">
                                            <NavLink exact to="/"><img src={byndr_Logo_White} width="130" /></NavLink>
                                        </div>
                                        <div className="requestDemoMainContent">
                                            <ul>
                                                <li>
                                                    <div className="requestDemoList">
                                                        <div className="requestDemoListTitle">
                                                            <span className="requestDemoListImage">
                                                                <img src={learn_innovate_together}/>
                                                                </span>
                                                            <span className="requestDemoListText">
                                                                Learn &amp; Innovate
                                                            </span>
                                                        </div>
                                                        <div className="requestDemoListContent">
                                                            Enables teachers to provide study materials, communicate effectively and encourage pro-active thinking among students
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                <div className="requestDemoList">
                                                        <div className="requestDemoListTitle">
                                                            <span className="requestDemoListImage">
                                                                <img src={PlanProgress}/>
                                                                </span>
                                                            <span className="requestDemoListText">
                                                                Plan, Perform & Progress
                                                            </span>
                                                        </div>
                                                        <div className="requestDemoListContent">
                                                            It enables the students to access course material, get their doubts clarified, take assessments and monitor the progress.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                <div className="requestDemoList">
                                                        <div className="requestDemoListTitle">
                                                            <span className="requestDemoListImage">
                                                                <img src={collaboration_communication}/>
                                                                </span>
                                                            <span className="requestDemoListText">
                                                                Collaboration & Co-ordination
                                                            </span>
                                                        </div>
                                                        <div className="requestDemoListContent">
                                                        All course activity rolls up into a simple feed, no clicks, simple social learning, collaboration with real-time push notifications, keeping users engaged and connected.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                <div className="requestDemoList">
                                                        <div className="requestDemoListTitle">
                                                            <span className="requestDemoListImage">
                                                                <img src={assess_support}/>
                                                                </span>
                                                            <span className="requestDemoListText">
                                                                Assess & Support
                                                            </span>
                                                        </div>
                                                        <div className="requestDemoListContent">
                                                        It enables the teachers to create assignments, track performance, evaluate for better learning outcomes.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                <div className="requestDemoList">
                                                        <div className="requestDemoListTitle">
                                                            <span className="requestDemoListImage">
                                                                <img src={peer_to_peer_learning}/>
                                                                </span>
                                                            <span className="requestDemoListText">
                                                            Peer-to-Peer Learning
                                                            </span>
                                                        </div>
                                                        <div className="requestDemoListContent">
                                                        It enables the students to create their own study group, share notes, exchange ideas within the group and focus on self-development.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                <div className="requestDemoList">
                                                        <div className="requestDemoListTitle">
                                                            <span className="requestDemoListImage">
                                                                <img src={secure_technology}/>
                                                                </span>
                                                            <span className="requestDemoListText">
                                                            Secure Technology
                                                            </span>
                                                        </div>
                                                        <div className="requestDemoListContent">
                                                        A secure cloud-based learning platform that enables easy integration, secure storage for documents and materials, monitor the engagement level, no set-up costs and no servers to maintain.
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <div className="requestDemoTestimonials">
                                            <div className="requestDemoTestimonialsInr">
                                                <div className="requestDemoTestimonials_Icon"><img src={Icon_Testimonial_pink} /></div>
                                                <div className="requestDemoTestimonials_Content">
                                                    From the first time I used it in class, the attention and support I've received from Byndr has made it easy to try new things and find the best ways to use it for my course.
                                                </div>
                                                <div className="requestDemoTestimonials_Author">
                                                    <div className="requestDemoTestimonials_Author_Icon">
                                                        <img src={krishnaMurthi} />
                                                    </div>
                                                    <div className="requestDemoTestimonials_Author_content">
                                                        <div className="requestDemoTestimonials_Author_content_title">
                                                            Krishnamurthy Kilaari
                                                        </div>
                                                        <div className="requestDemoTestimonials_Author_content_design">
                                                            HOD-Physics, Sreenidhi Institute of Engineering
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="requestDemoRight">
                                <div className="requestDemoForm">
                                    <div className="requestDemoFormInr">
                                        <div className="requestaDemoMain">
                                            <h2 className="requestdemotitle">
                                                Request for Demo
                                            </h2>
                                            <div className="requestdemoFormStart">
    
                                                <div className="requestdemo_singleRow"  >
                                                    <div className="requestdemo_singleRowLable">
                                                        Name
                                                        </div>

                                                    <div className="requestdemo_singleRowField">
                                                        <div className="requestdemo_singleRowFieldHalf">
                                                            <div className="requestdemo_singleRowField">
                                                                <input value={this.state.firstName} onChange={(txt) => { this.StoreIPValues("firstName", txt.target.value) }} type="text" placeholder="First Name" />
                                                            </div>
                                                        </div>
                                                        <div className="requestdemo_singleRowFieldHalf" style={{float:"right"}}>
                                                                <div className="requestdemo_singleRowField">
                                                                    <input value={this.state.lastName} onChange={(txt) => { this.StoreIPValues("lastName", txt.target.value) }} type="text" placeholder="Last Name / Surname" />
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="requestdemo_singleRow">
                                                    <div className="requestdemo_singleRowLable">
                                                        Email
                                                        </div>
                                                    <div className="requestdemo_singleRowField">
                                                        <div className="requestdemo_singleRowField">
                                                            <input value={this.state.emailId} onChange={(txt) => { this.StoreIPValues("emailId", txt.target.value) }} type="text" placeholder="Enter your email address" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="requestdemo_singleRow">
                                                    <div className="requestdemo_singleRowLable">
                                                        Phone Number
                                                        </div>
                                                        <div className="requestdemo_singleRowField">
                                                                <div className="requestdemo_singleRowField">
                                                                    <input value={this.state.phoneNumber} onChange={(txt) => { this.StoreIPValues("phoneNumber", txt.target.value) }} type="text" placeholder="Please enter phone number" />
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="requestdemo_singleRow">
                                                    <div className="requestdemo_singleRowLable">
                                                        Name of the Institution
                                                        </div>
                                                    <div className="requestdemo_singleRowField">
                                                        <div className="requestdemo_singleRowField">
                                                            <input value={this.state.nameOfInstitute} onChange={(txt) => { this.StoreIPValues("nameOfInstitute", txt.target.value) }} type="text" placeholder="Start typing for suggestions" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="requestdemo_singleRow">
                                                    <div className="requestdemo_singleRowLable">
                                                        Designation
                                                        </div>
                                                    <div className="requestdemo_singleRowField">
                                                        <div className="requestdemo_singleRowField">
                                                            <input value={this.state.designation} onChange={(txt) => { this.StoreIPValues("designation", txt.target.value) }} type="text" placeholder="Your designation / role" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="requestdemo_singleRow">
                                                    <div className="requestdemo_singleRowLable">
                                                        Size of the Institution <span>(Optional)</span>
                                                    </div>
                                                    <div className="requestdemo_singleRowField">
                                                        <div className="requestdemo_singleRowField">
                                                            <div className="requestdemo_singleRowField">
                                                                <select value={this.state.sizeOfInstitue} onChange={(txt)=> this.StoreIPValues("sizeOfInstitue", txt.target.value)}>
                                                                    <option value="" selected>Select</option>
                                                                    <option value="0-25">0-25</option>
                                                                    <option value="25-50">25-50</option>
                                                                    <option value="50-100">50-100</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="requestdemo_singleRow">
                                                    <div className="requestdemo_singleRowLable">
                                                        Your Message
                                                        </div>
                                                    <div className="requestdemo_singleRowField">
                                                        <div className="requestdemo_singleRowField">
                                                            <textarea value={this.state.message} onChange={(txt) => { this.StoreIPValues("message", txt.target.value) }} placeholder="Any message">

                                                            </textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="requestdemo_singleRow">
                                                    <div className="requestdemo_singleRowText">
                                                        By clicking this button, you give Byndr team a permission to contact you.
                                                        </div>
                                                </div>
                                                <div className="requestdemo_singleRow">
                                                    <div className="requestdemo_singleRowSubmit">
                                                        <input type="submit" value="Request for Demo" />
                                                    </div>
                                                </div>
                                                {/* </form> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
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
)(RequestDemo);