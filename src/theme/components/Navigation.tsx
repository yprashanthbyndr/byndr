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
                                <i className="material-icons">
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
    <NavLink exact to="/lms-for-teachers">For Teachers</NavLink>
    </li>
    <li className="subMenuItem">
    <NavLink exact to="/lms-for-students">For Students</NavLink>
    </li>
    <li className="subMenuItem">
    <NavLink exact to="/lms-for-admins">For Colleges</NavLink>
    </li>
    </ul>
</div>

                                </li>
                                <li className="menuItem">
                                    <a target="_blank" href="https://byndr.breezy.hr/">Careers <sup style={{fontSize: 12,
color:"yellow"}}>We're hiring</sup></a>
                                </li>
                                <li className="menuItem">
                                    <NavLink exact to="/blog"
                                    activeClassName="activeMenu"
                                        onClick={() =>   {
                                            this.ScroolToTp();
                                            Open_Or_Close_MenuBar()
                                        }}>Blog</NavLink>
                                </li>
                                <li className="menuItem">
                                    <NavLink exact to="/contact-us"
                                    activeClassName="activeMenu"
                                        onClick={() =>   {
                                            this.ScroolToTp();
                                            Open_Or_Close_MenuBar()
                                        }}>Contact Us</NavLink>
                                </li>
                                {/* <li className="submenu">
                    <div className="menuItem">
                    <NavLink exact to="/">Home</NavLink>
                    </div>
                    <div className="submenu">
                        <ul>
                            <li className="subMenuItem">
                            <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li className="subMenuItem">
                            <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li className="subMenuItem">
                            <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li className="subMenuItem">
                            <NavLink exact to="/">Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}