import React from 'react';
import {ProductCoreCapabilities,WhoIsBynderFor, FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';

interface props {
    onLeftMenu?(): void;
}

export default class Product extends React.Component<props, any> {

    render(): any {

        return (
            <AppContext.Provider value={{
                authenticated: false,
            }}>
              <Header />
            <div className="bodySection">
            <InnerPageTitleBlock />
            <WhoIsBynderFor />
            <ProductCoreCapabilities />
            <FooterCTA />
            </div>
            <Footer />
          </AppContext.Provider>
       )
    }
}