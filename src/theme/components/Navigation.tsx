import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class Navigation extends React.Component<props, any> {

    render(): any {
        return (
        <div className="main_menu">
            <div className="main_menu_inr">
        <div className="menu_cancel">
        <i className="material-icons">
        close
        </i>
        </div>
        <div className="menu_block">
            <ul>
                <li className="menuItem activeMenu">
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li className="menuItem">
                <NavLink exact to="/">Home</NavLink>    
                </li>
                <li className="menuItem">
                <NavLink exact to="/">Home</NavLink>
                </li>
                <li className="submenu">
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
                </li>
            </ul>
        </div>
        </div>
        </div>
        );
    }
}