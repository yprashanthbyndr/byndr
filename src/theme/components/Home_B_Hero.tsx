import React from 'react';
import { NavLink } from 'react-router-dom';
import { slider_1,open_book,teamwork,medical_history,earth_globe,blackboard,light_bulb,byndr_android,byndr_ios,byndr_responsive_platform,vvit_img,stanley_img,vardhaman_img,gprec_img,author_Img } from "../../assets";

interface props {
    onLeftMenu?(): void;
}

export default class Home_B_Hero extends React.Component<props, any> {
    render(): any {
        return (
            <section>
                <div className="home_v2_banner">
            <div className="home_v2_banner_inr">
            <div className="home_v2_banner_main">
            <div className="home_v2_banner_video">
            <div className="home_v2_banner_play">
            <div className="home_v2_banner_play_icon">
            <a href="https://vimeo.com/83897470"><i className="material-icons">
            play_arrow
            </i></a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
        );
    }
}