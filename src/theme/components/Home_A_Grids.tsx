import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../contextApi/AppContext';
import { slider_1, open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb, byndr_android, byndr_ios, byndr_responsive_platform, vvit_img, stanley_img, vardhaman_img, gprec_img, author_Img } from "../../assets";

interface props {
  onLeftMenu?(): void;
}

export default class Home_A_Grids extends React.Component<props, any> {
  render(): any {
    return (
        <section>
          <div className="homeGrid">
            <div className="homeGrid_inr">
              <div className="homeGridList">
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={open_book} />
                    </div>
                    <div className="homeSingleGridContent">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={teamwork} />
                    </div>
                    <div className="homeSingleGridContent">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={medical_history} />
                    </div>
                    <div className="homeSingleGridContent">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={earth_globe} />
                    </div>
                    <div className="homeSingleGridContent">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={blackboard} />
                    </div>
                    <div className="homeSingleGridContent">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={light_bulb} />
                    </div>
                    <div className="homeSingleGridContent">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    );
  }
}