import React  from 'react';
import { slider_1, favicon } from "../../assets";

import { connect } from 'react-redux';


interface props {
    onLeftMenu?(): void;
}

class USPs extends React.Component<props, any> {
    private Left_HeadersList: any;
    private RightSideContent: any;
    // private RefElement: any;

    constructor(props) {
        super(props);
        this.state = {
            ActiveTab: "page1"
        }
    }

    componentDidMount(): any {
        window.addEventListener('scroll', this.ScroolEvent);
    }

    ScroolEvent(event) {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        console.log(" . / . / . /  winScroll:", winScroll);
    }


    componentWillUnmount(): any {
        window.removeEventListener('scroll', this.ScroolEvent);
    }


    setState_(key: any, value: any) {
        this.setState({ [key]: value });
    }
    OnScroolInScroolView(scroolHeoght: number) {
        let currentActiveTab = this.state.ActiveTab;
        if (scroolHeoght < 50 && currentActiveTab !== "page1") {
            this.setState_("ActiveTab", "page1");
        }else   if (scroolHeoght > 160 &&  scroolHeoght < 300 && currentActiveTab !== "page2") {
            this.setState_("ActiveTab", "page2");
        }else   if (scroolHeoght > 340 &&  scroolHeoght < 400 && currentActiveTab !== "page3") {
            this.setState_("ActiveTab", "page3");
        }else   if (scroolHeoght > 530 &&  scroolHeoght < 600 && currentActiveTab !== "page4") {
            this.setState_("ActiveTab", "page4");
        }
    }

    render(): any {
        let Left_HeadersList = [{
            for: "page1",
            name: "Page 1",
            logo: favicon,

        }, {
            for: "page2",
            name: "Page 2",
            logo: favicon,

        }, {
            for: "page3",
            name: "Page 3",
            logo: favicon,

        }, {
            for: "page4",
            name: "Page 4",
            logo: favicon,

        }, {
            for: "page5",
            name: "Page 5",
            logo: favicon,

        }, {
            for: "page6",
            name: "Page 6",
            logo: favicon,

        }];

        let RightSideContent = [{
            for: "page1",
            logo: slider_1,
            content: " this content is for page 1 related. we should keep this dummy text for the view : Dummy DAta  Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta "
        }, {
            for: "page2",
            logo: slider_1,
            content: " this content is for page 2 related. we should keep this dummy text for the view :  Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta"
        }, {
            for: "page3",
            logo: slider_1,
            content: " this content is for page 3 related. we should keep this dummy text for the view :  Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta"
        }, {
            for: "page4",
            logo: slider_1,
            content: " this content is for page 4 related. we should keep this dummy text for the view :  Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta"
        }, {
            for: "page5",
            logo: slider_1,
            content: " this content is for page 5 related. we should keep this dummy text for the view : Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta "
        }, {
            for: "page6",
            logo: slider_1,
            content: " this content is for page 6 related. we should keep this dummy text for the view : Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta Dummy DAta "
        }]

        return (

            <div style={{ width: '100%', height: '500px' }} >
                <div style={{ float: 'left', width: '25%', display: 'inline', height: '500px' }}>
                    {Left_HeadersList.map(item => {
                        return (
                            <div style={{ display: 'block', padding: 10, backgroundColor: this.state.ActiveTab == item.for ? "blue" : "" }}>
                                {} <img style={{ height: '50px', width: '50px' }} src={item.logo} />
                                <text className={"usp-left-text " + (this.state.ActiveTab === item.for ? "anim" : "")}>
                                    {item.name}
                                </text>
                            </div>
                        )
                    })}
                </div>


                <div id="myDIV" onScroll={(event) => {
                    // let height = document.getElementById('RefElement');
                    var elmnt = document.getElementById("myDIV");

                    if (elmnt !== null && elmnt !== undefined) {
                        var x = elmnt.scrollLeft;
                        var Top = elmnt.scrollTop;
                        this.OnScroolInScroolView(Top)
                        console.log(" on scrool event event", x, Top);
                        // console.log("? ? ? ? ? ?  : event :  ",event.scrollTop);

                    }
                }} style={{
                    float: 'right', width: '55%', height: '100%',
                    // overflowY: 'scroll',
                    overflow: "auto"
                    // overflowX: "hidden",

                }}>

                    {RightSideContent.map(item => {
                        return (
                            <div id="RefElement" style={{ padding: 10, display: 'block' }}>
                                <img style={{ height: '100px' }} src={item.logo} />
                                <text style={{ fontSize: 25, marginTop: 20 }}>
                                    {item.content}
                                </text>
                            </div>
                        )
                    })}
                </div>

            </div>


            // <section>
            //   <div className="homeAvailableDivices">
            //     <div className="homeAvailableDivices_inr">
            //       <div className="homeAvailableDivices_left">
            //         <h3>
            //          usps
            //         </h3>
            //         <div className="homeAvailableDivicesText">
            //           With our deep experience in technology products, Byndr aims to provide an easy-to-use, fast, and mobile-first platform to benefit all stakeholders in higher education. Byndr has been designed and developed with attention on connectivity and the mobile user experience. Our native Android app & iOS along with responsive web apps - are lightweight, ensuring every student and teacher, no matter where they live, has access to educational resources inside and outside the classroom.
            //         </div>
            //         <div className="homeAvailableDivicesIcons">
            //           <ul>
            //             <li>
            //             <a target="_blank" href="https://play.google.com/store/apps/details?id=org.byndr.byndr&hl=en"><img src={byndr_android} /></a>
            //             </li>
            //             <li>
            //             <a target="_blank" href="https://apps.apple.com/gb/app/byndr/id1375913014"><img src={byndr_ios} /></a>
            //             </li>
            //           </ul>
            //         </div>
            //       </div>
            //       <div className="homeAvailableDivices_right">
            //         <img src={byndr_responsive_platform} />
            //       </div>
            //     </div>
            //   </div>
            // </section>


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
)(USPs);