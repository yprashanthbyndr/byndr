import React from 'react';
import { NavLink } from 'react-router-dom';
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
                        <div className="widget_title">- OUR PASSIONATE TEAM -</div>
                            
                        </div>
                </div>

            </section>
                );
    }
}