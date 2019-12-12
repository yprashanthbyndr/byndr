import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
  onLeftMenu?(): void;
}

export default class FooterDoubleCTA extends React.Component<props, any> {
  render(): any {
    return (

      <section>
        <div className="DoublecallToAction">
          <div className="DoublecallToAction_main">
            <div className="DoublecallToAction_inr">
              <div className="DoublecallToActionLeft">
                <div className="DoublecallToActionInrRow">
                  <div className="DoublecallToAction_title">
                    Get started with Byndr?
                              </div>
                  <div className="DoublecallToAction_content">
                    Create your (teachers & students) account and start experiencing the Byndr today.
                              </div>
                  <div className="DoublecallToAction_btn">
                    <div className="DoublecallToAction_btn_inr">
                      <NavLink exact to="/">
                        Get Started Free
                                  </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="DoublecallToActionRight">
                <div className="DoublecallToActionInrRow">
                  <div className="DoublecallToAction_title">
                    Is your college using Byndr?
                              </div>
                  <div className="DoublecallToAction_content">
                    Contact us for personalized demo on Byndr for your institution.
                              </div>
                  <div className="DoublecallToAction_btn">
                    <div className="DoublecallToAction_btn_inr">
                      <NavLink exact to="/">
                        Request A Demo
                                  </NavLink>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}