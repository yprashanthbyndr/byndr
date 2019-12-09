import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer } from '../../theme/components';

interface props {
    Content: any

}

class BlogItems extends Component<props, any> {

    constructor(props) {
        super(props);
    }

    render(): any {

        console.log(" props : ", this.props);
        return (
            <div>
                <Header />

                {this.props.Content}
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
)(BlogItems);