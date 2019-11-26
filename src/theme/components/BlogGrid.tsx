import React from 'react';
import { NavLink } from 'react-router-dom';
import { Blog_img } from '../../assets';

interface props {
    onLeftMenu?(): void;
}

export default class BlogGrid extends React.Component<props, any> {

    render(): any {
        return (
          <section>
          <div className="blog">
            <div className="blog_inr">
              <div className="product-role-small_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</div>
              <div className="blog_group">
                {/* single blog start*/}
                <div className="single_blog">
                  <div className="featured_image">
                    <img src={Blog_img} />
                    <div className="overlay" />
                  </div>
                  <div className="content_blog">
                    <div className="blog_title">Lorem ipsum dolor sit</div>
                    <div className="blog_feature_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</div>
                    <div className="blog_link"><NavLink exact to="/">Know More</NavLink></div>
                  </div>
                </div>
                {/* single block end*/}
                {/* single blog start*/}
                <div className="single_blog">
                  <div className="featured_image">
                    <img src={Blog_img} />
                    <div className="overlay" />
                  </div>
                  <div className="content_blog">
                    <div className="blog_title">Lorem ipsum dolor sit</div>
                    <div className="blog_feature_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</div>
                    <div className="blog_link"><NavLink exact to="/">Know More</NavLink></div>
                  </div>
                </div>
                {/* single block end*/}
                {/* single blog start*/}
                <div className="single_blog">
                  <div className="featured_image">
                    <img src={Blog_img} />
                    <div className="overlay" />
                  </div>
                  <div className="content_blog">
                    <div className="blog_title">Lorem ipsum dolor sit</div>
                    <div className="blog_feature_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</div>
                    <div className="blog_link"><NavLink exact to="/">Know More</NavLink></div>
                  </div>
                </div>
                {/* single block end*/}
                {/* single blog start*/}
                <div className="single_blog">
                  <div className="featured_image">
                    <img src={Blog_img} />
                    <div className="overlay" />
                  </div>
                  <div className="content_blog">
                    <div className="blog_title">Lorem ipsum dolor sit</div>
                    <div className="blog_feature_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</div>
                    <div className="blog_link"><NavLink exact to="/">Know More</NavLink></div>
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