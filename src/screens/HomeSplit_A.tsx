import React, { Component } from 'react'
import { AppContext } from '../contextApi/AppContext';
import { Home_A_Hero,Home_A_Grids,FeaturesGrid,FooterCTA,SupportedDivices,HomeTestimonial } from '../theme/components';

interface props {

}

class HomeSplit_A extends Component<props, any>{
    render(): any {
        return (
            <AppContext.Provider value={{
                authenticated: false,
            }}>
                <div className="bodySection">
                    <Home_A_Hero />
                    <Home_A_Grids />
                    <FeaturesGrid />
                    <SupportedDivices />
                    <HomeTestimonial/>
                    <FooterCTA />
                </div>
            </AppContext.Provider>
        );
    }
}

export default HomeSplit_A;