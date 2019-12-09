import React from 'react';
import { NavLink } from 'react-router-dom';
import { penn_img, testimonial_person, byndr_responsive_platform } from '../../assets';

interface props {
    onLeftMenu?(): void;
}

export default class Page404 extends React.Component<props, any> {

    render(): any {
        return (
    <div className="RouteNotFound">
        <div className="RouteNotFoundInr">
            <div className="RouteNotFoundMain">
                <h1>404 </h1>
                <h4>Page Not Found</h4>
            </div>
        </div>
    </div>);
    }
}