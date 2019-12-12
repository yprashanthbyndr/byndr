import React from 'react';
import {
    FaqBlock, MiniHeader, FooterCTA, Header, Footer, InnerPageTitleBlock,
    ProductForRolesBlock, HomeTestimonial, FooterDoubleCTA, CTAForCollege
} from '../theme/components';

import { connect } from 'react-redux';
import { SaveScroll_Height, MiniHeaderScrollLogic } from '../services';
import { teamwork, medical_history, earth_globe, blackboard, light_bulb, open_book } from '../assets';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean,
    WindowScroolheight: number,
    fromPage: any
}

class lms_For_Admins extends React.Component<props, any> {
    constructor(props: any) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    /**
 *  Add Event to listen On window page Scrolling .
 */
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        // window.scrollByLines(lines)
    }

    /**
     * Remove Event wile we remove this component from DOM.
     */

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scroll_position = 0;
        scroll_position = window.scrollY;
        var lastScrollTop = this.props.WindowScroolheight;
        let HideHeder;

        var st = window.pageYOffset || document.documentElement.scrollTop;
        MiniHeaderScrollLogic(st, lastScrollTop, this.props.HideHeader);
        // let diff = st - lastScrollTop;
        // if (st > lastScrollTop && !this.props.HideHeader) {
        //     HideHeder = true;
        //     SaveScroll_Height(HideHeder, st)
        // } else if (this.props.HideHeader && diff < -5) {
        //     HideHeder = false;
        //     SaveScroll_Height(HideHeder, st)
        // } else if (diff > 10 || diff < -10) {
        //     HideHeder = undefined;
        //     SaveScroll_Height(HideHeder, st)
        // }
    }

    render(): any {

        const gridList = [{
            image:teamwork,
            title:"Cloud-based & Maintenance-free Platform"
        },
        {
            image:medical_history,
            title:"Interactive UI & Dashboard"
        },
        {
            image:earth_globe,
            title:"Activity Reports"
        },
        {
            image:blackboard,
            title:"Grade Summary"
        },
        {
            image:light_bulb,
            title:"Multi-Institute Architecture"
        },
        {
            image:medical_history,
            title:"Instant Messaging"
        },
        {
            image:earth_globe,
            title:"Simple & Quick Search Enabled"
        },
        {
            image:open_book,
            title:"Unlimited Support"
        }]

        return (
            <div>
                <div className="header_main_container">
                    <Header Hide={this.props.HideHeader} />
                    <MiniHeader Title="Admins" tryLink="" />
                </div>
                <div className="bodySection" style={{marginTop:175}}>
                    <InnerPageTitleBlock fromPage="Monitoring Made Easy, Organized & Efficient" pageSubtitle="Experience Byndr Today!" videoDisplay="true" tryBtnDisplay="true"  />
                    <ProductForRolesBlock Title="college" content="Byndr has been designed and developed with attention on connectivity and the mobile user experience. Easy and intuitive, Byndr offers a maintenance-free platform and unlimited support. Our platform is lightweight and accessed on any mobile or desktop browser (responsive web app), enabling teachers and students to access the content quickly. Teachers can collaborate, upload files, grade assignments, and take attendance right from their phones." gridList={gridList} />
                    <HomeTestimonial />
                    <FaqBlock />
                    <CTAForCollege />
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
)(lms_For_Admins);