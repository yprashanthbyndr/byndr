import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, InnerPageTitleBlock, FooterCTA, BlogItem } from '../../theme/components';
import { learning, educationalmobileapp } from '../../assets';

interface props {
    MainReducer: any,
    OpenMenuBar: boolean,
}

class BlogChild6 extends Component<props, any> {

    constructor(props) {
        super(props);
    }

    render(): any {

        const contentGenerated = getContent()

        return (
        <div>
            <div className="header_main_container">
                <Header />
            </div>                
            <div className="bodySection">
                <InnerPageTitleBlock fromPage="Blog" pageSubtitle="" videoDisplay="false" tryBtnDisplay="false" />
                    <BlogItem Content={contentGenerated} />
                <FooterCTA />
            </div>
            <Footer />
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
)(BlogChild6);

export function getContent(){
    return(<div>
        <h1>Learning management systems: Self-paced and easy to use</h1>
    <p>Digital learning  has become a way of life for many. The growing advancement of technology has been responsible for driving profound changes in the learning field. Personalised learning environments are a reality now and learning management systems (LMS) stands as an undeniable blessing for the education industry. With so much information that can be accessed from varied sources, learners are better positioned to take charge of their learning graph.</p>
    <p>It has been observed that the new age learning management systems (LMS) are sleeker in their approach and also better positioned to implement key functions – blended learning and informal learning – efficiently.</p>
    <p>Companies ranging from prominent educational institutions to global fortune 500 companies look for essential features like the scope for optimisation, easy to use, community groups, surveys, discussion forums, real-time knowledge and information sharing etc while opting for a mobile LMS platform.</p>
    <p>In other words, the demand for an intuitive and feature-rich LMS that offers essential features – manage, administer, track and report on all types of training comprising virtual training sessions (webinars) and social learning – is growing.</p>
    <p>The concept of mobile LMS is gaining traction as it offers a series of benefits to the students. Some of the key essential benefits encompass –</p>
    <ul>
<li><strong>Curtailed travel time and costs </strong></li>
<li><strong>Self-paced learning </strong></li>
<li><strong>Online tests and assessments </strong></li>
<li><strong>Ability to learn from anywhere, anytime </strong></li>
<li><strong>Collaborative learning </strong></li>
<li><strong>Lightweight and interactive </strong></li>
</ul>
    <p>As the use of mobile phones and other connected devices is on the rise, it is believed that wireless technology is capable of bringing dramatic improvement in the learning process. New age learners and students are increasingly reliant on mobile technology and keen to leverage it in their day-to-day activities, pushing the demand for mobile LMS across the globe.</p>
    <p><strong>For More learn Click here: <a href="http://www.charmspandorasales.com/improve-future-mobile-learning/" target="_blank" style={{color:"#117bb8"}}>How to improve the future of mobile learning</a></strong></p>
    <p>The onus now lies on the educational institutions, teachers and educators to harness the full potential of <strong>LMS to</strong> boost educational learning.</p>
</div>)
}