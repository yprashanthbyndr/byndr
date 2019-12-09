import React, { Component } from 'react';
import { Header, Footer } from '../../theme/components';

interface props {
    content: any
}

export default class blogContent extends Component<props, any> {

    constructor(props) {
        super(props);
    }
    render(): any {
        return (
            <div>
                <Header />
                {this.props.content}
                <Footer />
            </div>
        )
    }

}