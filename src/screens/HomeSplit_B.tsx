import React, { Component } from 'react'
import { Home_B_Hero, WelcomeBannerGrids, FeaturesGrid, SupportedDivices, HomeTestimonial, FooterCTA } from '../theme/components';

interface props {

}

class HomeSplit_B extends Component<props, any>{
    render(): any {
        return (
        
            <div className="bodySection fixed_header">
                <Home_B_Hero />
                <WelcomeBannerGrids />
                <FeaturesGrid />
                <SupportedDivices />
                <HomeTestimonial/>
                <FooterCTA />
            </div>
        );
    }
}

export default HomeSplit_B;