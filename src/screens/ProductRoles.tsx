import React from 'react';
import { BlogGrid, ProductRolesTestimonials, FaqBlock, MiniHeader, FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock, ProductForRolesBlock, HomeTestimonial, Seo } from '../theme/components';

import { CSSTransition } from 'react-transition-group';


import { connect } from 'react-redux';
import { SaveScroll_Height } from '../services';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean,
    WindowScroolheight: number,
    routeProps:any
}

class ProductRoles extends React.Component<props, any> {
    constructor(props: any) {
        super(props);
        // this.headerRef = {};

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
        // let element = this.refs.header;
        // let self = this;

        let scroll_position = 0;
        let CurrentHeight = this.props;
        let a = 200;
        scroll_position = window.scrollY;
        var lastScrollTop = this.props.WindowScroolheight;
        let HideHeder;

        var st = window.pageYOffset || document.documentElement.scrollTop;

        let diff = st - lastScrollTop;
        if (st > lastScrollTop && !this.props.HideHeader) {
            HideHeder = true;
            SaveScroll_Height(HideHeder, st)
        } else if (this.props.HideHeader && diff < -5) {
            HideHeder = false;
            SaveScroll_Height(HideHeder, st)
        } else if (diff > 10 || diff < -10) {
            HideHeder = undefined;
            SaveScroll_Height(HideHeder, st)
        }
    }

    render(): any {
        let StateIs = this.props;

        const faqList = [{
            title:"Lorem Ipsum",
            content:"Lorem ipsum"
        }]

        return (
            <div>
                <Seo seoData={this.props.routeProps} />
                <div className="header_main_container">
                    <Header Hide={this.props.HideHeader} />
                    <MiniHeader />
                </div>                
                <div className="bodySection" style={{marginTop:98}}>
                    <InnerPageTitleBlock fromPage="Product Roles" pageSubtitle="" videoDisplay="true" tryBtnDisplay="true" />
                    <ProductForRolesBlock />
                    <HomeTestimonial />
                    {/* <ProductRolesTestimonials /> */}
                    <FaqBlock faqList={faqList} />
                    <FooterCTA />
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
)(ProductRoles);