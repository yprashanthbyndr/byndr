import React from 'react';

import { Header, Footer, Navigation, ContactUsForm, ContactusThankYou, ContactFormAddress, Seo } from '../theme/components';




import { connect } from 'react-redux';
interface props {
    onLeftMenu?(): void;
    ContactFormSubmitSuccess: boolean,
    routeProps:any
}

class ContactUs extends React.Component<props, any> {


    constructor(props: any) {
        super(props);

    }
    render(): any {

        return (
            <div>
                <Seo seoData={this.props.routeProps} />
                <Header />
                <div className="bodySection">
                    <div className="contact_section">
                        <div className="contact_section_inr">
                            <div className="contact_section_form_section">
                                {this.props.ContactFormSubmitSuccess ? <ContactusThankYou /> :
                                    <ContactUsForm />}

                            </div>
                            <div className="contact-form-address">
                                <ContactFormAddress />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
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
)(ContactUs);
