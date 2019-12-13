import React from 'react';
import { byndr_Logo, FB_img, TW_img, Li_img, Android_Byndr_img, Ios_Byndr_img } from "../../assets";
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import { connect } from 'react-redux';

interface props {
    onLeftMenu?(): void,
    MainReducer: any,
    OpenMenuBar: boolean
}

class Footer extends React.Component<props, any> {

    render(): any {
        return (
            <React.Fragment>
            <footer>
                <div className="footer">
                    <div className="footerInr">
                        <div className="footerWidgetsList">
                            <div className="footer_left">
                                <ul>
                                    <li>
                                        <div className="footerWidgetTitle">
                                            PRODUCT
                                    </div>
                                        <div className="footerWidgetList">
                                            <ul>
                                                <li>
                                                    <NavLink exact to="/product"
                                                        onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}
                                                    >Overview</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/lms-for-teachers"
                                                        onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}
                                                    >For Teachers</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/lms-for-students"
                                                        onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}
                                                    >For Students</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/lms-for-admins"
                                                        onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}
                                                    >For Colleges</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/"

                                                        onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}
                                                    >Request a Demo</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/pricing"
                                                        onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}
                                                    >Pricing</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footerWidgetTitle">
                                            COMPANY
                                        </div>
                                        <div className="footerWidgetList">
                                            <ul>
                                                <li>
                                                    <NavLink exact to="/aboutus" onClick={() => {
                                                        document.body.scrollTop = 0;
                                                        document.documentElement.scrollTop = 0;
                                                    }}>About</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact
                                                        to="/"
                                                        onClick={() => {
                                                            window.open(
                                                                "https://byndr.breezy.hr/", "_blank");
                                                        }}
                                                    >Careers</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/blog"
                                                        onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}
                                                    >Blog</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/contact-us"
                                                        onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}

                                                    >Contact Us</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footerWidgetTitle">
                                            RESOURCES
                                        </div>
                                        <div className="footerWidgetList">
                                            <ul>
                                                {/* <li>
                                                    <a target="_blank" href="https://byndr.zendesk.com/">Datasheets</a>
                                                </li> */}
                                                <li>
                                                    <a target="_blank" href="https://byndr.zendesk.com/">FAQs</a>
                                                </li>
                                                {/* <li>
                                                    <a target="_blank" href="https://byndr.zendesk.com/">Knowledge Base</a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://byndr.zendesk.com/">Videos</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer_right">
                                <ul>
                                    <li>
                                        <div className="footerWidgetTitle">
                                            Follow
                                    </div>
                                        <div className="footerWidgetSocial">
                                            <ul>
                                                <li>
                                                    <NavLink exact target="_blank" to="https://facebook.com/ByndrApp"><img src={FB_img} alt="Bynder Facebook" /></NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact target="_blank" to="https://twitter.com/Byndr_Mobile"><img src={TW_img} alt="Bynder Twitter" /></NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact target="_blank" to="https://www.linkedin.com/company/byndr/about/"><img src={Li_img} alt="Bynder LinkedIn" /></NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footerWidgetTitle">
                                            Download
                                        </div>
                                        <div className="footerWidgetDownload">
                                            <ul>
                                                <li>
                                                    <a target="_blank"  href="https://play.google.com/store/apps/details?id=org.byndr.byndr&hl=en"><img src={Android_Byndr_img} alt="Bynder Android" /></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://apps.apple.com/gb/app/byndr/id1375913014"><img src={Ios_Byndr_img} alt="Bynder IOS" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_mini_footer">
                            <div className="footer_logo">
                                <NavLink exact to="/"  onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}><img src={byndr_Logo} /></NavLink>
                            </div>
                            <div className="copyright">
                                &copy; 2019 Byndr, Inc. <NavLink exact to="/privacy-policy"  onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}>Privacy Policy</NavLink>
                                <NavLink exact to="/terms-of-use" onClick={() => {
                                                            document.body.scrollTop = 0;
                                                            document.documentElement.scrollTop = 0;
                                                        }}>Terms of Use</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Navigation OpenMenuBar={this.props.OpenMenuBar} />
            </React.Fragment>
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
)(Footer);




