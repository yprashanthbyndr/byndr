import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer } from '../../theme/components';

interface props {
    OpenMenuBar: boolean
    fromPage: any
}

class BlogChild3 extends Component<props, any> {
    constructor(props) {
        super(props);
    }
    render(): any {
        return (
            <React.Fragment>
                 <Header/>
                <div>
                    <h1>BlogChild3</h1>
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
)(BlogChild3);