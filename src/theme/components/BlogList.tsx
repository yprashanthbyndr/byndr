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
            {/* <div className="blogList_product_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div> */}
            <div className="blogList_group">
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2017/01/lms.png?w=450&amp;h=440&amp;crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title"><NavLink exact to="/blog/whats-in-store-for-learning-management-system-india-in-2017">What's in store for Learning Management System India in 2017?</NavLink>
</div>
                  <div className="blogList_feature_content">
                    The market for learning management systems, including instructor-led training and distance learning, etc, was valued at 5.19 billion dollars in 2016 and is set to grow at 24% CAGR to become a USD 19.05 billion worth of industry in 2022. The same has been reported by Zion Market Research...</div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/12/lms.jpg?w=450&h=450&crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title"><NavLink exact to="/blog/key-factors-to-consider-when-planning-to-collaborate-with-a-mobile-lms-platform">Key factors to consider when planning to collaborate with a mobile LMS platform </NavLink></div>
                  <div className="blogList_feature_content">
                  eLearning platforms in India have the power of transforming the way education is imparted in schools and companies. It is mandatory to introduce it as it can empower learning.
                   Here are some essential factors why the learners should leverage the advantages of elearning –
                     </div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/11/mobile-learning.png?w=366&h=415&crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title"><NavLink exact to="/blog/use-of-learning-management-systems-in-indi">Use of learning management systems in India</NavLink></div>
                  <div className="blogList_feature_content">
                  For the past few years, the dream of strengthening the presence of learning management system in India has gained significant pace. The target of an LMS is to bring together the key components of the educational system – educators, administrators...</div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/11/mobile-learning-apps.jpg?w=450&h=450&crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title"><NavLink exact to="/blog/why-colleges-need-mobile-learning-apps">Why colleges need mobile learning apps</NavLink></div>
                  <div className="blogList_feature_content">
                  There’s no denying that building engagement with the students during the first year of college is a must for student retention, as their first-year experiences decide the tone for their educational careers. Nearly 35% of the freshmen students leave colleges on an average every year and just a mere 10% of these dropouts have poor grades.
                  </div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/11/course-management-system.jpg?w=222&h=210&crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title"><NavLink exact to="/blog/mobile-learning-empowering-education-industry">Mobile learning empowering education industry</NavLink></div>
                  <div className="blogList_feature_content">
                  A common belief held by many that the use of mobile technologies has been successfully changing the way how we life is led and education is accessed. The constant blurring of lives (be it social, learning, business or educational) is responsible for changing the basic pattern of communication and interaction. </div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/10/lmsindia.jpg?w=222&h=222&crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title"><NavLink exact to="/blog/mobile-learning-empowering-education-industrylearning-management-systems-self-paced-and-easy-to-use">Learning management systems: Self-paced and easy to use</NavLink></div>
                  <div className="blogList_feature_content">
                  Digital learning  has become a way of life for many. The growing advancement of technology has been responsible for driving profound changes in the learning field. Personalised learning environments are a reality now and learning management systems (LMS) stands as an undeniable blessing for the education industry... </div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/10/bright-future.gif?w=222&h=222&crop=1&zoom=2 1.5x" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title"><NavLink exact to="/blog/bright-future-ahead-for-lms-industry">Bright future ahead for LMS industry
</NavLink></div>
                  <div className="blogList_feature_content">
                  Learning management systems (LMS) have emerged as an integral part of the higher education, K-12 and business environments. There’s no denying that LMS market is diverse and also growing at a rapid scale. Currently, about 70% of the K-12 education system enjoys access to smartphones and this percentage is only going up with time. In simple words, this allows the smartphones to be used as a learning device and app as a possible medium to connect with millions of students...</div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/09/startups.gif?w=222&h=222&crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title"><NavLink exact to="/blog/how-online-learning-platform-can-help-startup-ventures">How online learning platform can help startup ventures
</NavLink></div>
                  <div className="blogList_feature_content">
                  Many people have persistent misconceptions that online learning platforms are solely meant for the MNCs and conglomerates that have strong employee base and budget. In actuality, startups and small businesses can also bag considerable benefit from a learning management system. When using an LMS, companies irrespective of their size and industry vertical can enhance profit and boost clientele base...</div>
                </div>
              </div>
              {/* single block end*/}
              {/* single blogList start*/}
              <div className="single_blogList">
                <div className="single_blogList_featured_image">
                  <img src="https://byndrblog.files.wordpress.com/2016/09/leaning-management-system.gif?w=222&h=222&crop=1" />
                </div>
                <div className="content_blogList">
                  <div className="blogList_title"><NavLink exact to="/blog/blog-post-title-5">Understanding the benefits of Learning management system
</NavLink></div>
                  <div className="blogList_feature_content">
                  In general, this integrated software offers a flexible architecture that can be altered accordingly. Moreover, an LMS can address the scalability concerns often raised by educators. The concept of having an online learning platform is new to India, but it is quickly gaining acceptance. It allows the instructors to create and deliver their content while simultaneously monitor the student participation and review performance.</div>
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