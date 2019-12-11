import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


import { connect } from 'react-redux';


interface props {
  onLeftMenu?(): void;
  // SelectedFaq: string
}

class FaqBlock extends React.Component<props, any> {

  constructor(props) {
    super(props);
    this.state = {
      SelectedFaq: ''
    }
  }

  toggle(toggle) {
    console.log("clucked ")
    this.setState({ SelectedFaq: this.state.SelectedFaq == toggle ? "" : toggle })
  };

  render(): any {
    return (
      <section>
        <div className="faq">
          <div className="faq_main">
            <div className="widget_title"> FREQUENTLY ASKED QUESTIONS </div>
            <div className="product-role-small_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</div>
            <div className="accordion_block">

              <button className="accordion"
                onClick={() => this.toggle(1)}
              >Lorem ipsum dolor sit ametsed diam nonumy eirmod ?</button>
              <Collapse isOpen={this.state.SelectedFaq == 1}>
                <div >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </Collapse>


              <button className="accordion"
                onClick={() => this.toggle(2)}
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ?</button>

              <Collapse isOpen={this.state.SelectedFaq == 2}>
                <div
                //  className="panel"
                >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </Collapse>

              <button className="accordion"
                onClick={() => this.toggle(3)}
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitreirmod ?</button>
              <Collapse isOpen={this.state.SelectedFaq == 3}>
                <div 
                // className="panel"
                >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </Collapse>

              <button className="accordion"
                onClick={() => this.toggle(4)}
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy?</button>
              <Collapse isOpen={this.state.SelectedFaq == 4}>
                <div 
                // className="panel"
                >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

              </Collapse>
              <button className="accordion"
                onClick={() => this.toggle(5)}
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ?</button>
              <Collapse isOpen={this.state.SelectedFaq == 5}>
                <div 
                // className="panel"
                >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </Collapse>

              <button className="accordion"
                onClick={() => this.toggle(6)}
              >Lorem ipsum dolor sit amet, sadipscing, sed diam ?</button>
              <Collapse isOpen={this.state.SelectedFaq == 6}>
                <div 
                // className="panel"
                >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </Collapse>
              {/* 
              <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
              <Collapse isOpen={this.state.isOpen}>
                <Card>
                  <CardBody>
                    Anim pariatur cliche reprehenderit,
                     enim eiusmod high life accusamus terry richardson ad squid. Nihil
                     anim keffiyeh helvetica, craft beer labore wes anderson cred
                     nesciunt sapiente ea proident.
          </CardBody>
                </Card>
              </Collapse> */}

            </div>
            <div className="show-more">
              <a target="_blank" href="https://byndr.zendesk.com/">Show more</a>
            </div>
          </div>
        </div>
      </section>
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
)(FaqBlock);