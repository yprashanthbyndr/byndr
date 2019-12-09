import React from 'react';
import { NavLink } from 'react-router-dom';
import { Our_team } from '../../assets';
import { Inverstors_1,
    Inverstors_2,
    Inverstors_3,
    Inverstors_4,
    Inverstors_5,
    Inverstors_6,
    ben_franklin } from '../../assets';
interface props {
    onLeftMenu?(): void;
}

export default class OurTeam extends React.Component<props, any> {

    render(): any {
        return (
            <section>
                <div className="our_passionate_team">
                    <div className="our_passionate_team_main">
                        <div className="widget_title"> OUR PASSIONATE TEAM </div>
                            <div className="teams_members">

                                <div className="our-team">
                                    <div className="pic">
                                        <img src={Our_team}/>
                                        <ul className="social">
                                            <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li>
                                            <li><NavLink exact to="/" className="fab fa-linkedin"></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Williamson</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>

                                <div className="our-team">
                                    <div className="pic">
                                        <img src={Our_team}/>
                                        <ul className="social">
                                            <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li>
                                            <li><NavLink exact to="/" className="fab fa-linkedin"></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Williamson</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>


                                <div className="our-team">
                                    <div className="pic">
                                        <img src={Our_team}/>
                                        <ul className="social">
                                            <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li>
                                            <li><NavLink exact to="/" className="fab fa-linkedin"></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Williamson</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>


                                <div className="our-team">
                                    <div className="pic">
                                        <img src={Our_team}/>
                                        <ul className="social">
                                            <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li>
                                            <li><NavLink exact to="/" className="fab fa-linkedin"></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Williamson</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>



                                <div className="our-team">
                                    <div className="pic">
                                        <img src={Our_team}/>
                                        <ul className="social">
                                            <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li>
                                            <li><NavLink exact to="/" className="fab fa-linkedin"></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Williamson</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>



                                <div className="our-team">
                                    <div className="pic">
                                        <img src={Our_team}/>
                                        <ul className="social">
                                            <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li>
                                            <li><NavLink exact to="/" className="fab fa-linkedin"></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Williamson</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>



                                <div className="our-team">
                                    <div className="pic">
                                        <img src={Our_team}/>
                                        <ul className="social">
                                            <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li>
                                            <li><NavLink exact to="/" className="fab fa-linkedin"></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Williamson</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>


                                <div className="our-team">
                                    <div className="pic">
                                        <img src={Our_team}/>
                                        <ul className="social">
                                            <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li>
                                            <li><NavLink exact to="/" className="fab fa-linkedin"></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Williamson</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>

            </section>
                );
    }
}