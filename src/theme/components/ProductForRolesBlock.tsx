import React from 'react';
import { NavLink } from 'react-router-dom';
import { penn_img, testimonial_person, open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb } from '../../assets';

interface props {
    onLeftMenu?(): void;
}

export default class ProductForRolesBlock extends React.Component<props, any> {

    render(): any {
        return (
            <section>
    <div className="homeGrid product-role">
      <div className="homeGrid_inr">
        <div className="widget_title"> WHO IS BYNDR IS FOR? </div>
        <div className="product-role-small_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</div>
        <div className="homeGridList">
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={open_book} />
              </div>
              <div className="homeSingleGridContent">
                Lorem dolor
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={teamwork} />
              </div>
              <div className="homeSingleGridContent">
                Consetetur
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={medical_history} />
              </div>
              <div className="homeSingleGridContent">
                Ipsum dolor sit
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={earth_globe} />
              </div>
              <div className="homeSingleGridContent">
                Mutryem Folor
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={blackboard} />
              </div>
              <div className="homeSingleGridContent">
                Lipsum smetiy
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={light_bulb} />
              </div>
              <div className="homeSingleGridContent">
                Consetetur sadipscing
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={medical_history} />
              </div>
              <div className="homeSingleGridContent">
                Ipsum dolor sit
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={earth_globe} />
              </div>
              <div className="homeSingleGridContent">
                Mutryem Folor
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