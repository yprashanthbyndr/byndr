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
                        <li>
                            <div className="li_title">Lorem Ipsum</div>
                            <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                        </li>
                        <li>
                            <div className="li_title">Lorem Ipsum</div>
                            <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                        </li>
                        <li>
                            <div className="li_title">Lorem Ipsum</div>
                            <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                        </li>
                        <li>
                            <div className="li_title">Lorem Ipsum</div>
                            <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                        </li>
                        <li>
                            <div className="li_title">Lorem Ipsum</div>
                            <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                        </li>
                        <li>
                            <div className="li_title">Lorem Ipsum</div>
                            <div className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
);
    }
}