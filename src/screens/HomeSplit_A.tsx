import React, { Component } from 'react'
import { Home_A_Hero, Home_A_Grids, SupportedDivices, HomeTestimonial, Header, Footer, FooterDoubleCTA, Seo } from '../theme/components';
import { Helmet } from "react-helmet";

import { USPs } from './USPs';

import { connect } from 'react-redux';


interface props {
    MainReducer: any,
    OpenMenuBar: boolean,
    routeProps: any
}

class HomeSplit_A extends Component<props, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: "teacher",
        };
        this.onbuttonclick = this.onbuttonclick.bind(this)
    }

    onbuttonclick(key, value): any {
        this.setState({ [key]: value })
    }

    render(): any {
        return (
            <div>
                <Seo seoData={this.props.routeProps} />
                <Header />
                <div className="bodySection">
                    <Home_A_Hero />
                    <Home_A_Grids />
                    {/* <FeaturesGrid /> */}
                    {/* <SupportedDivices /> */}
                    <USPs routeProps={this.props.routeProps} />
                    <HomeTestimonial />
                    <FooterDoubleCTA />
                </div>
                <Footer />

            </div>
        );
    }
}

const map = (state: any) => {
    return {
        ...state.MainReducer
    };
};

export default connect(
    map,
    null,
)(HomeSplit_A);

