import React from 'react';
import { FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';
import WhoIsBynderFor from '../theme/components/WhoIsBynderFor';
import ProductCoreCapabilities from '../theme/components/ProductCoreCapabilities';
import ProductForRolesBlock from '../theme/components/ProductForRolesBlock';
import BlogGrid from '../theme/components/BlogGrid';
import ProductRolesTestimonials from '../theme/components/ProductRolesTestimonials';
import FaqBlock from '../theme/components/FaqBlock';

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