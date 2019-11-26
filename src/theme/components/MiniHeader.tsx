import React from 'react';
// import '../styles/Header.style.css'
import byndr_Logo from '../../assets/images/byndr-Logo.png';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';

interface props {
    onLeftMenu?(): void;
}

export default class MiniHeader extends React.Component<props, any> {

    componentDidMount(): any {
        console.log("in header component: ", this.context);
    }
    render(): any {
        return (
            <div className="role_based_header">
                <div className="role_based_header_main">
                    <div className="role_title"><span>Byndr</span> for Teachers</div>
                    <div className="role_menu">
                    <ul className="menu">
                        <li className="current-page">Overview</li>
                        <li>Features</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                    </div>
                    <div className="try_byndr_btn"><a href="#">Try Byndr</a></div>
                </div>
            </div>
        );
    }
}

MiniHeader.contextType = AppContext;
