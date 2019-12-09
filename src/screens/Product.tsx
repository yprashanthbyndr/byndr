import React from 'react';
import { ProductCoreCapabilities, WhoIsBynderFor, FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';

import { connect } from 'react-redux';


interface props {
    onLeftMenu?(): void,
    fromPage:any
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
                    <InnerPageTitleBlock fromPage="Product"  />
                    <WhoIsBynderFor />
                    <ProductCoreCapabilities />
                    <FooterCTA />
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