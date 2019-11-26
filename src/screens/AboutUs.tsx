import React from 'react';

import { Header,Footer,Navigation,InnerPageTitleBlock, VisionAndMission, OurJourneyBlock, OurTeam, InvestorsBlock, FooterCTA } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';
interface props {
    onLeftMenu?(): void;
}

export default class AboutUs extends React.Component<props, any> {

    render(): any {

        return (
            <AppContext.Provider value={{
                authenticated: false,
            }}>
            <Header />
            <div className="bodySection">
                <InnerPageTitleBlock />
                <VisionAndMission />
                <OurJourneyBlock />
                <OurTeam />
                <InvestorsBlock />
                <FooterCTA />
            </div>
            <Footer />
            {/* <Navigation /> */}
            </AppContext.Provider>
        )
    }
}