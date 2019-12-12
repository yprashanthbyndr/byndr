import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class CTAForCollege extends React.Component<props, any> {
    render(): any {
        return (
                <section>
                    <div className="CallToAction">
                      <div className="callToAction_main">
                        <div className="callToAction_inr">
                          <div className="CallToAction_title">
                          Is your college using Byndr?
                          </div>
                          <div className="CallToAction_content">
                          Contact us for personalized demo on Byndr for your institution.
                          </div>
                          <div className="CallToAction_btn">
                            <div className="CallToAction_btn_inr">
                              <NavLink exact to="/">
                              Request A Demo
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