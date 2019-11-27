import React from 'react';
import { NavLink } from 'react-router-dom';
import { Blog_img } from '../../assets';

interface props {
    onLeftMenu?(): void;
}

export default class ContactUsForm extends React.Component<props, any> {

    render(): any {
        return (
            <div className="contact-form-container">
            <h2>Get In Touch</h2>
            <p>We're here for you, and we're wearing our thinking caps. But first swing by our fantastic <a href="#">Help Center</a> for all your Byndr product and technical&nbsp;needs!
            </p>
            <form method="post" id="contact_form" className="contact-form-viewed">
              <div className="singleField">
                <div className="input-select-wrapper" style={{width: '498px'}}>
                  <select id="contact_purpose">
                    <option value="" disabled selected>Title</option>
                    <option value="College Administrator">College Administrator</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="singleField">
                <input type="text" name="name" id="contact_name" placeholder="Name" autoComplete="off"  />
              </div>
              <div className="singleField">
                <input type="text" name="email" id="contact_email" placeholder="Email" autoComplete="off"  />
              </div>
              <div className="singleField">
                <input type="text" name="text" id="contact_phone"  placeholder="Phone Number" autoComplete="off"  />
              </div>
              <div className="singleField">
                <input type="text" name="text" id="contact_position" placeholder="Position at College" autoComplete="off"  />
              </div>
              <div className="singleField">
                <input type="text" name="text" id="contact_college_name" placeholder="College/University Name" autoComplete="off"  />
              </div>
              <div className="singleField">
                <input type="text" name="text" id="contact_no_of_students" placeholder="Number of Students in your College" autoComplete="off"  />
              </div>
              <div className="singleField">
                <textarea rows={7} name="question" id="contact_question" placeholder="Your Message" maxLength={5000} />
              </div>
              <div className="singleField"><input type="submit" defaultValue="Send It!" /></div>
            </form>
          </div>
            );
    }
}