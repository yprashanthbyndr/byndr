import React from 'react';
import { NavLink } from 'react-router-dom';
import { penn_img, testimonial_person, open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb } from '../../assets';

interface props {
    onLeftMenu?(): void,
    Title?:string,
    content?:string,
    gridList?:any
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
          {this.props.gridList.map((singleGrid,index)=>{
          return <div className="homeSingleGrid" key={index}>
          <div className="homeSingleGridinr">
          <div className="homeSingleGridIcon">
          <img src={singleGrid.image} />
          </div>
          <div className="homeSingleGridContent">
          {singleGrid.title}
          </div>
          </div>
          </div>
          })}
        </div>
      </div>
    </div>
  </section>
        );
    }
}