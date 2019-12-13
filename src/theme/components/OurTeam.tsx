import React from 'react';
import { NavLink } from 'react-router-dom';
import { Our_team, JoeFreed, PraveenVangeepuram, SatishNampally, MarcGarabedian, PrashanthiVangeepuram } from '../../assets';
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
                                        <img src={JoeFreed}/>
                                        <ul className="social">
                                            {/* <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li> */}
                                            <li><a href="https://www.linkedin.com/in/joefreed" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Joseph Freed</h3>
                                        <span className="post">Board Member</span>
                                    </div>
                                </div>

                                <div className="our-team">
                                    <div className="pic">
                                        <img src={PraveenVangeepuram}/>
                                        <ul className="social">
                                            {/* <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li> */}
                                            <li><a href="https://www.linkedin.com/in/praveen-vangeepuram-1aaa363" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Praveen Vangeepuram</h3>
                                        <span className="post">Co-Founder</span>
                                    </div>
                                </div>


                                <div className="our-team">
                                    <div className="pic">
                                        <img src={SatishNampally}/>
                                        <ul className="social">
                                            {/* <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li> */}
                                            <li><a href="https://www.linkedin.com/in/satishnampally" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Satish Nampally</h3>
                                        <span className="post">Co-Founder</span>
                                    </div>
                                </div>


                                <div className="our-team">
                                    <div className="pic">
                                        <img src={MarcGarabedian}/>
                                        <ul className="social">
                                            {/* <li><NavLink exact to="/" className="fab fa-twitter"></NavLink></li> */}
                                            <li><a href="https://www.linkedin.com/in/marcgarabedian" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Marc Garabedian</h3>
                                        <span className="post">Board Member</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>

            </section>
                );
    }
}