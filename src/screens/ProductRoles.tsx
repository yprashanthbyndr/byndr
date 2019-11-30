import React from 'react';
import { BlogGrid, ProductRolesTestimonials, FaqBlock, MiniHeader, FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock, ProductForRolesBlock } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';
import { CSSTransition } from 'react-transition-group';


import { connect } from 'react-redux';
import { SaveScroll_Height } from '../services';

interface props {
    onLeftMenu?(): void;
    MainReducer: any,
    HideHeader: boolean
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
        var lastScrollTop = 0;
        SaveScroll_Height(this.props, scroll_position)

    }

    render(): any {
        let StateIs = this.props;

        console.log(". / . / . & & &  in Product Role COmponent :  ", this.props.HideHeader, StateIs);

        return (
            <div>

                <CSSTransition
                    in={!(this.props.HideHeader)}
                    timeout={1000}
                    transition
                    classNames="headerAnim"
                    unmountOnExit
                // onEnter={() => console.log("on enter click")}
                // onExited={() => console.log("on exit click")}
                >
                    <Header ref="header" />
                </CSSTransition>
                <div className="bodySection">
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