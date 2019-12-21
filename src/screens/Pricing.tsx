import React from 'react';
import { InnerPageTitleBlock, Header, FooterCTA, Footer, Navigation, PricingPlans, Seo } from '../theme/components';

import { connect } from 'react-redux';


interface props {
  onLeftMenu?(): void;
  OpenMenuBar: boolean,
  routeProps:any
}

class Pricing extends React.Component<props, any> {

  render(): any {

    return (
      <div>
        <Seo seoData={this.props.routeProps} />
        <div className="header_main_container">
        <Header />
        </div>
        <div className="bodySection">
          <InnerPageTitleBlock role="pricing" fromPage="Pricing" pageSubtitle="" videoDisplay="false" tryBtnDisplay="false" />
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
