import React from 'react';
import { NavLink } from 'react-router-dom';
import { Open_Or_Close_MenuBar } from '../../services';

interface props {
    onLeftMenu?(): void
    OpenMenuBar : boolean
}

export default class Navigation extends React.Component<props, any> {

    render(): any {
        return (
            <React.Fragment>
                <div className={this.props.OpenMenuBar ? "nagivationBackdrop menu_open":""}></div>
                <div className={this.props.OpenMenuBar ? "main_menu menu_open":"main_menu"}>
                <div className="main_menu_inr">
                    <div className="menu_cancel">
                        <span style={{float: 'right',cursor:'pointer'}}  onClick={() => Open_Or_Close_MenuBar()}>
                        <i className="material-icons">
                            close
        </i>
                        </span>
                    </div>
                    <div className="menu_block">
                        <ul>
                            <li className="menuItem activeMenu">
                                <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li className="menuItem">
                                <NavLink exact to="/aboutus">About Us</NavLink>
                            </li>
                            <li className="menuItem">
                                <NavLink exact to="/product">Product</NavLink>
                            </li>
                            <li className="menuItem">
                                <NavLink exact
                                    to="/"
                                    onClick={() => {
                                        window.open(
                                            "https://byndr.breezy.hr/", "_blank");
                                    }}
                                >Careers</NavLink>
                            </li>
                            <li className="menuItem">
                                <NavLink exact to="/">News</NavLink>
                            </li>
                            <li className="menuItem">
                                <NavLink exact to="/contact-us">Contact Us</NavLink>
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