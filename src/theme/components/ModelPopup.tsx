import React from 'react';
import { Open_Or_Close_MenuBar,Open_Or_Close_PlayVideo } from '../../services';
interface props {
    onLeftMenu?(): void,
    OpenPlayVideo?:boolean,
}

export default class ModelPopup extends React.Component<props, any> {

    render(): any {
       const show = this.props.OpenPlayVideo
        return (
            
               <div className="model_popup" style={{ display: show ? 'block' : 'none' }}>
                   <div className="backdrop_close"  onClick={() =>   {
                                            Open_Or_Close_PlayVideo()
                                        }}></div>
        <div className='model_popup_inner'>
            <span className="model_popup_close" onClick={() =>   {
                                            Open_Or_Close_PlayVideo()
                                        }}><i className="fa fa-times-thin fa-2x" aria-hidden="true"></i></span>
                                      <iframe
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/AmFFG7LfQuo`}
        frameBorder="0"
      />
        </div>
        
      </div>
           
        );
    }
}