import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ModelPopup from './ModelPopup';
import { Open_Or_Close_PlayVideo } from '../../services';

interface props {
    onLeftMenu?(): void,
    fromPage:any,
    pageSubtitle:any,
    videoDisplay:any,
    tryBtnDisplay:any,
    OpenModelPopup?: any,
    OpenPlayVideo?:boolean,
    role?:any
}

class InnerPageTitleBlock extends React.Component<props, any> {
  constructor(props) {
    super(props);
    this.state = { OpenModelPopup: false };
}

togglePopup() {
  this.setState({
    OpenModelPopup: !this.state.OpenModelPopup
  });
}
    render(): any {

      const {fromPage,pageSubtitle,videoDisplay,tryBtnDisplay,OpenPlayVideo} = this.props

        return (
            <section>
            <div className={this.props.role =="admins"?"homeBanner_forAdmin":this.props.role =="teachers"?"homeBanner_forTeacher":this.props.role =="teachers"?"homeBanner_forStudent":"homeBanner_backgroundimage"}>
              <div className="homeBanner_main">
                <div className="homeBanner_contentblock">
                  <div className="banner_title">
                    {fromPage}
                  </div>
                  {pageSubtitle !=""?<div className="banner_content">
                    {pageSubtitle}
                  </div>:null}
                  {videoDisplay == "true"?<div className="video">
                    <div className="home_v2_banner_play">
                      <div className="home_v2_banner_play_icon" onClick={() =>   {
                                            Open_Or_Close_PlayVideo()
                                        }}>
                        <i className="material-icons">
                            play_arrow
                          </i>
                      </div>
                    </div>
                  </div>:null}
                  {/* <button onClick={() =>   {
                                            Open_Or_Close_PlayVideo()
                                        }}> Play</button> */}
                                                 {/* {OpenPlayVideo ?
         <ModelPopup OpenPlayVideo={OpenPlayVideo}/>
         : null
       } */}
                  
         <ModelPopup OpenPlayVideo={OpenPlayVideo}/>
         
                  {tryBtnDisplay == "true"?<div className="CallToAction_btn">
                    <div className="CallToAction_btn_inr">
                      <a href="./"> 
                        Start using Byndr Free.
                      </a>
                    </div>
                  </div>:null}
                </div>
              </div>
            </div>
          </section>          
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
)(InnerPageTitleBlock);