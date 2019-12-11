import React from 'react';
import { NavLink } from 'react-router-dom';
import { penn_img, testimonial_person, open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb } from '../../assets';

interface props {
    onLeftMenu?(): void,
    Title?:string,
    content?:string
}

export default class ProductForRolesBlock extends React.Component<props, any> {

    render(): any {
        return (
            <section>
    <div className="homeGrid product-role">
      <div className="homeGrid_inr">
        <div className="widget_title"> BYNDR FOR {this.props.Title} </div>
        <div className="product-role-small_content">{this.props.content}</div>
        <div className="homeGridList">
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={teamwork} />
              </div>
              <div className="homeSingleGridContent">
              Cloud-based LMS
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={medical_history} />
              </div>
              <div className="homeSingleGridContent">
              	Attendance &amp; Student Performance
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={earth_globe} />
              </div>
              <div className="homeSingleGridContent">
              Create Courses
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={blackboard} />
              </div>
              <div className="homeSingleGridContent">
              Create Your Own Library
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={light_bulb} />
              </div>
              <div className="homeSingleGridContent">
              Quiz, Assignments, Polls and Assessments
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={medical_history} />
              </div>
              <div className="homeSingleGridContent">
              Weightage-Based Grading
              </div>
            </div>
          </div>
          <div className="homeSingleGrid">
            <div className="homeSingleGridinr">
              <div className="homeSingleGridIcon">
                <img src={earth_globe} />
              </div>
              <div className="homeSingleGridContent">
              Personalized, Social and Mobile Learning
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  </section>
        );
    }
}