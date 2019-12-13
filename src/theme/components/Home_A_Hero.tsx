import React from 'react';
import { NavLink } from 'react-router-dom';

import { CSSTransition, Transition } from 'react-transition-group';
import { slider_1, open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb, byndr_android, byndr_ios, byndr_responsive_platform, vvit_img, stanley_img, vardhaman_img, gprec_img, author_Img, slider_2, slider_3, student_icon, admin_icon, teacher_icon, Double_Arrows_pink, bannerForAdmin, bannerForTeachers, bannerForStudents } from "../../assets";
// import { Home_A_Context } from '../../contextApi/HomeSplit_A.context';
import { SlideActionInHome } from '../../services';

import { connect } from 'react-redux';


interface props {
  onLeftMenu?(): void;
  State?: any;
  click_Tab?: any;
  HomeScreenprops: any
}

class Home_A_Hero extends React.Component<props, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      changeDetector: false,
      activeSlide: "teachers",
      sliders: {
        adminstrator: {
          imageUrl: bannerForAdmin,
          content: "Monitoring Made Easy, Organized & Efficient",
          howitworks: {
            link: '/',
            text: "Request A Demo"
          },
          gettingStarted: {
            link: '/',
            text: "Getting Started For Free"
          },
        },
        teachers: {
          imageUrl: bannerForTeachers,
          content: "Teaching Made Engaging, Productive & Valuable",
          howitworks: {
            link: '/',
            text: "Learn More"
          },
          gettingStarted: {
            link: '/',
            text: "Getting Started For Free"
          },
        },
        students: {
          imageUrl: bannerForStudents,
          content: "Learning Made Interactive, Simple & Effective",
          howitworks: {
            link: '/',
            text: "Learn More"
          },
          gettingStarted: {
            link: '/',
            text: "Getting Started For Free"
          },
        }
      }
    };
    this.selectedSlide = this.selectedSlide.bind(this)
    this.SliderInterval = this.SliderInterval.bind(this);
  }

  selectedSlide(selectedSlide) {
    // this.setState({ changeDetector: true })
    // setTimeout(
    //   () => this.setState({
    //     activeSlide: selectedSlide,
    //     changeDetector: this.state.changeDetector == true ? false : true
    //   }),
    //   500
    // );

    SlideActionInHome(selectedSlide);
  }


  componentDidMount(): any {

    var intervalId = setInterval(this.SliderInterval, 6000);

    this.setState({ intervalId_Home: intervalId })

  }


  SliderInterval() {

    let Active = this.props.HomeScreenprops.activeSlide;
    let selectedSlide = Active == "teachers" ? "students" :
      Active == "students" ? "adminstrator" : "teachers"

    SlideActionInHome(selectedSlide);
  }
  componentWillUnmount(): any {
    clearInterval(this.state.intervalId_Home);
  }

  render(): any {

    const { sliders } = this.state;

    const { changeDetector, activeSlide } = this.props.HomeScreenprops

    const { teachers, adminstrator, students } = sliders

    let activeSlideDetails = activeSlide == "adminstrator" ? adminstrator : activeSlide == "teachers" ? teachers : students

    return (
      <div>
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
                            <NavLink exact to={activeSlideDetails.howitworks.link}><img src={Double_Arrows_pink} width="14" style={{ marginRight: 10 }} />{activeSlideDetails.howitworks.text}</NavLink>
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
                          <img src={teacher_icon} />
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
                          <img src={student_icon} />
                        </span>
                        <span className="homeBanner_slider_nav_text">
                          Student
              </span>
                      </li>
                      <li className={activeSlide == "adminstrator" ? " flex-active-slide" : ""}
                        onClick={() => this.selectedSlide("adminstrator")}>
                        <span className="homeBanner_slider_nav_icon">
                          <img src={admin_icon} />
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

      </div>
    );
  }
}

const map = (state: any) => {
  return {
    ...state.MainReducer
  };
};

export default connect(
  map,
  null,
)(Home_A_Hero);

