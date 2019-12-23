import React from 'react';
import { ProductCoreCapabilities, WhoIsBynderFor, FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock, FooterDoubleCTA, Seo } from '../theme/components';

import { connect } from 'react-redux';

interface props {
    onLeftMenu?(): void,
    HideHeader: boolean,
    routeProps:any
}
class Product extends React.Component<props, any> {

    render(): any {

        return (
      
            <div>
                <Seo seoData={this.props.routeProps} />
                <div className="header_main_container">
                <Header  normalScroll="true" Pagetilte="product"  />
                </div>
                <div className="bodySection">
                    <InnerPageTitleBlock fromPage="A tech-savvy tool for ed-tech experience" pageSubtitle="A free social learning platform for both faculty & students, offers a maintenance-free cloud-based platform with LMS features like attendance, materials, grades and more..." videoDisplay="false" tryBtnDisplay="true"  />
                    <WhoIsBynderFor />
                    {/* <ProductCoreCapabilities /> */}
                    <FooterDoubleCTA />
                </div>
                <Footer />
            </div>
        )
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
)(Product);