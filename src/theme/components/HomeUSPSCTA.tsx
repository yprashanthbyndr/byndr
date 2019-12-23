import React from 'react';
import { ben_franklin,
    penn_selvania,
    IntraEdge_Logo} from '../../assets';
interface props {
    onLeftMenu?(): void;
}

export default class HomeUSPSCTA extends React.Component<props, any> {

    render(): any {
        return (
                <section>
                    <div className="home_usps_block">
                        <div className="home_usps_main">
                            <div className="widget_title" style={{paddingBottom:7}}> Features </div>
                            <div className="home_usps_block_inr">
                                <div className="home_usps_block_content">Creating an opportunity for students to connect with educational resources on Byndr social learning platform.</div>
                            </div>
                            <div className="home_usps_btns">
                                <a href="./request-demo">
                                    Get started today
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                );
    }
}