import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';
import { slider_1, open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb, byndr_android, byndr_ios, byndr_responsive_platform, vvit_img, stanley_img, vardhaman_img, gprec_img, author_Img } from "../../assets";


import { connect } from 'react-redux';
import { TestimonialSelection } from '../../services';


interface props {
  onLeftMenu?(): void;
  activeTestimonial: string
}


class HomeTestimonial extends React.Component<props, any> {
  render(): any {
    return (
      <AppContext.Provider value={{
        authenticated: false,
      }}>
        {/* testimonials block start */}
        <section>
          <div className="homeTestimonials">
            <div className="homeTestimonialsInr">
              <div className="homeTestimonialsDropShadow">
                <i className="fa fa-quote-left" aria-hidden="true" />
              </div>
              <section>
                <div className="homeTestimonialsLogos">
                  <div className="homeTestimonialsLogos_inr flexslider" id="carousel">
                    <ul className="slides">
                      <li className={this.props.activeTestimonial == 'vvit' ? "activeTestimonials" : ""}
                        onClick={() => {
                          if (this.props.activeTestimonial !== 'vvit') {
                            TestimonialSelection("vvit")
                          }
                        }}
                      >
                        <img src={vvit_img} />
                      </li>
                      <li className={this.props.activeTestimonial == 'stanley' ? "activeTestimonials" : ""}
                        onClick={() => {
                          if (this.props.activeTestimonial !== 'stanley') {
                            TestimonialSelection("stanley")
                          }
                        }}
                      >
                        <img src={stanley_img} />
                      </li>
                      {/* <li className={this.props.activeTestimonial == 'vardhaman' ? "activeTestimonials" : ""}
                        onClick={() => {
                          if (this.props.activeTestimonial !== 'vardhaman') {
                            TestimonialSelection("vardhaman")
                          }
                        }}
                      >
                        <img src={vardhaman_img} />
                      </li> */}
                      <li className={this.props.activeTestimonial == 'sist' ? "activeTestimonials" : ""}
                        onClick={() => {
                          if (this.props.activeTestimonial !== 'sist') {
                            TestimonialSelection("sist")
                          }
                        }}
                      >
                        <img src={gprec_img} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="homeTestimonialCurrent flexslider" id="slider">
                  <div className="homeTestimonialCurrentInr">
                    <ul className="slides">
                      <li className={this.props.activeTestimonial == 'vvit'?"testimonial-fadeIn":"testimonial-fadeOut"}>
                        <div className="homeTestimonialCurrent_Content">
                        My compliments to team Byndr for designing a simple and sweet LMS. It is versatile, simple and inclusive. All students and faculty have been very positive about Byndr and its role as a learning catalyst.
                                  </div>
                        <div className="homeTestimonialCurrent_author">
                          <div className="homeTestimonialCurrent_author_img">
                            <img src={author_Img} />
                          </div>
                          <div className="homeTestimonialCurrent_author_name">
                            Dr. Sabyasachi Rath 
                                    </div>
                          <div className="homeTestimonialCurrent_author_designation">
                            Dean, Vishwa Vishwani Institute of Systems and Management
                                    </div>
                        </div>
                      </li>
                      <li className={this.props.activeTestimonial == 'sist'?"testimonial-fadeIn":"testimonial-fadeOut"}>
                        <div className="homeTestimonialCurrent_Content">
                        Our college has got a number of learning resources, and those resources are now made available to students through Byndr. We are very thankful to Byndr - An innovative learning management system can be developed and can be used in all parts of the world.
                                  </div>
                        <div className="homeTestimonialCurrent_author">
                          <div className="homeTestimonialCurrent_author_img">
                            <img src={author_Img} />
                          </div>
                          <div className="homeTestimonialCurrent_author_name">
                            Dr. P. Narasimha Reddy
                                    </div>
                          <div className="homeTestimonialCurrent_author_designation">
                            Executive Director, Sreenidhi Institute of Science and Technology
                                    </div>
                        </div>
                      </li>
                      <li className={this.props.activeTestimonial == 'stanley'?"testimonial-fadeIn":"testimonial-fadeOut"}>
                        <div className="homeTestimonialCurrent_Content">
                        I would recommend Byndr LMS, it’s simple and easy to use platform within weeks after implementation we could see the usage above 70% and we also noticed improvement in student attendance and Teacher-Student interaction.
                                  </div>
                        <div className="homeTestimonialCurrent_author">
                          <div className="homeTestimonialCurrent_author_img">
                            <img src={author_Img} />
                          </div>
                          <div className="homeTestimonialCurrent_author_name">
                          Dr. Satya Lanka Prasad
                                    </div>
                          <div className="homeTestimonialCurrent_author_designation">
                          Principal Stanley College of Engineering and Technology for Women
                                    </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* testimonials end */}
      </AppContext.Provider>
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
)(HomeTestimonial);

