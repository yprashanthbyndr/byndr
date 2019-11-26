import React from 'react';
import { NavLink } from 'react-router-dom';

interface props {
    onLeftMenu?(): void;
}

export default class PricingPlans extends React.Component<props, any> {

    render(): any {
        return (
            <section>
            <div className="pricing_table">
                    <div className="pricing_table_main">
            <article>

                    <ul>
                      <li className="bg-blue active">
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
                              <button className="pricing_btn">Request Pricing</button>
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
                            <td><button className="pricing_btn">Request Pricing</button></td>
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