import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';

interface props {
    onLeftMenu?(): void;
}

export default class WelcomeBannerGrids extends React.Component<props, any> {
    render(): any {
        return (
        <AppContext.Provider value={{
                // authenticated: false,
            }}>
            <section>
                    <div className="home_v2_blocks">
                      <div className="home_v2_blocks_inr">
                        <div className="home_v2_blocks_main">
                          <div className="home_v2_list_block">
                            <ul>
                              <li>
                                <div className="home_v2_list_single">
                                  <div className="home_v2_list_single_inr">
                                    <div className="home_v2_list_single_icon">
                                      <i className="fa fa-user" aria-hidden="true" />
                                    </div>
                                    <div className="home_v2_list_single_title">
                                      For Teachers - <span>Free</span>
                                    </div>
                                    <div className="home_v2_list_single_content">
                                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                                    </div>
                                    <div className="home_v2_list_single_cta">
                                    <NavLink exact to="/">Create Class</NavLink>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="home_v2_list_single">
                                  <div className="home_v2_list_single_inr">
                                    <div className="home_v2_list_single_icon">
                                      <i className="fa fa-users" aria-hidden="true" />
                                    </div>
                                    <div className="home_v2_list_single_title">
                                      For Teachers - <span>Free</span>
                                    </div>
                                    <div className="home_v2_list_single_content">
                                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                                    </div>
                                    <div className="home_v2_list_single_cta">
                                    <NavLink exact to="/">Create Class</NavLink>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="home_v2_list_single">
                                  <div className="home_v2_list_single_inr">
                                    <div className="home_v2_list_single_icon">
                                      <i className="fa fa-building-o" aria-hidden="true" />
                                    </div>
                                    <div className="home_v2_list_single_title">
                                      For Teachers - <span>Free</span>
                                    </div>
                                    <div className="home_v2_list_single_content">
                                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                                    </div>
                                    <div className="home_v2_list_single_cta">
                                    <NavLink exact to="/">Create Class</NavLink>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
            </AppContext.Provider>
        );
    }
}