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
                  <img src="https://byndrblog.files.wordpress.com/2017/01/lms.png?w=450&amp;h=440&amp;crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title">What’s in store for Learning Management System India in 2017?
</div>
                  <div className="blogList_feature_content">
                    The market for learning management systems, including instructor-led training and distance learning, etc, was valued at 5.19 billion dollars in 2016 and is set to grow at 24% CAGR to become a USD 19.05 billion worth of industry in 2022. The same has been reported by Zion Market Research,
                       taking inputs from noteworthy inputs from the global leaders like McGraw-Hill Education</div>
                  <div className="blogList_link"><NavLink exact to="/blog/whats-in-store-for-learning-management-system-india-in-2017">Know More</NavLink></div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/12/lms.jpg?w=450&h=450&crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title">Key factors to consider when planning to
                   collaborate with a mobile LMS platform </div>
                  <div className="blogList_feature_content">
                  eLearning platforms in India have the power of transforming the way education is imparted in schools and companies. It is mandatory to introduce it as it can empower learning.
                   Here are some essential factors why the learners should leverage the advantages of elearning –
                     </div>
                  <div className="blogList_link">
                    <NavLink exact to="/blog/key-factors-to-consider-when-planning-to-collaborate-with-a-mobile-lms-platform">Know More</NavLink></div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/11/mobile-learning.png?w=366&h=415&crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title">Use of learning management systems in India</div>
                  <div className="blogList_feature_content">
                  For the past few years, the dream of strengthening the presence of learning management system in India has gained significant pace. The target of an LMS is to bring together the key components of the educational system – educators, administrators,
                   students – to bring together in an online space to boost interactions via announcements, SMS’,</div>
                  <div className="blogList_link">
                    <NavLink exact to="/blog/use-of-learning-management-systems-in-indi">Know More</NavLink></div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/11/mobile-learning-apps.jpg?w=450&h=450&crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title">Why colleges need mobile learning apps</div>
                  <div className="blogList_feature_content">
                  There’s no denying that building engagement with the students during the first year of college is a must for student retention, as their first-year experiences decide the tone for their educational careers. Nearly 35% of the freshmen students leave colleges on an average every year and just a mere 10% of these dropouts have poor grades.
                   In other words, poor grades are not responsible for making students leave colleges
                  </div>
                  <div className="blogList_link">
                    <NavLink exact to="/blog/why-colleges-need-mobile-learning-apps">Know More</NavLink></div>
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