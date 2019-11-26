import React from 'react';
import { NavLink } from 'react-router-dom';
import { penn_img, testimonial_person, open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb, PersonImage } from '../../assets';

interface props {
    onLeftMenu?(): void;
}

export default class ProductRolesTestimonials extends React.Component<props, any> {

    render(): any {
        return (
<section>
    <div className="testmonials">
      <div className="testmonials_inr">
        <div className="widget_title">- TESTIMONIALS -</div>
        {/* Place somewhere in the <body> of your page */}
        <div className="flexslider carousel">
          <ul className="slides">
            <li>
              <div className="single_testmonial">
                <div className="testmonials_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et tempor.</div>
                <div className="testmonials_profile"><img src={PersonImage} /></div>
                <div className="profile_name">Dennis Keith</div>
                <div className="sub_title">Founder &amp; CEO</div>
                <div className="sub_title">KITS College of Engineering</div>
              </div>
            </li>
            <li>
              <div className="single_testmonial">
                <div className="testmonials_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et tempor.</div>
                <div className="testmonials_profile"><img src={PersonImage} /></div>
                <div className="profile_name">Dennis Keith</div>
                <div className="sub_title">Founder &amp; CEO</div>
                <div className="sub_title">KITS College of Engineering</div>
              </div>
            </li>
            <li>
              <div className="single_testmonial">
                <div className="testmonials_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et tempor.</div>
                <div className="testmonials_profile"><img src={PersonImage} /></div>
                <div className="profile_name">Dennis Keith</div>
                <div className="sub_title">Founder &amp; CEO</div>
                <div className="sub_title">KITS College of Engineering</div>
              </div>
            </li>
            <li>
              <div className="single_testmonial">
                <div className="testmonials_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et tempor.</div>
                <div className="testmonials_profile"><img src={PersonImage} /></div>
                <div className="profile_name">Dennis Keith</div>
                <div className="sub_title">Founder &amp; CEO</div>
                <div className="sub_title">KITS College of Engineering</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
        );
    }
}