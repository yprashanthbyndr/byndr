import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, InnerPageTitleBlock, FooterCTA, BlogItem } from '../../theme/components';
import { byndr_responsive_platform, learning } from '../../assets';

interface props {

    MainReducer: any,
    OpenMenuBar: boolean,
}

class BlogChild1 extends Component<props, any> {

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
)(BlogChild1);

export function getContent(){
    return(<div>
    <h1>What's in store for Learning Management System India in 2017?</h1>
    <p>The market for learning management systems, including instructor-led training and distance learning, etc, was valued at 5.19 billion dollars in 2016 and is set to grow at 24% CAGR to become a USD 19.05 billion worth of industry in 2022. The same has been reported by Zion Market Research, taking inputs from noteworthy inputs from the global leaders like McGraw-Hill Education, IBM Corporation and others.</p>
    <img src={learning} />
    <p>In the past, we have seen Learning Management System evolve in its role and utility. From a cost-effective method for imparting knowledge & skills, it is today a profitable, commercially viable market. Since there is always going to be a need for putting out the right content for the learners, and measure the same, hence the learning management systems are here to stay.</p>
    <p>Mobile LMS works as a centralized nucleus for learning, especially when the learners are distributed amongst geographies, time-zones and availability. Here’s predicting the evolution of learning management systems, India.</p>
    <b>LMS to become the buyer’s market in 2017</b>
    <p>There are ample amount of specialist learning management platforms in India. As the industry matures this year, there is going to be a host of solutions, whether it is specialized training needs, reduced setup costs or license models more fitting the pockets of buyers. The same is going to make organizations reconsider their existing Mobile LMS and figure out if they are paying too much for too little, make amends if required and more.</p>
    
    <b>Mobile LMS becomes Intuitive & Smarter</b>

    <p>2017 is also going to be the year when adaptive learning gains mainstream prominence in the world of learning management system, India. The adaptive systems are going to understand the unique needs and preferences of the learners, via their past behavior on the platform, user profiles and interests that are explicitly stated. Based on the same information, the same systems are going to recommend content most suitable for the individuals. The content is going to be a mix of informal articles and blogs and formal videos and whitepaper, amongst other materials, to impart knowledge in the most learner-friendly way.</p>

 

    <b>LMS becomes integrated with the Ecosystem</b>

<p>The industry does seem disposed towards cost-effective LMS solutions, which can be integrated and become part of the cloud-based ecosystem of enterprises. Vendors will no longer be able to charge individual customer for a solution. Instead, there will be processes in place for the learning management system in India to be accessed by the entire enterprise, perhaps at a nominal additional fee.</p>

<b>Videos emerging as the latest delivery medium</b>

<p>Learning Management Systems in India and across the globe are invested in disrupting the status quo and coming up with systems and processes meant to deliver knowledge and information, at the most cost-effective prices. The latest feature in the same happens to be the emergence of video. A well-crafted and thought-after video would make the need for an instructor obsolete, hence saving enterprises the cost of hiring instructors and trainers. However, the increasing use of videos in Mobile LMS is going to be limited only by the objectives of the learning, audience preferences and skillsets, along with the availability of budget, learning objectives and the available timeline.</p>

<p>In essence, novel approach is going to evolve in times to come, with an increasing need and investments in the domain. In India specifically, as the internet revolution reaches the rural parts, there are going to be newer stakeholders for the Mobile LMS.</p>
</div>)
}