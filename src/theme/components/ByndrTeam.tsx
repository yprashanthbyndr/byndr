import React from 'react';
import {ByndrTeamImg  } from "../../assets";
interface props {
    onLeftMenu?(): void;
}

export default class ByndrTeam extends React.Component<props, any> {

    render(): any {
        return (
                <section>
                    <div className="ByndrTeamContent_block">
                        <div className="ByndrTeamContent_main">
                            <div className="widget_title"> Our team </div>
                            <div className="ByndrTeamContent_contentData">
                                <img src={ByndrTeamImg} />
                            </div>
                        </div>
                    </div>
                </section>
                );
    }
}