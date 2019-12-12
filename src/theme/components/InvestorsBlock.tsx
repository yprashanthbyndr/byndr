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

export default class OurTeam extends React.Component<props, any> {

    render(): any {
        return (
                <section>
                    <div className="inverstors_block">
                        <div className="inverstors_main">
                            <div className="widget_title"> INVESTORS </div>
                            <div className="slider_logo_block">
                                <div className="slider_logo"><a href="#"><img src={ben_franklin} width="294"/></a></div>
                                <div className="slider_logo"><a href="#"><img src={penn_selvania} width="240" style={{marginTop:10}} /></a></div>
                                <div className="slider_logo"><a href="#"><img src={IntraEdge_Logo} width="240" style={{marginTop:16}} /></a></div>
                            </div>
                        </div>
                    </div>
                </section>
                );
    }
}