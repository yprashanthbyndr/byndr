import React from 'react';
import { BlogGrid, ProductRolesTestimonials, FaqBlock, MiniHeader, FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock, ProductForRolesBlock } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';
import { CSSTransition } from 'react-transition-group';


import { connect } from 'react-redux';
import { SaveScroll_Height } from '../services';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean,
    WindowScroolheight: number,

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
        let a = 200
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
        return (
            <div>

                {/* <CSSTransition
                    in={!(this.props.HideHeader)}
                    timeout={1000}
                    transition
                    classNames="headerAnim"
                    unmountOnExit
                > */}
                    <Header />
                {/* </CSSTransition> */}
                <div className={this.props.HideHeader ? "bodySection_headerNo" : "bodySection"}>
                    <MiniHeader />
                    <InnerPageTitleBlock />
                    <ProductForRolesBlock />
                    <ProductRolesTestimonials />
                    <FaqBlock />
                    <FooterCTA />
                </div>
                <Footer />
                {/* <Navigation /> */}
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