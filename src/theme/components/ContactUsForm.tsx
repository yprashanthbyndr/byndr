import React from 'react';
import { NavLink } from 'react-router-dom';
import { Blog_img } from '../../assets';
import { connect } from 'react-redux';
import { CantactUs_Ip_Values, SubmitContactPage } from '../../services';

interface props {
  onLeftMenu?(): void;
  ContactUsForm: any

}




class ContactUsForm extends React.Component<props, any> {

  constructor(props: any) {
    super(props);

  }


  ReadeInput(field: string, value: any) {

    console.log(" in ReadeInput ", field, value);

    CantactUs_Ip_Values(field, value)

  }

  OnClickSubmitForm() {

    let FormDetails = this.props.ContactUsForm
    if (FormDetails.name == '' || FormDetails.title == '' || FormDetails.num_students == '' ||
      FormDetails.institution == '' || FormDetails.email == '' ||
      FormDetails.comments == '' || FormDetails.phone == '' || FormDetails.Position == '') {
      alert('please enter valid details')
    } else {
      let validate = validateEmail(FormDetails.email);
      console.log("./ . /. / validate : ", validate);
      // let ObjectResponseis = this.props.ContactUsForm
      SubmitContactPage(FormDetails)
    }

  }

  render(): any {

    console.log(" in contact us page : ", this.props);

    console.log("ContactUsForm : ", this.props.ContactUsForm);

    return (
      <div className="contact-form-container">
        <h2>Get In Touch</h2>
        <p>We're here for you, and we're wearing our thinking caps. But first swing by our fantastic <a href="#">Help Center</a> for all your Byndr product and technical&nbsp;needs!
            </p>
        {/* <form
        //  method="post" 
         id="contact_form" className="contact-form-viewed"> */}
        <div>
          <div className="singleField">
            <div className="input-select-wrapper" style={{ width: '498px' }}>
              <select id="contact_purpose"
                onChange={(txt) => this.ReadeInput('title', txt.target.value)}
                // onSelect= {(txt) => this.ReadeInput('title', txt)}
                // onClick={(txt) => this.ReadeInput('title', txt)}
                value={this.props.ContactUsForm.title}
              >
                <option value="" disabled selected>Title</option>
                <option value="College Administrator">College Administrator</option>
                <option value="Faculty">Faculty</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="singleField">
            <input type="text" name="name" id="contact_name" placeholder="Name" autoComplete="off"
              value={this.props.ContactUsForm.name}
              onChange={(txt) => this.ReadeInput('name', txt.target.value)}
            />
          </div>
          <div className="singleField">
            <input type="text" name="email" id="contact_email" placeholder="Email" autoComplete="off"
              value={this.props.ContactUsForm.email}
              onChange={(txt) => this.ReadeInput('email', txt.target.value)}
            />
          </div>
          <div className="singleField">
            <input type="text" name="text" id="contact_phone" placeholder="Phone Number" autoComplete="off"
              value={this.props.ContactUsForm.phone}
              onChange={(txt) => this.ReadeInput('phone', txt.target.value)}
            />
          </div>
          <div className="singleField">
            <input type="text" name="text" id="contact_position" placeholder="Position at College" autoComplete="off"
              value={this.props.ContactUsForm.Position}
              onChange={(txt) => this.ReadeInput('Position', txt.target.value)}
            />
          </div>
          <div className="singleField">
            <input type="text" name="text" id="contact_college_name" placeholder="College/University Name" autoComplete="off"
              value={this.props.ContactUsForm.institution}
              onChange={(txt) => this.ReadeInput('institution', txt.target.value)}
            />
          </div>
          <div className="singleField">
            <input type="text" name="text" id="num_students" placeholder="Number of Students in your College" autoComplete="off"
              value={this.props.ContactUsForm.num_students}
              onChange={(txt) => this.ReadeInput('num_students', txt.target.value)}
            />
          </div>
          <div className="singleField">
            <textarea rows={7} name="question" id="contact_question" placeholder="Your comments" maxLength={5000}
              value={this.props.ContactUsForm.comments}
              onChange={(txt) => this.ReadeInput('comments', txt.target.value)}
            />
          </div>
          <div className="singleField" onClick={() => this.OnClickSubmitForm()}>
            <input type="submit" defaultValue="Send It!" />
          </div>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

const map = (state: any) => {
  return {
    ...state.MainReducer
  };
};

export default connect(
  map,
  null,
)(ContactUsForm);


function validateEmail(email: any) {
  // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true)
  }
  alert("You have entered an invalid email address!")
  return (false)
}