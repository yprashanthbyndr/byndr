import React from 'react';
import { open_book, teamwork, medical_history, earth_globe, blackboard, light_bulb, learn_innovate_together, builtInAccessibility, collaboration_communication, assess_support, peer_to_peer_learning, secure_technology, PlanProgress } from "../../assets";

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
                    <div className="homeSingleGridTitle">Learn & Innovate</div>
                    <div className="homeSingleGridContent">
                    Enables teachers to provide study materials, communicate effectively and encourage pro-active thinking among students.
            </div>
                  </div>
                </div>
                <div className="homeSingleGrid">
                  <div className="homeSingleGridinr">
                    <div className="homeSingleGridIcon">
                      <img src={PlanProgress} />
                    </div>
                    <div className="homeSingleGridTitle">Plan, Perform & Progress</div>
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
                    <div className="homeSingleGridTitle">Collaboration & Co-ordination</div>
                    <div className="homeSingleGridContent">
                    All course activity rolls up into a simple feed, no clicks, simple social learning, collaboration with real-time push notifications, keeping users engaged and connected.
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
                    It enables the teachers to create assignments, track performance, evaluate for better learning outcomes
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
                    It enables the students to create their own study group, share notes, exchange ideas within the group and focus on self-development.
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
                    A Secure cloud-based learning platform that enables easy integration, Secure storage for documents and materials, monitor the engagement level, no set-up costs and no servers to maintain.
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