import React from 'react';

import { Header, Footer, Navigation, Seo } from '../theme/components';


import { connect } from 'react-redux';
interface props {
    onLeftMenu?(): void;
    ContactFormSubmitSuccess: boolean,
    routeProps:any
}

class PrivacyPolicy extends React.Component<props, any> {


    constructor(props: any) {
        super(props);

    }
    render(): any {

        return (
            <div>
                <Seo seoData={this.props.routeProps} />
                <Header />
                <div className="bodySection">
                    <div className="middleBlockContainer">
                    <div style={{padding:"62px 0"}}>
                    <h1>Privacy Policy</h1>
                    <p>Last updated on July 1st, 2016</p>
                    <p>
                    Byndr, Inc. is committed to the protection of your privacy. Keeping your information secure and confidential is a critical part of our business.
                    </p>
                    <p>We <u><i>NEVER</i></u> rent, sell or trade your personal information to anyone.</p>
                    <p>This Privacy Policy describes the specific policies and procedures we use to collect, utilize, and disclose and share with others, information provided to us through the use of our web sites and applications of Byndr, Inc. (our "Services"). We refer to Byndr, Inc. collectively as <b>"Byndr"</b> or <b>"we"</b> or <b>"us"</b>. We refer to those who visit our website and those who use our web and mobile applications collectively as <b>"users"</b> and singularly as <b>"you."</b> Together with our Terms of Use, this Privacy Policy governs your use of our Services.</p>
                    <p>If you are using any of the Services through an educational or other institution that is a customer of Byndr, this policy does not supersede the terms of any agreements between Byndr and any other party, nor does it affect the terms of any agreement between any user of the Services and their employer, their educational institution or any third party. Please make sure that you read the terms of any privacy policies that you enter into with parties other than Byndr, including your employer or educational institution, as those policies may also explain how your personal information is used by those parties.</p>
                    <h4>Information we collect</h4>
                    <p><b>In General.</b> We may collect information that can identify you such as your name and email address ("personal information") and other information that does not identify you. We may collect this information through a website or a mobile application. By using the Service, you are authorizing us to collect, use, and share information related to the provision of the Service.</p>
                    <p><b>Information we collect.</b> We may be provided with the following information by the applicable educational or other institution when your account is created with Byndr to use our Services:</p>
                    <ul>
                        <li>Name</li>
                        <li>E-mail address </li>
                        <li>Mailing address </li>
                        <li>Phone number </li>
                        <li>Student identification number </li>
                        <li>Academic records </li>
                        <li>Materials</li>
                    </ul>
                    <p><b>Information collected automatically.</b> We automatically collect information from your browser or device when you visit our Service. This information could include your IP address, device ID and type, your browser type and language, the operating system used by your device, access times, your mobile device’s geographic location while our application is actively running, and the referring website address.</p>
                    <p><b>Cookies and Use of Cookie Data.</b> When you visit our Service, we may assign your device one or more cookies to facilitate access to our Service and to personalize your experience and improve the general experience of our website. Through the use of a cookie, we also may automatically collect information about your activity on our Service, such as the pages you visit, the time and date of your visits and the links you click. You can change your browser settings to stop accepting cookies or to prompt you before accepting a cookie from the websites you visit. If your browser does not accept cookies, however, you may not be able to easily access all aspects of the Byndr Service.</p>
                    <p><b>Other Technologies.</b> We may use standard Internet technology, such as web beacons and other similar technologies, to track your use of our Service and to deliver or communicate with cookies. We also may include web beacons in email messages to determine whether messages have been opened and acted upon. The information we obtain in this manner enables us to customize the services we offer users, to deliver targeted advertisements and to measure the overall effectiveness of our online advertising, content, programming or other activities.</p>
                    <h4>How we use the information we collect</h4>
                    <p><b>In General.</b> We may use information that we collect about you to:</p>
                    <ul>
  <li>deliver and improve our products and services, and manage our business; </li>
  <li>personalize your experience of your use of our Service; </li>
  <li>manage your account and provide you with customer support; </li>
  <li>perform research and analysis about your use of, or interest in, our or others’ products, services, or content; </li>
  <li>communicate with you by email, postal mail, telephone and/or mobile devices about products or services that may be of interest to you either from us or other third parties; </li>
  <li>website or mobile application analytics; </li>
  <li>enforce or exercise any rights in our Terms of Use; and </li>
  <li>perform functions or services as otherwise described to you at the time of collection. </li>
</ul>
<p>In all circumstances, we may perform these functions directly or use a third party vendor to perform these functions on our behalf who will be obligated to use your personal information only to perform services for us.</p>
<h4>Information Sharing and Disclosure </h4>
<p><b>Personal information.</b> We do not share your personal information with others except as indicated in this Privacy Policy or when we inform you and give you an opportunity to opt out of having your personal information shared. We may share personal information with:</p>
<ul>
  <li><b>Other Users.</b> We may share information, including the information listed above, to other Users in order for Byndr to provider our Services. Your information may be shared with other students, teachers, administrators, or other educationally related providers or institutions in connection with your use of our Services.</li>
  <li><b>Service providers.</b> We may share information, including personal and financial information, with third parties that perform certain services on our behalf. These services may include fulfilling orders, providing customer service and marketing assistance, performing business and sales analysis, ad tracking and analytics, member screenings, supporting our Service functionality, and supporting contests, sweepstakes, surveys and other features offered through our Service. These service providers may have access to personal information needed to perform their functions but are not permitted to share or use such information for any other purposes.</li>
  <li><b>Legal Requirements.</b> In response to a subpoena or similar investigative demand, a court order, or a request for cooperation from a law enforcement or other government agency; to establish or exercise our legal rights; to defend against legal claims; or as otherwise required by law. In such cases, we may raise or waive any legal objection or right available to us.</li>
  <li><b>Protection of Others.</b>  When we believe disclosure is appropriate in connection with efforts to investigate, prevent, or take other action regarding illegal activity, suspected fraud or other wrongdoing; to protect and defend the rights, property or safety of our company, our users, our employees, or others; to comply with applicable law or cooperate with law enforcement; or to enforce our Terms of Use or other agreements or policies.</li>
  <li><b>Change of Control.</b> In connection with a substantial corporate transaction, such as the sale of our business, a divestiture, merger, consolidation, or asset sale, or in the unlikely event of bankruptcy.</li> </ul>
  <p><b>Data Aggregation.</b> We may collect information about your use of our mobile application and visits to our website during your use of our Service, which is then used on an anonymized, aggregated basis for analytics purposes. This information is used strictly for analytics purposes and to help us improve our features and quality of service.</p>
  <h4>How you can access your information</h4>
  <p>If you have a Byndr account, you have the ability to review and update your personal information within the Service by opening your account and going to settings. More information about how to contact us is provided below. If the applicable educational or other institution chooses to discontinue the use of the Byndr Serivces, the User accounts will be closed in connection with the discontinued use of our Services. We will retain certain information associated with your account for analytical purposes and recordkeeping integrity, as well as to prevent fraud, enforce our Terms of Use, take actions we deem necessary to protect the integrity of our Service or our users, or take other actions otherwise permitted by law. In addition, if certain information has already been provided to third parties as described in this Privacy Policy, retention of that information will be subject to those third parties' policies.</p>
<h4>Your choices about collection and use of your information</h4>
<p>You can choose not to provide us with certain information, but that may result in you being unable to use certain features of our Service because such information may be required in order for you to register as user; purchase products or services; participate in a contest, promotion, survey, or sweepstakes; ask a question; or initiate other transactions.

Our Service may also deliver notifications to your phone or mobile device. You can disable these notifications by deleting the relevant Service or by changing the settings on your mobile device.

You can also control information collected by cookies. You can delete or decline cookies by changing your browser settings. Click "help" in the toolbar of most browsers for instructions. Please see more detailed information in the "Cookies and Use of Cookie Data" section above.</p>
<h4>Security Measures</h4>
<p>We take security measures to help safeguard your personal information from unauthorized access and disclosure. However, no system can be completely secure. Therefore, although we take steps to secure your information, we do not promise, and you should not expect, that your personal information, chats, or other communications will always remain secure. Users should also take care with how they handle and disclose their personal information and should avoid sending personal information through insecure email.</p>
<h4>Our policy towards children</h4>
<p>Byndr users must not be under the age of 13. We do not target any portion of our service to children under the age of 13, and we will delete any accounts or data of users that we believe to be under the age of 13 to be in compliance with the Children’s Online Privacy Protection Act. If a parent or guardian becomes aware that his or her child has provided us with personally identifiable information without their consent, he or she should contact us at info@byndr.in.</p>
<h4>Changes to our Privacy Policy</h4>
<p>Any information that is collected is subject to the privacy policy in effect at the time such information is collected. We may, however, modify and revise our privacy policy from time to time. If we make any material changes to this policy, we will notify you of such changes by posting them on the service or by sending you an email or other notification, and we will indicate when such changes will become effective. By continuing to access or use the Byndr service after those changes become effective, you are agreeing to be bound by the revised policy. Please visit our privacy policy regularly to review any changes.
</p>
<h4>How to contact us</h4>
<p>If you have any questions about this Privacy Policy, please contact us by email or postal mail as follows:</p>
<p>Byndr, Inc.
<br/>
6E 1st Ave
<br/>
Suite 103
<br/>
Conshohocken PA 19428
<br/>
<a href="mailto:info@byndr.com">info@byndr.com</a>
</p>
<p>We take privacy and/or security concerns very seriously and will make every effort to address them promptly and reliably.</p>
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
)(PrivacyPolicy);
