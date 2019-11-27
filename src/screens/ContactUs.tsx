import React from 'react';

import { Header,Footer,Navigation, ContactUsForm, ContactusThankYou, ContactFormAddress } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';
interface props {
    onLeftMenu?(): void;
}

export default class ContactUs extends React.Component<props, any> {

    render(): any {

        return (
            <AppContext.Provider value={{
                authenticated: false,
            }}>
            <Header />
                <div className="bodySection">
                    <div className="contact_section">
                        <div className="contact_section_inr">
                            <div className="contact_section_form_section">
                                <ContactUsForm />
                                <ContactusThankYou />
                            </div>
                            <div className="contact-form-address">
                                <ContactFormAddress />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            {/* <Navigation /> */}
            </AppContext.Provider>
        )
    }
}