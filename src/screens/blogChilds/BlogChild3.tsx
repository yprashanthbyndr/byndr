import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, InnerPageTitleBlock, FooterCTA, BlogItem } from '../../theme/components';
import { learning } from '../../assets';

interface props {

    MainReducer: any,
    OpenMenuBar: boolean,
}

class BlogChild3 extends Component<props, any> {

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
                <InnerPageTitleBlock fromPage="Use of learning management systems in India" pageSubtitle="" videoDisplay="true" tryBtnDisplay="true" />
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
)(BlogChild3);

export function getContent(){
    return(<div>
    <p>For the past few years, the dream of strengthening the presence of learning management system in India has gained significant pace. The target of an LMS is to bring together the key components of the educational system – educators, administrators, students – to bring together in an online space to boost interactions via announcements, SMS’, email and series of other relevant features that offers classroom and other academic related details at the fingertips.</p>
    <p>With the growing income of the middle class and government expenditure in the education domain, the size of the Indian education industry is expected to bolster. In fact, in the coming years, the enhanced use of learning management system in India will push the greater number of foreign players to enter the Indian learning domain catering and meeting the need of the education industry.</p>
    <h3>Some of the key features which education domain LMS should encompass are –</h3>
    <ul>
        <li><b>Audio, video capabilities along with interactive content</b><p>
        Apart from text and picture description, an education LMS should be able to support audio, video and other file types (.swf, .doc, .avi, .wmv, .mpg etc). This is key and important for visual and audio learning.</p></li>
        <li><b>Easy to use on different devices</b><p>
        A learning management system in India should be easily customised for PCs/Laptops, Internet Tablets, and Mobile Phones. The different variants of this application offer the convenience of surfing despite on the move.</p></li>
        <li><b>Content capability</b><p>
        Users should be to restore the past session, which helps to save time. Just type the LMS URL to relaunch the app from the start.</p></li>
        <li><b>Web conferencing</b><p>
        It is a must have feature for LMS system as it can ensure effective distance teaching and learning.</p></li>
        <li><b>Multiple language support</b><p>
        This feature should be incorporated to boost the adoption as India is home to people from different cultural diversities. An LMS, which is capable of offering learning content in multiple languages, bolsters the adoption rate considerably.</p></li>
    </ul>
</div>)
}