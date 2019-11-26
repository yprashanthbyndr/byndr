import React, { Component } from 'react'
import { AppContext } from '../contextApi/AppContext';
import { Home_A_Hero,Home_A_Grids,FeaturesGrid,FooterCTA,SupportedDivices,HomeTestimonial, Header, Footer } from '../theme/components';
import {Helmet} from "react-helmet";

interface props {
    
}

class HomeSplit_A extends Component<props, any>{

    onbuttonclick (value) : any {
        console.log("clicked: " ,value);
    }

    render(): any {
        // console.log('this.props From HomeSplit A', this.props)

        let activeTab= "teacher";
        return (
            <AppContext.Provider value={{
                activeTab: activeTab,
                click_Tab : this.onbuttonclick
            }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Byndr Title Goes here Page by Page</title>
                    <link rel="canonical" href="https://www.byndr.com" />
                </Helmet>
                <Header />
                <div className="bodySection">
                    <Home_A_Hero />
                    <Home_A_Grids />
                    <FeaturesGrid />
                    <SupportedDivices />
                    <HomeTestimonial/>
                    <FooterCTA />
                </div>
                <Footer />
            </AppContext.Provider>
        );
    }
}

export default HomeSplit_A;