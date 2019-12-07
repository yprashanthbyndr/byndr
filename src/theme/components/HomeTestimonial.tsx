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
                      <li className={this.props.activeTestimonial == 'vardhaman' ? "activeTestimonials" : ""}
                        onClick={() => {
                          if (this.props.activeTestimonial !== 'vardhaman') {
                            TestimonialSelection("vardhaman")
                          }
                        }}
                      >
                        <img src={vardhaman_img} />
                      </li>
                      <li className={this.props.activeTestimonial == 'gprec' ? "activeTestimonials" : ""}
                        onClick={() => {
                          if (this.props.activeTestimonial !== 'gprec') {
                            TestimonialSelection("gprec")
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
                        vvit,Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                  </div>
                        <div className="homeTestimonialCurrent_author">
                          <div className="homeTestimonialCurrent_author_img">
                            <img src={author_Img} />
                          </div>
                          <div className="homeTestimonialCurrent_author_name">
                            Mohan Rao Chitta
                                    </div>
                          <div className="homeTestimonialCurrent_author_designation">
                            Physics Head of Department
                                    </div>
                        </div>
                      </li>
                      <li className={this.props.activeTestimonial == 'gprec'?"testimonial-fadeIn":"testimonial-fadeOut"}>
                        <div className="homeTestimonialCurrent_Content">
                        gprec,Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                  </div>
                        <div className="homeTestimonialCurrent_author">
                          <div className="homeTestimonialCurrent_author_img">
                            <img src={author_Img} />
                          </div>
                          <div className="homeTestimonialCurrent_author_name">
                            Mohan Rao Chitta
                                    </div>
                          <div className="homeTestimonialCurrent_author_designation">
                            Physics Head of Department
                                    </div>
                        </div>
                      </li>
                      <li className={this.props.activeTestimonial == 'vardhaman'?"testimonial-fadeIn":"testimonial-fadeOut"}>
                        <div className="homeTestimonialCurrent_Content">
                        vardhaman,Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                  </div>
                        <div className="homeTestimonialCurrent_author">
                          <div className="homeTestimonialCurrent_author_img">
                            <img src={author_Img} />
                          </div>
                          <div className="homeTestimonialCurrent_author_name">
                            Mohan Rao Chitta
                                    </div>
                          <div className="homeTestimonialCurrent_author_designation">
                            Physics Head of Department
                                    </div>
                        </div>
                      </li>
                      <li className={this.props.activeTestimonial == 'stanley'?"testimonial-fadeIn":"testimonial-fadeOut"}>
                        <div className="homeTestimonialCurrent_Content">
                        stanley,Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                  </div>
                        <div className="homeTestimonialCurrent_author">
                          <div className="homeTestimonialCurrent_author_img">
                            <img src={author_Img} />
                          </div>
                          <div className="homeTestimonialCurrent_author_name">
                            Mohan Rao Chitta
                                    </div>
                          <div className="homeTestimonialCurrent_author_designation">
                            Physics Head of Department
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

