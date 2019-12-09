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
                    Built to bridge the gaps between teachers and students
                  </div>
                  <div className="banner_content">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </div>
                  <div className="video">
                    <div className="home_v2_banner_play">
                      <div className="home_v2_banner_play_icon">
                        <a href="https://vimeo.com/83897470" data-lightbox><i className="material-icons">
                            play_arrow
                          </i></a>
                      </div>
                    </div>
                  </div>
                  <div className="CallToAction_btn">
                    <div className="CallToAction_btn_inr">
                      <a href="./"> 
                        Try Byndr
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>          
            );
    }
}