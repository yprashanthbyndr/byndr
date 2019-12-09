import React from 'react';

import { Header, Footer, Navigation, InnerPageTitleBlock, VisionAndMission, OurJourneyBlock, OurTeam, InvestorsBlock, FooterCTA } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';
interface props {
    onLeftMenu?(): void,
    fromPage:any
}

export default class AboutUs extends React.Component<props, any> {

    render(): any {

        return (
            // <AppContext.Provider value={{
            //     authenticated: false,
            // }}>
            <div>
                <Header />
                <div className="bodySection">
                    <InnerPageTitleBlock fromPage="About Us" />
                    <VisionAndMission />
                    <OurJourneyBlock />
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