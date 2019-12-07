import React from 'react';
import { InnerPageTitleBlock, Header, FooterCTA, Footer, Navigation, PricingPlans } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';

import { connect } from 'react-redux';


interface props {
  onLeftMenu?(): void;
  OpenMenuBar: boolean
}

class Pricing extends React.Component<props, any> {

  render(): any {

    return (
      <div>
        <Header />
        <div className="bodySection">
          <InnerPageTitleBlock />
          <PricingPlans />
          <FooterCTA />
        </div>
        <Footer />
        {this.props.OpenMenuBar ?
          <Navigation OpenMenuBar={this.props.OpenMenuBar} /> :
          null}
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





