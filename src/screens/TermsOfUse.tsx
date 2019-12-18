import React from 'react';

import { Header, Footer, Navigation, Seo } from '../theme/components';


import { connect } from 'react-redux';
interface props {
    onLeftMenu?(): void;
    ContactFormSubmitSuccess: boolean,
    routeProps:any
}

class TermsOfUse extends React.Component<props, any> {


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
                    <h1>Terms of Use</h1>
                    <p>Last updated on July 1st, 2016</p>
                    <p>
                    Welcome to Byndr. Byndr is a service that facilitates communication and collaboration of academic records, coursework, materials and class discussions between teachers and students (our "Services"). Byndr, Inc., <b>("Byndr")</b> provides its services to you ("<b>user</b>", "<b>you</b>" or "<b>your</b>"), subject to the following Terms of Use ("<b>TOU</b>"), which may be updated from time to time without notice to you.
                    </p>
                    <p>By using the Services you agree to be bound by this TOU and our Privacy Policy. Byndr may modify these TOU from time to time and such modification shall be effective upon posting an updated TOU on the Services with or without any notice to you. We will update the "Last Updated Date" in the TOU. You agree to be bound by any changes to these TOU when you use the Service after any such modification is posted. You are responsible for reviewing any applicable changes. Please read them carefully. If you do not wish to be bound by these TOU, you must not access or use the Byndr Services.</p>
                    <h4>1. The Byndr Services</h4>                    
                    <p>Our Services include the following features and functions: an online platform for communication and collaboration between teacher, college, other educationally related providers, Byndr and students. Some features are accessible only by teachers or administrative users of the educational or other institutions. Please note that Byndr may add additional features to the current Services, change or eliminate features, and make other changes at any time which will be subject to these TOU.</p>
                    <h4>2. Our Privacy Policy</h4>                    
                    <p>For information about our data protection practices, please see our Privacy Policy. By using our Services, you acknowledge and agree to our Privacy Policy.</p>
                    <h4>3. Registration</h4>
                    <p>In consideration of your use of the Services, all users agree to (a) provide true, accurate, current and complete information about yourself, or if provided by a teacher or administrator of an educational or other institution, complete and accurate information about each student, throughout the use of our Services (such information being "User Data"), and (b) maintain and promptly update the User Data to keep it true, accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, or Byndr has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Byndr has the right to suspend or terminate your account and refuse any and all current or future use of the Services, or any portion thereof. Your account information, including your username and password, will be provided to you once the applicable educational or other institution begins use of the Byndr Services. You are solely responsible for maintaining the confidentiality of your account(s) and password(s). Furthermore, you are responsible for all activities, charges, and liabilities associated with your account(s). You must immediately notify Byndr of any unauthorized use of your account(s), and you are responsible for any unauthorized charges made on or through your account(s) until Byndr receives such notification. You may not transfer your account(s) to another person. In cases where you have authorized or registered another individual, including a minor, to use your account(s), you are fully responsible for (i) the online conduct of such user; (ii) controlling the user's access to and use of the Services; and (iii) the consequences of any misuse. In the event that you are a minor, Byndr reserves the right to provide access to your account to your parents, guardian or other authorized adult, upon such adult's request. You agree to (a) notify Byndr of any unauthorized use of your password or user identification and any other breach of security, and (b) ensure that you exit from your account at the end of each session. Byndr cannot and will not be responsible for any loss or damage arising from your failure to comply with this section.</p>
                    <h4>4. User Content</h4>
                    <p>Any Content that you upload or otherwise make available, or is provided by applicable user of the educational or other institution ("User Content") through the Byndr Service, is and remains the property of the educational or other institution through which you are using the Byndr Service. By uploading or otherwise making available any User Content, you automatically grant and/or warrant that the owner has granted Byndr, the perpetual royalty-free, non-exclusive right and license to use, reproduce, modify, publish, distribute, perform, display, and transmit the User Content through the channel into which you have uploaded the User Content. You also permit any other user of Byndr with access to your User Content, subject to your restrictions, to access, view, store, and reproduce the User Content to the same extent permitted herein.</p>                   
                    <h4>5. Copyright</h4>
                    <p>You acknowledge that Byndr websites, their channels, their Services, any underlying technology used in connection with the Byndr Services, and all software, material, information, communications, text, graphics, links, electronic art, animations, audio, video, photos, and other data (collectively, the "Content") available within the Byndr websites are provided by Byndr or third-party providers and are the copyrighted works of Byndr and/or such third parties. You may not copy, reproduce, publish, distribute, modify, create derivative works of, rent, lease, sell, transfer, display, transmit, compile or collect in a database, or in any manner commercially exploit any part of the Content or the Services, in whole or in part, except as expressly authorized by Byndr or such third parties in this TOU or as may be posted on the Services. You may not store any significant portion of any Content or the Services owned by, or licensed to Byndr in any form, whether archival files, computer-readable files, or any other medium. You also may not "mirror" any Content or the Services on any other server.</p>
                    <h4>6. Third Party Links</h4>
                    <p>Some links on the Byndr websites lead to sites posted by independent site owners. Because Byndr has no control over these sites, Byndr is not responsible for such sites' accessibility via the Internet and does not endorse products, services, or information provided by such sites. As such, Byndr shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with, use or reliance on any User or other Content, goods, or services available on or through any other site. Further, the inclusion of these links does not imply that the other sites have given permission for inclusion of these links, or that there is any relationship between Byndr and the linked sites. Byndr is an independent operating company and reference to other companies do not imply any partnership, joint venture, or other legal connection where Byndr would be responsible for the actions of their respective owners.</p>
                    <h4>7. Conduct</h4>
                    <p>You may only access the Byndr websites and channels and use the Services for lawful purposes. You are solely responsible for the knowledge of and adherence to any and all laws, rules, and regulations pertaining to your use of the Services. You agree that you will not: (i) use the Services to commit a criminal offense or to encourage conduct that would constitute a criminal offense or give rise to a civil liability, or otherwise violate any local, state, Federal, or international law or regulation, including, but not limited to, export control laws and regulations governing the transmission or retransmission of technical data from the United States; (ii) upload, post, e-mail, or otherwise transmit any unlawful, threatening, libelous, harassing, defamatory, vulgar, obscene, pornographic, profane, invasive of another's privacy, hateful, or ethnically, racially or otherwise objectionable User Content; (iii) upload, post, e-mail, or otherwise transmit any User Content that you do not have a right to transmit; (iv) upload, post, e-mail, or otherwise transmit any User Content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party; (v) alter, damage, or delete any Content or other communications that are not your own or to otherwise interfere with the ability of others to access or use the Services; (vi) disrupt the normal flow of communication or otherwise act in a manner that negatively affects other users' ability to engage in real-time exchanges; (vii) claim a relationship with or to speak for any individual, business, association, institution, or other organization for which you are not authorized to claim such a relationship; (viii) upload, post, e-mail, or otherwise transmit any unsolicited advertising, promotional materials, or other forms of solicitation to other users including, without limitation, "junk mail," "spam," "chain letters," or "pyramid schemes"; (ix) interfere with or disrupt the Services or servers or networks connected to the Services, or disobey any requirements, procedures, policies, or regulations of networks connected to the Services; (x) collect or store personal data about other users; (xi) reproduce, duplicate, copy, use, distribute, sell, resell, or otherwise exploit for any commercial purposes, any portion of Byndr, the Byndr channels or the Services, use of Byndr websites, channels or the Services, or access to Byndr websites, channels or the Services; (xii) harm minors in any way; (xiii) stalk or otherwise harass another; or (xiii) collect or store personal information about other users without their permission.

</p>
<p>You acknowledge that Byndr does not pre-screen User Content, but that Byndr shall have the right (but not the obligation) in its sole discretion to refuse or move any User Content. Without limiting the foregoing, Byndr has the right, in its sole discretion, to remove any User Content that violates the TOU or is otherwise objectionable. You agree and acknowledge that Byndr may preserve User Content and may disclose User Content if required to do so by law or in the good faith belief that any such preservation or disclosure is reasonably necessary to comply with legal process, enforce the TOU, respond claims that any User Content violates the rights of third parties or protect the rights, property or personal safety of Byndr, its users and the public.</p>
<h4>8. DISCLAIMER OF WARRANTIES</h4>
<p>BYNDR IS NOT RESPONSIBLE FOR ANY INFORMATION OR CONTENT CONTAINED WITHIN OR DISPLAYED BY ITS SERVICES, AND MAKES NO REPRESENTATIONS ABOUT THE SUITABILITY OF THE INFORMATION CONTAINED IN OR DISPLAYED IS SERVICES FOR ANY PURPOSE OR AUDIENCE OR ABOUT ITS LEGITIMACY, LEGALITY, VALIDITY, ACCURACY, CORRECTNESS, RELIABILITY, QUALITY, STABILITY, COMPLETENESS, OR CURRENTNESS. ALL SUCH INFORMATION IS SOLELY PROVIDED BY THIRD PARTIES OR OTHER USERS OF THE SERVICES.</p>
<p>YOU AGREE THAT YOUR ACCESS TO THE BYNDR WEBSITE AND THE BYNDR MOBILE APPLICATION, AND YOUR USE OF THE SERVICES IS AT YOUR OWN RISK. NEITHER BYNDR, NOR ITS OFFICERS, DIRECTORS, EMPLOYEES, AFFILIATES, OR AGENTS WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE; NOR DO THEY MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES OR AS TO THE ACCURACY, RELIABILITY, SUITABILITY OR CONTENT OF THE SERVICES.</p>
<p>BYNDR CHANNELS AND THE SERVICES ARE PROVIDED ON AN "AS IS," "AS AVAILABLE" BASIS WITHOUT REPRESENTATIONS OR WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR AUDIENCE, AND NON-INFRINGEMENT. IN NO EVENT WILL BYNDR OR ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INCIDENTAL, INDIRECT, SPECIAL, OR CONSEQUENTIAL DAMAGES (EVEN IF BYNDR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), ARISING OUT OF YOUR USE OF OR INABILITY TO ACCESS BYNDR CHANNELS OR USE THE SERVICES, INCLUDING WITHOUT LIMITATION, LOSS OF REVENUE OR ANTICIPATED PROFITS, LOSS OF GOODWILL, LOST BUSINESS, LOST DATA, COMPUTER FAILURE OR MALFUNCTION, OR ANY AND ALL OTHER DAMAGES OR LOSSES THAT RESULT FROM MISTAKES, OMISSIONS, INTERRUPTIONS, DELETIONS OF FILES, ERRORS, DEFECTS, VIRUSES, DELAYS IN OPERATION OR TRANSMISSION, OR ANY FAILURE OF PERFORMANCE, WHETHER OR NOT LIMITED TO ACTS OF GOD, COMMUNICATIONS FAILURE, THEFT, DESTRUCTION, OR UNAUTHORIZED ACCESS TO BYNDR'S RECORDS, PROGRAMS, OR SERVICES. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES BYNDR'S LIABILITY IS LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW. NOTHING IN THIS TOU SHALL AFFECT THE STATUTORY RIGHTS OF ANY CONSUMER OR EXCLUDE OR RESTRICT ANY LIABILITY FOR DEATH OR PERSONAL INJURY ARISING FROM THE NEGLIGENCE OR FRAUD OF BYNDR.</p>
<h4>9. Limitation of Liabilit</h4>
<p>YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE ENTIRE RISK ARISING OUT OF YOUR ACCESS TO AND USE OF THE SERVICES AND ANY CONTENT THEREIN REMAINS WITH YOU. NEITHER BYNDR NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR LOSS OF GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE PRODUCTS OR SERVICES, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OF USE OR FROM THE USE OF OR INABILITY TO USE THE SITE, SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT BYNDR HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. YOU SPECIFICALLY ACKNOWLEDGE THAT BYNDR IS NOT LIABLE FOR THE DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES AND THAT THE RISK OF INJURY FROM THE FOREGOING RESTS ENTIRELY WITH YOU. IN NO EVENT WILL BYNDR’S AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION WITH THE TERMS OF USE OR FROM THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT THEREIN EXCEED THE AMOUNT YOU HAVE PAID TO BYNDR IN ACCORDANCE WITH THIS TOU, IF ANY, IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE DATE ON WHICH YOU FIRST ASSERT A CLAIM. YOU ACKNOWLEDGE AND AGREE THAT IF YOU HAVE NOT PAID ANYTHING TO BYNDR DURING SUCH TIME PERIOD, YOUR SOLE REMEDY (AND BYNDR’S EXCLUSIVE LIABILITY) FOR ANY DISPUTE WITH BYNDR IS TO STOP USING THE SERVICE. THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN BYNDR AND YOU. THIS LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES IS INTENDED ONLY FOR THOSE JURISDICTIONS WHERE PERMISSIBLE.</p>                    
<h4>10. Indemnification</h4>
<p>You agree to indemnify and hold Byndr, and its affiliates, officers, agents, partners, and employees, harmless from any claim or demand, including reasonable attorney's fees, made by any third party arising from or is in any way related to your use of our Services, violation of the TOU, or any other actions connected with use of our Services.</p>
<h4>11. Trademark Notice</h4>
<p>Byndr (the digital design and word), and Byndr.com, are the trademarks, service marks, trade dress, and logos of Byndr Inc. All other trademarks, service marks, trade dress, and logos used in Byndr website, the Byndr mobile application and the Services are the trademarks, service marks, trade dress, and logos of their respective owners.</p>                   
<h4>12. Modifications to the Service</h4>
<p>Byndr reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, any part of the Bynr Services, with or without notice. You agree that Byndr will not be liable to you or to any third party for any modification, suspension, or discontinuance of the Services.
</p>
<h4>13. Payment Terms</h4>
<p>For Content that is purchased directly in the Byndr app or on the Byndr website, you agree to pay Byndr the Fee specified in the Payment Form. The Fee is payable in advance for access to the Content. Fees are non-refundable and non-transferable, unless otherwise stated by Byndr. Accordingly, if you elect to cancel your access to the Services, you will not receive a refund of the Fee(s) previously paid to Byndr.</p>
<h4>14. Termination</h4>
<p>You may discontinue your participation in and access to the Services at any time. The TOU will continue to apply to all past use of the Services by you, even if you are no longer using them. You acknowledge and agree that Byndr and its affiliates may terminate or block your use of all or part of the Services and Byndr websites and mobile applications, without prior notice for any reason, including, without limitation, if Byndr believes you have engaged in conduct prohibited by this TOU. You agree that upon termination or discontinuance for any reason, we may delete all information related to you on the Services and may bar your access to the Byndr websites, Byndr mobile applications, channels, and use of the Services. Sections 8 (Disclaimer of Warranties), 9 (Limitations of Liability), 10 (Indemnification), 13 (Termination), and 14 (General Information), of the TOU, shall survive expiration or termination.</p>
<h4>15. General Information</h4>
<p>The TOU (including any policies, guidelines or amendments that may be presented to your from time to time) constitute the entire agreement between you and Byndr and govern your use of the Services, superseding any prior agreements between you and Byndr for the use of the Services. You also may be subject to additional terms and conditions that may apply when you use or purchase certain other Byndr services, affiliate services, third-party content or third-party software. The TOU and the relationship between you and Byndr shall be governed by the laws of the State of Delaware without regard to its conflict of law provisions. You and Byndr agree to submit to the personal and exclusive jurisdiction of the courts located within the county of New Castle, Delaware. The failure of Byndr to exercise or enforce any right or provision of the TOU shall not constitute a waiver of such right or provision. If any provision of the TOU is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, and the other provisions of the TOU remain in full force and effect.</p>
<h4>16. How to contact us</h4>
<p>If you have any questions about this TOU, or would like to report a violation of this TOU, please contact us by email or postal mail as follows:</p>                    
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
)(TermsOfUse);
