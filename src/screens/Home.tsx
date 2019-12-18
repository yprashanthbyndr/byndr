import React, { Component } from 'react';

import { HomeSplit_A, HomeSplit_B } from './index';
import { Header, Footer, Navigation, Seo } from "../theme/components";

import { connect } from 'react-redux';

interface props {
    MainReducer: any
    OpenMenuBar: boolean
    routeProps:any
}

class Home extends Component<props, any> {


    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(): any {
        window.addEventListener('scroll', this.handleScroll);
    }

    /**
 * Remove Event wile we remove this component from DOM.
 */

    componentWillUnmount(): any {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let element = this.refs.Sticky_context_header;
        // var domRect = element.getBoundingClientRect();
        // if (domRect.top > 0) {
        //     // this.props.StickyContextHeader
        //     //     ? this.props.ChangeStickyContextHeader()
        //     //     : null;
        // } else {
        //     // this.props.StickyContextHeader
        //     //     ? null
        //     //     : this.props.ChangeStickyContextHeader();
        // }

        // if (domRect.top > 57) {
        //     // this.props.StickyUniversalSelector
        //     //     ? this.props.ChangeStickyUniversalSelector()
        //     //     : null;
        // } else {
        //     // this.props.StickyUniversalSelector
        //     //     ? null
        //     //     : this.props.ChangeStickyUniversalSelector();
        // }
    }

    render(): any {
        return (
            <div>
                <Seo seoData={this.props.routeProps} />
                <Header />
                <HomeSplit_A />
                <Footer />
            </div>
        );
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
)(Home);