import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class VisionAndMission extends React.Component<props, any> {

    render(): any {
        return (
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
            );
    }
}