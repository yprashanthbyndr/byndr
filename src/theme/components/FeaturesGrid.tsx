import React from 'react';
import { NavLink } from 'react-router-dom';
import { open_book } from "../../assets";

interface props {
  onLeftMenu?(): void;
}

export default class FooterCTA extends React.Component<props, any> {
  render(): any {
    return (

      <section>
        <div className="home_v2_features">
          <div className="home_v2_features_inr">
            <div className="home_v2_features_title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</div>
            <div className="home_v2_features_body">
              <ul>
                <li>
                  <div className="home_v2_feature">
                    <div className="home_v2_feature_single">
                      <div className="home_v2_feature_single_icon">
                        <img src={open_book} className="HoverImage" />
                      </div>
                      <div className="home_v2_feature_single_right">
                        <div className="home_v2_feature_single_title">
                          Lorem ipsum dolor sit amet
                                    </div>
                        <div className="home_v2_feature_single_content">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>
                        <div className="home_v2_feature_single_link">
                          <NavLink exact to="/">Learn More</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="home_v2_feature">
                    <div className="home_v2_feature_single">
                      <div className="home_v2_feature_single_icon">
                        <img src={open_book} className="HoverImage" />
                      </div>
                      <div className="home_v2_feature_single_right">
                        <div className="home_v2_feature_single_title">
                          Lorem ipsum dolor sit amet
                                    </div>
                        <div className="home_v2_feature_single_content">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>
                        <div className="home_v2_feature_single_link">
                          <NavLink exact to="/">Learn More</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="home_v2_feature">
                    <div className="home_v2_feature_single">
                      <div className="home_v2_feature_single_icon">
                        <img src={open_book} className="HoverImage" />
                      </div>
                      <div className="home_v2_feature_single_right">
                        <div className="home_v2_feature_single_title">
                          Lorem ipsum dolor sit amet
                                    </div>
                        <div className="home_v2_feature_single_content">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>
                        <div className="home_v2_feature_single_link">
                          <NavLink exact to="/">Learn More</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="home_v2_feature">
                    <div className="home_v2_feature_single">
                      <div className="home_v2_feature_single_icon">
                        <img src={open_book} className="HoverImage" />
                      </div>
                      <div className="home_v2_feature_single_right">
                        <div className="home_v2_feature_single_title">
                          Lorem ipsum dolor sit amet
                                    </div>
                        <div className="home_v2_feature_single_content">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>
                        <div className="home_v2_feature_single_link">
                          <NavLink exact to="/">Learn More</NavLink>
                        </div>
                      </div>
                    </div>
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