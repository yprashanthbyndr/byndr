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
              // authenticated: false,
          }}>
            {/* home availble divices start */}
            <section>
              <div className="homeAvailableDivices">
                <div className="homeAvailableDivices_inr">
                  <div className="homeAvailableDivices_left">
                    <h3>
                      Access Byndr Anyplace & Anytime
                    </h3>
                    <div className="homeAvailableDivicesText">
                      With our deep experience in technology products, Byndr aims to provide an easy-to-use, fast, and mobile-first platform to benefit all stakeholders in higher education. Byndr has been designed and developed with attention on connectivity and the mobile user experience. Our native Android app & iOS along with responsive web apps - are lightweight, ensuring every student and teacher, no matter where they live, has access to educational resources inside and outside the classroom.
                    </div>
                    <div className="homeAvailableDivicesIcons">
                      <ul>
                        <li>
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=org.byndr.byndr&hl=en"><img src={byndr_android} /></a>
                        </li>
                        <li>
                        <a target="_blank" href="https://apps.apple.com/gb/app/byndr/id1375913014"><img src={byndr_ios} /></a>
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