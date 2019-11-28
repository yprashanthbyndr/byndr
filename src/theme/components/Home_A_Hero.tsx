import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';

import { Container, Button, Alert } from 'react-bootstrap';
import '../../App.css';

import { CSSTransition } from 'react-transition-group';
import { slider_1, open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb, byndr_android, byndr_ios, byndr_responsive_platform, vvit_img, stanley_img, vardhaman_img, gprec_img, author_Img, slider_2, slider_3 } from "../../assets";
import { Home_A_Context } from '../../contextApi/HomeSplit_A.context';

interface props {
  onLeftMenu?(): void;
  State?: any;
  click_Tab?: any
}

export default class Home_A_Hero extends React.Component<props, any> {

  constructor(props: any) {
    super(props);

  }

  componentDidMount(): any {
    console.log("in Home_A_Hero component: ", this.context.authenticated, this.context.onclick_);
  }


  render(): any {
    console.log("in Home_A_Hero render: ", this.context);
    return (
      // <AppContext.Provider value={{
      //   authenticated: false,
      // }}>
      <section>
        <div className="homeBanner">
          <div className="homeBanner_inr">
            <div className="homeBanner_slider flexslider">

              {/* <ul className="slides"> */}
              <div style={{ flexDirection: 'row', display: 'flex' }}>

                <CSSTransition
                  in={this.context.state.selectedTab == "teacher"}
                  timeout={1000}
                  transition
                  classNames="imgslider"
                  unmountOnExit
                // onEnter={() => console.log("on enter click")}
                // onExited={() => console.log("on exit click")}
                >

                  <div >
                    <div className="homeBanner_single">
                      <div className="homeBanner_left">
                        <h1>
                          this is teacher view
</h1>
                        <div className="calltoActions">
                          <div className="cta_full_color">
                            <NavLink exact to="/">Get Started For Free</NavLink>
                          </div>
                          <div className="cta_outline_color">
                            <NavLink exact to="/"><i className="material-icons">
                              play_arrow
      </i>  How it works for teacher</NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="homeBanner_right">
                        <img src={slider_1} />
                      </div>
                    </div>
                    {/* </li> */}
                  </div>

                </CSSTransition>

                <CSSTransition
                  in={this.context.state.selectedTab == "student"}
                  timeout={1000}
                  classNames="imgslider"
                  unmountOnExit

                >

                  <div >
                    <div className="homeBanner_single">
                      <div className="homeBanner_left">
                        <h1>
                          this is student view
</h1>
                        <div className="calltoActions">
                          <div className="cta_full_color">
                            <NavLink exact to="/">Get Started For Free</NavLink>
                          </div>
                          <div className="cta_outline_color">
                            <NavLink exact to="/"><i className="material-icons">
                              play_arrow
      </i>  How it works for student</NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="homeBanner_right">
                        <img src={open_book} />
                      </div>
                    </div>
                  </div>

                </CSSTransition>

                <CSSTransition
                  in={this.context.state.selectedTab == "Adminstrator"}
                  timeout={1000}
                  classNames="imgslider"
                  unmountOnExit
                >

                  <div >
                    <div className="homeBanner_single">
                      <div className="homeBanner_left">
                        <h1>
                          this is Administrater view
</h1>
                        <div className="calltoActions">
                          <div className="cta_full_color">
                            <NavLink exact to="/">Get Started For Free</NavLink>
                          </div>
                          <div className="cta_outline_color">
                            <NavLink exact to="/"><i className="material-icons">
                              play_arrow
      </i>  How it works for Admin</NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="homeBanner_right">
                        <img src={slider_1} />
                      </div>
                    </div>
                  </div>

                </CSSTransition>
                {/* </ul> */}

              </div>
            </div>
            <div className="homeBanner_slider_navigation">
              <div className="homeBanner_slider_nav_inr flexslider">
                <ul className="slides">
                  <li className={this.context.state.selectedTab == "teacher" ? " flex-active-slide" : ""} onClick={() => this.context.click_Tab("selectedTab", "teacher")}>
                    <span className="homeBanner_slider_nav_icon">
                      <i className="fa fa-user" aria-hidden="true" />
                    </span>
                    <span className="homeBanner_slider_nav_text">
                      Teacher
              </span>
                  </li>
                  <li className={this.context.state.selectedTab == "student" ? " flex-active-slide" : ""}
                    onClick={() =>
                      this.context.click_Tab("selectedTab", "student")
                    }>
                    <span className="homeBanner_slider_nav_icon">
                      <i className="fa fa-users" aria-hidden="true" />
                    </span>
                    <span className="homeBanner_slider_nav_text">
                      Student
              </span>
                  </li>
                  <li className={this.context.state.selectedTab == "Adminstrator" ? " flex-active-slide" : ""}
                    onClick={() => this.context.click_Tab("selectedTab", "Adminstrator")}>
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

Home_A_Hero.contextType = Home_A_Context

