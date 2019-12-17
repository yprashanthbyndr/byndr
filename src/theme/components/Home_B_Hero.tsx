import React from 'react';

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