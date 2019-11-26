import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class FaqBlock extends React.Component<props, any> {

    render(): any {
        return (
            <section>
            <div className="faq">
              <div className="faq_main">
                <div className="widget_title">- FREQUENTLY ASKED QUESTIONS -</div>
                <div className="product-role-small_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</div>
                <div className="accordion_block">
                  <button className="accordion">Lorem ipsum dolor sit ametsed diam nonumy eirmod ?</button>
                  <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <button className="accordion">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ?</button>
                  <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <button className="accordion">Lorem ipsum dolor sit amet, consetetur sadipscing elitreirmod ?</button>
                  <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <button className="accordion">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy?</button>
                  <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <button className="accordion">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ?</button>
                  <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <button className="accordion">Lorem ipsum dolor sit amet, sadipscing, sed diam ?</button>
                  <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="show-more">
                  <a href="#">Show more</a>
                </div>
              </div>
            </div>
          </section>
        );
    }
}