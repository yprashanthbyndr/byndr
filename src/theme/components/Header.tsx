import React from 'react';
// import '../styles/Header.style.css'
import byndr_Logo from '../../assets/images/byndr-Logo.png'; 
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class Header extends React.Component<props, any> {
    render(): any {
        return (
            <header>
                <div className="header_main" id="navbar">
                    <div className="header_main_inr">
                        <div className="logo">
                            <NavLink exact to="/"><img src={byndr_Logo} /></NavLink>
                        </div>
                        <div className="header_nav">
                            <div className="header_nav_inr">
                                <div className="signIn">
                                    <NavLink exact to="/">Sign In</NavLink>
                                </div>
                                <div className="signUpFree">
                                    <NavLink exact to="/">SignUp - Free</NavLink>
                                </div>
                                <div className="navMenu">
                                    <div className="menuIcon">
                                            <i className="material-icons">
                                                    menu
                                                    </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}