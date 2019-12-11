import React from 'react';
import { open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb } from "../../assets";

interface props {
  onLeftMenu?(): void;
}

export default class Home_A_Grids extends React.Component<props, any> {
  render(): any {
    return (
        <section>
          <div className="homeGrid">
            <div className="homeGrid_inr">
              <div className="homeGridList">
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={open_book} />
                    </div>
                    <div className="homeSingleGridTitle">Learn & Innovate Together</div>
                    <div className="homeSingleGridContent">
                    Enables teachers to provide study materials, communicate effectively and encourage pro-active thinking among students.
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={teamwork} />
                    </div>
                    <div className="homeSingleGridTitle">Built-In Accessibility Features</div>
                    <div className="homeSingleGridContent">
                    It enables the students to access course material, get their doubts clarified, take assessments and monitor the progress.
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={medical_history} />
                    </div>
                    <div className="homeSingleGridTitle">Collaboration & Communication</div>
                    <div className="homeSingleGridContent">
                    It is a cloud-based platform that enables the administrators to co-ordinate and monitor the performance of teachers and students on a regular basis.
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={earth_globe} />
                    </div>
                    <div className="homeSingleGridTitle">Assess & Support</div>
                    <div className="homeSingleGridContent">
                    It enables the teachers to create assignments, track performance and evaluate to overcome the weaknesses.
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={blackboard} />
                    </div>
                    <div className="homeSingleGridTitle">Peer-to-Peer Learning</div>
                    <div className="homeSingleGridContent">
                    It enables the students to create their own study group, share knowledge and exchange ideas within the group and focus on self-development.
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={light_bulb} />
                    </div>
                    <div className="homeSingleGridTitle">Secure Technology</div>
                    <div className="homeSingleGridContent">
                    A secured learning management tool enabling easy integration, no set-up costs and servers to maintain.
            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    );
  }
}