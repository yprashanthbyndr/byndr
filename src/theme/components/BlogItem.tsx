import React from 'react';
import { connect } from 'react-redux';

interface props {
    onLeftMenu?(): void
    Content: any
}

class BlogItem extends React.Component<props, any> {
    constructor(props: any) {
        super(props);
    }

    render(): any {
        return (
    <div className="SinlgeBlogItem">
        <div className="SinlgeBlogItemInr">
            <div className="SinlgeBlogItemMain">
                {this.props.Content}
            </div>
        </div>
    </div>);
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
)(BlogItem);