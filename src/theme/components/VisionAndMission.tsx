import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class VisionAndMission extends React.Component<props, any> {

    render(): any {
        return (
            <section>
                    <div className="aboutContent_block">
                        <div className="aboutContent_main">
                            <div className="widget_title"> VISION & MISSION </div>
                            <div className="aboutContent_contentData">
                                Connecting every student with best educational resources available for continuous learning by providing easy-to-use, fast, secure, mobile-first technology tools to benefit all stakeholders
                            </div>
                        </div>
                    </div>
            </section>
            );
    }
}