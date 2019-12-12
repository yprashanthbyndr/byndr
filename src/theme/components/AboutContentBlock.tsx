import React from 'react';
import { NavLink } from 'react-router-dom';
import { Inverstors_1,
    Inverstors_2,
    Inverstors_3,
    Inverstors_4,
    Inverstors_5,
    Inverstors_6,
    ben_franklin,
    penn_img, 
    penn_selvania,
    IntraEdge_Logo} from '../../assets';
interface props {
    onLeftMenu?(): void;
}

export default class AboutContentBlock extends React.Component<props, any> {

    render(): any {
        return (
                <section>
                    <div className="aboutContent_block">
                        <div className="aboutContent_main">
                            <div className="widget_title"> ABOUT </div>
                            <div className="aboutContent_contentData">
                                Byndr - intends to bind; be the missing link in the chain of providing a seamless education in out-of-the-classroom learning. It intends to strengthen the teacher-student bonding; provide accessibility to course curriculum through virtual learning classrooms. It is easy to access by the students and convenient to assess and evaluate by the teachers.
                            </div>
                        </div>
                    </div>
                </section>
                );
    }
}