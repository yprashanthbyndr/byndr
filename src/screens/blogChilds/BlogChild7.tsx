import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, InnerPageTitleBlock, FooterCTA, BlogItem } from '../../theme/components';
import { learning, educationalmobileapp } from '../../assets';

interface props {
    MainReducer: any,
    OpenMenuBar: boolean,
}

class BlogChild7 extends Component<props, any> {

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
)(BlogChild7);

export function getContent(){
    return(<div>
        <h1>Bright future ahead for LMS industry</h1>
    <p>Learning management systems (LMS) have emerged as an integral part of the higher education, K-12 and business environments. There’s no denying that LMS market is diverse and also growing at a rapid scale. Currently, about 70% of the K-12 education system enjoys access to smartphones and this percentage is only going up with time. In simple words, this allows the smartphones to be used as a learning device and app as a possible medium to connect with millions of students. One can say that change is happening and eLearning platforms are boosting their clientele base.</p>
   
    <p>In the recent years, eLearning as an industry has made successful progression and promises to become bigger. In other words, the learning management system landscape has undergone a dramatic transformation with different new players stepping in and introducing changes in the feature sets and overall aesthetics. A recently unveiled report suggests that eLearning globally will touch $50billion by the end of 2016 with the projected double-digit growth in Africa, Asia, Eastern Europe and Latin America. While the availability of open online courses has garnered significant media attention, an LMS enjoy higher efficiency to help universities, companies and businesses to successfully create, assign and track the progression of online learning.</p>
    <p>Industry experts are of the opinion that the growth of online learning market is dependent on the user-side simplicity. Although choosing the most efficient mobile learning platform isn’t easy at all due to the availability of hundreds of vendors in the market, LMS are increasingly employed as supportive environments to boost face-to-face learning. Online learning systems in India have witnessed considerable growth in functionality as it encompasses features related to academic administration, learning analytics, monitoring of students and faculty and different reporting functions.</p>
    <p>The existing trends in the LMS landscape encompass – swift expansion to the mobile platforms, connecting with the social networks, possible tools for course development, adaptive learning systems driven by learning analytics, personalization of interfaces etc. It is believed that the future <a href="https://www.byndr.com/" target="_blank" style={{color:"#117bb8"}}>learning management system (LMS) in India will become</a> an integral part of employees’ daily life. Whether they use a short chunk of learning to enhance work productivity or partner on a key project, the future of online learning systems will display retooled functionality. Many are of the popular belief that LMS can offer a helping hand to institutions/businesses to become more efficient and transparent in their approach.</p>
    <p>It’s true that LMS market is mature, but there is ample room for further innovation. The next-generation learning management systems are expected to be malleable and provide a cost-efficient design that will enhance the accessibility of information, boost user experience as well. One can say, LMS will bolster the overall efficiency and propel customization across the learning and development process.</p>
    <strong>Conclusion</strong>
    <p>In short, the institutional leaders need to pay close attention because a new phase of ‘LMS’ is fast emerging. This new phase will need working in close coordination with the clients and provide them what they are looking for. Having said that, this is the right time for conglomerates/higher education institutions/schools to stand out by implementing LMS and eventually boost productivity.</p>
</div>)
}