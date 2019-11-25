import React from 'react';
// import '../theme/styles/Product.style.css';

import Dummy_Img from '../assets/images/penn.png';
import testimonial_person from '../assets/images/testimonial_person.png';
import penn_img from '../assets/images/penn.png';

interface props {
    onLeftMenu?(): void;
}

export default class Product extends React.Component<props, any> {

    render(): any {

        return (
            <div className="bodySection">
               
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
                            <div  className="video">
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
            <section>
                <div className="who_is_byndr">
                  <div className="who_is_byndr_main">
                    <div className="widget_title">- WHO IS BYNDR IS FOR? -</div>

                     <div className="who_is_byndr_blocks">
                         <div className="who_is_byndr_left_block"><img src={Dummy_Img} width="375"/></div>
                         <div className="who_is_byndr_right_block">
                             <div className="widget_block_title">For Teachers - <span>Free</span></div>
                             <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seax</div>
                             <div className="widget_button"><a href="#">Learn More</a></div>
                         </div>
                     </div>
                    <div className="who_is_byndr_blocks">
                            <div className="who_is_byndr_left_block">
                                    <div className="widget_block_title">For Students - <span>Free</span></div>
                                    <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seax</div>
                                    <div className="widget_button"><a href="#">Learn More</a></div>
                                    </div>
                            <div className="who_is_byndr_right_block">
                                    <img src={Dummy_Img} width="375"/>
                            </div>
                        </div>
                     <div className="who_is_byndr_blocks">
                            <div className="who_is_byndr_left_block"><img src={Dummy_Img} width="375"/></div>
                            <div className="who_is_byndr_right_block">
                                <div className="widget_block_title">For College</div>
                                <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no seax</div>
                                <div className="widget_button"><a href="#">Learn More</a></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="core_capabilities bg_gray">
                    <div className="core_capabilities_main">
                            <div className="widget_title">- CORE CAPABILITIES -</div>
                        <ul>
                            <li>
                                <div className="li_title">Lorem Ipsum</div>
                                <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                            </li>
                            <li>
                                <div className="li_title">Lorem Ipsum</div>
                                <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                            </li>
                            <li>
                                <div className="li_title">Lorem Ipsum</div>
                                <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                            </li>
                            <li>
                                <div className="li_title">Lorem Ipsum</div>
                                <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                            </li>
                            <li>
                                <div className="li_title">Lorem Ipsum</div>
                                <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                            </li>
                            <li>
                                <div className="li_title">Lorem Ipsum</div>
                                <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
                 <div className="testimonial drak_gray">
                     <div className="testimonial_main">
                         <div className="testimonial_inr">
                                <div className="widget_title">- TESTIMONIALS -</div>
                                    <div className="slider">
                                    <section className="flexslider">
                                        <ul className="slides">
                                            <li>
                                                <div className="testimonial_profile"><img src={testimonial_person}/></div>
                                                <div className="testimonial_content">
                                                    <div className="company_logo"><img src={penn_img}/></div>
                                                    <div className="profile_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et tempor.</div>
                                                    <div className="profile_name">Dennis Keith</div>
                                                    <div className="profession">Founder & CEO</div>
                                                </div>
                                            </li>
                                           
                                            {/* <li>
                                                    <div className="testimonial_profile"><img src={testimonial_person}/></div>
                                                    <div className="testimonial_content">
                                                        <div className="company_logo"><img src={penn_img}/></div>
                                                        <div className="profile_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et tempor.</div>
                                                        <div className="profile_name">Dennis Keith</div>
                                                        <div className="profession">Founder & CEO</div>
                                                    </div>
                                                </li>
                                        */}
                                        </ul>
                                    </section>
                                </div>
                     </div>
                 </div>
                 </div>
       
            {/*  <section>
                <div className="subscribe_block">
                    <div className="subscribe_main">
                        <div className="subscribe_inr">
                            <div className="subscribe_title">
                                    Lorem ipsum dolor sit amet, consetetur
                            </div>
                            <div className="subscribe_content">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            </div>
                            <div className="subscribe">
                                    <form action="#">
                                        <div className="fileds_block">
                                                <input type="email" placeholder="Enter your Email address">
                                                <input type="submit" value="Subscribe">
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  */}
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
       )
    }
}





