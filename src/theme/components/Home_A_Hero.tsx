import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';

import { CSSTransition, Transition } from 'react-transition-group';
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
    this.state = {
      changeDetector: false,
      activeSlide: "teachers",
      sliders: {
        adminstrator: {
          imageUrl: slider_1,
          content: "Monitoring Made Easy, Organized & Efficient",
          howitworks: {
            link: '/',
            text: "How it works For Admins"
          },
          gettingStarted: {
            link: '/',
            text: "Getting Started For Free"
          },
        },
        teachers: {
          imageUrl: slider_1,
          content: "Teaching Made Engaging, Productive & Valuable",
          howitworks: {
            link: '/',
            text: "How it works For Teacher"
          },
          gettingStarted: {
            link: '/',
            text: "Getting Started For Free"
          },
        },
        students: {
          imageUrl: slider_1,
          content: "Learning Made Interactive, Simple & Effective",
          howitworks: {
            link: '/',
            text: "How it works For Students"
          },
          gettingStarted: {
            link: '/',
            text: "Getting Started For Free"
          },
        }
      }
    };
    this.selectedSlide = this.selectedSlide.bind(this)
  }

  selectedSlide(selectedSlide) {
    this.setState({ changeDetector: true })
    setTimeout(
      () => this.setState({ activeSlide: selectedSlide, changeDetector: this.state.changeDetector == true ? false : true }),
      500
    );
  }

  componentDidMount(): any {
    // console.log("in Home_A_Hero component: ", this.context.authenticated, this.context.onclick_);
  }


  render(): any {

    const { changeDetector, activeSlide, sliders } = this.state

    const { teachers, adminstrator, students } = sliders

    let activeSlideDetails = activeSlide == "adminstrator" ? adminstrator : activeSlide == "teachers" ? teachers : students

    return (
      // <AppContext.Provider value={{
      //   authenticated: false,
      // }}>
      <section>
        <div className="homeBanner">
          <div className="homeBanner_inr">
            <div className="homeBanner_slider flexslider">

              <ul className="home_slides">
                <li className={changeDetector == true ? "m-fadeOut" : "m-fadeIn"}>
                  <div className="homeBanner_single">
                    <div className="homeBanner_left">
                      <h1>
                        {activeSlideDetails.content}
                      </h1>
                      <div className="calltoActions">
                        <div className="cta_full_color">
                          <NavLink exact to={activeSlideDetails.gettingStarted.link}>{activeSlideDetails.gettingStarted.text}</NavLink>
                        </div>
                        <div className="cta_outline_color">
                          <NavLink exact to={activeSlideDetails.howitworks.link}><i className="material-icons">
                            play_arrow
                                 </i>{activeSlideDetails.howitworks.text}</NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="homeBanner_right">
                      <img src={activeSlideDetails.imageUrl} />
                    </div>
                  </div>
                </li>

              </ul>

              <div className="homeBanner_slider_navigation">
                <div className="homeBanner_slider_nav_inr flexslider">
                  <ul className="slides">
                    <li className={activeSlide == "teachers" ? " flex-active-slide" : ""} onClick={() => this.selectedSlide("teachers")}>
                      <span className="homeBanner_slider_nav_icon">
                        <i className="fa fa-user" aria-hidden="true" />
                      </span>
                      <span className="homeBanner_slider_nav_text">
                        Teacher
              </span>
                    </li>
                    <li className={activeSlide == "students" ? " flex-active-slide" : ""}
                      onClick={() =>
                        this.selectedSlide("students")
                      }>
                      <span className="homeBanner_slider_nav_icon">
                        <i className="fa fa-users" aria-hidden="true" />
                      </span>
                      <span className="homeBanner_slider_nav_text">
                        Student
              </span>
                    </li>
                    <li className={activeSlide == "adminstrator" ? " flex-active-slide" : ""}
                      onClick={() => this.selectedSlide("adminstrator")}>
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
        </div>

      </section>

      // </AppContext.Provider>
    );
  }
}

Home_A_Hero.contextType = Home_A_Context

