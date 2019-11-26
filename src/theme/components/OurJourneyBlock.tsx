import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class OurJourneyBlock extends React.Component<props, any> {

    render(): any {
        return (
            <section>
                    <div className="ourJourney">
                        <div className="ourJourney_main">
                            <div className="widget_title">- OUR JOURNEY -</div>
                            <div className="footprint_up">
                                <div className="footprint_up_main">

                                    <div className="single_year">
                                        <div className="yearOfJourney_content">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            </div>
                                        <div className="year">2015</div>
                                    </div>

                                    <div className="single_year">
                                        <div className="yearOfJourney_content">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            </div>
                                        <div className="year">2017</div>
                                    </div>

                                    <div className="single_year">
                                        <div className="yearOfJourney_content">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            </div>
                                        <div className="year">2019</div>
                                    </div>

                                </div>
                            </div>

                            <div className="footprint_down">
                                <div className="footprint_down_main">

                                    <div className="single_year">
                                        <div className="yearOfJourney_content">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            </div>
                                        <div className="year">2016</div>
                                    </div>

                                    <div className="single_year">
                                        <div className="yearOfJourney_content">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            </div>
                                        <div className="year">2018</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
    }
}