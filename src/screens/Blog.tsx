import React, { Component } from 'react';

import { Header, Footer, Navigation, BlogList, InnerPageTitleBlock } from "../theme/components";

import { connect } from 'react-redux';

interface props {

    MainReducer: any
    OpenMenuBar: boolean

}

class Blog extends Component<props, any> {


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
    }

    render(): any {
        return (
            <React.Fragment>
                <Header />
                <InnerPageTitleBlock />
                <BlogList />
                <Footer />
            </React.Fragment>
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
)(Blog);