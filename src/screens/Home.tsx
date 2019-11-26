import React, { Component } from 'react';

import { AppContext } from '../contextApi/AppContext';

import { HomeSplit_A, HomeSplit_B } from './index';
import { Header, Footer, Navigation } from "../theme/components";

interface props {


}

class Home extends Component<props, any> {

    render(): any {
        return (
        // <div>
            <AppContext.Provider value={{
                authenticated: false
            }}>
            <Header />
            <HomeSplit_A />

            
            <Footer />
            <Navigation />
        {/* </div> */}
        </AppContext.Provider>
        );
    }
}

export default Home;