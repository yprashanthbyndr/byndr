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
                        <div className="widget_title"> VISION </div>
                        <div className="vision_mission_content">Connecting every student with best resources available for progressive learning</div>
                    </div>
                    <div className="mission_block">
                        <div className="widget_title"> MISSION </div>
                        <div className="vision_mission_content">To make all the efforts &amp; provide a platform to the students to connect with the resources in the form of teachers, materials, peer groups and social learning.</div>
                    </div>
                </div>
            </div>
        </section>
            );
    }
}