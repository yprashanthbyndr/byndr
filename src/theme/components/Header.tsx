import React from 'react';
// import '../styles/Header.style.css'
import byndr_Logo from '../../assets/images/byndr-Logo.png'; 

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
                            <img src={byndr_Logo} />
                        </div>
                        <div className="header_nav">
                            <div className="header_nav_inr">
                                <div className="signIn">
                                    <a href="./">
                                        Sign In
                                    </a>
                                </div>
                                <div className="signUpFree">
                                    <a href="./">
                                        SignUp - Free
                                    </a>
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