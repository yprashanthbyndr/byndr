import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';
import { slider_1,open_book,teamwork,medical_history,earth_globe,blackboard,light_bulb,byndr_android,byndr_ios,byndr_responsive_platform,vvit_img,stanley_img,vardhaman_img,gprec_img,author_Img } from "../../assets";

interface props {
    onLeftMenu?(): void;
}

export default class SupportedDivices extends React.Component<props, any> {
    render(): any {
        return (
          <AppContext.Provider value={{
              authenticated: false,
          }}>
            {/* home availble divices start */}
            <section>
              <div className="homeAvailableDivices">
                <div className="homeAvailableDivices_inr">
                  <div className="homeAvailableDivices_left">
                    <h3>
                      Lorem Ipsum is simply dummy text of the printing
                    </h3>
                    <div className="homeAvailableDivicesText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                    </div>
                    <div className="homeAvailableDivicesIcons">
                      <ul>
                        <li>
                        <NavLink exact to="/"><img src={byndr_android} /></NavLink>
                        </li>
                        <li>
                        <NavLink exact to="/"><img src={byndr_ios} /></NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="homeAvailableDivices_right">
                    <img src={byndr_responsive_platform} />
                  </div>
                </div>
              </div>
            </section>
            {/* home availble divices end */}
          </AppContext.Provider>
        );
    }
}