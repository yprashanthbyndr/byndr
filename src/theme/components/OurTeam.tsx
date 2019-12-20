import React from 'react';
import { NavLink } from 'react-router-dom';
import { Our_team, PraveenVangeepuram, SatishNampally, MarcGarabedian, KalSomani, LarryFraize, ChintanGattu, Jagadeesh, JoeFreed } from '../../assets';
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
                                        <img src={SatishNampally}/>
                                        <ul className="social">
                                            <li><a href="https://www.linkedin.com/in/satishnampally/" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Satish Nampally</h3>
                                        <span className="post">Co-founder</span>
                                    </div>
                                </div>

                                <div className="our-team">
                                    <div className="pic">
                                        <img src={ChintanGattu}/>
                                        <ul className="social">
                                            <li><a href="https://www.linkedin.com/in/chintan-gattu-819376115/" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Chintan Gattu </h3>
                                        <span className="post">Product Manager</span>
                                    </div>
                                </div>

                                
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={Jagadeesh}/>
                                        <ul className="social">
                                            <li><a href="https://www.linkedin.com/in/jagadeeshc/" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Jagadeesh Chintaginjala  </h3>
                                        <span className="post">Director - Product Growth</span>
                                    </div>
                                </div>


                                <div className="our-team">
                                    <div className="pic">
                                        <img src={KalSomani}/>
                                        <ul className="social">
                                            <li><a href="https://linkedin.com/in/kalsomani/" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Kal Somani</h3>
                                        <span className="post">Advisor</span>
                                    </div>
                                </div>

                                <div className="our-team">
                                    <div className="pic">
                                        <img src={LarryFraize}/>
                                        <ul className="social">
                                            <li><a href="https://linkedin.com/in/larryfraize/" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Larry Fraize</h3>
                                        <span className="post">Advisor</span>
                                    </div>
                                </div>

                                <div className="our-team">
                                    <div className="pic">
                                        <img src={JoeFreed}/>
                                        <ul className="social">
                                            <li><a href="https://www.linkedin.com/in/joefreed/" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Joseph Freed  </h3>
                                        <span className="post">Co-founder, Advisor</span>
                                    </div>
                                </div>

                                <div className="our-team">
                                    <div className="pic">
                                        <img src={PraveenVangeepuram}/>
                                        <ul className="social">
                                            <li><a href="https://www.linkedin.com/in/praveen-vangeepuram-1aaa363/" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Praveen Vangeepuram  </h3>
                                        <span className="post">Co-founder, Advisor </span>
                                    </div>
                                </div>


                                <div className="our-team">
                                    <div className="pic">
                                        <img src={MarcGarabedian}/>
                                        <ul className="social">
                                            <li><a href="https://www.linkedin.com/in/marcgarabedian/" target="_blank" className="fab fa-linkedin"></a></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Marc Garabedian</h3>
                                        <span className="post">Co-founder, Advisor</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>

            </section>
                );
    }
}