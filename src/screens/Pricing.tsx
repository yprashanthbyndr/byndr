import React from 'react';
import { InnerPageTitleBlock, Header, FooterCTA, Footer, Navigation, PricingPlans } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';

interface props {
  onLeftMenu?(): void;
}

export default class Pricing extends React.Component<props, any> {

  render(): any {

    return (
      <AppContext.Provider value={{
        authenticated: false,
      }}>
        <Header />
        <div className="bodySection">
          <InnerPageTitleBlock />
          <PricingPlans />
          <FooterCTA />
        </div>
        <Footer />
        <Navigation OpenMenuBar={false} />
      </AppContext.Provider>
    )
  }
}





