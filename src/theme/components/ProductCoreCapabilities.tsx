import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class ProductCoreCapabilities extends React.Component<props, any> {

    render(): any {
        return (
            <section>
            <div className="core_capabilities bg_gray">
                <div className="core_capabilities_main">
                        <div className="widget_title"> CORE CAPABILITIES </div>
                    <ul>
                        <li className="mainItem" style={{minHeight:400}}>
                            <div className="li_title">Learning Tools</div>
                            <div className="content">
                                <ul>
                                    <li>Create or Upload Learning Resources</li>
                                    <li>Create Assignments &amp; Exams</li>
                                    <li>Lesson Planning, Mapping of Topics to Course</li>
                                    <li>Outcomes &amp; Tracking, Reporting via Attendance</li>
                                    <li>Online Attendance &amp; SMS Alerts to Parents</li>
                                    <li>Online Grading &amp; Gradebook</li>
                                    <li>Material Box for Securely storing Documents</li>
                                    <li>Private Messaging to Teachers</li>
                                    <li>Mobile App (Android)</li>
                                    <li>Offline Mode for Materials, Attendance</li>
                                    <li>Push Notifications for Real-time Communication</li>
                                    <li>User Experience designed for Mobile</li>
                                </ul>	
                            </div>
                        </li>
<li className="mainItem" style={{minHeight:400}}>
                            <div className="li_title">Administrative Tools</div>
                            <div className="content">
                            <ul>
                                    <li>Setup Courses, Add Teacher, Students</li>
                                    <li>Manage &amp; Add Users</li>
                                    <li>Mentoring / Groups</li>
                                    <li>Post Announcements / Notices with SMS Alerts &amp; Feedback</li>
                                    <li>Student Profile with Ability to Add Notes</li>
                                    <li>Messaging (Filter by Department, Users)</li>
                                    <li>Bulletin Board for Notifications</li>
                                </ul>	
                            </div>
                        </li>
                        <li className="mainItem">
                            <div className="li_title">Support</div>
                            <div className="content">
                                <ul>
                                    <li>Email and Phone Support</li>
                                    <li>Training for Stakeholders</li>
                                    <li>Initial Set-up of Users</li>
                                    <li>Account Manager</li>
                                </ul>	
                            </div>
                        </li>
                        <li className="mainItem">
                            <div className="li_title">Integrate &amp; Customize</div>
                            <div className="content">
                                <ul>
                                    <li>Custom Branding &amp; Unique Domain</li>
                                    <li>Integrate with College SIS / ERP</li>
                                    <li>Customize, Build or Enhance Features</li>
                                </ul>	
                            </div>
                        </li>
                        <li className="mainItem">
                            <div className="li_title">Hosting &amp; Maintenance</div>
                            <div className="content">
                                <ul>
                                        <li>Cloud based Server &amp; Storage</li>
                                        <li>Regular Backups</li>
                                        <li>Secure Access to Site</li>
                                        <li>Business Continuity &amp; Disaster Recovery</li>
                                    </ul>	
                            </div>
                        </li>
                        <li className="mainItem">
                            <div className="li_title">Content Library</div>
                            <div className="content">
                            <ul>
                                    <li>Setup Courses for Class, Department or College</li>
                                    <li>Works in Offline Mode through Mobile App</li>
                                    <li>Integrate with Content Providers (NPTEL. GRE. GATE)..etc.</li>
                                    <li>Post Audio Clips, Video, Quiz</li>
                                    <li>Producer Portal for Teachers to Design Courses</li>
                                </ul>	
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
);
    }
}