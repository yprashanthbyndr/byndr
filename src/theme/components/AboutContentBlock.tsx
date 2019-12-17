import React from 'react';
interface props {
    onLeftMenu?(): void;
}

export default class AboutContentBlock extends React.Component<props, any> {

    render(): any {
        return (
                <section>
                    <div className="aboutContent_block">
                        <div className="aboutContent_main">
                            <div className="widget_title"> ABOUT </div>
                            <div className="aboutContent_contentData">
                                Byndr - intends to bind; be the missing link in the chain of providing a seamless education in out-of-the-classroom learning. It intends to strengthen the teacher-student bonding; provide accessibility to course curriculum through social learning. It is easy to access by the students and convenient to assess and evaluate by the teachers. As a social learning management system (LMS), it creates the desired impact.
                            </div>
                        </div>
                    </div>
                </section>
                );
    }
}