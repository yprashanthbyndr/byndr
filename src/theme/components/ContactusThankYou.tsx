import React from 'react';
import { AppContext } from '../../contextApi/AppContext';
import { FB_img, TW_img, Li_img } from '../../assets';

interface props {
    onLeftMenu?(): void;
}

export default class ContactusThankYou extends React.Component<props, any> {

    componentDidMount(): any {
        console.log("in header component: ", this.context);
    }
    render(): any {
        return (
            <div className="contact-thankyou-wrapper">
            <h2>Thank You for Getting in Touch!</h2>
            <p>In the mean time, see what kinds of cool stuff we are up to...</p>
            <a className="contact_facebook" href="#">
              <img src={FB_img} />
              Follow us on Facebook
            </a>
            <a className="contact_twitter" href="#">
              <img src={TW_img} />
              Follow us on Twitter
            </a>
            <a className="contact_linkedIn" href="#">
              <img src={Li_img} />
              Follow us on linkedIn
            </a>
          </div>
          );
    }
}

ContactusThankYou.contextType = AppContext;
