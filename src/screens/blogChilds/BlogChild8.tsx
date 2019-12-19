import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, InnerPageTitleBlock, FooterCTA, BlogItem } from '../../theme/components';
import { learning, educationalmobileapp } from '../../assets';

interface props {
    MainReducer: any,
    OpenMenuBar: boolean,
}

class BlogChild8 extends Component<props, any> {

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
)(BlogChild8);

export function getContent(){
    return(<div>
        <h1>How online learning platform can help startup ventures</h1>
    <p>Many people have persistent misconceptions that online learning platforms are solely meant for the MNCs and conglomerates that have strong employee base and budget. In actuality, startups and small businesses can also bag considerable benefit from a learning management system. When using an LMS, companies irrespective of their size and industry vertical can enhance profit and boost clientele base.</p>
   
    <p>In layman’s terms, an e-learning platform ensures that a business attains effective employee training and development without burning a hole in the pocket. Realising that eLearning apps in India are expected to become huge in the world of business, our guide focussing upon the benefits of LMS have for small business will come in handy and will help the entrepreneurial ventures to thrive in the existing competitive business landscape.</p>
    <p>LMS assume great relevance for startups as most of these businesses don’t invest in training their staff, unlike the established companies. The below-mentioned pointers will help the new businesses to realise the relevance of eLearning and ensure its quick adoption.</p>
    <ul>
<li><strong>New skills</strong></li>
</ul>
    <p>A newly established business grows when their employees take initiatives to enhance their skills and not just when their revenues bolster. Since every business is expected to have skill gaps, eLearning can ensure that these gaps are covered when addressed.</p>
    <ul>
<li><strong>Compliance</strong></li>
</ul>
<p>Every startup needs to follow certain rules and regulations. <a href="https://www.byndr.com/" target="_blank" style={{color:"#117bb8"}}>A mobile learning platform</a> can help a new business maintain accurate records of their employees’ eLearning curve.</p>
<ul>
<li><strong>Widen horizon </strong></li>
</ul>

    <p>eLearning is not just a business focused activity but it comes in different forms encompassing Massive Open Online Courses (MOOCs). A well-educated or keen to learn employee who wants to boost knowledge and takes initiatives is a key resource for an organisation.</p>
    <ul>
<li><strong>Happy customers </strong></li>
</ul>

<p>An LMS enhances the overall efficiency of the workforce that will help introduce the best practices and consequently improve or offer the best customer service experience.</p>
<ul>
<li><strong>The parting words</strong></li>
</ul>
<p>For startups, an online learning platform is the need of the hour. It will help the employees update their skills, broaden their mindset, stay updated with the current industry happenings, be motivated and strengthen ROI. So, implement eLearning for your team today and reap benefits.</p>
</div>)
}