import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dummy_Img } from '../../assets';

interface props {
    onLeftMenu?(): void;
}

export default class WhoIsBynderFor extends React.Component<props, any> {

    render(): any {
        return (
            <section>
                <div className="who_is_byndr">
                  <div className="who_is_byndr_main">
                    <div className="widget_title"> WHO IS BYNDR IS FOR? </div>

                     <div className="who_is_byndr_blocks">
                         <div className="who_is_byndr_left_block image"><img src={Dummy_Img} width="375"/></div>
                         <div className="who_is_byndr_right_block">
                             <div className="widget_block_title">For Teachers - <span>Free</span></div>
                             <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seax</div>
                             <div className="group_buttons">
                                    <div className="widget_button"> <NavLink exact to="/">Learn More</NavLink></div>
                                    <div className="widget_button"><NavLink exact to="/">Get Started</NavLink></div>
                             </div>
                             <div className="widget_button">
                               
                             </div>
                         </div>
                     </div>
                    <div className="who_is_byndr_blocks column-reverse">
                            <div className="who_is_byndr_left_block">
                                    <div className="widget_block_title">For Students - <span>Free</span></div>
                                    <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seax</div>
                                    <div className="group_buttons">
                                        <div className="widget_button"> <NavLink exact to="/">Learn More</NavLink></div>
                                        <div className="widget_button"><NavLink exact to="/">Get Started</NavLink></div>
                                    </div>
                            </div>
                            <div className="who_is_byndr_right_block image">
                                    <img src={Dummy_Img} width="375"/>
                            </div>
                        </div>
                     <div className="who_is_byndr_blocks">
                            <div className="who_is_byndr_left_block image"><img src={Dummy_Img} width="375"/></div>
                            <div className="who_is_byndr_right_block">
                                <div className="widget_block_title">For College</div>
                                <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seax</div>
                                <div className="group_buttons">
                                    <div className="widget_button"> <NavLink exact to="/">Learn More</NavLink></div>
                                    <div className="widget_button"><NavLink exact to="/">Get Started</NavLink></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            );
    }
}