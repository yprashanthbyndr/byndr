import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';

interface props {
    onLeftMenu?(): void;
}

export default class FooterCTA extends React.Component<props, any> {
    render(): any {
        return (
        <AppContext.Provider value={{
                authenticated: false,
            }}>
                {/* cta start */}
                <section>
                    <div className="CallToAction">
                      <div className="callToAction_main">
                        <div className="callToAction_inr">
                          <div className="CallToAction_title">
                            Lorem ipsum dolor sit amet, consetetur
                          </div>
                          <div className="CallToAction_content">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                          </div>
                          <div className="CallToAction_btn">
                            <div className="CallToAction_btn_inr">
                              <NavLink exact to="/">
                                Get Started For Free
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* cta end */}
            </AppContext.Provider>
        );
    }
}