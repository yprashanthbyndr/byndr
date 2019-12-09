import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer } from '../../theme/components';

interface props {

    MainReducer: any
    OpenMenuBar: boolean
    fromPage: any
}

class BlogChild1 extends Component<props, any> {

    constructor(props) {
        super(props);
    }

    render(): any {
        return (
            <React.Fragment>
                <Header/>
                <div>
                    <h1>BlogChild 1</h1>
                </div>
                <Footer/>
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
)(BlogChild1);