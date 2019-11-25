import logo from '../assets/images/byndr-logo-white.png';
import '../App.css';

import React, { Component } from 'react';

import { AppContext } from '../contextApi/AppContext';


import { Header, Footer, Home1 } from '../theme/components/index';
import AboutUs from './AboutUs';
import Pricing from './Pricing';
import Product from './Product';

// import '../theme/styles/Home.style.css'

interface props {


}

class Home extends Component<props, any> {
    render(): any {
        return (
            <AppContext.Provider value={{
                authenticated: false,
            }}>
                <div className="main">
                    <Header />
                    {/* <AboutUs /> */}
                    {/* <Pricing /> */}
                    <Product />
                    <Footer />

                </div >
            </AppContext.Provider>
        );
    }
}

export default Home;