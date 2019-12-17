import React from 'react';
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
            ActiveTab: "page1",
            StickyUsps: false,
        }
        this.ScroolEvent= this.ScroolEvent.bind(this)
    }

    componentDidMount(): any {
        window.addEventListener('scroll', this.ScroolEvent);
    }

    ScroolEvent(event) {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        console.log(" . / . / . /  winScroll:", winScroll, this.state, this.props);
        if ((!this.state.StickyUsps && winScroll > 1260) || (this.state.StickyUsps && winScroll < 1260)) {
            this.setState_("StickyUsps", !this.state.StickyUsps);
        }
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
        } else if (scroolHeoght > 160 && scroolHeoght < 300 && currentActiveTab !== "page2") {
            this.setState_("ActiveTab", "page2");
        } else if (scroolHeoght > 340 && scroolHeoght < 400 && currentActiveTab !== "page3") {
            this.setState_("ActiveTab", "page3");
        } else if (scroolHeoght > 530 && scroolHeoght < 600 && currentActiveTab !== "page4") {
            this.setState_("ActiveTab", "page4");
        }
    }

    render(): any {
        let Left_HeadersList = [{
            for: "page1",
            name: "Latest Feed & Posts",
            logo: favicon,

        }, {
            for: "page2",
            name: "Courses",
            logo: favicon,

        }, {
            for: "page3",
            name: "Groups",
            logo: favicon,

        }, {
            for: "page4",
            name: "Documents/Materials",
            logo: favicon,

        }, {
            for: "page5",
            name: "Calendar",
            logo: favicon,

        }, {
            for: "page6",
            name: "Coursework",
            logo: favicon,

        }];

        let RightSideContent = [{
            for: "page1",
            logo: slider_1,
            content: "All course activity posts, shared materials, announcements, polls and quiz, rolls up into a simple home screen feed, no clicks. Keep up with all the latest activity together, so you can quickly access. Collaboration and notifications in real time"
        }, {
            for: "page2",
            logo: slider_1,
            content: "Here, you'll find option to create all your courses and link students to their courseaccordingly. All these courses are organized, so you can take attendance, upload and share materials, submit assignments or check grades. Create your class and experience the Byndr today!"
        }, {
            for: "page3",
            logo: slider_1,
            content: " Groups in Byndr, way to collaborate to interact or initiate one-one discussions (teacher with students, students with students, even teachers with teachers) of the group. This is ideal solution for mentoring for Events, Sports, Innovation or anything that you would to drive learning curricular or extra-curricular."
        }, {
            for: "page4",
            logo: slider_1,
            content: "Within Byndr, you can organize all the materials for a class, and share it with all the students in class. You can add Images, Word, Excel, PowerPoint and pdf files, weblinks or even can share drive links"
        }, {
            for: "page5",
            logo: slider_1,
            content: "Calendar is designed, you can easily monitor all your class schedule, assignments, important due dates and get reminders about upcoming activities, thereby giving zero-chance of missing to-do’s."
        }, {
            for: "page6",
            logo: slider_1,
            content: " At Byndr, Teachers can manage all their day-to-day activities like marking attendance, post and manage assignments, manage and communicate grades etc. All these options can be easily done on any device "
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