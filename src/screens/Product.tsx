import React from 'react';
import { ProductCoreCapabilities, WhoIsBynderFor, FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';

interface props {
    onLeftMenu?(): void,
    fromPage:any
}

export default class Product extends React.Component<props, any> {

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