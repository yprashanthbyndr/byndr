import React from 'react';
import { FB_img, TW_img, Li_img } from '../../assets';

interface props {
    onLeftMenu?(): void;
}

export default class ContactusThankYou extends React.Component<props, any> {

    componentDidMount(): any {
    }
    render(): any {
        return (
            <div className="contact-thankyou-wrapper">
            <h2>Thank You for Getting in Touch!</h2>
            <p>In the mean time, see what kinds of cool stuff we are up to...</p>
            <a className="contact_facebook" target="_blank" href="https://facebook.com/ByndrApp">
              <img src={FB_img} />
              Follow us on Facebook
            </a>
            <a className="contact_twitter"  target="_blank" href="https://twitter.com/Byndr_Mobile">
              <img src={TW_img} />
              Follow us on Twitter
            </a>
            <a className="contact_linkedIn"  target="_blank" href="https://www.linkedin.com/company/byndr/about/">
              <img src={Li_img} />
              Follow us on linkedIn
            </a>
          </div>
          );
    }
}
