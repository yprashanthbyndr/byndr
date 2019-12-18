import React from 'react';

import { Header, Footer, Navigation, InnerPageTitleBlock, VisionAndMission, OurJourneyBlock, OurTeam, InvestorsBlock, FooterCTA, AboutContentBlock } from '../theme/components';
import ByndrTeam from '../theme/components/ByndrTeam';
interface props {
    onLeftMenu?(): void,
}

export default class AboutUs extends React.Component<props, any,boolean> {

    render(): any {

        return (
         
            <div>
                <div className="header_main_container"><Header /></div>
                <div className="bodySection">
                    <InnerPageTitleBlock fromPage="Connecting the ed-tech stakeholders" pageSubtitle="Utilising the technology for successful learning experience" videoDisplay="false" tryBtnDisplay="false"/>
                    <VisionAndMission />
                    <OurJourneyBlock />
                    <AboutContentBlock />
                    <OurTeam />
                    <ByndrTeam />
                    <InvestorsBlock />
                    <FooterCTA />
                </div>
                <Footer />
            </div>
        )
    }
}