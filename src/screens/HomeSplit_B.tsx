import React, { Component } from 'react'
import { AppContext } from '../contextApi/AppContext';
import { Home_B_Hero, WelcomeBannerGrids, FeaturesGrid, SupportedDivices, HomeTestimonial, FooterCTA } from '../theme/components';

interface props {

}

class HomeSplit_B extends Component<props, any>{
    render(): any {
        console.log('This is Pr', this.props)
        return (
            <AppContext.Provider value={{
                // authenticated: false,
            }}>
            <div className="bodySection fixed_header">
                <Home_B_Hero />
                <WelcomeBannerGrids />
                <FeaturesGrid />
                <SupportedDivices />
                <HomeTestimonial/>
                <FooterCTA />
            </div>
            </AppContext.Provider>
        );
    }
}

export default HomeSplit_B;