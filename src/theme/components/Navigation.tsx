import React from 'react';
import { NavLink } from 'react-router-dom';
import { Open_Or_Close_MenuBar } from '../../services';

interface props {
    onLeftMenu?(): void
    OpenMenuBar: boolean
}

export default class Navigation extends React.Component<props, any> {

    ScroolToTp(): any {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render(): any {
        return (
            <React.Fragment>
                <div className={this.props.OpenMenuBar ? "nagivationBackdrop menu_open" : ""} onClick={() => Open_Or_Close_MenuBar()}></div>
                <div className={this.props.OpenMenuBar ? "main_menu menu_open" : "main_menu"}>
                    <div className="main_menu_inr">
                        <div className="menu_cancel">
                            <span style={{ float: 'right', cursor: 'pointer',color:"#fff" }} onClick={() => Open_Or_Close_MenuBar()}>
                                <i className="material-icons" style={{fontSize:"35px"}}>
                                    close
        </i>
                            </span>
                        </div>
                        <div className="menu_block">
                            <ul>
                                <li className="menuItem">
                                    <NavLink exact to="/" activeClassName="activeMenu" onClick={() => {
                                        this.ScroolToTp();
                                        Open_Or_Close_MenuBar()
                                    }}>Home</NavLink>
                                </li>
                                <li className="menuItem">
                                    <NavLink exact to="/aboutus" activeClassName="activeMenu"
                                        onClick={() =>{
                                                this.ScroolToTp();
                                                Open_Or_Close_MenuBar()
                                            }}>About Us</NavLink>
                                </li>
                                <li className="menuItem">
                                    <NavLink exact to="/product" activeClassName="activeMenu"
                                        onClick={() =>   {
                                            this.ScroolToTp();
                                            Open_Or_Close_MenuBar()
                                        }}>Product</NavLink>
<div className="submenu">
    <ul>
    <li className="subMenuItem">
    <NavLink exact activeClassName="activeMenu" to="/lms-for-teachers" onClick={() =>   {
                                            this.ScroolToTp();
                                            Open_Or_Close_MenuBar()
                                        }}>For Teachers</NavLink>
    </li>
    <li className="subMenuItem">
    <NavLink exact activeClassName="activeMenu" to="/lms-for-students" onClick={() =>   {
                                            this.ScroolToTp();
                                            Open_Or_Close_MenuBar()
                                        }}>For Students</NavLink>
    </li>
    <li className="subMenuItem">
    <NavLink exact activeClassName="activeMenu" to="/lms-for-admins" onClick={() =>   {
                                            this.ScroolToTp();
                                            Open_Or_Close_MenuBar()
                                        }}>For Colleges</NavLink>
    </li>
    </ul>
</div>

                                </li>
                                <li className="menuItem">
                                    <NavLink exact to="/pricing"
                                    activeClassName="activeMenu"
                                        onClick={() =>   {
                                            this.ScroolToTp();
                                            Open_Or_Close_MenuBar()
                                        }}>Pricing</NavLink>
                                </li>
                                <li className="menuItem">
                                    <a target="_blank" href="https://byndr.breezy.hr/">Careers <sup style={{fontSize: 12,
color:"yellow"}}>We're hiring</sup></a>
                                </li>
                                <li className="menuItem">
                                    <NavLink exact to="/contact-us"
                                    activeClassName="activeMenu"
                                        onClick={() =>   {
                                            this.ScroolToTp();
                                            Open_Or_Close_MenuBar()
                                        }}>Contact Us</NavLink>
                                </li>
                                <li className="menuItem">
                                    <NavLink exact to="/blog"
                                    activeClassName="activeMenu"
                                        onClick={() =>   {
                                            this.ScroolToTp();
                                            Open_Or_Close_MenuBar()
                                        }}>Blog</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="menu_cta_btns">
                            <ul>
                                <li><a href="./">Get Started For Free</a></li>
                                <li><a href="./" style={{    background: "transparent",
    border: "1px solid #ffffff",padding:"14px 0"}}>Request A Demo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}