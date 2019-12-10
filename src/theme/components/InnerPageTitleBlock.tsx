import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void,
    fromPage:any,
    pageSubtitle:any,
    videoDisplay:any,
    tryBtnDisplay:any,
}

export default class InnerPageTitleBlock extends React.Component<props, any> {
  constructor(props) {
    super(props);
}
    render(): any {

      const {fromPage,pageSubtitle,videoDisplay,tryBtnDisplay} = this.props

        return (
            <section>
            <div className="homeBanner_backgroundimage">
              <div className="homeBanner_main">
                <div className="homeBanner_contentblock">
                  <div className="banner_title">
                    {fromPage}
                  </div>
                  {pageSubtitle !=""?<div className="banner_content">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </div>:null}
                  {videoDisplay == "true"?<div className="video">
                    <div className="home_v2_banner_play">
                      <div className="home_v2_banner_play_icon">
                        <a href="https://vimeo.com/83897470" data-lightbox><i className="material-icons">
                            play_arrow
                          </i></a>
                      </div>
                    </div>
                  </div>:null}
                  {tryBtnDisplay == "true"?<div className="CallToAction_btn">
                    <div className="CallToAction_btn_inr">
                      <a href="./"> 
                        Try Byndr
                      </a>
                    </div>
                  </div>:null}
                </div>
              </div>
            </div>
          </section>          
            );
    }
}