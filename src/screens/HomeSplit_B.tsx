import React, { Component } from 'react'
import { AppContext } from '../contextApi/AppContext';
import { slider_1,open_book,teamwork,medical_history,earth_globe,blackboard,light_bulb,byndr_android,byndr_ios,byndr_responsive_platform,vvit_img,stanley_img,vardhaman_img,gprec_img,author_Img } from "../assets";

interface props {

}

class HomeSplit_B extends Component<props, any>{
    render(): any {
        return (
            <AppContext.Provider value={{
                authenticated: false,
            }}>
                <div className="bodySection fixed_header">
                  {/* home banner section */}
                  <section>
                    <div className="home_v2_banner">
                      <div className="home_v2_banner_inr">
                        <div className="home_v2_banner_main">
                          <div className="home_v2_banner_video">
                            <div className="home_v2_banner_play">
                              <div className="home_v2_banner_play_icon">
                                <a href="https://vimeo.com/83897470" data-lightbox><i className="material-icons">
                                    play_arrow
                                  </i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* home banner section ends */}
                  <section>
                    <div className="home_v2_blocks">
                      <div className="home_v2_blocks_inr">
                        <div className="home_v2_blocks_main">
                          <div className="home_v2_list_block">
                            <ul>
                              <li>
                                <div className="home_v2_list_single">
                                  <div className="home_v2_list_single_inr">
                                    <div className="home_v2_list_single_icon">
                                      <i className="fa fa-user" aria-hidden="true" />
                                    </div>
                                    <div className="home_v2_list_single_title">
                                      For Teachers - <span>Free</span>
                                    </div>
                                    <div className="home_v2_list_single_content">
                                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                                    </div>
                                    <div className="home_v2_list_single_cta">
                                      <a href="#">
                                        Create Class
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="home_v2_list_single">
                                  <div className="home_v2_list_single_inr">
                                    <div className="home_v2_list_single_icon">
                                      <i className="fa fa-users" aria-hidden="true" />
                                    </div>
                                    <div className="home_v2_list_single_title">
                                      For Teachers - <span>Free</span>
                                    </div>
                                    <div className="home_v2_list_single_content">
                                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                                    </div>
                                    <div className="home_v2_list_single_cta">
                                      <a href="#">
                                        Create Class
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="home_v2_list_single">
                                  <div className="home_v2_list_single_inr">
                                    <div className="home_v2_list_single_icon">
                                      <i className="fa fa-building-o" aria-hidden="true" />
                                    </div>
                                    <div className="home_v2_list_single_title">
                                      For Teachers - <span>Free</span>
                                    </div>
                                    <div className="home_v2_list_single_content">
                                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                                    </div>
                                    <div className="home_v2_list_single_cta">
                                      <a href="#">
                                        Create Class
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* end of grid home v2 */}
                  <section>
                    <div className="home_v2_features">
                      <div className="home_v2_features_inr">
                        <div className="home_v2_features_title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</div>
                        <div className="home_v2_features_body">
                          <ul>
                            <li>
                              <div className="home_v2_feature">
                                <div className="home_v2_feature_single">
                                  <div className="home_v2_feature_single_icon">
                                    <img src={open_book} className="HoverImage" />
                                  </div>
                                  <div className="home_v2_feature_single_right">
                                    <div className="home_v2_feature_single_title">
                                      Lorem ipsum dolor sit amet
                                    </div>
                                    <div className="home_v2_feature_single_content">
                                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>
                                    <div className="home_v2_feature_single_link">
                                      <a href="#">Learn More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="home_v2_feature">
                                <div className="home_v2_feature_single">
                                  <div className="home_v2_feature_single_icon">
                                    <img src={open_book} className="HoverImage" />
                                  </div>
                                  <div className="home_v2_feature_single_right">
                                    <div className="home_v2_feature_single_title">
                                      Lorem ipsum dolor sit amet
                                    </div>
                                    <div className="home_v2_feature_single_content">
                                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>
                                    <div className="home_v2_feature_single_link">
                                      <a href="#">Learn More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="home_v2_feature">
                                <div className="home_v2_feature_single">
                                  <div className="home_v2_feature_single_icon">
                                    <img src={open_book} className="HoverImage" />
                                  </div>
                                  <div className="home_v2_feature_single_right">
                                    <div className="home_v2_feature_single_title">
                                      Lorem ipsum dolor sit amet
                                    </div>
                                    <div className="home_v2_feature_single_content">
                                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>
                                    <div className="home_v2_feature_single_link">
                                      <a href="#">Learn More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="home_v2_feature">
                                <div className="home_v2_feature_single">
                                  <div className="home_v2_feature_single_icon">
                                    <img src={open_book} className="HoverImage" />
                                  </div>
                                  <div className="home_v2_feature_single_right">
                                    <div className="home_v2_feature_single_title">
                                      Lorem ipsum dolor sit amet
                                    </div>
                                    <div className="home_v2_feature_single_content">
                                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </div>
                                    <div className="home_v2_feature_single_link">
                                      <a href="#">Learn More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* home availble divices start */}
                  <section>
                    <div className="homeAvailableDivices">
                      <div className="homeAvailableDivices_inr">
                        <div className="homeAvailableDivices_left">
                          <h3>
                            Lorem Ipsum is simply dummy text of the printing
                          </h3>
                          <div className="homeAvailableDivicesText">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                          </div>
                          <div className="homeAvailableDivicesIcons">
                            <ul>
                              <li>
                                <a href="#">
                                  <img src={byndr_android} />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src={byndr_ios} />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="homeAvailableDivices_right">
                          <img src={byndr_responsive_platform} />
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* home availble divices end */}
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
                                <li>
                                  <img src={vvit_img} />
                                </li>
                                <li>
                                  <img src={stanley_img} />
                                </li>
                                <li>
                                  <img src={vardhaman_img} />
                                </li>
                                <li>
                                  <img src={gprec_img} />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="homeTestimonialCurrent flexslider" id="slider">
                            <div className="homeTestimonialCurrentInr">
                              <ul className="slides">
                                <li>
                                  <div className="homeTestimonialCurrent_Content">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
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
                  {/* cta start */}
                  <section>
                    <div className="CallToAction">
                      <div className="callToAction_main">
                        <div className="callToAction_inr">
                          <div className="CallToAction_title">
                            Lorem ipsum dolor sit amet, consetetur
                          </div>
                          <div className="CallToAction_content">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                          </div>
                          <div className="CallToAction_btn">
                            <div className="CallToAction_btn_inr">
                              <a href="./"> 
                                Get Started For Free
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* cta end */}
                </div>
            
            </AppContext.Provider>
        );
    }
}

export default HomeSplit_B;