import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, InnerPageTitleBlock, FooterCTA, BlogItem } from '../../theme/components';
import { learning, educationalmobileapp } from '../../assets';

interface props {
    MainReducer: any,
    OpenMenuBar: boolean,
}

class BlogChild9 extends Component<props, any> {

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
)(BlogChild9);

export function getContent(){
    return(<div>
        <h1>Understanding the benefits of Learning management system</h1>
    <p>In general, this integrated software offers a flexible architecture that can be altered accordingly. Moreover, an LMS can address the scalability concerns often raised by educators. The concept of having an online learning platform is new to India, but it is quickly gaining acceptance. It allows the instructors to create and deliver their content while simultaneously monitor the student participation and review performance.</p>
   
    <p>Here are some of the possible reasons why using an <a href="https://www.byndr.com/" target="_blank" style={{color:"#117bb8"}}>LMS system in India</a> is the need of the hour and can ensure good ROI.</p>
    <strong>• Proper organisation of content in one location</strong>
    <p>It allows storing of all eLearning materials in one location, lowering the risk of data loss. When using a cloud-based platform, all the members of the team can access the information anytime.</p>
    <strong>• Offers unlimited access</strong>

    <p>Once the course details are uploaded, the team enjoys unlimited access to the information. In fact, people on the move can access it through their smartphones and tablets from anywhere, anytime.</p>
    <strong>• Track learner’s performance</strong>

    <p>It keeps a close tab on the learner’s progress apart from ensuring that they meet their milestone on a regular basis so that necessary changes can be implemented to improve performance.</p>
    <strong>• Cost-effective</strong>
    <p>It becomes possible to make considerable savings – instructor travel costs, online training site rentals and printed eLearning materials.</p>
    <strong>• Lowers learning and development time
</strong>
    <p>Learners can go through only those modules they need instead of spending time on a lengthy online training course.</p>
    <strong>• Integrates social learning experiences</strong>
    <p>An online learning system allows inclusion of links to social channels such as Facebook pages, Twitter pages, LinkedIn groups, online forums that may benefit the learners.</p>
    <strong>Conclusion</strong>
    <p>It is paramount that every educational institution spends time to select an LMS that meets the stakeholder’s requirements. The decision-making process should involve a diverse group of people – academic, non-academic departments and students –to ensure its successful implementation. To leverage the full potential of this revolutionary tool, understand its functionalities, features, review pricing and speak to eLearning professionals who have used it in the past.</p>
</div>)
}