import React from 'react';
import { slider_1, favicon, feature_dlt_later, calender_dlt_later } from "../../assets";

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
            ActiveTab: "page1",
            StickyUsps: false,
        }
        this.ScroolEvent = this.ScroolEvent.bind(this)
    }

    componentDidMount(): any {
        window.addEventListener('scroll', this.ScroolEvent);
    }

    ScroolEvent(event) {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        console.log(" . / . / . /  winScroll:", winScroll, this.state, this.props);
        if ((!this.state.StickyUsps && winScroll > 1390 && winScroll <5680 ) || (this.state.StickyUsps && (winScroll >5680 || winScroll < 1390) )) {
            this.setState_("StickyUsps", !this.state.StickyUsps);
        }
        this.OnScroolInScroolView(winScroll);
    }

    componentWillUnmount(): any {
        window.removeEventListener('scroll', this.ScroolEvent);
    }

    setState_(key: any, value: any) {
        this.setState({ [key]: value });
    }
    OnScroolInScroolView(scroolHeoght: number) {
        let currentActiveTab = this.state.ActiveTab;
        if (scroolHeoght > 1410 && scroolHeoght < 1730 && currentActiveTab !== "page1") {
            this.setState_("ActiveTab", "page1");
        } else if (scroolHeoght > 1940 && scroolHeoght < 2280 && currentActiveTab !== "page2") {
            this.setState_("ActiveTab", "page2");
        } else if (scroolHeoght > 2500 && scroolHeoght < 2750 && currentActiveTab !== "page3") {
            this.setState_("ActiveTab", "page3");
        } else if (scroolHeoght > 3080 && scroolHeoght < 3350 && currentActiveTab !== "page4") {
            this.setState_("ActiveTab", "page4");
        } else if (scroolHeoght > 3630 && scroolHeoght < 4000 && currentActiveTab !== "page5") {
            this.setState_("ActiveTab", "page5");
        } else if (scroolHeoght > 4200 && scroolHeoght < 4550 && currentActiveTab !== "page6") {
            this.setState_("ActiveTab", "page6");
        } else if (scroolHeoght > 4770 && scroolHeoght < 5150 && currentActiveTab !== "page7") {
            this.setState_("ActiveTab", "page7");
        } else if (scroolHeoght > 5400 && scroolHeoght < 5700 && currentActiveTab !== "page8") {
            this.setState_("ActiveTab", "page8");
        }
    }

    render(): any {
        let Left_HeadersList = [{
            for: "page1",
            name: "Latest Feed & Posts",
            logo: calender_dlt_later,

        }, {
            for: "page2",
            name: "Courses",
            logo: calender_dlt_later,

        }, {
            for: "page3",
            name: "Groups",
            logo: calender_dlt_later,

        }, {
            for: "page4",
            name: "Documents/Materials",
            logo: calender_dlt_later,

        }, {
            for: "page5",
            name: "Calendar",
            logo: calender_dlt_later,

        }, {
            for: "page6",
            name: "Coursework",
            logo: calender_dlt_later,

        }, {
            for: "page7",
            name: "User-Friendly",
            logo: calender_dlt_later,

        }, {
            for: "page8",
            name: "Secure",
            logo: calender_dlt_later,

        }];

        let RightSideContent = [{
            for: "page1",
            logo: feature_dlt_later,
            content: "All course activity posts, shared materials, announcements, polls and quiz, rolls up into a simple home screen feed, no clicks. Keep up with all the latest activity together, so you can quickly access. Collaboration and notifications in real time."
        }, {
            for: "page2",
            logo: feature_dlt_later,
            content: "Here, you'll find option to create all your courses and link students to their courseaccordingly. All these courses are organized, so you can take attendance, upload and share materials, submit assignments or check grades. Create your class and experience the Byndr today!"
        }, {
            for: "page3",
            logo: feature_dlt_later,
            content: " Groups in Byndr, way to collaborate to interact or initiate one-one discussions (teacher with students, students with students, even teachers with teachers) of the group. This is ideal solution for mentoring for Events, Sports, Innovation or anything that you would to drive learning curricular or extra-curricular."
        }, {
            for: "page4",
            logo: feature_dlt_later,
            content: "Within Byndr, you can organize all the materials for a class, and share it with all the students in class. You can add Images, Word, Excel, PowerPoint and pdf files, weblinks or even can share drive links."
        }, {
            for: "page5",
            logo: feature_dlt_later,
            content: "Calendar is designed, you can easily monitor all your class schedule, assignments, important due dates and get reminders about upcoming activities, thereby giving zero-chance of missing to-do’s."
        }, {
            for: "page6",
            logo: feature_dlt_later,
            content: "At Byndr, Teachers can manage all their day-to-day activities like marking attendance, post and manage assignments, manage and communicate grades etc. All these options can be easily done on any device."
        }, {
            for: "page7",
            logo: feature_dlt_later,
            content: "Byndr has been designed and developed with emphasis on connectivity and mobile user experience. Our native Android app & iOS along with responsive webapp - are lightweight, ensuring every student and teacher has access to educational resources inside and outside the classroom."
        }, {
            for: "page8",
            logo: feature_dlt_later,
            content: "A Secure cloud-based learning platform that enables easy integration, Secure storage for documents and materials, monitor the engagement level, no set-up costs and no servers to maintain. Byndr, with its in-depth experience in technology products, aims to provide an easy-to-use, fast, and mobile-first platform to benefit all stakeholders in higher education."
        }]

        return (
            <div className="uspsMainBlockStickey">
                <div className="uspsMainBlock">
                    <div className="uspsMainBlockInr">
                        <div className={"uspsMainBlockLeft " + (this.state.StickyUsps ? "Stickyusps-Left" : "")}>
                            <div className="uspsMainBlockLeftTitle">News feed</div>
                            {Left_HeadersList.map(item => {
                                return (
                                    <div className={"uspsMainBlockLeftItem " + (this.state.ActiveTab === item.for ? "selectedLeft-List-Item":"")}>
                                        {/* style={{ display: 'block', padding: 10, backgroundColor: this.state.ActiveTab == item.for ? "blue" : "" }} */}
                                        {/* <div className="uspsMainBlockLeftItemImg"><img src={item.logo} /></div> */}
                                        <div className="uspsMainBlockLeftItemText">{item.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="uspsMainBlockRight">
                            <div id="myDIV" className="uspsMainBlockRightInr" onScroll={(event) => {
                                // let height = document.getElementById('RefElement');
                                var elmnt = document.getElementById("myDIV");

                                if (elmnt !== null && elmnt !== undefined) {
                                    var x = elmnt.scrollLeft;
                                    var Top = elmnt.scrollTop;
                                    this.OnScroolInScroolView(Top)
                                }
                            }}>

                                {RightSideContent.map(item => {
                                    return (
                                        <div className="singleHomeBlockElement currentBlockSelected">
                                            <div className="singleHomeBlockElementImage">
                                                <img src={item.logo} />
                                            </div>
                                            <div className="singleHomeBlockElementText">
                                                {item.content}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

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