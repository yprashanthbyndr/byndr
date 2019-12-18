import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, InnerPageTitleBlock, FooterCTA, BlogItem } from '../../theme/components';
import { learning, educationalmobileapp } from '../../assets';

interface props {
    MainReducer: any,
    OpenMenuBar: boolean,
}

class BlogChild5 extends Component<props, any> {

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
                <InnerPageTitleBlock fromPage="Mobile learning empowering education industry" pageSubtitle="" videoDisplay="false" tryBtnDisplay="false" />
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
)(BlogChild5);

export function getContent(){
    return(<div>
    <p>A common belief held by many that the use of mobile technologies has been successfully changing the way how we life is led and education is accessed. The constant blurring of lives (be it social, learning, business or educational) is responsible for changing the basic pattern of communication and interaction. The easy availability of mobile devices and its ability to connect is letting students use it for reasons – read books, initiate conversations, connect on social media, send and receive emails etc – anytime, anywhere. Hence, it would be inappropriate for the higher educational trainers to ignore the growing significance of mobile learning in this fast changing technology driven world.</p>
    <img src={educationalmobileapp} />
    <p>Experts are of the opinion that higher education faculty should garner knowledge and enhance familiarity with the activities that can work with mobile devices apart from understanding the key strengths of mobile learning platform.</p>
    <p>Today, the higher education domain face a series of challenges – rising demand for quality education imparting institutions, changing student demographics, changing nature of knowledge, growing competition globally and rapid technological advancements.</p>
    <p>Given the surge in consumer electronic devices globally, it would be best to consider it as a double-edged sword. As reported in the media, new mobile communications technologies are pushing the <a href="https://www.byndr.com/" target="_blank" style={{color:"#117bb8"}}>online learning platforms</a> to offer revolutionary solutions to the higher education industry as a whole.</p>
    <p>In fact, the educational policymakers and planners should come forward and vouch for mobile learning platforms as it has moved from experimental pilot project status to mainstream status.</p>
    <p>While many argue that mlearning is a social phenomenon capable of developing spontaneous learning experiences, few are of the popular opinion that mobile learning is not just about the technology but also about the learner. This assumes relevance now and expected to become bigger as the learner stands at the core of the learning process while the technology lets the learner boost knowledge in any context.</p>
</div>)
}