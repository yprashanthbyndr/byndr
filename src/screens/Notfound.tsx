import React from 'react';
import { InnerPageTitleBlock, Header, FooterCTA, Footer, PricingPlans, Page404, Seo } from '../theme/components';

import { connect } from 'react-redux';

interface props {
  onLeftMenu?(): void;
  OpenMenuBar: boolean,
  routeProps:any
}

class NotFound extends React.Component<props, any> {

  render(): any {

    return (
      <div>
        <Seo seoData={this.props.routeProps} />
        <div className="header_main_container"><Header /></div>
        <div className="bodySection">
          <Page404 />
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
)(NotFound);
