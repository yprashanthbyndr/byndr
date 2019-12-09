import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer } from '../../theme/components';
import BlogItems from './BlogItems';


interface props {

    OpenMenuBar: boolean
    fromPage: any

}

class BlogChild2 extends Component<props, any> {


    constructor(props) {
        super(props);
    }



    render(): any {
        return (
            <div>
                <BlogItems Content={<BlogData />} />
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
)(BlogChild2);


const BlogData = () => {

    return (
        <div>
            <h1>
                from  Child  Blog 2
            </h1>
        </div>
    )
}