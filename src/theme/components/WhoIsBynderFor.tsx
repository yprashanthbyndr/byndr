import React from 'react';
import { NavLink } from 'react-router-dom';
import {  bannerForTeachers, bannerForStudents, bannerForAdmin } from '../../assets';

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
                         <div className="who_is_byndr_left_block image"><img src={bannerForTeachers} width="375"/></div>
                         <div className="who_is_byndr_right_block">
                             <div className="widget_block_title">For Teachers - <span>Free</span></div>
                             <div className="content">Byndr gives teachers a platform to extend their help to students beyond classroom. Teachers can provide study materials, guidance to create inspiring learning environment. Our LMS tool helps teachers to schedule assignments, evaluate the performance and guide students individually for better outcomes.</div>
                             <div className="group_buttons">
                                    <div className="widget_button"><NavLink exact to="/">Get Started Free </NavLink></div>
                                    <div className="widget_button"> <NavLink exact to="/">Learn More</NavLink></div>
                             </div>
                             <div className="widget_button">
                               
                             </div>
                         </div>
                     </div>
                    <div className="who_is_byndr_blocks column-reverse">
                            <div className="who_is_byndr_left_block">
                                    <div className="widget_block_title">For Students - <span>Free</span></div>
                                    <div className="content">Byndr helps students increase their learning potential. It enables students to access study materials shared by teachers, clarify their doubts and complete assignments from anywhere and anytime. Students can create study group, invite their friends where they can share their notes and share ideas with their peer-groups.</div>
                                    <div className="group_buttons">
                                        <div className="widget_button"><NavLink exact to="/">Get Started Free </NavLink></div>
                                        <div className="widget_button"> <NavLink exact to="/">Learn More</NavLink></div>
                                    </div>
                            </div>
                            <div className="who_is_byndr_right_block image">
                                    <img src={bannerForStudents} width="375"/>
                            </div>
                        </div>
                     <div className="who_is_byndr_blocks">
                            <div className="who_is_byndr_left_block image"><img src={bannerForAdmin} width="375"/></div>
                            <div className="who_is_byndr_right_block">
                                <div className="widget_block_title">For College</div>
                                <div className="content">Byndr helps the college administration overcome the challenges of keeping track of students details, performances and punctuality, through its social learning platform. It also provides a support system to the teacher through better coordination, communication and systematic functioning.</div>
                                <div className="group_buttons">
                                        <div className="widget_button"><NavLink exact to="/request-a-demo">Request A Demo </NavLink></div>
                                        <div className="widget_button"> <NavLink exact to="/">Learn More</NavLink></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            );
    }
}