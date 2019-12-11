import React from 'react';
import { open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb, learn_innovate_together, builtInAccessibility, collaboration_communication, assess_support, peer_to_peer_learning, secure_technology } from "../../assets";

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
                      <img src={learn_innovate_together} />
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
                      <img src={builtInAccessibility} />
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
                      <img src={collaboration_communication} />
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
                      <img src={assess_support} />
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
                      <img src={peer_to_peer_learning} />
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
                      <img src={secure_technology} />
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