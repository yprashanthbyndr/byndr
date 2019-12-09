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
                            <div className="widget_title"> OUR JOURNEY </div>
                            <div className="footprint_up desktop">
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

                            <div className="footprint_down desktop">
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

                            <div className="footprint_mobile mobile">
                                    <ul>
                                        <li className="year_details">
                                            <div className="year">2015</div>
                                            <div className="yearOfJourney_content">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                </div>
                                        </li>
                                        <li className="year_details">
                                           <div className="year">2016</div>
                                            <div className="yearOfJourney_content">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                </div>
                                        </li>
                                        <li className="year_details">
                                            <div className="year">2017</div>
                                            <div className="yearOfJourney_content">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                </div>
                                        </li>
                                        <li className="year_details">
                                            <div className="year">2018</div>
                                            <div className="yearOfJourney_content">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                </div>
                                        </li>
                                        <li className="year_details">
                                            <div className="year">2019</div>
                                            <div className="yearOfJourney_content">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                </div>
                                        </li>
                                    </ul>
                                </div>

                        </div>
                    </div>
                </section>
            );
    }
}