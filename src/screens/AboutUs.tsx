import React from 'react';
import { Header, Footer, InnerPageTitleBlock, VisionAndMission, OurJourneyBlock, OurTeam, InvestorsBlock, FooterCTA, AboutContentBlock, Seo } from '../theme/components';
import ByndrTeam from '../theme/components/ByndrTeam';
import { Helmet } from "react-helmet";
interface props {
    onLeftMenu?(): void,
    routeProps: any
}

export default class AboutUs extends React.Component<props, any,boolean> {

    render(): any {

        return (
         
            <div>
                <Seo seoData={this.props.routeProps} />
                <div className="header_main_container"><Header  normalScroll="true" Pagetilte="About" /></div>
                <div className="bodySection">
                    <InnerPageTitleBlock fromPage="<span>Connecting the student </span> <br/>with best educational resources" pageSubtitle="Utilising the technology for successful learning experience" videoDisplay="false" tryBtnDisplay="false"/>
                    <VisionAndMission />
                    <OurJourneyBlock />
                    <AboutContentBlock />
                    <OurTeam />
                    {/* <ByndrTeam /> */}
                    <InvestorsBlock />
                    <FooterCTA />
                </div>
                <Footer />
            </div>
        )
    }
}