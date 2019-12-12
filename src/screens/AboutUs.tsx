import React from 'react';

import { Header, Footer, Navigation, InnerPageTitleBlock, VisionAndMission, OurJourneyBlock, OurTeam, InvestorsBlock, FooterCTA, AboutContentBlock } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';
interface props {
    onLeftMenu?(): void,
}

export default class AboutUs extends React.Component<props, any,boolean> {

    render(): any {

        return (
            // <AppContext.Provider value={{
            //     authenticated: false,
            // }}>
            <div>
                <Header />
                <div className="bodySection">
                    <InnerPageTitleBlock fromPage="Welcome to Byndr" pageSubtitle="Utilising the technology for successful learning experience" videoDisplay="false" tryBtnDisplay="false"/>
                    <VisionAndMission />
                    <OurJourneyBlock />
                    <AboutContentBlock />
                    <OurTeam />
                    <InvestorsBlock />
                    <FooterCTA />
                </div>
                <Footer />
                {/* </AppContext.Provider> */}
            </div>
        )
    }
}