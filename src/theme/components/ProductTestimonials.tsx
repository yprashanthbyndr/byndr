import React from 'react';
import { NavLink } from 'react-router-dom';
import { penn_img, testimonial_person } from '../../assets';

interface props {
    onLeftMenu?(): void;
}

export default class ProductTestimonials extends React.Component<props, any> {

    render(): any {
        return (
            <div className="testimonial drak_gray">
    <div className="testimonial_main">
        <div className="testimonial_inr">
            <div className="widget_title"> TESTIMONIALS </div>
                <div className="slider">
                <section className="flexslider">
                    <ul className="slides">
                        <li>
                            <div className="testimonial_profile"><img src={testimonial_person}/></div>
                            <div className="testimonial_content">
                                <div className="company_logo"><img src={penn_img}/></div>
                                <div className="profile_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et tempor.</div>
                                <div className="profile_name">Dennis Keith</div>
                                <div className="profession">Founder &amp; CEO</div>
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
</div>);
    }
}