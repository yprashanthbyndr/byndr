import React from 'react';
import { NavLink } from 'react-router-dom';
import { Blog_img } from '../../assets';

interface props {
    onLeftMenu?(): void;
}

export default class BlogList extends React.Component<props, any> {

    render(): any {
        return (
          <section className="blogListContainer">
            <div className="blogList">
              <div className="blogList_inr">
                <div className="blogList_product_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
                <div className="blogList_group">
                  {/* single blogList start*/}
                  <div className="single_blogList">
                    <div className="single_blogList_featured_image">
                      <img src={Blog_img} />
                    </div>
                    <div className="content_blogList">
                      <div className="blogList_title">Lorem ipsum dolor sit</div>
                      <div className="blogList_feature_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</div>
                      <div className="blogList_link"><NavLink exact to="/">Know More</NavLink></div>
                    </div>
                  </div>
                  {/* single block end*/}
                  {/* single blogList start*/}
                  <div className="single_blogList">
                    <div className="single_blogList_featured_image">
                      <img src={Blog_img} />
                    </div>
                    <div className="content_blogList">
                      <div className="blogList_title">Lorem ipsum dolor sit</div>
                      <div className="blogList_feature_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</div>
                      <div className="blogList_link"><NavLink exact to="/">Know More</NavLink></div>
                    </div>
                  </div>
                  {/* single block end*/}
                  {/* single blogList start*/}
                  <div className="single_blogList">
                    <div className="single_blogList_featured_image">
                      <img src={Blog_img} />
                    </div>
                    <div className="content_blogList">
                      <div className="blogList_title">Lorem ipsum dolor sit</div>
                      <div className="blogList_feature_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</div>
                      <div className="blogList_link"><NavLink exact to="/">Know More</NavLink></div>
                    </div>
                  </div>
                  {/* single block end*/}
                  {/* single blogList start*/}
                  <div className="single_blogList">
                    <div className="single_blogList_featured_image">
                      <img src={Blog_img} />
                    </div>
                    <div className="content_blogList">
                      <div className="blogList_title">Lorem ipsum dolor sit</div>
                      <div className="blogList_feature_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</div>
                      <div className="blogList_link"><NavLink exact to="/">Know More</NavLink></div>
                    </div>
                  </div>
                  {/* single block end*/}
                </div>
            </div>
          </div>
        </section>
        );
    }
}