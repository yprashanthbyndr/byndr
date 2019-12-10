import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, InnerPageTitleBlock, FooterCTA, BlogItem } from '../../theme/components';
import { learning, educationalmobileapp } from '../../assets';

interface props {

    MainReducer: any
    OpenMenuBar: boolean
    fromPage: any
}

class BlogChild4 extends Component<props, any> {

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
                <InnerPageTitleBlock fromPage="Why colleges need mobile learning apps" />
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
)(BlogChild4);

export function getContent(){
    return(<div>
    <p>There's no denying that building engagement with the students during the first year of college is a must for student retention, as their first-year experiences decide the tone for their educational careers. Nearly 35% of the freshmen students leave colleges on an average every year and just a mere 10% of these dropouts have poor grades. In other words, poor grades are not responsible for making students leave colleges.</p>
    <img src={educationalmobileapp} />
    <p>Currently, millennials are a significant part of the student community and also changed the way students engage in communicating. Since the millennials have time and again displayed keenness towards mobile technology, smart devices, apps etc, it has been compelling the higher education service providers to identify fresh new ways to drive engagement with students. In such a situation, the relevance of college mobile app for learning purpose assumes importance.</p>
    <p>Since most of the higher education institutions are eyeing to revitalise the communication efforts, hence the need to launch a college mobile app that would be able to engage students and also could be leveraged across smartphones and devices.</p>
    <p>A series of higher educational institutions when recently were questioned about the use of college mobile app, most of them displayed keenness to use such an app that could offer support to community and social engagement. They wanted to collaborate or work with such an elearning platform that would follow efficacy framework that emphasises upon –result, evidence, planning, implementation and the ability to deliver.</p>
    <p>Industry experts are of the opinion that it is key to choosing such a system that had successfully proven its ability to engage students, maintain seamless implementation, enjoyed the capacity to offer daily reports. In simple words, a mobile learning platform is needed that could support students in all varied aspects of their college life that would encompass features like integrated student support, provide reporting to offer university insights and also stress upon personalization and branding initiatives.</p>
</div>)
}