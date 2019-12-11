import React from 'react';
import { ProductCoreCapabilities, WhoIsBynderFor, FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock, FooterDoubleCTA } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';

import { connect } from 'react-redux';

interface props {
    onLeftMenu?(): void,
    HideHeader: boolean,
}
class Product extends React.Component<props, any> {

    render(): any {

        return (
            // <AppContext.Provider value={{
            //     authenticated: false,
            // }}>
            <div>
                <Header />
                <div className="bodySection">
                    <InnerPageTitleBlock fromPage="A tech-savvy tool for ed-tech experience" pageSubtitle="A free social learning platform for both faculty &amp; students, offers a maintenance-free cloud-based platform with LMS features like attendance, materials, grades and more." videoDisplay="true" tryBtnDisplay="true"  />
                    <WhoIsBynderFor />
                    <ProductCoreCapabilities />
                    <FooterDoubleCTA />
                </div>
                <Footer />
                {/* </AppContext.Provider> */}
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