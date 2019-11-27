import React from 'react';
import { byndr_Logo, FB_img, TW_img, Li_img, Android_Byndr_img, Ios_Byndr_img } from "../../assets";
import { NavLink } from 'react-router-dom';

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
                                                    <NavLink exact to="/product-roles">Overview</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/product-roles">For Teachers</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/product-roles">For Students</NavLink>                                                    
                                                </li>
                                                <li>
                                                    <NavLink exact to="/product-roles">For Institutes</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/pricing">Pricing</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/">Request a Demo</NavLink>
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
                                                    onClick={()=> {
                                                        window.open( 
                                                            "https://byndr.breezy.hr/", "_blank"); 
                                                    }}
                                                    >Careers</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/">News</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/contact-us">Contact Us</NavLink>
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
                                                    <NavLink exact to="/">Datasheets</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/">FAQs</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/">Knowledge Base</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/">Videos</NavLink>
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
                                                    <NavLink exact to="/"><img src={FB_img} alt="Bynder Facebook" /></NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/"><img src={TW_img} alt="Bynder Twitter" /></NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/"><img src={Li_img} alt="Bynder LinkedIn" /></NavLink>
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
                                                    <NavLink exact to="/"><img src={Android_Byndr_img} alt="Bynder Android" /></NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact to="/"><img src={Ios_Byndr_img} alt="Bynder IOS" /></NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_mini_footer">
                            <div className="footer_logo">
                                <NavLink exact to="/"><img src={byndr_Logo} /></NavLink>
                            </div>
                            <div className="copyright">
                                &copy; 2019 Byndr, Inc. <NavLink exact to="/">Privacy Policy</NavLink>
                                <NavLink exact to="/">Terms of Use</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}





