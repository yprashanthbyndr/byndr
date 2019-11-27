import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class ContactFormAddress extends React.Component<props, any> {

    render(): any {
        return (
            
            <div className="contact-form-address-inr">
            <h3>Our offices</h3>
            <div className="contact-form-address-block">
              <div className="single_address_name">
                <h4>USA</h4>
                <span className="address_details">
                  <span className="address_maincity">Philadelphia, USA</span>
                  <span className="address_streetAddress">100 W. Oxford Street, Suite E1500</span>
                  <span className="address_Locality">Philadelphia, PA 19122, USA</span>
                </span>
              </div>
              <div className="single_address_name">
                <h4>Hyderabad</h4>
                <span className="address_details">
                  <span className="address_maincity">Hyderabad, India</span>
                  <span className="address_streetAddress">Plot # 632, 4th Floor</span>
                  <span>Babukhan Rasheed Plaza</span>
                  <span>Road No 36, Aditya Enclave</span>
                  <span>Venkatagiri, Jubilee Hills</span>
                  <span className="address_Locality">Hyderabad, Telangana 500033</span>
                </span>
              </div>
            </div>
          </div>
        
            );
    }
}