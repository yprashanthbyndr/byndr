import React from 'react';
import '../theme/styles/AboutUs.style.css';
import Inverstors_1 from '../assets/images/inverstors/inverstors_1.png';
import Inverstors_2 from '../assets/images/inverstors/inverstors_2.png';

import Inverstors_3 from '../assets/images/inverstors/inverstors_3.png';
import Inverstors_4 from '../assets/images/inverstors/inverstors_3.png';
import Inverstors_5 from '../assets/images/inverstors/inverstors_3.png';
import Inverstors_6 from '../assets/images/inverstors/inverstors_3.png';
import ben_franklin from '../assets/images/ben_franklin.png';

import penn_img from '../assets/images/penn.png';



interface props {
    onLeftMenu?(): void;
}

export default class AboutUs extends React.Component<props, any> {

    render(): any {

        return (
            <div className="bodySection">

                <section>
                    <div className="homeBanner_backgroundimage">
                        <div className="homeBanner_main">
                            <div className="homeBanner_contentblock">
                                <div className="banner_title">
                                    We are an education company
                                </div>
                                <div className="banner_content">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="vision_and_mission">
                        <div className="vision_and_mission_main">
                            <div className="vision_block">
                                <div className="widget_title">- VISION -</div>
                                <div className="vision_mission_content">Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
                            </div>
                            <div className="mission_block">
                                <div className="widget_title">- MISSION -</div>
                                <div className="vision_mission_content">Lorem ipsum dolor sit amet, consdtur ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="ourJourney">
                        <div className="ourJourney_main">
                            <div className="widget_title">- OUR JOURNEY -</div>
                            <div className="footprint_up">
                                <div className="footprint_up_main">

                                    <div className="single_year">
                                        <div className="yearOfJourney_content">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            </div>
                                        <div className="year">2015</div>
                                    </div>

                                    <div className="single_year">
                                        <div className="yearOfJourney_content">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            </div>
                                        <div className="year">2017</div>
                                    </div>

                                    <div className="single_year">
                                        <div className="yearOfJourney_content">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            </div>
                                        <div className="year">2019</div>
                                    </div>

                                </div>
                            </div>

                            <div className="footprint_down">
                                <div className="footprint_down_main">

                                    <div className="single_year">
                                        <div className="yearOfJourney_content">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            </div>
                                        <div className="year">2016</div>
                                    </div>

                                    <div className="single_year">
                                        <div className="yearOfJourney_content">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            </div>
                                        <div className="year">2018</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="our_passionate_team">
                        <div className="our_passionate_team_main">
                            <div className="widget_title">- OUR PASSIONATE TEAM -</div>
                            <div id="tags-cloud">
                                <div className="tag" style={{ background: Inverstors_1, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_2, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_3, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_4, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_5, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_6, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_1, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_2, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_3, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_4, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_5, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_6, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_1, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_2, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tag" style={{ background: Inverstors_3, backgroundPosition: "center" }}>
                                    <div className="passionate_name">Jenni Sebastian</div>
                                    <div className="hover_details">
                                        <div className="passionate_name">Jenni Sebastian</div>
                                        <div className="passionate_do">Co-founder</div>
                                        <div className="passionate_content">
                                            <a className="linkedin" href="http://fr.linkedin.com/in/sebastienayxandri" title="" target="_blank">
                                                Sébastien Ayxandri on linkedin                                    </a>
                                            <a className="twitter" href="https://twitter.com/gdzami" title="Follow Sébastien Ayxandri ontwitter" target="_blank">
                                                Sébastien Ayxandri on twitter                           </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section>
                    <div className="inverstors_block">
                        <div className="inverstors_main">
                            <div className="widget_title">- INVESTORS -</div>
                            <div className="slider_logo_block">
                                <div className="slider_logo"><a href="#"><img src={ben_franklin} width="294" style={{ marginTop: "-17px" }} /></a></div>
                                <div className="slider_logo"><a href="#"><img src={penn_img} width="207" /></a></div>
                                <div className="slider_logo"><a href="#"><img src={penn_img} width="207" /></a></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="CallToAction">
                        <div className="callToAction_main">
                            <div className="callToAction_inr">
                                <div className="CallToAction_title">
                                    Lorem ipsum dolor sit amet, consetetur
                                </div>
                                <div className="CallToAction_content">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </div>
                                <div className="CallToAction_btn">
                                    <div className="CallToAction_btn_inr">
                                        <a href="./">
                                            Get Started For Free
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


            //     </div>

            // </section>
            // </div>
        )
    }
}





