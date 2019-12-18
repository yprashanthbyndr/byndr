import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, InnerPageTitleBlock, FooterCTA, BlogItem } from '../../theme/components';
import { learning } from '../../assets';

interface props {

    MainReducer: any,
    OpenMenuBar: boolean,
}

class BlogChild2 extends Component<props, any> {

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
                <InnerPageTitleBlock fromPage="Key factors to consider when planning to collaborate with a mobile LMS platform" pageSubtitle="" videoDisplay="false" tryBtnDisplay="false" />
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
)(BlogChild2);

export function getContent(){
    return(<div>
    <p>eLearning platforms in India have the power of transforming the way education is imparted in schools and companies. It is mandatory to introduce it as it can empower learning. Here are some essential factors why the learners should leverage the advantages of elearning –</p>
    <ul>
        <li>It helps to improve the learning outcomes.</li>
        <li>It allows students to take up the role of learners/risk takers/thinkers despite being in a sheltered environment.</li>
        <li>It lowers the reliance on teachers/educators/instructors. It helps the learners to be accountable for themselves and become independent.</li>
        <li>It lets the employees master key skills in the digital world –cybersafety, plagiarism, coordinating with virtual teams, learn the nuances of digital and global entrepreneurship, globalisation etc.</li>
        <li>It broadens the horizons of the students. It fits in the rural education landscape where students often face the disadvantages of distance and isolation. Technology lets them learn virtually.</li>
        <li>It allows a mobile learning environment – anywhere, anytime.</li>
    </ul>
    {/* <img src={learning} /> */}
    <p>Although more businesses have started to realise the relevance of a mobile LMS, it is enquired if you are ready to implement an online learning platform for your brand.</p>

    <ul>
        <li>What are the goals you are eyeing to achieve from the implementation of an LMS?  Have you decided on a viable LMS strategy?
</li>
        <li>What is your budget for implementation?
</li>
        <li>What is the timeframe decided for procurement and implementation?
</li>
        <li>Is there a learning material development strategy you are planning to follow?
</li>
        <li>Have you formed a group that is capable of managing the mobile LMS going forward?</li>
    </ul>

 
<p>Before you proceed further, ensure that you have the answer to these questions before partnering with a potential LMS service provider.</p>

<p>The next step is realising who should be engaged in the procurement and selection process. It is key to getting them involved right from the start. It has been observed that the marketing team are not taken into consideration during the LMS implementation project. It is important to understand that the marketing department can enact the role of a source of branding guidelines for a mobile LMS design.</p>

<p>It needs to be understood that engaging those individuals who are presently leveraging the current system the most and the ones who are opposed to the LMS implementation. The perspective will allow the user group to work on the obstacles and mitigate these early on.</p>

<p>Once you have decided on a mobile learning management system, ask yourself these important questions –</p>
<p>Is my choice of learning management system going to solve my purpose or meet my targets?</p>
<p>Is the chosen LMS flexible to meet the changing requirements of my business?</p>
<p>Is my mobile LMS capable of accommodating the fluctuating numbers of users?</p>
<p>It is necessary to realise the requirements of the learners and your business as it is the first step towards the success of your LMS journey.</p>

</div>)
}