import React from 'react';
// import '../styles/Footer.style.css'
import '../../App.css'
import byndr_Logo from '../../assets/images/byndr-Logo.png';
import FB_img from '../../assets/images/fb.png';
import TW_img from '../../assets/images/tw.png';
import Li_img from '../../assets/images//li.png';
import Android_Byndr_img from '../../assets/images/byndr-android.png';
import Ios_Byndr_img from '../../assets/images/byndr-ios.png';

interface props {
    onLeftMenu?(): void;
}

export default class Footer extends React.Component<props, any> {

    render(): any {
        return (
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
                                                    <a href="./">Overview</a>
                                                </li>
                                                <li>
                                                    <a href="./">For Teachers</a>
                                                </li>
                                                <li>
                                                    <a href="./">For Students</a>
                                                </li>
                                                <li>
                                                    <a href="./">For Institutes</a>
                                                </li>
                                                <li>
                                                    <a href="./">Pricing</a>
                                                </li>
                                                <li>
                                                    <a href="./">Request a Demo</a>
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
                                                    <a href="./"> About</a>
                                                </li>
                                                <li>
                                                    <a href="./">Careers</a>
                                                </li>
                                                <li>
                                                    <a href="./">News</a>
                                                </li>
                                                <li>
                                                    <a href="./">Contact Us</a>
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
                                                <li>
                                                    <a href="./"> Datasheets</a>
                                                </li>
                                                <li>
                                                    <a href="./">FAQs</a>
                                                </li>
                                                <li>
                                                    <a href="./">Knowledge Base</a>
                                                </li>
                                                <li>
                                                    <a href="./"> Videos</a>
                                                </li>
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
                                                    <img src={FB_img} />
                                                </li>
                                                <li>
                                                    <img src={TW_img} />
                                                </li>
                                                <li>
                                                    <img src={Li_img} />
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
                                                    <a href="#">
                                                        <img src={Android_Byndr_img }/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={Ios_Byndr_img} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_mini_footer">
                            <div className="footer_logo">
                                <img src={byndr_Logo} />
                            </div>
                            <div className="copyright">
                                &copy; 2019 Byndr, Inc. <a href="./">Privacy Policy</a> <a href="./">Terms of Use</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}





