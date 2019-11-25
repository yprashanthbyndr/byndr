import React from 'react';
import '../styles/Home.style.css';
import slider_1 from '../../assets/images/slider-1.png';
import open_book from '../../assets/images/open-book.png';
import teamwork from '../../assets/images/teamwork.png';
import medical_history from '../../assets/images/medical-history.png';
import earth_globe from '../../assets/images/earth-globe.png';
import blackboard from '../../assets/images/blackboard.png';
import light_bulb from '../../assets/images/light-bulb.png';
import byndr_android from '../../assets/images/byndr-android.png';
import byndr_ios from '../../assets/images/byndr-ios.png';
import byndr_responsive_platform from '../../assets/images/byndr-responsive-platform.png';
import vvit_img from '../../assets/images/testimonials/vvit.png';
import stanley_img from '../../assets/images/testimonials/stanley.png';
import vardhaman_img from '../../assets/images/testimonials/vardhaman.png';
import gprec_img from '../../assets/images/testimonials/gprec.png';

import author_Img from '../../assets/images/testimonials/testimonial-author.png';
import { AppContext } from '../../contextApi/AppContext';




interface props {
    onLeftMenu?(): void;
}

export default class Home1 extends React.Component<props, any> {

    render(): any {

        // let { authenticated} = this.props;
        return (
        // <AppContext.Consumer value={true}>
                
                  <div className="bodySection">

                    <section>
                        <div className="homeBanner">
                            <div className="homeBanner_inr">
                                <div className="homeBanner_slider flexslider" id="slider1">
                                    <ul className="slides">
                                        <li>
                                            <div className="homeBanner_single">
                                                <div className="homeBanner_left">
                                                    <h1>
                                                        Lorem Ipsum is simply dummy text of the printing
                                            </h1>
                                                    <div className="calltoActions">
                                                        <div className="cta_full_color">
                                                            <a href="./">
                                                                Get Started For Free
                                                    </a>
                                                        </div>
                                                        <div className="cta_outline_color">
                                                            <a href="./">
                                                                <i className="material-icons">
                                                                    play_arrow
                                                                    </i>  How it works
                                                        </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="homeBanner_right">
                                                    <img src={slider_1} />
                                                </div>
                                            </div>
                                        </li>
                                        {/* <li>
                                        <div className="homeBanner_single">
                                            <div className="homeBanner_left">
                                                <h1>
                                                    Lorem Ipsum is simply dummy text of the printing
                                            </h1>
                                                <div className="calltoActions">
                                                    <div className="cta_full_color">
                                                        <a href="./">
                                                            Get Started For Free
                                                    </a>
                                                    </div>
                                                    <div className="cta_outline_color">
                                                        <a href="./">
                                                            <i className="material-icons">
                                                                play_arrow
                                                                    </i>  How it works
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="homeBanner_right">
                                                <img src={slider_1} />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="homeBanner_single">
                                            <div className="homeBanner_left">
                                                <h1>
                                                    Lorem Ipsum is simply dummy text of the printing
                                            </h1>
                                                <div className="calltoActions">
                                                    <div className="cta_full_color">
                                                        <a href="./">
                                                            Get Started For Free
                                                    </a>
                                                    </div>
                                                    <div className="cta_outline_color">
                                                        <a href="./">
                                                            <i className="material-icons">
                                                                play_arrow
                                                                    </i>  How it works
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="homeBanner_right">
                                                <img src={slider_1} />
                                            </div>
                                        </div>
                                    </li>
                                 */}

                                    </ul>
                                </div>
                                <div className="homeBanner_slider_navigation">
                                    <div className="homeBanner_slider_nav_inr flexslider" id="carousel1" >
                                        <ul className="slides">
                                            <li>
                                                <span className="homeBanner_slider_nav_icon">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                </span>
                                                <span className="homeBanner_slider_nav_text">
                                                    Teacher
                                        </span>
                                            </li>
                                            <li>
                                                <span className="homeBanner_slider_nav_icon">
                                                    <i className="fa fa-users" aria-hidden="true"></i>
                                                </span>
                                                <span className="homeBanner_slider_nav_text">
                                                    Student
                                            </span>
                                            </li>

                                            <li>
                                                <span className="homeBanner_slider_nav_icon">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
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

                    <section>
                        <div className="homeGrid">
                            <div className="homeGrid_inr">
                                <div className="homeGridList">
                                    <div className="homeSingleGrid">
                                        <div className="homeSingleGridinr">
                                            <div className="homeSingleGridIcon">
                                                <img src={open_book} />
                                            </div>
                                            <div className="homeSingleGridContent">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    </div>
                                        </div>
                                    </div>
                                    <div className="homeSingleGrid">
                                        <div className="homeSingleGridinr">
                                            <div className="homeSingleGridIcon">
                                                <img src={teamwork} />
                                            </div>
                                            <div className="homeSingleGridContent">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    </div>
                                        </div>
                                    </div>
                                    <div className="homeSingleGrid">
                                        <div className="homeSingleGridinr">
                                            <div className="homeSingleGridIcon">
                                                <img src={medical_history} />
                                            </div>
                                            <div className="homeSingleGridContent">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    </div>
                                        </div>
                                    </div>
                                    <div className="homeSingleGrid">
                                        <div className="homeSingleGridinr">
                                            <div className="homeSingleGridIcon">
                                                <img src={earth_globe} />
                                            </div>
                                            <div className="homeSingleGridContent">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    </div>
                                        </div>
                                    </div>
                                    <div className="homeSingleGrid">
                                        <div className="homeSingleGridinr">
                                            <div className="homeSingleGridIcon">
                                                <img src={blackboard} />
                                            </div>
                                            <div className="homeSingleGridContent">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    </div>
                                        </div>
                                    </div>
                                    <div className="homeSingleGrid">
                                        <div className="homeSingleGridinr">
                                            <div className="homeSingleGridIcon">
                                                <img src={light_bulb} />
                                            </div>
                                            <div className="homeSingleGridContent">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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

                    <section>
                        <div className="homeTestimonials">
                            <div className="homeTestimonialsInr">
                                <div className="homeTestimonialsDropShadow">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
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
                                                {/* <li>
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
                                      
                                       */}

                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>

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
                </div>

            // </AppContext.Consumer>
        )
    }
}





