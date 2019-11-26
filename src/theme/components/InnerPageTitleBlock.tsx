import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class InnerPageTitleBlock extends React.Component<props, any> {

    render(): any {
        return (
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
            );
    }
}