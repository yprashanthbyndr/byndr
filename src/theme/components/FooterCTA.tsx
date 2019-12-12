import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
  onLeftMenu?(): void;
}

export default class FooterCTA extends React.Component<props, any> {
  render(): any {
    return (


      <section>
        <div className="CallToAction">
          <div className="callToAction_main">
            <div className="callToAction_inr">
              <div className="CallToAction_title">
                Get started with Byndr?
                          </div>
              <div className="CallToAction_content">
                Create your (teachers & students) account and start experiencing the Byndr today.
                          </div>
              <div className="CallToAction_btn">
                <div className="CallToAction_btn_inr">
                  <NavLink exact to="/">
                    Get Started Free
                              </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}