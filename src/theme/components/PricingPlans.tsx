import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { Sticky_PricingTable } from '../../services';

interface props {
  onLeftMenu?(): void;
  Stickypricing_table: boolean
}

interface AppRefs {
  SelectionRef: HTMLInputElement;
}

class PricingPlans extends React.Component<props, any> {
  private SelectionRef: React.RefObject<HTMLInputElement>;
  // private ScroolEvent : any;

  constructor(props: any) {
    super(props);
    this.SelectionRef = React.createRef();
    this.ScroolEvent = this.ScroolEvent.bind(this)
  }



  componentDidMount(): any {
    window.addEventListener('scroll', this.ScroolEvent);
  }

  ScroolEvent(event) {
    let element = this.refs.SelectionRef;
    var testDiv = document.getElementById("STANDARD");

    if (testDiv == null) {
      console.log("  testDiv ==null");
    } else {
      let DivHeight = testDiv.offsetTop;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      Sticky_PricingTable(DivHeight, winScroll, this.props.Stickypricing_table);
    }
  }


  render(): any {

    return (
      <section id="STANDARD"
        ref="SelectionRef">
        <div className="pricing_table">
          <div className={this.props.Stickypricing_table ? "sticky_table_menu":"nonsticky_table_menu"}>
            <div className="sticky_table_menu_main">
              <div className="sticky_table_title">
                <div className="pricing_title">STANDARD</div>
                <button className="pricing_btn">Get Started</button>
              </div>
              <div className="sticky_table_title">
                <div className="pricing_title">PREMIUM</div>
                <button className="pricing_btn">Request a Demo</button>
              </div>
            </div>
          </div>

          <div className="pricing_table_main">
            <article>

              <ul>
                <li className="bg-blue PricingActive">
                  <button>STANDARD</button>
                </li>
                <li className="bg-blue">
                  <button>PREMIUM</button>
                </li>
              </ul>

              <table>
                <thead>
                  <tr>
                    <th className="hide"></th>
                    <th className="title_pricing">
                      <div className="pricing_title">STANDARD</div>
                      <button className="pricing_btn">Get Started</button>
                      <div className="pricing_value">Free - Regular Plan</div>
                    </th>
                    <th className="title_pricing">
                      <div className="pricing_title">PREMIUM</div>
                      <button className="pricing_btn">Request a Demo</button>
                      <div className="pricing_value">Starts from INR 2000 per teacher per class</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className="sep">Courses</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="title">Lorem ipsum dolor sit amet, consetetur</div>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </td>
                    <td className="default"><span className="tick">&#10004;</span></td>
                    <td><span className="tick">&#10004;</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="title">Lorem ipsum dolor sit amet, consetetur</div>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </td>
                    <td className="default"><span className="tick">&#10004;</span></td>
                    <td><span className="tick">&#10004;</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="title">Lorem ipsum dolor sit amet</div>
                      <p>Consetetur sadipscing elitrsed</p>
                    </td>
                    <td></td>
                    <td className="default"><span className="tick">&#10004;</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="title">Lorem ipsum dolor sit amet, consetetur</div>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </td>
                    <td></td>
                    <td className="default"><span className="tick">&#10004;</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="title">Lorem ipsum dolor sit amet</div>
                      <p>Consetetur sadipscing elitrsed</p>
                    </td>
                    <td className="default"><span className="tick">&#10004;</span></td>
                    <td><span className="tick">&#10004;</span></td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="sep extrapadding">Reporting</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="title">Lorem ipsum dolor sit amet, consetetur</div>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </td>
                    <td className="default"><span className="tick">&#10004;</span></td>
                    <td><span className="tick">&#10004;</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="title">Lorem ipsum dolor sit amet, consetetur</div>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </td>
                    <td></td>
                    <td className="default"><span className="tick">&#10004;</span></td>

                  </tr>
                  <tr>
                    <td>
                      <div className="title">Lorem ipsum dolor sit amet</div>
                      <p>Consetetur sadipscing elitrsed</p>
                    </td>
                    <td></td>
                    <td className="default"><span className="tick">&#10004;</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="title">Lorem ipsum dolor sit amet</div>
                    </td>
                    <td className="default"><span className="tick">&#10004;</span></td>
                    <td><span className="tick">&#10004;</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="title">Lorem ipsum dolor sit amet</div>
                      <p>Consetetur sadipscing elitrsed</p>
                    </td>
                    <td className="default"><span className="tick">&#10004;</span></td>
                    <td><span className="tick">&#10004;</span></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="default"><button className="pricing_btn">Get Started</button></td>
                    <td><button className="pricing_btn">Request a Demo</button></td>
                  </tr>
                </tbody>
              </table>

            </article>
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
)(PricingPlans);