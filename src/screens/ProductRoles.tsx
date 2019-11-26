import React from 'react';
import {BlogGrid,ProductRolesTestimonials,FaqBlock,MiniHeader, FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock,ProductForRolesBlock } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';

interface props {
    onLeftMenu?(): void;
}

export default class ProductRoles extends React.Component<props, any> {

    render(): any {

        return (
            <AppContext.Provider value={{
                authenticated: false,
            }}>
              <Header />
            <div className="bodySection">
                <MiniHeader />
            <InnerPageTitleBlock />
            <ProductForRolesBlock />
            <BlogGrid />
            <ProductRolesTestimonials />
            <FaqBlock />
            <FooterCTA />
            </div>
            <Footer />
          <Navigation />
          </AppContext.Provider>
       )
    }
}