import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';
import { slider_1, open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb, byndr_android, byndr_ios, byndr_responsive_platform, vvit_img, stanley_img, vardhaman_img, gprec_img, author_Img } from "../../assets";

interface props {
  onLeftMenu?(): void;
}

export default class Home_A_Hero extends React.Component<props, any> {



  componentDidMount(): any {
    console.log("in Home_A_Hero component: ", this.context.authenticated , this.context.onclick_);
}

  render(): any {
    return (
      // <AppContext.Provider value={{
      //   authenticated: false,
      // }}>
      <section>
        <div className="homeBanner">
          <div className="homeBanner_inr">
            <div className="homeBanner_slider flexslider">
              <ul className="slides">
                <li>
                  <div className="homeBanner_single">
                    <div className="homeBanner_left">
                      <h1>
                        Lorem Ipsum is simply dummy text of the printing
                </h1>
                      <div className="calltoActions">
                        <div className="cta_full_color">
                          <NavLink exact to="/">Get Started For Free</NavLink>
                        </div>
                        <div className="cta_outline_color">
                          <NavLink exact to="/"><i className="material-icons">
                            play_arrow
                      </i>  How it works</NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="homeBanner_right">
                      <img src={slider_1} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="homeBanner_slider_navigation">
              <div className="homeBanner_slider_nav_inr flexslider">
                <ul className="slides">
                  <li className="flex-active-slide" onClick = {()=> this.context.click_Tab("teacher")}>
                    <span className="homeBanner_slider_nav_icon">
                      <i className="fa fa-user" aria-hidden="true" />
                    </span>
                    <span className="homeBanner_slider_nav_text">
                      Teacher
              </span>
                  </li>
                  <li onClick = {()=> this.context.click_Tab("student")}>
                    <span className="homeBanner_slider_nav_icon">
                      <i className="fa fa-users" aria-hidden="true" />
                    </span>
                    <span className="homeBanner_slider_nav_text">
                      Student
              </span>
                  </li>
                  <li onClick = {()=> this.context.click_Tab("Adminstrator")}>
                    <span className="homeBanner_slider_nav_icon">
                      <i className="fa fa-user" aria-hidden="true" />
                    </span>
                    <span className="homeBanner_slider_nav_text">
                      Adminstrator
              </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      // </AppContext.Provider>
    );
  }
}


Home_A_Hero.contextType= AppContext