import React from 'react';
interface props {
    onLeftMenu?(): void,
    OpenModelPopup: any
}

export default class ModelPopup extends React.Component<props, any> {

    render(): any {
        return (
            
            <React.Fragment>
                <div className='model_popup'>
        <div className='model_popup_inner'>
            <button onClick={this.props.OpenModelPopup}>close me</button>
        </div>
      </div>
            </React.Fragment>
        );
    }
}