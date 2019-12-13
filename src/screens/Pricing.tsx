import React from 'react';
import { InnerPageTitleBlock, Header, FooterCTA, Footer, Navigation, PricingPlans } from '../theme/components';


import { connect } from 'react-redux';


interface props {
  onLeftMenu?(): void;
  OpenMenuBar: boolean
}

class Pricing extends React.Component<props, any> {

  render(): any {

    return (
      <div>
        <div className="header_main_container">
        <Header />
        </div>
        <div className="bodySection">
          <InnerPageTitleBlock fromPage="Pricing" role="no_role" pageSubtitle="" videoDisplay="false" tryBtnDisplay="false" />
          <PricingPlans />
          <FooterCTA />
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
)(Pricing);





